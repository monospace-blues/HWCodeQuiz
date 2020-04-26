// get DOM Elements
var questionaireId = document.getElementById("questionaire");
//var startQuizButtonId = document.getElementById("getStartedButton");
var questionTextId = document.getElementById("titleQuestion");
//console.log(questionaireId);

// html elements to create
var titleTag = document.createElement("h2");
var paraTag = document.createElement("p");
var buttonQuizTag = document.createElement("button");
var buttonTag = document.createElement("button");
// our DOM list elements!
var listTag = document.createElement("ol");
var ques1Tag = document.createElement("li");
var ques2Tag = document.createElement("li");
var ques3Tag = document.createElement("li");
var ques4Tag = document.createElement("li");


var ques1Button = document.createElement("button");
var ques2Button = document.createElement("button");
var ques3Button = document.createElement("button");
var ques4Button = document.createElement("button");

// adding values to 

// adding appendChild() to
ques1Tag.appendChild(ques1Button);
ques2Tag.appendChild(ques2Button);
ques3Tag.appendChild(ques3Button);
ques4Tag.appendChild(ques4Button);

// counter for questions!
var count = 0;

// Questions!
var questionObj = {
    question: ["What is 2+2?" ,
                "What is 3+2?",
                "What is magic?",
                "What is magic + magic?"],
    choices:[  ["1", "2", "3", "4"],
                ["1", "2", "5", "6"],
                ["beautiful", "horrible", "nope", "what?"],
                ["nan"]
    ],
    correctAns: [3, 3, 0, 0]

            
}

// Function to start the page
function startQuiz () {
    // Let's create the page:
    titleTag.textContent = "Welcome! Start the Quiz";
    paraTag.textContent = "This thest is only for geniuses, if you are not a genius, pls abort this webpage";
    buttonQuizTag.textContent = "Get Started to greatness!";

    buttonQuizTag.setAttribute("id", "getStartedButton");

    questionaireId.appendChild(titleTag);
    questionaireId.appendChild(paraTag);
    questionaireId.appendChild(buttonQuizTag);
    
}
// And run it to show up on the screen!
startQuiz();
// After running the startQuiz function, let's listen for the button click of "Get Started"
var startQuizButtonId = document.getElementById("getStartedButton");


// Event listener for Starting the quiz:
startQuizButtonId.addEventListener("click", function (event) {
    event.preventDefault();

    clear();


    

    askQuestion();


    console.log("click");
    console.log(questionObj.question);

    


});

// this function will clear all elements inside the questionaire to start anew!
function clear() {
    while (questionaireId.firstChild) {
        questionaireId.removeChild(questionaireId.lastChild);
      }
}

console.log(count);
function askQuestion(){
    
    //var count = 0;
    titleTag.textContent = questionObj.question[count];
    questionaireId.appendChild(titleTag);

    //console.log(questionObj.choices[count][count]);

    ques1Button.textContent = questionObj.choices[count][0];
    ques2Button.textContent = questionObj.choices[count][1];
    ques3Button.textContent = questionObj.choices[count][2];
    ques4Button.textContent = questionObj.choices[count][3];

    
    listTag.appendChild(ques1Tag);
    listTag.appendChild(ques2Tag);
    listTag.appendChild(ques3Tag);
    listTag.appendChild(ques4Tag);
    questionaireId.appendChild(listTag);

    count++;

}
console.log(count);
    



