
class JuliusBaerPlugin {
    constructor(options) {
        this.options = options;
        this.apiEndpoint = 'https://api.juliusbaer.com';
    }

    async fetchClientData(clientId) {
        const response = await fetch(`${this.apiEndpoint}/clients/${clientId}`);
        const data = await response.json();
        return data;
    }
}

module.exports = JuliusBaerPlugin;
