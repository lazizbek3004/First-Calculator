const display = document.getElementById("display");


function Upload(input){
    display.value+=input;
}
function Clearhere(){
    display.value = "";
}

function Calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "ERROR";
    }
}


