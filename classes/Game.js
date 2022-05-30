class Game {
    selectedBall = [];
    drawBall = []
    quota = [];

    constructor(quota) {
        this.quota = quota
    }

    _isExists = (ball) => {
        let ind = null;
        return this.selectedBall.some((el, index) => {
            el.num === ball.num ? ind = index : ""
            return el.num === ball.num
        })
    }

    setSelectedBall = (ball) => {
        let ind = null;
        let isExist = this.selectedBall.some((el, index) => {
            el.num === ball.num ? ind = index : ""
            return el.num === ball.num
        })

        if (this.selectedBall.length < 6) {
            if (isExist) {
                this.selectedBall.splice(ind, 1)
                return false
            } else {
                this.selectedBall.push(ball)
                return true
            }
        } else if (isExist) {
            this.selectedBall.splice(ind, 1)
            return false
        } else {
            return null

        }

    }

    checkTicket(bets) {
        if (this.drawBall.length === 6) {
            console.log(this.drawBall.pop().drawingNumber)
        } else {
            console.log("You lose your money")
        }
        console.log(this.drawBall)
    }

    setDrawBall(ball, drawingNum) {
        if (this._isExists(ball)) {
            this.drawBall.push(
                {
                    ball: ball,
                    drawingNumber: drawingNum
                })
        }

    }
}

let quota = [null, null, null, null, null, 2500, 1500, 7500, 3000, 1250, 700, 350, 250, 175, 125, 100, 90, 80, 70, 60, 50, 35, 25, 20, 15, 12, 10, 8, 7, 6, 5, 4, 3, 2, 1]


let game = new Game(quota)