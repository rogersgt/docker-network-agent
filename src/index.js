const scanner = require('network-scanner')();

(async function start() {
  scanner.scan((err, networks) => {
    if (err) throw new Error(err);
    else {
      console.log(networks);
    }
  });
})();

