
class LombardOdierPlugin {
    constructor(options) {
        this.options = options;
        this.apiEndpoint = 'https://api.lombardodier.com';
    }

    async fetchClientPortfolio(clientId) {
        const response = await fetch(`${this.apiEndpoint}/clients/${clientId}/portfolio`);
        const data = await response.json();
        return data;
    }
}

module.exports = LombardOdierPlugin;
