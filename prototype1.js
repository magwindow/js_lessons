const person = new Object({
        name: 'John',
        age: 30,
        greet: function () {
            console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
        }
    })

Object.prototype.sayHello = function() {
    console.log(`Hello!`)
}

const anonimous = Object.create(person)
anonimous.name = 'Anonimous'

const str = new String('I am a string')