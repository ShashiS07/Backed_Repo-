let writesomething= function(){
    writesomething="   FunctionUp"
    return (writesomething.trim())
}
let changetolowercase = function(){
    changetolowercase= "HI, I AM SHASHI SHEKHAR SINGH";
    return changetolowercase.toLowerCase();
}
let changetouppercase = function(){
    changetouppercase= "hi, i am shashi shekhar singh";
    return changetouppercase.toUpperCase();
}

module.exports.writesomething=writesomething;
module.exports.changetolowercase=changetolowercase;
module.exports.changetouppercase=changetouppercase;