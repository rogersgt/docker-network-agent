const fs = require('fs');
const dotenv = require('dotenv');
const { stdout } = require('./logger');

const CUR_DIR = process.cwd();
const { NODE_ENV } = process.env;
const ENV_FILE = `${CUR_DIR}/${NODE_ENV}.env`;

function loadEnv() {
  if (fs.existsSync(ENV_FILE)) {
    stdout(`Loading env file: ${ENV_FILE}`);
    dotenv.config({ path: ENV_FILE });
  } 
}

module.exports = {
  loadEnv,
};
