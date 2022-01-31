let total;
let phoneNumber = 5521982532159;

// ---- Seleção dos pratos----
const itensDishes = document.querySelectorAll("#dishes .box");
const cardapioDishes = Array.prototype.slice.call(itensDishes);
let tamanhoDishes = cardapioDishes.length;
let dishSelected;
let dishStatus = 0; 
let dishName;
let dishPrice;

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
           cardapioDishes[dishSelected].querySelector("ion-icon").classList.toggle("hidden");
           this.classList.toggle("selected");
           this.querySelector("ion-icon").classList.toggle("hidden");
       }
       if(dishCheck() == false){
           this.classList.toggle("selected");
           this.querySelector("ion-icon").classList.toggle("hidden");
           dishStatus = 1;
       }

       changeButton();
   });
});

// ---- Seleção dos Drinks ----
let drinkSelected;
let drinkStatus = 0;
const itensDrinks = document.querySelectorAll("#drinks .box");
const cardapioDrinks = Array.prototype.slice.call(itensDrinks);
let drinkName ;
let drinkPrice ;
let tamanhoDrinks = cardapioDrinks.length;

function drinkCheck(){
    for(i=0; i<(tamanhoDrinks); i++){
        let testeDrink = cardapioDrinks[i].classList.contains("selected");
 
        if(testeDrink == true){
            drinkSelected = i;
            return(true);
        }
        if(testeDrink == false && i == (tamanhoDrinks - 1)){
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
           cardapioDrinks[drinkSelected].querySelector("ion-icon").classList.toggle("hidden");
           this.classList.toggle("selected");
           this.querySelector("ion-icon").classList.toggle("hidden");
       }
       if(drinkCheck() == false){
           this.classList.toggle("selected");
           this.querySelector("ion-icon").classList.toggle("hidden");
           drinkStatus = 1;
       }
       
       changeButton();
   });
});

// ---- Seleção das Desserts ----
let dessertSelected;
let dessertStatus = 0;
const itensDesserts = document.querySelectorAll("#desserts .box");
const cardapioDesserts = Array.prototype.slice.call(itensDesserts);
let dessertName ;
let dessertPrice ;
let tamanhoDesserts = cardapioDesserts.length;

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
           cardapioDesserts[dessertSelected].querySelector("ion-icon").classList.toggle("hidden");
           this.classList.toggle("selected");
           this.querySelector("ion-icon").classList.toggle("hidden");
       }
       if(dessertCheck() == false){
           this.classList.toggle("selected");
           this.querySelector("ion-icon").classList.toggle("hidden");
           dessertStatus = 1;
       }

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

function confirmation(){
    dishCheck();
    drinkCheck();
    dessertCheck();

    const confirmationScreen = document.querySelector("#confirmationScreen");
    confirmationScreen.classList.remove("hidden");

    dishName = cardapioDishes[dishSelected].querySelector("#name").innerText;
    dishPrice = cardapioDishes[dishSelected].querySelector("#price").innerText;
    console.log(dishName + dishPrice);
    document.querySelector("#order #dishName").innerHTML = dishName;
    document.querySelector("#order #dishPrice").innerHTML = dishPrice;

    drinkName = cardapioDrinks[drinkSelected].querySelector("#name").innerText;
    drinkPrice = cardapioDrinks[drinkSelected].querySelector("#price").innerText;
    console.log(drinkName + drinkPrice);
    document.querySelector("#order #drinkName").innerHTML = drinkName;
    document.querySelector("#order #drinkPrice").innerHTML = drinkPrice;

    dessertName = cardapioDesserts[dessertSelected].querySelector("#name").innerText;
    dessertPrice = cardapioDesserts[dessertSelected].querySelector("#price").innerText;
    console.log(dessertName + dessertPrice);
    document.querySelector("#order #dessertName").innerHTML = dessertName;
    document.querySelector("#order #dessertPrice").innerHTML = dessertPrice;

    const dishPriceFloat = parseFloat(dishPrice.replace("," , "."));
    const drinkPriceFloat = parseFloat(drinkPrice.replace("," , "."));
    const dessertPriceFloat = parseFloat(dessertPrice.replace("," , "."));

    const totalFloat = (dishPriceFloat + drinkPriceFloat + dessertPriceFloat).toFixed(2);
    total = totalFloat.toString();
    total = total.replace("." , ",");
    console.log(total);
    document.querySelector("#order #totalPrice").innerHTML = "R$ " + total;
}

function cancel(){
    const confirmationScreen = document.querySelector("#confirmationScreen");
    confirmationScreen.classList.add("hidden");
}

function finishOrder(){
    const clientName = prompt("Qual o seu nome ?");
    const clientAdress = prompt("Insira seu endereço completo:");

    const message = `Olá, gostaria de fazer o pedido:
    - Prato: ${dishName}
    - Bebida: ${drinkName}
    - Sobremesa: ${dessertName}
    Total: R$ ${total}
    Para ser entregue à ${clientName} em ${clientAdress}`

    const codedMessage = encodeURIComponent(message);

    const whatsappLink = `https://wa.me/${phoneNumber}?text=${codedMessage}`

    window.open(whatsappLink, '_blank').focus();
}