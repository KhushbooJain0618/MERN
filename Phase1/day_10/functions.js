let nationality = function(country = "India") {
    return `I am from ${country}`;
}

let res = nationality('USA');
console.log(res) // I am from USA


let x = function(a, b) {
    return a * b;
}

let multiline = (a, b) => {
    let c = 90;
    let result = a + b + c;
    return result;
}