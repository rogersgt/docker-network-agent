function getBaseIp(ip) {
  const arr = ip.split('.');
  arr.pop();
  const baseIp = arr.join('.');
  return baseIp;
}

module.exports = {
  getBaseIp,
};
