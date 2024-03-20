module.exports = {
  isUndefined(value) {
    return typeof value === "undefined";
  },
  isNullOrUndefined(o) {
    return typeof o === "undefined" || o === null;
  },
};
