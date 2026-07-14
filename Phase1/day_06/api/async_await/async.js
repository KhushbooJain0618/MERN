
let container=document.getElementById("cardContainer")

// fetch('url').then(()=>)

// async function

let fetchData=async()=>{
    let response=await fetch("https://dummyjson.com/recipes")
    let data=await response.json()
    let array=data.recipes

    array.forEach(el => {
        container.innerHTML+=`
        <div class="card">
                <img src="${el.image}" alt="">
                <h3>${el.name}</h3>
                <p>Time:${el.cookTimeMinutes}</p>
            </div>
        `
    });

}


fetchData()