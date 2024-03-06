let key = "15f60b55f81b4d76ac16ff424f73aab7";
let cardData = document.querySelector(".cardData");
let searchbtn = document.getElementById("searchbtn");
let inputData = document.getElementById("inputData");
let searchType = document.getElementById("type");

const getData = async () => {
    let res = await fetch (`https://newsapi.org/v2/everything?q=country&apiKey=${key}`);
    let jsonData = await res.json();
    console.log(jsonData.articles);

    cardData.innerHTML="";
    jsonData.articles.forEach(function(articles){
        console.log(articles);

    let divs = document.createElement("div");
    divs.classList.add("card");
    cardData.appendChild(divs);

    divs.innerHTML= `
    <img src="${articles.urlToImage}" alt="">
    <h3>${articles.title}</h3>
    <p>${articles.description}</p>
    `

    divs.addEventListener("click", function(){
        window.open(articles.url);
    })
    })

}

window.addEventListener("load", function(){
    getData("world");
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
