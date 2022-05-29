class Utils {
    static randomize(arr) {
        let copyArr = [...arr];
        let randomArr = [];
        for (let i = 0; i < arr.length; i++) {
            let rnd = Math.floor(Math.random() * copyArr.length);
            randomArr.push(copyArr[rnd])
            copyArr.splice(rnd, 1)
        }
        return randomArr;
    }


}