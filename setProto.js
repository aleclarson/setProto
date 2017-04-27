
var setPrototypeOf = Object.setPrototypeOf || function(v, p) { v.__proto__ = p };

module.exports = function setProto(value, proto) {
  setPrototypeOf(value, proto);
  return value;
};

