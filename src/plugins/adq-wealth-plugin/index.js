
class ADQWealthPlugin {
    constructor(options) {
        this.options = options;
        this.apiEndpoint = 'https://api.adqwealth.com';
    }

    async fetchWealthFundData() {
        const response = await fetch(`${this.apiEndpoint}/wealthfund`);
        const data = await response.json();
        return data;
    }
}

module.exports = ADQWealthPlugin;
