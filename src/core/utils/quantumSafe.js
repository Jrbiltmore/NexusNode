
const crypto = require('crypto');

function generateKeyPair() {
    const publicKey = crypto.randomBytes(32).toString('hex');
    const privateKey = crypto.randomBytes(32).toString('hex');
    return { publicKey, privateKey };
}

function encrypt(data, publicKey) {
    const encryptedData = crypto.publicEncrypt(publicKey, Buffer.from(data));
    return encryptedData.toString('hex');
}

function decrypt(encryptedData, privateKey) {
    const decryptedData = crypto.privateDecrypt(privateKey, Buffer.from(encryptedData, 'hex'));
    return decryptedData.toString();
}

module.exports = { generateKeyPair, encrypt, decrypt };
