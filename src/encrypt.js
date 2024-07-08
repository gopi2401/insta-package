const CryptoJS = require('crypto-js');
export default function (input) {
    const key = CryptoJS.enc.Utf8.parse('qwertyuioplkjhgf');
    const iv = CryptoJS.lib.WordArray.random(16); // IV length is 16 bytes

    const encrypted = CryptoJS.AES.encrypt(input, key, {
        iv: iv,
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7,
    });

    // Convert the encrypted bytes to a hex string
    const encryptedHex = encrypted.ciphertext.toString(CryptoJS.enc.Hex);
    return encryptedHex;
}