
class GujaratBankPlugin {
    constructor(options) {
        this.options = options;
        this.apiEndpoint = 'https://api.gujaratbank.com';
    }

    async fetchBankingServices() {
        const response = await fetch(`${this.apiEndpoint}/bankingservices`);
        const data = await response.json();
        return data;
    }
}

module.exports = GujaratBankPlugin;
