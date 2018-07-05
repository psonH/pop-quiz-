/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function populate(){
    if(quiz.isEnded()){
         showScores();
    }else{
        //show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
        //show choices
        var choices = quiz.getQuestionIndex().choices;
        for(var i=0; i<choices.length; i++){
            document.getElementById("choice"+i).innerHTML = choices[i];
            guess("btn"+i,choices[i]);
        }
        showProgress();
    }
}
function guess(id,guess){
    var button = document.getElementById(id);
    button.onclick = function(){
        quiz.guess(guess);
        populate();
    }
}
function showProgress(){
    var currentQuestion = quiz.questionIndex+ 1;
    document.getElementById("progress").innerHTML = "Question "+ currentQuestion +"/"+quiz.questions.length;
}

function showScores(){
    var gameover = "<h1>Result</h1>";
    gameover += "<h2 id='score'>Your Scores: "+ quiz.score +"</h2>";
    
    var element = document.getElementById("quiz");
    element.innerHTML = gameover;
}

var questions =[
  new Question("Which nutrient is key for supplying the body with energy?",["Protein","Carbohydrate","Fat","Fibre"],"Carbohydrate"),
  new Question("Which of these foods is protein-rich and helps contribute towards muscle recovery?",["100g of chestnut mushrooms","Jam on wholemeal toast","A skinless chicken breast","An orange"],"A skinless chicken breast"),
  new Question("At what stage of exercise should you aim to be well hydrated?",["Before beginning exercise","Halfway through exercising","After you've finished exercising","A few hours after exercising"],"Before beginning exercise"),
  new Question("What type of fat should make up the majority of your fat intake for a healthy diet?",["Saturated fat","Unsaturated fat","Fat from animal produts","Trans fat"],"Unsaturated fat"),
  new Question("Which of these foods contains complex carbohydrates?",["Table sugar","Bread made with white flour","Potatoes","Fruit juice"],"Potatoes")
];

var quiz = new Quiz(questions);

populate();