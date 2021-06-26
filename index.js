var readlineSync = require('readline-sync');
var chalk = require("chalk");
var score = 0;

var QandA = [
  {
    question : "Q1. What's the git command that downloads your repository from GitHub to your computer? \n A. git push \n B. git fork \n C. git clone \n D. git commit \n",
    answer : "C"
  },
  {
    question : "Q2. How do you create a copy of a lab under your own GitHub account so that you can solve the lab? \n A. Forking it via the GitHub interface. \n B. git fork \n C. git clone \n D. git pull-request \n" ,
    answer : "A"
  },
  {
    question : "Q3. What's the opposite of git clone, instead of downloading your code from GitHub, uploads your changes and code back to GitHub? \n A. git push \n B. git add \n C. git status \n D. git upload \n",
    answer : "A"
  },
  {
    question : "Q4. How do you check the state of your local git repository since your last commit? \n A. git check \n B. git status \n C. git commit \n D. git diff \n",
    answer : "B"
  },
  {
    question : "Q5. How do you save the current state of your code into the git version control?\n A. By committing the staged changes with git commit\n B. By adding all changes and staging them with git stage\n C. By adding all changes and staging them with git add\n D. By creating a new commit with git init\n",
    answer : "A"
  },
  {
    question : "Q6. What's a shortcut to staging all the changes you have?\n A. git commit add .\n B. git commit .\n C. git add .\n D. git push -am 'Message'\n",
    answer : "C"
  },
  {
    question : "Q7. How do you supply a commit message to a commit?\n A. git message 'I'm coding'\n B. git add 'I'm coding'\n C. git commit 'I'm coding'\n D. git commit -m 'I'm coding'\n",
    answer : "D"
  },
  {
    question : "Q8. What is the correct commit syntax for all changes with a message?\n A. git message -am 'I'm coding'\n B. git add -a 'I'm coding'\n C. git commit -a 'I'm coding'\n D. git commit -am 'I'm coding'\n",
    answer : "D"
  }
]

console.log("Welcome to " + chalk.green("GIT QUIZ"));

var entryQ = "Please enter your name: "
var userName =  readlineSync.question(entryQ)
console.log("Welcome " + chalk.blue(userName) + "!");

console.log("Note : Only one option is correct out of the four options provided. Negative marking is applicable");

console.log(chalk.yellow("source: https://learn.co/lessons/git-github-learn-quiz \n"));


function updateScore(ans, i){
  if(ans.toUpperCase() === QandA[i].answer){
    score = score + 1
    console.log("CORRECT!")
    
  }
  else{
    console.log(QandA[i].answer + " was the correct answer")
    if(score >0){
    score = score-1;}
  }
  
}
for(var i = 0 ; i< QandA.length ; i++){
  var currentQuestion = QandA[i].question;
  var ans = readlineSync.question(currentQuestion+"Answer:");
  updateScore(ans.toUpperCase(), i)
  console.log("Current score: " + score)
  console.log("*****************************************************");
}

if(score === 8){
  console.log(chalk.blue("COngratulations! You got all of em correct!"))
}