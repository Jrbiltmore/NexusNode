
class SothebysRealtyPlugin {
    constructor(options) {
        this.options = options;
        this.apiEndpoint = 'https://api.sothebysrealty.com';
    }

    async fetchProperties(query) {
        const response = await fetch(`${this.apiEndpoint}/properties?query=${query}`);
        const data = await response.json();
        return data;
    }
}

module.exports = SothebysRealtyPlugin;
