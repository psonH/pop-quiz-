/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function Question(text,choices,answer){
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
Question.prototype.correctAnswer = function(choice){
    return choice === this.answer;
}

