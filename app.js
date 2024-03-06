let key = "15f60b55f81b4d76ac16ff424f73aab7";
let cardData = document.querySelector(".cardData");
let searchbtn = document.getElementById("searchbtn");
let inputData = document.getElementById("inputData");
let searchType = document.getElementById("type");

const getData = async (input) => {
    let res = await fetch (`https://newsapi.org/v2/everything?q=${input}&apiKey=${key}`);
    let jsonData = await res.json();
    console.log(jsonData.articles);

    cardData.innerHTML="";
    jsonData.articles.forEach(function(article){
        console.log(article);

    let divs = document.createElement("div");
    divs.classList.add("card");
    cardData.appendChild(divs);

    divs.innerHTML= `
    <img src="${article.urlToImage}" alt="">
    <h3>${article.title}</h3>
    <p>${article.description}</p>
    `

    divs.addEventListener("click", function(){
        window.open(article.url);
    })
    })

}

window.addEventListener("load", function(){
    getData("India");
});

searchbtn.addEventListener("click", function() {
    let inputText = inputData.value;
    getData(inputText);
})

function navClick(navName) {

    if(navName == "environment") {
        document.getElementById('nature').style.color="white";
        document.getElementById('sports').style.color="white";
        document.getElementById('defence').style.color="white";
        document.getElementById('finance').style.color="white";
        document.getElementById('technology').style.color="white";
        document.getElementById('politics').style.color="white";
        document.getElementById('science').style.color="white";
        document.getElementById('health').style.color="white";
        document.getElementById('entertainment').style.color="white";
    };
    getData(navName);
}
