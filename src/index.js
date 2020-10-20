module.exports = function reverse (n) {
   let ar = (Math.abs(n)).toString()
   let revar = ar.split('').reverse().join('');    
   return revar;
}
