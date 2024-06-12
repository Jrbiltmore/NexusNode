
class HubbisPlugin {
    constructor(options) {
        this.options = options;
        this.apiEndpoint = 'https://api.hubbis.com';
    }

    async fetchWealthSolutions() {
        const response = await fetch(`${this.apiEndpoint}/wealthsolutions`);
        const data = await response.json();
        return data;
    }
}

module.exports = HubbisPlugin;
