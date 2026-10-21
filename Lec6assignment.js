const prompt = require('prompt-sync')();

// first problem
let car = {
    make: "Honda",
    model: "Accord",
    year: 2009,
    color: "White",
    start: function(){
        console.log(`The car has started`)
    }
}
car.start()



// second problem
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    city: "Lancaster",
    occupation: "Student",
    fullName: function(){
        console.log(`${this.firstName} ${person["lastName"]}`)
    },
    greet:function(){
        console.log(`Hi, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`)
    }
}
person.fullName()
person.greet()



// third problem
let student = {
    name: ["Adriam", "Tapia-Ciprian"],
    age: 18,
    courses: ["CSET", "Inter Algbra", "Intro to Computers"],
    printInfo: function(){
        console.log(`${this.name} ${this.age} ${this.courses}`)
    }
}
student.printInfo()



// fourth problem
let text = '{"type": "laptop", "model": "MacBook Air"}'
let object = JSON.parse(text);
object.price = 1200
let stringify = JSON.stringify(object)
console.log(stringify)



// fifth and sixth problem
class Person{
    constructor(name, age){
        this.name = name
        this.age = age
    }
    introduce = function(){
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`)
    }
    birthday = function(){
        this.age = this.age + 1
        console.log(`My birthday, now I'm ${this.age}`)
    }
}
let p1 = new Person("John", 20)
p1.introduce()
p1.birthday()



// seventh problem
class BankAccount{
    constructor(owner, balance){
        this.owner = owner
        this.balance = balance
    }
    deposit = function(amount){
        this.balance = this.balance + amount
    }
    withdraw = function(amount){
        this.balance = this.balance - amount
    }
    displayBalance = function(){
        console.log(`${this.owner}'s balance is $${this.balance}`)
    }
}
let acc1 = new BankAccount("Adriam", 10)
acc1.displayBalance()
acc1.deposit(100)
acc1.displayBalance()
acc1.withdraw(50)
acc1.displayBalance()



// eighth problem
class Animal {
    constructor(name, sound){
        this.name = name
        this.sound = sound
    }
    makeSound(){
        console.log(`${this.name} says ${this.sound}`)
    }
}
let cat = new Animal("cat", "meow")
cat.makeSound()
let dog = new Animal("dog", "woof")
dog.makeSound()
