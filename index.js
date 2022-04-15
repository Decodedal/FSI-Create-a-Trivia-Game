// // Your Code Here
// let username = window.prompt("please enter your name:")
// let userscore = 0 

// for (let i= 0; i < questions.length; i++){
//     let question = questions[i]
//     let userAnswer = window.prompt(question.text)
// if (userAnswer === question.correctAnswer){
//     userscore = userAnswer + 10
// }
// }
// window.alert(username,"Your score is" +userscore)

// let userName = window.prompt('Please enter your name:')
let userScore = 0

for(let i = 0; i < questions.length; i++){
    let question = questions[i]
    let userAnswer = window.prompt(question.text)
    if(userAnswer === question.correctAnswer){
        userScore = userScore + 10
    }
}

window.alert('Your score is: '+userScore)
toup