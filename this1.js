function hello(){
    console.log('hello world', this)
}

const person = {
    name: 'John',
    age: 25,
    sayHello: hello,
    sayHelloWindow: hello.bind(document),
    loginfo: function(job, phone){
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name} and age is ${this.age}`)
        console.log(`Job is ${job}`)
        console.log(`Phone is ${phone}`)
        console.groupEnd()
    }
}

const bruce = {
    name: 'Bruce',
    age: 24
}

//person.loginfo.bind(bruce, 'developer', '123456789')()
//person.loginfo.call(bruce, 'developer', '123456789')
person.loginfo.apply(bruce, ['developer', '123456789'])

///==========================

const array = [1,2,3,4,5]

function multBy(arr, n) {
    return arr.map(function(i) {
        return i*n
    })
}

console.log(multBy(array, 5))

