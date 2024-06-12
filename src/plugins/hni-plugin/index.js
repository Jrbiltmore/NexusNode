
class HNIPlugin {
    constructor(options) {
        this.options = options;
        this.apiEndpoint = 'https://api.hni.com';
    }

    async fetchInvestorData() {
        const response = await fetch(`${this.apiEndpoint}/investors`);
        const data = await response.json();
        return data;
    }
}

module.exports = HNIPlugin;
