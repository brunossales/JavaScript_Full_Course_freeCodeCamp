// // document.getElementById("counte-el").innerText = 5

// let count = 0

// let bonusPoints = 50
// bonusPoints += 100
// bonusPoints -= 25

// console.log(bonusPoints)

let saveEl = document.getElementById("save-el")
let count = 0
let countEl = document.getElementById("counte-el")

function increment(){
    count += 1
    countEl.textContent = count
}

function save(){
    let countStr = count + " - "
    saveEl.innerText += countStr
    countEl.textContent = 0
    count = 0
    
}

