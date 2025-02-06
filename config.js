const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
SESSION_ID: 'DARK-SHUTER-MD=rI9j1IQY#lsEBlIQkstryXUMXR_dt_nMQcXibokOjQIUxIC4JZMY',
GITHUB_AUTH_TOKEN: 'YQhoA80xajpd7NdKCdAAOJ2ltY9dNx3TAGXD', //"ghp_ " මෙම කොටස ඉවත් කර token එක දාන්න.
GITHUB_USER_NAME: 'ashenovi',

};
