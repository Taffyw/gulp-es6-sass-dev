import './modules/home'
class Main {
    constructor(name) {
        this.name = name
    }

    sayName() {
        console.log(`My name is ${this.name}`)
    }
}

let a = {
    name: 'ff'
}
let b = {
    age: 23,
    name: 'qq'
}
let m = new Main('我太过分1')
m.sayName()