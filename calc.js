const display = document.getElementById("display");

function adisplay(input){
    display.value += input;

}

function cleardisplay(){

display.value = "";
}

function calculate(){
try{
 display.value = eval(display.value);
}

catch{
    display.value ="ERROR";
}
}

function Pdisplay(){
    display.value = display.value*0.01;
}

function PMdisplay(){
    display.value = display.value * -1;
}
