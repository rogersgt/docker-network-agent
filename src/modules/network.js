const network = require('network');

function getActiveInterface() {
  return new Promise((res, rej) => {
    network.get_active_interface((err, data) => {
      if (err) rej(err);
      else res(data);
    });
  });
}

module.exports = {
  getActiveInterface,
};
