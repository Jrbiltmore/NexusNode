
class TheEconomistPlugin {
    constructor(options) {
        this.options = options;
        this.apiEndpoint = 'https://api.economist.com';
    }

    async fetchArticles(query) {
        const response = await fetch(`${this.apiEndpoint}/articles?query=${query}`);
        const data = await response.json();
        return data;
    }
}

module.exports = TheEconomistPlugin;
