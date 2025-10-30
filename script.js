const display = document.getElementById("display");
function appendToDisplay(input){
    if (display.value.length >= 9) {
        return;
    }
    display.value += input;
}
function clearDisplay(){
    display.value = "";
}
function calculate(){
    try{
    display.value= eval(display.value);
    }
    catch(error){
    display.value = "syntax error";
    }
}
