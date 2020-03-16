function dgetwh(a){
    var div = document.getElementById(a);
    var sum = [div.offsetWidth,div.offsetHeight];
    return sum;
}