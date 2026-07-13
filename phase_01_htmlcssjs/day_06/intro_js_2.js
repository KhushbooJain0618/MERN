// name,age,fun1 will move to the top of scope ---> hoisting
// What is hoisting
// age ---> temperal dead zone
// console.log(name) // undefined
// console.log(age)
// var, let , const

// fun1()

// var name="Kartik"
// let age=30    /// line 5 to line 9 --> temp dead zone

// function fun1(){
//     // a, functions

//     let a=10
//     console.log(a)
// }
// fun1()           
// console.log(name)


// js engines --> which converts js code into machine code

// chrome -V8 engine
// enternet explorer- chakra
// safari - nitro
// Mozila firefox - SpiderMonkey


// Asynchronous Javascript

// synchronous js

// Javascript is single threaded language

// let age=20  // 1

// let name="Vasu" // 2

// console.log(`Name of student is ${name} and age is ${age}`) // 3

// function greet(){
//     console.log("welcome to chitkara")
// }

// greet() // 4



console.log("Start")

// whichever task takes time js can handle it with help of browser

let h1=document.getElementById("title")
h1.innerText="This will change after 4 seconds"
setTimeout(function(){
    h1.innerText="Maa, Mai Aagaya"
},4000)
// api 

console.log("End")


