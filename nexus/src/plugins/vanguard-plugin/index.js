
class VanguardPlugin {
    constructor(options) {
        this.options = options;
        this.apiEndpoint = 'https://api.vanguard.com';
    }

    async fetchInvestmentData(fundId) {
        const response = await fetch(`${this.apiEndpoint}/funds/${fundId}`);
        const data = await response.json();
        return data;
    }
}

module.exports = VanguardPlugin;
