
class NedbankPlugin {
    constructor(options) {
        this.options = options;
        this.apiEndpoint = 'https://api.nedbank.com';
    }

    async fetchFinancialServices() {
        const response = await fetch(`${this.apiEndpoint}/financialservices`);
        const data = await response.json();
        return data;
    }
}

module.exports = NedbankPlugin;
