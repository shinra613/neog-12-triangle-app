
var submitButton = document.querySelector("#angleCheck");
var resultbox = document.querySelector("#result");




const angleChecker = () => {

    var angleOne = document.querySelector("#number1");
    var angleTwo = document.querySelector("#number2");
    var angleThree = document.querySelector("#number3");
    var total = parseInt(angleOne.value) + parseInt(angleTwo.value) + parseInt(angleThree.value);

    if (total === 180) {

        resultbox.innerHTML = "yes !!! It is a triangle "

    } else {

        resultbox.innerHTML = "Nope !!! It is not a triangle "

    }

}





// submitButton.addEventListener('click',angleChecker)