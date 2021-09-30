const searching = "https://thecocktaildb.com/api/json/v1/1/search.php?s=";
const search = document.querySelector(".search")
const form = document.querySelector(".input");
const main = document.querySelector(".main");
async function find(url) {
    const resp = await fetch(url);
    const data = await resp.json()
    console.log(data.drinks)
    showDrink(data.drinks)
}
find(searching)
window.addEventListener("DOMContentLoaded",() => {
    find(searching)
    if(confirm("Are you over 18?")== true)
    {alert("Enjoy")
   } else {alert("Since you are under age. Please Drink Responsibly!!!")};
})
form.addEventListener("submit",(e) => {
    e.preventDefault();
    const searchTerm = search.value;
    if(search) {
        main.innerHTML = " ";
        find(searching + searchTerm)
        searchTerm.value = "";
    }
});


function showDrink(drinking) {
    drinking.forEach((drink) => {
        const {strDrinkThumb,strDrink,strCategory,strInstructions,strIngredient1,strIngredient2,strIngredient3,strIngredient4} = drink;
        const element = document.createElement("div");
        element.innerHTML = `
        <div class="image">
        <img src="${strDrinkThumb}" alt="">
        <div class="texts">
        <h2 class="meal">Drink : ${strDrink}</h2>
        <h2 class="meal">Category: ${strCategory}</h2>
        <h2 class="meal">Ingredients : </h2>
        <h3 class="meal">${strIngredient1}</h3>
        <h3 class="meal">${strIngredient2}</h3>
        <h3 class="meal">${strIngredient3}</h3>
        <h3 class="meal">${strIngredient4}</h3>
        <h3 class="meal">Instructions : </h3>
        <h3 class="meal">${strInstructions}</h3>
        </div>
    </div>
        `;
        main.appendChild(element);
    })
}

