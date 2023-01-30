module.exports = function reverse (n) {
  const strN = String(Math.abs(n));
  let result = [];
  for (let i = 0; i <= strN.length; i++){
    result.push(strN[strN.length - i]);
  }
  return Number(result.join(''));
}
