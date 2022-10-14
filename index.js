let countHome = 0;
let countGuest = 0;
let displayScoreHome = document.getElementById("display-score-inner-home")
let displayScoreGuest = document.getElementById("display-score-inner-guest")

function addOnePointHome(){
    countHome += 1
    displayScoreHome.textContent = countHome
}
function addTwoPointHome(){
    countHome += 2
    displayScoreHome.textContent = countHome
}
function addThreePointHome(){
    countHome += 3
    displayScoreHome.textContent = countHome
}

function addOnePointGuest(){
    countGuest += 1
    displayScoreGuest.textContent = countGuest
}
function addTwoPointGuest(){
    countGuest += 2
    displayScoreGuest.textContent = countGuest
}
function addThreePointGuest(){
    countGuest += 3
    displayScoreGuest.textContent = countGuest
}

function resetButton() {
    countHome = 0;
    countGuest = 0;
    displayScoreHome.textContent = countHome;
    displayScoreGuest.textContent = countGuest;
}