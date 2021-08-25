var question = document.querySelector("#question");
let form = document.querySelector('#formal');
let formsubmit = document.querySelector('#sbmt');



var qb = [
    {
        sn: "1",
        name:"question1",
        que: "test question loren ipsum",
        opt: ["test1", "test2", "test3", "test4"],
        ans: "bill"
    },
    {
        sn: "2",
        name:"question2",
        que: "test question loren ipsum ",
        opt: ["test5", "test6", "test7", "test8"],
        ans: "kill"
    },

]

const formbuilder = () => {

    


   

 for (var i = 0; i < qb.length; i++) {

        var qt = document.createElement("div");

        qt.classList.add("qstyle");
        qt.innerText = qb[i].sn + ". " + qb[i].que;
        question.appendChild(qt);

        var optionContainer = document.createElement("div");

        for (var j = 0; j < qb[i].opt.length; j++) {

            var od = document.createElement("label");
            od.innerHTML = "<input type=radio class= ." + qb[i].name + " name=" + qb[i].name + "  value = " + qb[i].opt[j] + "  >" + qb[i].opt[j];

            optionContainer.appendChild(od);

        }

        question.appendChild(optionContainer);


          

    }
    
}

window.onload = (event) => {
    formbuilder();
  };

var data = new FormData(form);

const answerCheck = () => {
    
   

    console.log(data.elements);
    for (var k = 0; k < qb.length;k++){
          if(form.elements.name === qb[k].ans){

            console.log("form.elements");

          }
    }

    console.log(form.elements)

    // console.log(document.getElementsByName(qb[0].name).value);
}


formsubmit.addEventListener("click", (event) => {

    event.preventDefault();
  
    answerCheck();
})



