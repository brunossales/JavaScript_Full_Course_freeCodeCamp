let cards = []
// cards.push() - add no final
// cards.pop() - remove no final
// shift() - remove no começo
// unshify() - add no começo

let hasBlasckjack = false
let sum = 0
let isAlive = false

let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")
let playerEl = document.getElementById("player-el")

let player = {
     pname : "Per",
     chip : 145
}

let {pname, chip} = player



playerEl.textContent = pname + ": $" + chip
// cntr + d - edita todos iguais
function startGame(){
    isAlive = true
    let first = getRandomCard()
    let second = getRandomCard()
    cards = [first, second]
    sum = first + second
    renderGame()
}

// floor - remove decimais
// Math.random() -  de 0 a 0,9999 não inclui o 1
function getRandomCard(){
    let rand =  Math.floor (Math.random() * 13) + 1 //1 - 13

    if(rand > 10)
        return 10
    else if(rand === 1)
        return 11
    else 
        return rand
}

function renderGame(){
    sumEl.textContent = "Sum: " + sum
    cardEl.textContent = "Cards: "
    for(let i = 0; i < cards.length; i++)
        cardEl.textContent += cards[i] + " "

    if (sum < 21) {
        message = "Do you want to draw a new card"
    }
    //com === tem que ter até mesmo o mesmo tipo e valor igual
    //com  == basta ser igua, como "100" = 100
    else if (sum === 21) {
        message = "Wohoo! You've got backjack"
        hasBlasckjack = true
    }
    else {
        message = "You're out of the game"
        isAlive = false
    }
    
    messageEl.textContent = message
}

function newCard(){
    if (isAlive === true && hasBlasckjack === false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }

}