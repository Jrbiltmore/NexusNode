
const path = require('path');
const fs = require('fs');
const { createLogger, format, transports } = require('winston');

// Logger configuration
const logger = createLogger({
    level: 'info',
    format: format.combine(
        format.timestamp(),
        format.json()
    ),
    transports: [
        new transports.Console(),
        new transports.File({ filename: 'plugin-manager.log' })
    ]
});

/**
 * PluginManager class to manage plugins dynamically.
 */
class PluginManager {
    /**
     * Constructor for PluginManager.
     * @param {string} basePath - The base path for resolving plugins.
     */
    constructor(basePath) {
        this.basePath = basePath;
        this.pluginList = new Map();
    }

    /**
     * Registers a plugin.
     * @param {Object} plugin - The plugin object with name and packageName.
     * @throws Will throw an error if the plugin name or packageName is missing or if the plugin already exists.
     */
    registerPlugin(plugin) {
        if (!plugin.name || !plugin.packageName) {
            throw new Error('Plugin name and package are required');
        }

        if (this.pluginList.has(plugin.name)) {
            throw new Error(`Plugin ${plugin.name} already exists`);
        }

        try {
            const pluginPath = plugin.isRelative ? require.resolve(path.join(this.basePath, plugin.packageName)) : require.resolve(plugin.packageName);
            this.pluginList.set(plugin.name, { ...plugin, instance: require(pluginPath) });
            logger.info(`Plugin ${plugin.name} registered successfully`);
        } catch (error) {
            logger.error(`Error registering plugin ${plugin.name}: ${error.message}`);
            throw error;
        }
    }

    /**
     * Loads a plugin by name.
     * @param {string} name - The name of the plugin to load.
     * @returns {Object} - The plugin instance.
     * @throws Will throw an error if the plugin is not found.
     */
    loadPlugin(name) {
        const plugin = this.pluginList.get(name);
        if (!plugin) {
            throw new Error(`Plugin ${name} not found`);
        }
        return new plugin.instance(plugin.options);
    }

    /**
     * Lists all registered plugins.
     * @returns {Array} - An array of registered plugin names.
     */
    listPlugins() {
        return Array.from(this.pluginList.keys());
    }

    /**
     * Removes a plugin by name.
     * @param {string} name - The name of the plugin to remove.
     * @throws Will throw an error if the plugin does not exist.
     */
    removePlugin(name) {
        if (!this.pluginList.has(name)) {
            throw new Error(`Plugin ${name} does not exist`);
        }
        this.pluginList.delete(name);
        logger.info(`Plugin ${name} removed successfully`);
    }

    /**
     * Saves the list of plugins to a file.
     * @param {string} filePath - The path to the file where plugins should be saved.
     */
    savePluginsToFile(filePath) {
        const pluginsArray = Array.from(this.pluginList.values());
        fs.writeFileSync(filePath, JSON.stringify(pluginsArray, null, 2));
        logger.info(`Plugins saved to file ${filePath}`);
    }

    /**
     * Loads plugins from a file.
     * @param {string} filePath - The path to the file from which plugins should be loaded.
     */
    loadPluginsFromFile(filePath) {
        const pluginsArray = JSON.parse(fs.readFileSync(filePath));
        pluginsArray.forEach(plugin => this.registerPlugin(plugin));
        logger.info(`Plugins loaded from file ${filePath}`);
    }
}

module.exports = PluginManager;
