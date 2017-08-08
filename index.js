module.exports = {
  encoder
};

function encoder (to, offset) {
  return {
    encode,
    decode
  };

  function encode (value, compiled ) {
    compiled = compiled || '';
    if (value === 0) {
      return compiled;
    }
    const remainder = value % to;
    const divisor = ( value - remainder ) / to;
    compiled = String.fromCharCode(remainder) + compiled;
    return encode(divisor, compiled);
  }

  function decode (compiled, value) {
    return compiled.split('').reduce((acc, cur, i, arr) => {
      const power = arr.length - i - 1;
      return acc + cur.charCodeAt(0) * Math.pow(to, power);
    }, 0)
  }
  
}