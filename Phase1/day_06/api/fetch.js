// // let, var , const
// // variables, functions, name=undefined, age=undefined ---> temperal dead zone
// // hoisting --> all functions and variables are moved to the top of scope

// // console.log(name) 
// // console.log(age)
// // var name="Aman"
// // let age=30


// // let num=10
// // num=20
// // const n=10
// // n=200


// // sync js

// // let name="Pratik"
// // let age=40

// // console.log(`Name is ${name} and age is ${age}`)

// // console.log("Start")

// // // fetch ---> 2,3 seconds ---> this get handled by browser

// // setTimeout(function(){
// //     console.log("Load after 3 seconds")
// // },3000)

// // // calculations
// // console.log("End")


// // Promise

// // callback functions

// // function greet(callback){
// //     console.log("Welcome to Chitkara")
// //     callback()
// // }
// // function greetMorning(){
// //     console.log("Good Morning")
// // }
// // greet(greetMorning)

// // blinkit
// function paymentFunction(orderFun){
//     console.log("Payment is getting started")  
//     setTimeout(function(){
//         console.log("Payment is confirmed")
//         orderFun()
//     },3000)
// }
// function orderFunction(deliever){
//     console.log("Order is getting packed")
//     setTimeout(function(){
//         console.log("Order is ready")
//         deliever()
//     },3000)
// }

// function deliverFunction(){
//     console.log("Delievery Partner is getting assigned")
//     setTimeout(function(){
//         console.log("Order picked up")
//     })
// }
// function otpFunction(){
//     console.log("Otp 1234")
// }

// paymentFunction(function(){
//     orderFunction(function(){
//         deliverFunction(function(){
//             otpFunction(someFunction)
//         })
//     })
// })

// // callback hell

// //  promises

// paymentFunction.then(orderFunction).then(deliverFunction)


// api --> It is an interface to communicate between
//        two systems or between server and client

// https://dummyjson.com/products
// get

let container=document.getElementById("container")
let response=fetch('https://dummyjson.com/products').then(function(res){
     return res.json()
}).then(function(data){
    // data.products == array
    console.log(data.products)
    for(let el of data.products){
        container.innerHTML+=`
        <div id="product-${el.id}">
            <img src="${el.images[0]}" alt="">
            <h3>${el.title}</h3>
            <p>Price: ${el.price}</p>
            <button onClick="addtocart()">Add to cart</button>
            <button onClick="handleDelete(${el.id})">Delete Product</button>

        </div>
        `
    }
})

function handleDelete(index){
    let div=document.getElementById(`product-${index}`)
    div.remove()

}


// let arr=[
//     {"id":1,"title":"Tshirt"},
//     {id:2,title:"Pant"},
// ]
// arr[0].title