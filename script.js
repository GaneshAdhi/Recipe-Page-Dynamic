let recipeObj = {
    title: "Tomato Pasta",
    imgSrc: "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/recipe-img.png",
    ingredients: ["Pasta", "Oil", "Onions", "Salt", "Tomato Pasta Sauce", "Cheese"]
};

let mainHead = document.getElementById("mainHead");
let imgEl = document.getElementById("imgEl");
let ul = document.getElementById("list");

mainHead.textContent = recipeObj.title;

imgEl.src = recipeObj.imgSrc;

for (let i of recipeObj.ingredients) {
    let li = document.createElement("li");
    li.textContent = i;
    li.style.fontSize = 25 + "px";
    li.style.color = "white";
    ul.appendChild(li);
}
