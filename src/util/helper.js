let current_date= function(){
    current_date= new Date();
    let indiantime= current_date.toLocaleString("en-US","Asia/Delhi")
    return indiantime;
}
let getmonth = function(){
    let today=new Date();
    let months=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let n=months[today.getMonth()];
    return n;
}
 let getbatchinfo = function(){
    return "Lithium, W4D5, the today topic is Nodejs Module System"
 }
module.exports.getbatchinfo=getbatchinfo;
module.exports.current_date=current_date;
module.exports.getmonth=getmonth;