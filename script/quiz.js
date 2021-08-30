
let form = document.querySelector('#formal');
let formsubmit = document.querySelector('#sbmt');
let newResult = document.querySelector('#qresult');



var qa = ["Acute", "180 deg", "Midsegment", "Circumcenter", "Angle Bisector"];



const answerCheck = () => {
    
    const newData = new FormData(form);
   
    let score = 0;
    let index = 0;
    
    newData.forEach(element => {
        if (element ===qa[index]) {
            score += 1;
        }
        index += 1;
    });
    console.log(score)
    
    
    newResult.innerHTML = "Your total score is : " + score; 
    


    
}


formsubmit.addEventListener("click", (event) => {

    event.preventDefault();
  
    answerCheck();
});



