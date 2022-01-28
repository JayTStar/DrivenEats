
// ---- Seleção dos pratos----
const itensDishes = document.querySelectorAll("#dishes .box");
const cardapioDishes = Array.prototype.slice.call(itensDishes);
let tamanhoDishes = cardapioDishes.length;
let dishSelected;
let dishStatus; 

function dishCheck(){
    for(i= 0; i<(tamanhoDishes); i++){

       let testeDish = cardapioDishes[i].classList.contains("selected");

        if(testeDish == true){
            dishSelected = i;
            return(true);
        }
        if(testeDish == false && i == (tamanhoDishes - 1)){
            dishStatus = 0;
            return(false);
        }
    }
}

cardapioDishes.forEach(function(pegaElementoAtual){
    pegaElementoAtual.addEventListener('click', function(e){
       dishCheck();
       
       if(dishCheck() == true){
           cardapioDishes[dishSelected].classList.remove("selected");
           this.classList.toggle("selected");
       }
       if(dishCheck() == false){
           this.classList.toggle("selected");
           dishStatus = 1;
       }
       console.log(dishCheck());
       console.log(dishStatus);
       changeButton();
   });
});

// ---- Seleção dos Drinks ----
const itensDrinks = document.querySelectorAll("#drinks .box");
const cardapioDrinks = Array.prototype.slice.call(itensDrinks);
let tamanhoDrinks = cardapioDrinks.length;
let drinkSelected;
let drinkStatus = 0;

function drinkCheck(){
    for(i=0; i<(tamanhoDrinks); i++){
        let testeDrink = cardapioDrinks[i].classList.contains("selected");
 
        if(testeDrink == true){
            drinkSelected = i;
            return(true);
        }
        if(testeDrink == false && i == (tamanhoDrinks - 1)){
            console.log(i);
            drinkStatus = 0;
            return(false);
        }
    }
}

cardapioDrinks.forEach(function(pegaElementoAtual){
    pegaElementoAtual.addEventListener('click', function(e){
       drinkCheck();
       if(drinkCheck() == true){
           cardapioDrinks[drinkSelected].classList.remove("selected");
           this.classList.toggle("selected");
       }
       if(drinkCheck() == false){
           this.classList.toggle("selected");
           drinkStatus = 1;
       }
       console.log(drinkCheck());
       console.log(drinkStatus);
       changeButton();
   });
});

// ---- Seleção das Desserts ----
const itensDesserts = document.querySelectorAll("#desserts .box");
const cardapioDesserts = Array.prototype.slice.call(itensDesserts);
let tamanhoDesserts = cardapioDesserts.length;
let dessertSelected;
let dessertStatus = 0;

function dessertCheck(){
    for(i=0; i<(tamanhoDesserts); i++){
        let testeDesserts = cardapioDesserts[i].classList.contains("selected");
 
        if(testeDesserts == true){
            dessertSelected = i;
            return(true);
        }
        if(testeDesserts == false && i == (tamanhoDesserts - 1)){
            return(false);
        }
    }
}

cardapioDesserts.forEach(function(pegaElementoAtual){
    pegaElementoAtual.addEventListener('click', function(e){
       dessertCheck();
       if(dessertCheck() == true){
           cardapioDesserts[dessertSelected].classList.remove("selected");
           this.classList.toggle("selected");
       }
       if(dessertCheck() == false){
           this.classList.toggle("selected");
           dessertStatus = 1;
       }
       console.log(dessertCheck());
       console.log(dessertStatus);
       changeButton();
   });
});

function changeButton(){
    if(dessertStatus == 1 && drinkStatus == 1 && dishStatus == 1){
        let buttonReady = document.querySelector("#ready");
        let buttonNotReady = document.querySelector("#notReady");

        buttonNotReady.classList.add("hidden");
        buttonReady.classList.remove("hidden");

    }
}

function finish(){
    let dishName = cardapioDishes[dishSelected].querySelector("#name");
    let dishPrice = cardapioDishes[dishSelected].querySelector("#price");
    let drinkName = cardapioDrinks[drinkSelected].querySelector("#name");
    let drinkPrice = cardapioDrinks[drinkSelected].querySelector("#price");
    let dessertName = cardapioDesserts[dessertSelected].querySelector("#name");
    let dessertPrice = cardapioDesserts[dessertSelected].querySelector("#price");
    let total = 

    console.log(dishName.innerText);
    console.log(dishPrice.innerText);
    console.log(drinkName.innerText);
    console.log(drinkPrice.innerText);
    console.log(dessertName.innerText);
    console.log(dessertPrice.innerText);

    // let message = ("Olá, gostaria de fazer o pedido:"
    // "- Prato: " + dishName.innerText
    // "- Bebida: " + drinkName.innerText
    // "- Sobremesa: " + dessertName.innerText
    // "Total: " + total)

    // console.log(encodeURIComponent(message));
}