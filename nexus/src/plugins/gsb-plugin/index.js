
class GSBPlugin {
    constructor(options) {
        this.options = options;
        this.apiEndpoint = 'https://api.gsb.com';
    }

    async fetchAccountData(accountId) {
        const response = await fetch(`${this.apiEndpoint}/accounts/${accountId}`);
        const data = await response.json();
        return data;
    }
}

module.exports = GSBPlugin;
