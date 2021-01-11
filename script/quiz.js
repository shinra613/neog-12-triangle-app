var question = document.querySelector("#question");
let form = document.querySelector('#qform');






window.onload = function () {

    var questionBank = [
        {
            sn: "1",
            que: "test question loren ipsum yo",
            opt: ["bill", "kill", "bilf", "kilf"],
            ans: "bill"
        },
        {
            sn: "2",
            que: "test question loren ipsum yo",
            opt: ["bill", "kill", "bil", "kil"],
            ans: "kill"
        },
       
    ]


    console.log(questionBank[0].que);

    for (var i = 0; i <= questionBank.length; i++) {

        var qt = document.createElement("div");




        qt.classList.add("qstyle");
        qt.innerText = questionBank[i].sn + ". " + questionBank[i].que;
        question.appendChild(qt);

        var optionContainer = document.createElement("div");

        for (var j = 0; j < questionBank[i].opt.length; j++) {

            var od = document.createElement("span");
            od.innerHTML = "<input type=radio value = " + questionBank[i].opt[j] + "  >" +  questionBank[i].opt[j];

            optionContainer.appendChild(od);

        }

        question.appendChild(optionContainer);
 

       

    }

   
   
}


console.log(form.elements);


const answerCheck=()=>{

   

}



