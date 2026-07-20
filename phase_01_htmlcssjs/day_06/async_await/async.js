
// let container=document.getElementById("cardContainer")

// // fetch('url').then(()=>)

// // async function
// let fetchData=async(value="")=>{
//     let response=await fetch(`https://dummyjson.com/recipes/search?q=${value}`)
//     // https://dummyjson.com/recipes/search?q=""
//     let data=await response.json()
//     let array=data.recipes  // [{},{},{},{find},{find}]
//     container.innerHTML=""
//     array.forEach(el => {
//         container.innerHTML+=`
//         <div class="card">
//                 <img src="${el.image}" alt="">
//                 <h3>${el.name}</h3>
//                 <p>Time:${el.cookTimeMinutes}</p>
//             </div>
//         `
//     });
// }
// fetchData()
// function handleSearch(){
//     let inp=document.getElementById("find").value
//     // inp=pizza
//     fetchData(inp)  //fetchData(pizza)
//     document.getElementById("find").value=""
// }




// const, var, let

// const name="aman"
// name="kartik"

// let age=30
// let age=40

// var 


// hoisting --> variables and functions are moved to the top of scope while excuting script
// a, name, functions
// console.log(a) ---> undefined
// console.log(name) ---> reference error ---> temperal dead zone
// var a=10
// let name="kartik"


//  sync js  --> code will get executed line by line
// async js --> sync js --> fetch, settimeout
// callbacks functions --> A function which is passed as an argument is callback
// .then
// promises ---> future completion or rejection of any response

// fetch --->  for getting api response

// fetch(api) ---> promise ---> object --> Successful, Failure, Pending

// aync await ---> .then --> easy to read and write

callData()
// arrowFun() ---> undefined
function callData(){
    console.log("This is call function")
}
arrowFun()
var arrowFun=()=>{
    console.log("Hello arrow function")
}