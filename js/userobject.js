function User (theName, theEmail) {
    this.name = theName;
    this.email = theEmail;
    this.quizScores = 0;
    this.currentScore = 0;
}

User.prototype = {
    constructor: User,
    saveScore:function (theScoreToAdd)  {
        this.quizScores += theScoreToAdd;
    },
    showNameAndScores:function ()  {
        var scores = this.quizScores;
        return this.name + " Scores: " + scores;
    },
    changeEmail:function (newEmail)  {
        this.email = newEmail;
        return "New Email Saved: " + this.email;
    }
}
