const userInfo = require('./information');
console.log(`Hello, I'm ${userInfo.name} from ${userInfo.campus} campus`);

var cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Hello, I'm ${userInfo.name} from ${userInfo.campus} campus`,
    e : "00",
    T : "U "
}));