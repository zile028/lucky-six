class Ball {

    #allColors = ["Black", "Red", "Green", "Blue", "Purple", "Brown", "Yellow", "Orange"];

    constructor(num) {
        this.num = num
        this.img = `img/${num}.png`
        this.color = this.#allColors[num % 8]
        this.chosen = false
    }

    #setColor = (num) => {

    }

}

let numbers = Array.from(Array(49).keys()).splice(1, 48)
let allBalls = numbers.map(num => {
    return new Ball(num)
})
