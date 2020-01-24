function speedtool(){
    var s = parseFloat(document.getElementById("textbox-st-s").value);
    var t = parseFloat(document.getElementById("textbox-st-t").value);
    var v = String(s/t);
    document.getElementById("lable-st-v").innerHTML = v;
}