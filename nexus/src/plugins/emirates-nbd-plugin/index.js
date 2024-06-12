
class EmiratesNBDPlugin {
    constructor(options) {
        this.options = options;
        this.apiEndpoint = 'https://api.emiratesnbd.com';
    }

    async fetchDigitalWealthData() {
        const response = await fetch(`${this.apiEndpoint}/digitalwealth`);
        const data = await response.json();
        return data;
    }
}

module.exports = EmiratesNBDPlugin;
