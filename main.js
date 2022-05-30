let appDiv = document.querySelector("#app");
let ballsHolder = document.querySelector(".balls-holder")
let startBtn = document.querySelector("#startGame")
let ballHolder = [...document.querySelectorAll(".ball-holder")];
let selectedBallHolder = document.querySelector(".selected-ball");
let betsValue = document.querySelector(".bets-holder input")

ballHolder.sort((a, b) => {
    return a.getAttribute("data-ball") - b.getAttribute("data-ball")
})

startBtn.addEventListener("click", extractBall)
renderBallHolder()


function renderBallHolder() {
    let i = 0
    let loop = setInterval(() => {
        let ball = allBalls[i]
        let img = document.createElement("img")
        img.src = ball.img
        img.className = "ball"
        img.onclick = setChosen.bind(img, ball)
        ballsHolder.appendChild(img)
        i++
        if (i > allBalls.length - 1) {
            clearInterval(loop)
        }
    }, 10)
}


function addToSelectedHolder(ball) {
    let img = document.createElement("img")
    img.src = ball.img
    img.className = "ball"
    img.onclick = removeSelected.bind(img, ball)
    selectedBallHolder.appendChild(img)
}

function removeSelected(ball) {
    game.setSelectedBall(ball)
    this.remove()
    removeFromSelectedHolder(ball)
}

function removeFromSelectedHolder(ball) {
    selectedBallHolder.querySelectorAll('.ball').forEach(el => {
        if (ball.img === el.getAttribute("src")) {
            el.remove();
        }
    })
    ballsHolder.querySelectorAll(".ball").forEach(el => {
        if (ball.img === el.getAttribute("src")) {
            el.classList.remove("chosen")
        }
    })

}

function setChosen(ball) {
    let isAdd = game.setSelectedBall(ball)
    if (isAdd) {
        this.classList.toggle("chosen")
        addToSelectedHolder(ball, this)
    } else if (isAdd === null) {
        alert("You selected 6 balls")
    } else {
        this.classList.toggle("chosen")
        removeFromSelectedHolder(ball)
    }
}


function extractBall() {
    shuffleBall = Utils.randomize(allBalls)
    document.querySelectorAll(".ball-holder .ball-hole").forEach(el => el.innerHTML = "")
    
    let i = 0
    let loop = setInterval(() => {
        let ball = shuffleBall.shift()
        let img = document.createElement("img")
        img.src = ball.img
        img.className = "ball"
        ballHolder[i].querySelector(".ball-hole").appendChild(img)
        game.setDrawBall(ball, i)
        i++
        if (i === 35) {
            clearInterval(loop)
            game.checkTicket(betsValue)
        }
    }, 50)
}