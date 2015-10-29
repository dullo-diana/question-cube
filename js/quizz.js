firstUser = new User("Radu", "tommy@hethinkshescool.com");

var questionArray = [question1, question2, question3, question4, question5, question6];
var question = question1;
var buttonCounter = 5;
var counter = 0;

question.displayQuestion();

function checkValue()
{
  var user_choice = document.querySelector('input[name="choice"]:checked').value;
  console.log("counter is " + counter);
  if(questionArray.length-1 == counter)
  {
      var elem = document.getElementById('questionbody');
      var side = document.getElementsByClassName("cubeside");

      elem.parentNode.removeChild(elem);
      side[1].innerHTML = firstUser.showNameAndScores();
  }
  else
  {
    if(question.getCorrectAnswer() == user_choice)
    {
      var elem        = document.getElementById('questionbody');
      var second_elem = document.getElementById('que');
      var side        = document.getElementsByClassName("cubeside");
      var button      = document.getElementsByClassName("buttone");

      button[buttonCounter + 1].click();
      second_elem.parentNode.removeChild(second_elem);
      side[buttonCounter].innerHTML = "<div id='que'></div>";
      firstUser.saveScore(1);
      elem.parentNode.removeChild(elem);
      question = questionArray[counter + 1];
      question.displayQuestion();
      buttonCounter--;
      counter++;
    }
    else
    {
      var elem        = document.getElementById('questionbody');
      var second_elem = document.getElementById('que');
      var side        = document.getElementsByClassName("cubeside");
      var button      = document.getElementsByClassName("buttone");

      button[buttonCounter + 1].click();
      second_elem.parentNode.removeChild(second_elem);
      side[buttonCounter].innerHTML = "<div id='que'></div>";
      elem.parentNode.removeChild(elem);
      question = questionArray[counter + 1];
      question.displayQuestion();
      buttonCounter--;
      counter++;
    }
  }
}
