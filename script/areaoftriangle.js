var resultbox = document.querySelector("#result");


const areacalc = () => {
    var sideOne = document.querySelector("#anumber1");
    var sideTwo = document.querySelector("#anumber2");
 


    var total = (parseInt(sideOne.value) * parseInt(sideTwo.value))/2 ;

   

    resultbox.innerHTML = "Area of Triangle : "+total+" (cm)";





}