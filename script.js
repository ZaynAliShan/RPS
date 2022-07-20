// let data = ['🪨','📃','✂️','Zain','Ali','Shan']
// // make a function that randomly generates one data choice from data array

// const randomData = (data) => {
//   // this will generate a random index(number) from the length of our data array
//   // and floors it to the last length digit of data array 
//   // for our data array floor ensures that result is between  0 - 5
//   const rand_number = Math.floor(Math.random() * data.length)
//   console.log(rand_number)
//   return data[rand_number]
// }

// console.log(randomData(data))


// // check weather if 
// // Rainy 👉 (1)
// // Overcast 👉 (0)
// // Sunny 👉 (-1)

// const weatherScore = (weather) => {
//   weather = weather.toLowerCase()
//   let score = 0
//   if (weather === 'sunny') {
//     score = -1
//     console.log(`Day: ${weather} \n Score: ${score}`)
//   }
//   else if (weather === 'overcast') {
//     score = 0
//     console.log(`Day: ${weather} \n Score: ${score}`)
//   }
//   else if(weather === 'rainy') {
//     score = 1
//     console.log(`Day: ${weather} \n Score: ${score}`)
//   }
//   else {
//     console.log(`Error: Invalid Input!`)
//   }
// }

// weather = prompt("Enter Weather: ")
// weatherScore(weather)


// my choice  -- vertical
// computer choice -- horizontal

// +----------+-------+-------+--------+
// |          | Rock  | Paper |Scissors| 👈 MY CHOICE
// +----------+-------+-------+--------+ 👇 COMPUTER CHOICE 
// | Rock     |   0   |   1   |   -1   |
// | Paper    |  -1   |   0   |    1   |
// | Scissors |   1   |  -1   |    0   |
// +----------+-------+-------+--------+



/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/

// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'
function getComputerChoice() {
  let choices = ['Rock', 'Paper', 'Scissors']

  rand_number = Math.floor(Math.random() * choices.length)
  return choices[rand_number]
} // ✅

// console.log(getComputerChoice())

// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, computerChoice) {

  let score

  // return the result of score based on if you won, drew, or lost
  

  // All situations where human draws, set `score` to 0

  if (playerChoice == computerChoice) {
    console.log(`DRAW, PC: ${playerChoice}, CC: ${computerChoice}`)
    score = 0
  }
  
  // All situations where human wins, set `score` to 1
  // make sure to use else ifs here
  
  else if (playerChoice == 'Paper' && computerChoice == 'Rock') {
    console.log(`WIN, PC: ${playerChoice}, CC: ${computerChoice}`)
    score = 1
  }
  else if (playerChoice == 'Scissors' && computerChoice == 'Paper') {
    console.log(`WIN, PC: ${playerChoice}, CC: ${computerChoice}`)
    score = 1 
  }
  else if (playerChoice == 'Rock' && computerChoice == 'Scissors') {
    console.log(`WIN, PC: ${playerChoice}, CC: ${computerChoice}`)
    score = 1
  }
  // Otherwise human loses (aka set score to -1)
  else {
    console.log(`LOST!, PC: ${playerChoice}, CC: ${computerChoice}`)
    score = -1
  }

  // return score
  return score
  
}


// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
  // Hint: on a score of -1
  // You should do result.innerText = 'You Lose!'
  // Don't forget to grab the div with the 'result' id!

  player_score  = document.getElementById('player-score')
  hands = document.getElementById('hands')
  result = document.getElementById('result')

  if (score == 1) {
    player_score.innerText = 1
    hands.innerText = `🙍🏻${playerChoice} VS 🤖${computerChoice}`
    result.innerText = 'You Win!'
  }
  else if (score == 0) {
    player_score.innerText = 0
    hands.innerText = `🙍🏻${playerChoice} VS 🤖${computerChoice}`
    result.innerText = 'Draw'
  }
  else {
    player_score.innerText = -1
    hands.innerText = `🙍🏻${playerChoice} VS 🤖${computerChoice}`
    result.innerText = 'You Lose!'
  }

}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
  const computerChoice = getComputerChoice()
  const score = getResult(playerChoice, computerChoice)
  showResult(score,playerChoice, computerChoice)
}


// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // use querySelector to select all RPS Buttons

  buttons = document.querySelectorAll('.rpsButton')

  // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *

  
  // 1. loop through the buttons using a forEach loop
  // 2. Add a 'click' event listener to each button
  // 3. Call the onClickRPS function every time someone clicks
  // 4. Make sure to pass the currently selected rps button as an argument

  buttons.forEach(btns => {
    btns.onclick = () => {
      console.log(`${btns.value} is clicked!`)
      onClickRPS(btns.value)
    }
  })
 

  // Add a click listener to the end game button that runs the endGame() function on click
  end_btn = document.getElementById('endGameButton')
  end_btn.onclick = () => {
    endGame()
  }
  
}

// ** endGame function clears all the text on the DOM **
function endGame() {
  player_score.innerText = ''
  hands.innerText = ''
  result.innerText = ''
}

playGame()