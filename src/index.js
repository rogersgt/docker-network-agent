const { loadEnv } = require('./modules/env');
const { getActiveInterface } = require('./modules/network');
const { stdout, debug, error } = require('./modules/logger');

(async function start() {
  try {
    stdout('Starting network agent...');
    loadEnv();
    const activeInterface = await getActiveInterface();
    debug(activeInterface, 'ACTIVE INTERFACE');
  } catch (e) {
    error(e);
    process.exit(1);
  }
})();
