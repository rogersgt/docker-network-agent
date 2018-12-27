require('colors');

function stdout(data) {
  console.log(data);
}

function debug(data, title='DEBUG') {
  const { LOG_LEVEL='' } = process.env;

  if (LOG_LEVEL.toLowerCase() === 'debug') {
    console.log(`${title}: `.yellow);
    console.log(data);
  }
}

function error(err) {
  console.log(`ERROR!`.red);
  console.log(err);
}

module.exports = {
  stdout,
  debug,
  error,
};
