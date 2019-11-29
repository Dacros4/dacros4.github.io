var oBox=document.getElementById("box");
var oPop=document.getElementById("popover");
oBox.onmouseover=function(event){
    var event=event||window.event;
    document.onmousemove=function(event){
        oPop.style.left=event.clientX+"px";
        oPop.style.top=event.clientY+"px";
        oPop.style.display="block";
    }
}
oBox.onmouseout=function(){
    oPop.style.display="none";
}