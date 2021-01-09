var question = document.querySelector("#question")

var questionBank = [
    {
        sn:"1",
        que:"who the legend",
        opt:["bill","kill"],
        ans: "billa"
    },
    {   
        sn:"2",
        que:"who the bajend",
        opt:["bill","kill"],
        ans: "killa"
    },
]



window.onload = function() {
    
    
    console.log(questionBank[0].que);

    for(var i =0;i<=questionBank.length;i++){
        
        var qt = document.createElement("div"); 
       
        
        

        qt.classList.add("qstyle");
        qt.innerText = questionBank[i].sn+ ". " + questionBank[i].que;
        question.appendChild(qt);

        for(var j=0;j<questionBank[i].opt.length;j++){

               var od = document.createElement("div"); 
               od.innerHTML= "<input type=radio value = "+ questionBank[i].opt[j] +"  >"+ "<label>"+ questionBank[i].opt[j]+"</label>"; 
               
               question.appendChild(od)

        }
    }
}



