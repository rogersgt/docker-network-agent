const { loadEnv } = require('./modules/env');
const { getActiveInterface, getDevicesOnNetwork } = require('./modules/network');
const { stdout, debug, error } = require('./modules/logger');
const { getBaseIp } = require('./utility/shaper');

(async function start() {
  try {
    stdout('Starting network agent...');
    loadEnv();
    // Get Info about the local network/machine
    const activeInterface = await getActiveInterface();
    debug(activeInterface, 'ACTIVE INTERFACE');
    const { ip_address } = activeInterface;
    const baseIp = getBaseIp(ip_address);

    // Get Info about devices on network
    const devices = await getDevicesOnNetwork(baseIp);
    stdout(devices);
  } catch (e) {
    error(e);
    process.exit(1);
  }
})();
