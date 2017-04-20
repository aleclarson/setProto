
module.exports = Object.setPrototypeOf || function(value, proto) {
  value.__proto__ = proto;
  return value;
};

