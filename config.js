const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
SESSION_ID: 'DARK-SHUTTER=5LkgVCZZ#diKNs-Q3kLz60CE6J47TpH-oMEwRD-j2eeF9nz3PcvY',
GITHUB_AUTH_TOKEN: 'YQhoA80xajpd7NdKCdAAOJ2ltY9dNx3TAGXD', //"ghp_ " මෙම කොටස ඉවත් කර token එක දාන්න.
GITHUB_USER_NAME: 'ashenovi',

};
