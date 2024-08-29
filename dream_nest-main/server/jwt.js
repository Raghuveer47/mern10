// Node.js script to generate a secret key
const crypto = require('crypto');

// Generate a random 32-byte string
const secretKey = crypto.randomBytes(32).toString('hex');

console.log('Generated Secret Key:', secretKey);
