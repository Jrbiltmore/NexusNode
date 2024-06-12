
const express = require('express');
const api = require('./core/api');
const { applySecurity } = require('./core/utils/security');
const { createUser } = require('./auth/profile');
const { authenticateUser } = require('./auth/irisAuth');
const { generateKeyPair, encrypt, decrypt } = require('./core/utils/quantumSafe');

const app = express();
app.use(express.json());

applySecurity(app);

app.post('/api/profile', (req, res) => {
    try {
        const user = createUser(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.post('/api/auth', (req, res) => {
    try {
        const user = authenticateUser(req.body.irisData);
        res.status(200).json(user);
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
});

app.get('/api/encrypt', (req, res) => {
    const { publicKey } = generateKeyPair();
    const encryptedData = encrypt('Sensitive data', publicKey);
    res.json({ publicKey, encryptedData });
});

app.get('/api/decrypt', (req, res) => {
    const { privateKey } = generateKeyPair();
    const encryptedData = req.query.encryptedData;
    const decryptedData = decrypt(encryptedData, privateKey);
    res.json({ privateKey, decryptedData });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
