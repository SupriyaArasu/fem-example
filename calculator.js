let total=0;
let buffer= "0";
let previousOperator;
function buttonClick(btnVal){
    if(isNaN(parseInt(btnVal))){
        isSymbol(btnVal)
    }else{
        isNumber(btnVal)
    }
    refreshscrn();
}

function refreshscrn(){
    screen.innerText=buffer;
}
function isNumber(number){
    console.log("number",number)
if(buffer==="0"){
    buffer=number;
}else{
    buffer+=number;
}
}
function isSymbol(value){
    console.log(value)
    switch(value){
        case 'C': buffer="0";
        total="0";
        break;
        case '=':
            if(previousOperator===null){
                return;
            }
            operation(parseInt(buffer))
            buffer=total;
            console.log("buffer",buffer)
            total=0
            break;
        case "←":
            if (buffer.length === 1) {
                buffer = "0";
            } else {
                buffer = buffer.substring(0, buffer.length - 1);
            }
            break;
            case "+":
            case "-":
            case "×":
            case "÷":
            handleMath(value);
            break;
        }
}
function handleMath(value) {
    if (buffer === "0") {
      // do nothing
      return;
    }
  
    const intBuffer = parseInt(buffer);
    console.log("ll",value,intBuffer)
    if (total === 0) {
        console.log("hii",total)
      total = intBuffer;
    } else {
        console.log("hiiuuu",total)
        operation(intBuffer);
    }
  
    previousOperator = value;
    buffer="0";
    // buffer=total+value;
  }
function operation(intBuffer) {
    if (previousOperator === "+") {
      total+= intBuffer;
    } else if (previousOperator === "-") {
      total-= intBuffer;
    } else if (previousOperator === "×") {
      total*= intBuffer;
    } else {
      total/= intBuffer;
    }
  }


  
const screen=document.querySelector(".screen")



function init() {
    document.querySelector(".numbers").addEventListener("click", function(event) {
      buttonClick(event.target.innerText);
    });
  }
  
  init();