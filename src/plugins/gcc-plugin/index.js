
class GCCPlugin {
    constructor(options) {
        this.options = options;
        this.apiEndpoint = 'https://api.gcc.com';
    }

    async fetchInvestmentOpportunities() {
        const response = await fetch(`${this.apiEndpoint}/investments`);
        const data = await response.json();
        return data;
    }
}

module.exports = GCCPlugin;
