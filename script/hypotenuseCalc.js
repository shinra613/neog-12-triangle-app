var resultbox = document.querySelector("#result");

const hypcalc = () => {
    var sideOne = document.querySelector("#hnumber1");
    var sideTwo = document.querySelector("#hnumber2");
 
    var powOne = Math.pow((parseInt(sideOne.value)),2);
    var powTwo = Math.pow((parseInt(sideTwo.value)),2);

    var total = powOne + powTwo ; 

    var hyp= Math.sqrt(total);

    resultbox.innerHTML = "C: "+hyp;





}


