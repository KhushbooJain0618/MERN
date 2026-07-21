let container = document.getElementById("cardContainer");

let fetchData = async (value = "") => {
    let response = await fetch(`https://dummyjson.com/recipes/search?q=${value}`);
    let data = await response.json();
    let array = data.recipes;

    container.innerHTML = "";

    array.forEach(el => {
        container.innerHTML += `
            <div class="card">
                <img src="${el.image}" alt="">
                <h3>${el.name}</h3>
                <p>Time: ${el.cookTimeMinutes} minutes</p>
            </div>
        `;
    });
};

fetchData();

function handleSearch() {
    let inp = document.getElementById("find").value;
    fetchData(inp);
}