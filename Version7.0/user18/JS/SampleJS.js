var space = " ";
var pos = 0;
var msg = "Travel.co";

function Scroll(){
document.title = msg.substring(pos, msg.length) + space +msg.substring(0,pos);

pos++;
if (pos > msg.length) pos = 0;
window.setTimeout("Scroll()", 0);
}
Scroll();

function cancelBtn(){
    document.getElementById("cancel").style.backgroundColor = "lightblue";
}