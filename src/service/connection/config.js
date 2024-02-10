const env = process.env;
const fs = require('fs');

const config = {
    host: env.PG_HOST || 'otto.db.elephantsql.com',
    port: env.PG_PORT || '5432',
    user: env.PG_USER || 'cklijfef',
    password: env.PG_PASSWORD || 'V1qidES5k3DSJICDRgXtyT8qeu2SPCZp',
    database: env.PG_DB || 'cklijfef',
    logging: false,
    ssl: true,
    ssl: {
        require: true,
        rejectUnauthorized: false,
        ca: fs.readFileSync("./src/service/connection/ca.pem").toString(),
    },
    listPerPage: env.LIST_PER_PAGE || 10,
};

module.exports = config;