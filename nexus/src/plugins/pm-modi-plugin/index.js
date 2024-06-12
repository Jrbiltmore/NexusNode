
class PMModiPlugin {
    constructor(options) {
        this.options = options;
        this.apiEndpoint = 'https://api.pm-modi.com';
    }

    async fetchGovernmentSchemes() {
        const response = await fetch(`${this.apiEndpoint}/schemes`);
        const data = await response.json();
        return data;
    }
}

module.exports = PMModiPlugin;
