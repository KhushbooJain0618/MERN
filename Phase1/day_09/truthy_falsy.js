let a = "5" + 6
console.log(a) // 56
console.log(typeof a) // string

let b = 8 - "2" 
console.log(b) // 6
console.log(typeof b) // number

let num = 17
let s = String(num)
console.log(s) // "17"
console.log(typeof s) // string

let str = "123ABC"
console.log(Number(str)) // NaN
console.log(typeof Number(str)) // number
let res = parseInt(str)
console.log(res) // 123
console.log(typeof res) // number