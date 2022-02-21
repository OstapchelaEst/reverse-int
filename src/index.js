module.exports = function reverse(numbers) {
   let result = '';
   numbers = numbers.toString().replace('-', '').split('').map(function (a) { result = a + result; })
   return Number(result)
}
