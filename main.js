var mouse_event="";
 var last_position_of_x,last_position_of_y;

canvas=document.getElementById("myCanvas");

ctx=canvas.getContext("2d");
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouse_event="mousedown";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouse_event="mousleave";
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouse_event="mouseup";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    currentPositonOfMouseX=e.clientX-canvas.offsetLeft;
    currentPositonOfMouseY=e.clientY-canvas.offsetTop;
    if(mouse_event=="mousedown"){
ctx.beginPath();
ctx.strokeStyle=document.getElementById("Myinput").value;
ctx.lineWidth=document.getElementById("lineWidth").value;
ctx.moveTo(last_position_of_x,last_position_of_y);
ctx.lineTo(currentPositonOfMouseX,currentPositonOfMouseY);
ctx.stroke();
    }
    last_position_of_x=currentPositonOfMouseX;
    last_position_of_y=currentPositonOfMouseY;
}


