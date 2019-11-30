var m = new Date();
function main(){
    m = new Date();
    var sum = m.getFullYear()+"/"+m.getMonth()+"/"+m.getDate()+" "+m.getHours()+":"+m.getMinutes()+":"+m.getSeconds();
    document.getElementById("label-footerTime").innerHTML = sum;
}
setInterval("main()",1000);