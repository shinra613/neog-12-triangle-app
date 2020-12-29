var angleOne = parseInt(document.querySelector("#number1").value);
var angleTwo = parseInt(document.querySelector("#number2").value);
var angleThree = parseInt(document.querySelector("#number3").value);
var submitButton = document.querySelector("#angleCheck");
var resultbox=document.querySelector("#result");

var total = angleOne+angleTwo+angleThree;
console.log(total);

const angleChecker=()=>{
   
    if(total === 180){

        resultbox.innerHTML = "yes !!! It is a triangle "

    }else {
         
        resultbox.innerHTML = "Nope !!! It is not a triangle "

    }

}





submitButton.addEventListener('click',angleChecker)