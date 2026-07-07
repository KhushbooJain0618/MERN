var button=document.getElementById("submit")

button.addEventListener("click",handleClick)

function handleClick(){
    // alert("Button is triggered")
    var inputUrl=document.getElementById("url").value
    var titleUrl=document.getElementById("title").value
    var rating=document.getElementById("rating").value

    var movieCard=document.getElementById("movieCardDiv")

    movieCard.innerHTML+=`
    <div class="card">
                <img src="${inputUrl}" alt="">
                <p>Movie: ${titleUrl}</p>
                <h3>Rating: ${rating}</h3>
            </div>
    `

//  `content ${name}`
}



// document.queryselector("")