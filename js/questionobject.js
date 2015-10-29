function inheritPrototype(childObject, parentObject) {
 var copyOfParent = Object.create(parentObject.prototype);

 copyOfParent.constructor = childObject;

childObject.prototype = copyOfParent;
}

function Question(theQuestion, theChoices, theCorrectAnswer) {
   this.question = theQuestion;
   this.choices = theChoices;
   this.correctAnswer = theCorrectAnswer;
   this.userAnswer = "";

   var newDate = new Date(),
       QUIZ_CREATED_DATE = newDate.toLocaleDateString();

   this.getQuizDate = function () {
       return QUIZ_CREATED_DATE;
   };

   console.log("Quiz Created On: " + this.getQuizDate());
}

Question.prototype.getCorrectAnswer = function () {
 return  this.correctAnswer;
};

Question.prototype.getUserAnswer = function () {
 return this.userAnswer;
};

Question.prototype.displayQuestion = function () {
 var questionToDisplay = "<div id='questionbody'><div>" + this.question + "</div><ul>";
     choiceCounter = 0;

 this.choices.forEach(function (eachChoice)  {
     questionToDisplay += '<li id="question"><input type="radio" name="choice" value="' + choiceCounter + '">' + eachChoice + '</li>';
     choiceCounter++;

 });
 questionToDisplay += "</ul></div>";
 document.getElementById('que').innerHTML += questionToDisplay
 console.log (questionToDisplay);
};

function MultipleChoiceQuestion(theQuestion, theChoices, theCorrectAnswer){
  Question.call(this, theQuestion, theChoices, theCorrectAnswer);
};

inheritPrototype(MultipleChoiceQuestion, Question);

function DragDropQuestion(theQuestion, theChoices, theCorrectAnswer) {
    Question.call(this, theQuestion, theChoices, theCorrectAnswer);
}

inheritPrototype(DragDropQuestion, Question);

DragDropQuestion.prototype.displayQuestion = function () {
    document.body.innerHTML += this.question;
    var questionToDisplay;
    var choiceCounter = 0;
    this.choices.forEach(function (eachChoice)  {
        questionToDisplay += '<div value="' + choiceCounter + '">' + eachChoice + '</div>';
        choiceCounter++;
    })
    document.body.innerHTML += questionToDisplay;
};
