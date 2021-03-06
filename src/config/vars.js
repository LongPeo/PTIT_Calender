const path = require('path');

require('dotenv-safe').config({
    path: path.join(__dirname, '../../.env'),
    sample: path.join(__dirname, '../../.env.example'),
})

module.exports = {
    port: process.env.PORT,
}