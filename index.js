module.exports = function tiny(jsonObj) {
  if (typeof jsonObj !== "object") throw new TypeError("Tiny wants a object!");
  let array = [];
  return array.push(jsonObj);
};
