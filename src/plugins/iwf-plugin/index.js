
class IWFPlugin {
    constructor(options) {
        this.options = options;
        this.apiEndpoint = 'https://api.iwf.com';
    }

    async fetchWealthManagementData() {
        const response = await fetch(`${this.apiEndpoint}/wealthmanagement`);
        const data = await response.json();
        return data;
    }
}

module.exports = IWFPlugin;
