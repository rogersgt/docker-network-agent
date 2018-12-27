const network = require('network');
const networkList = require('network-list');

function getActiveInterface() {
  return new Promise((res, rej) => {
    network.get_active_interface((err, data) => {
      if (err) rej(err);
      else res(data);
    });
  });
}

function getDevicesOnNetwork(baseIp) {
  return new Promise((res, rej) => {
    const OPTIONS = {
      ip: baseIp,
      vendor: true,
      timeout: 60,
    };
    networkList.scan(OPTIONS, (err, networkSlots) => {
      if (err) rej(err);
      else {
        // filter down to network slots that have MAC addresses
        const activeDevices = networkSlots.filter((s) => !!s.mac);
        res(activeDevices);
      }
    });
  });
}

module.exports = {
  getActiveInterface,
  getDevicesOnNetwork,
};
