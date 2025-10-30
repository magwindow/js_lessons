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

const fnBruceInfoLog = person.loginfo.bind(bruce)
fnBruceInfoLog('developer', '123456789')