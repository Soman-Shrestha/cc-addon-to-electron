const calculate = require('./build/Release/addon');

// function giveToNewJS(){
    console.log('Encrypt function with 3 args:', calculate.encrypt(2,4,5))
    console.log('Decrypt function with 2 args:', calculate.decrypt(2,4))
// }
// module.exports = {giveToNewJS}