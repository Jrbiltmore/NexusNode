
const express = require('express');
const router = express.Router();
const PluginManager = require('../PluginManager');

const pluginManager = new PluginManager(__dirname);

// Example: Registering plugins
pluginManager.registerPlugin({ name: 'crypto-plugin', packageName: '../../plugins/crypto-plugin', isRelative: true });
pluginManager.registerPlugin({ name: 'stock-plugin', packageName: '@financial/stock-plugin' });

router.post('/execute', (req, res) => {
    const { pluginName, data } = req.body;
    try {
        const plugin = pluginManager.loadPlugin(pluginName);
        const result = plugin.execute(data);
        res.json({ success: true, result });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

module.exports = router;
