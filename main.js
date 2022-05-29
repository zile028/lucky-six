let appDiv = document.querySelector("#app");
let ballsHolder = document.querySelector(".balls-holder")
let extractHolder = document.querySelector(".extract-ball-holder")
let startBtn = document.querySelector("#startGame")
let ballHolder = [...document.querySelectorAll(".ball-holder")];


ballHolder.sort((a, b) => {

    return a.getAttribute("data-ball") - b.getAttribute("data-ball")
})


let selectedBall = []
startBtn.addEventListener("click", extractBall)
// renderBallHolder()
shuffleBall = Utils.randomize(allBalls)
console.log(allBalls)
console.log(shuffleBall)

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
    }, 300)
}

function setChosen(ball) {
    if (selectedBall.length < 6 || selectedBall.includes(ball.num)) {
        let i = selectedBall.indexOf(ball.num)
        i === -1 ? selectedBall.push(ball.num) : selectedBall.splice(i, 1)
        ball.chosen = !ball.chosen
        this.classList.toggle("chosen")
    } else {
        alert("You selected 6 balls")
    }
}

function extractBall() {
    let i = 0
    let loop = setInterval(() => {
        let ball = shuffleBall.shift()
        let img = document.createElement("img")
        img.src = ball.img
        img.className = "ball"
        ballHolder[i].querySelector(".ball-hole").appendChild(img)
        i++
        if (i === 35) {
            clearInterval(loop)
        }
    }, 1000)
}