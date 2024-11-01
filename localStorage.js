//get input value
//localStorage.setItem("keyName"), "value", input.value);

//declare variables

//check what page it is before getting id

//bread
if (document.getElementById("bread_addMeals") !== null){
    document.getElementById("bread_addMeals").addEventListener("click",bread);
    document.getElementById("bread_reset").addEventListener("click",breadReset);
}
//cornflakes 
if (document.getElementById("cornflakes_addMeals") !== null){
    document.getElementById("cornflakes_addMeals").addEventListener("click",cornflakes);
    document.getElementById("cornflakes_reset").addEventListener("click", cornflakesReset);

}
//noodles
if (document.getElementById("noodles_addMeals") !== null){
    document.getElementById("noodles_addMeals").addEventListener("click",noodles);
    document.getElementById("noodles_reset").addEventListener("click",noodlesReset);
}
//pasta
if (document.getElementById("pasta_addMeals") !== null){
    document.getElementById("pasta_addMeals").addEventListener("click",pasta);
    document.getElementById("pasta_reset").addEventListener("click",pastaReset);
}
//potato
if (document.getElementById("potato_addMeals") !== null){
    document.getElementById("potato_addMeals").addEventListener("click",potato);
    document.getElementById("potato_reset").addEventListener("click",potatoReset);
}
//rice
if (document.getElementById("rice_addMeals") !== null){
    document.getElementById("rice_addMeals").addEventListener("click",rice);
    document.getElementById("rice_reset").addEventListener("click",riceReset);
}
//cheese
if (document.getElementById("cheese_addMeals") !== null){
    document.getElementById("cheese_addMeals").addEventListener("click",cheese);
    document.getElementById("cheese_reset").addEventListener("click",cheeseReset);
}
//egg
if (document.getElementById("egg_addMeals") !== null){
    document.getElementById("egg_addMeals").addEventListener("click",egg);
    document.getElementById("egg_reset").addEventListener("click",eggReset);
}
//milk
if (document.getElementById("milk_addMeals") !== null){
    document.getElementById("milk_addMeals").addEventListener("click",milk);
    document.getElementById("milk_reset").addEventListener("click",milkReset);
}
//apple
if (document.getElementById("apple_addMeals") !== null){
    document.getElementById("apple_addMeals").addEventListener("click",apple);
    document.getElementById("apple_reset").addEventListener("click",appleReset);
}
//banana
if (document.getElementById("banana_addMeals") !== null){
    document.getElementById("banana_addMeals").addEventListener("click",banana);
    document.getElementById("banana_reset").addEventListener("click",bananaReset);
}
//broccoli
if (document.getElementById("broccoli_addMeals") !== null){
    document.getElementById("broccoli_addMeals").addEventListener("click",broccoli);
    document.getElementById("broccoli_reset").addEventListener("click",broccoliReset);
}
//beef
if (document.getElementById("beef_addMeals") !== null){
    document.getElementById("beef_addMeals").addEventListener("click",beef);
    document.getElementById("beef_reset").addEventListener("click",beefReset);
}
//chicken
if (document.getElementById("chicken_addMeals") !== null){
    document.getElementById("chicken_addMeals").addEventListener("click",chicken);
    document.getElementById("chicken_reset").addEventListener("click",chickenReset);
}
//cod
if (document.getElementById("cod_addMeals") !== null){
    document.getElementById("cod_addMeals").addEventListener("click",cod);
    document.getElementById("cod_reset").addEventListener("click",codReset);
}
//crab
if (document.getElementById("crab_addMeals") !== null){
    document.getElementById("crab_addMeals").addEventListener("click",crab);
    document.getElementById("crab_reset").addEventListener("click",crabReset);
}
//ham
if (document.getElementById("ham_addMeals") !== null){
    document.getElementById("ham_addMeals").addEventListener("click",ham);
    document.getElementById("ham_reset").addEventListener("click",hamReset);
}
//lobster
if (document.getElementById("lobster_addMeals") !== null){
    document.getElementById("lobster_addMeals").addEventListener("click",lobster);
    document.getElementById("lobster_reset").addEventListener("click",lobsterReset);
}

//test
if (document.getElementById("test_addMeals") !== null){
    document.getElementById("test_addMeals").addEventListener("click",test);
    
}

//..................................................bread....................................

function bread(){
    //get type of food size (portion/100g)
    let type = document.getElementById("inputSize").value;
    let amount = document.getElementById("input").value;
    let portionAmount = document.getElementById("portionAmo").textContent;
    let gramAmount = document.getElementById("gramAmo").textContent;
    let calories;
    


    if (type == "portion") { //if portion is selected
        calories = amount * portionAmount; 
        //add to local storage
        localStorage.setItem("bread_calCount", calories);
        document.getElementById("showCal").innerHTML = localStorage.getItem("bread_calCount") + " calories added!";
    } else { //if gram is selected
        calories = amount * gramAmount;
        //add to local storage
        localStorage.setItem("bread_calCount", calories);
        document.getElementById("showCal").innerHTML = localStorage.getItem("bread_calCount") + " calories added!";
    }
}

function breadReset() {
    localStorage.removeItem("bread_calCount");
    document.getElementById("showCal").innerHTML = localStorage.getItem("bread_calCount");
}

//...........................................cornflakes..................................
//on click to add meals
function cornflakes(){
    //get type of food size (portion/100g)
    let type = document.getElementById("inputSize").value;
    let amount = document.getElementById("input").value;
    let portionAmount = document.getElementById("portionAmo").textContent;
    let gramAmount = document.getElementById("gramAmo").textContent;
    let calories;
    


    if (type == "portion") { //if portion is selected
        calories = amount * portionAmount; 
        //add to local storage
        localStorage.setItem("cornflakes_calCount", calories);
        document.getElementById("showCal").innerHTML = localStorage.getItem("cornflakes_calCount") + " calories added!";
    } else { //if gram is selected
        calories = amount * gramAmount;
        //add to local storage
        localStorage.setItem("cornflakes_calCount", calories);
        document.getElementById("showCal").innerHTML = localStorage.getItem("cornflakes_calCount") + " calories added!";
    }
}

function cornflakesReset() {
    localStorage.removeItem("cornflakes_calCount");
    document.getElementById("showCal").innerHTML = localStorage.getItem("cornflakes_calCount");
}

//noodles

function noodles(){
    //get type of food size (portion/100g)
    let type = document.getElementById("inputSize").value;
    let amount = document.getElementById("input").value;
    let portionAmount = document.getElementById("portionAmo").textContent;
    let gramAmount = document.getElementById("gramAmo").textContent;
    let calories;
    


    if (type == "portion") { //if portion is selected
        calories = amount * portionAmount; 
        //add to local storage
        localStorage.setItem("noodles_calCount", calories);
        document.getElementById("showCal").innerHTML = localStorage.getItem("noodles_calCount") + " calories added!";
    } else { //if gram is selected
        calories = amount * gramAmount;
        //add to local storage
        localStorage.setItem("noodles_calCount", calories);
        document.getElementById("showCal").innerHTML = localStorage.getItem("noodles_calCount") + " calories added!";
    }
}

function noodlesReset() {
    localStorage.removeItem("noodles_calCount");
    document.getElementById("showCal").innerHTML = localStorage.getItem("noodles_calCount");
}

//...........................................pasta.......................................

function pasta(){
    //get type of food size (portion/100g)
    let type = document.getElementById("inputSize").value;
    let amount = document.getElementById("input").value;
    let portionAmount = document.getElementById("portionAmo").textContent;
    let gramAmount = document.getElementById("gramAmo").textContent;
    let calories;
    


    if (type == "portion") { //if portion is selected
        calories = amount * portionAmount; 
        //add to local storage
        localStorage.setItem("pasta_calCount", calories);
        document.getElementById("showCal").innerHTML = localStorage.getItem("pasta_calCount") + " calories added!";
    } else { //if gram is selected
        calories = amount * gramAmount;
        //add to local storage
        localStorage.setItem("pasta_calCount", calories);
        document.getElementById("showCal").innerHTML = localStorage.getItem("pasta_calCount") + " calories added!";
    }
}

function pastaReset() {
    localStorage.removeItem("pasta_calCount");
    document.getElementById("showCal").innerHTML = localStorage.getItem("pasta_calCount");
}

//...................................................potato....................................

function potato(){
    //get type of food size (portion/100g)
    let type = document.getElementById("inputSize").value;
    let amount = document.getElementById("input").value;
    let portionAmount = document.getElementById("portionAmo").textContent;
    let gramAmount = document.getElementById("gramAmo").textContent;
    let calories;
    


    if (type == "portion") { //if portion is selected
        calories = amount * portionAmount; 
        //add to local storage
        localStorage.setItem("potato_calCount", calories);
        document.getElementById("showCal").innerHTML = localStorage.getItem("potato_calCount") + " calories added!";
    } else { //if gram is selected
        calories = amount * gramAmount;
        //add to local storage
        localStorage.setItem("potato_calCount", calories);
        document.getElementById("showCal").innerHTML = localStorage.getItem("potato_calCount") + " calories added!";
    }
}

function potatoReset() {
    localStorage.removeItem("potato_calCount");
    document.getElementById("showCal").innerHTML = localStorage.getItem("potato_calCount");
}

//..................................................rice....................................

function rice(){
    //get type of food size (portion/100g)
    let type = document.getElementById("inputSize").value;
    let amount = document.getElementById("input").value;
    let portionAmount = document.getElementById("portionAmo").textContent;
    let gramAmount = document.getElementById("gramAmo").textContent;
    let calories;
    


    if (type == "portion") { //if portion is selected
        calories = amount * portionAmount; 
        //add to local storage
        localStorage.setItem("rice_calCount", calories);
        document.getElementById("showCal").innerHTML = localStorage.getItem("rice_calCount") + " calories added!";
    } else { //if gram is selected
        calories = amount * gramAmount;
        //add to local storage
        localStorage.setItem("rice_calCount", calories);
        document.getElementById("showCal").innerHTML = localStorage.getItem("rice_calCount") + " calories added!";
    }
}

function riceReset() {
    localStorage.removeItem("rice_calCount");
    document.getElementById("showCal").innerHTML = localStorage.getItem("rice_calCount");
}

//..................................................cheese....................................
function cheese(){
    //get type of food size (portion/100g)
    let type = document.getElementById("inputSize").value;
    let amount = document.getElementById("input").value;
    let portionAmount = document.getElementById("portionAmo").textContent;
    let gramAmount = document.getElementById("gramAmo").textContent;
    let calories;
    


    if (type == "portion") { //if portion is selected
        calories = amount * portionAmount; 
        //add to local storage
        localStorage.setItem("cheese_calCount", calories);
        document.getElementById("showCal").innerHTML = localStorage.getItem("cheese_calCount") + " calories added!";
    } else { //if gram is selected
        calories = amount * gramAmount;
        //add to local storage
        localStorage.setItem("cheese_calCount", calories);
        document.getElementById("showCal").innerHTML = localStorage.getItem("cheese_calCount") + " calories added!";
    }
}

function cheeseReset() {
    localStorage.removeItem("cheese_calCount");
    document.getElementById("showCal").innerHTML = localStorage.getItem("cheese_calCount");
}
//..................................................egg....................................

function egg(){
    //get type of food size (portion/100g)
    let type = document.getElementById("inputSize").value;
    let amount = document.getElementById("input").value;
    let portionAmount = document.getElementById("portionAmo").textContent;
    let gramAmount = document.getElementById("gramAmo").textContent;
    let calories;
    


    if (type == "portion") { //if portion is selected
        calories = amount * portionAmount; 
        //add to local storage
        localStorage.setItem("egg_calCount", calories);
        document.getElementById("showCal").innerHTML = localStorage.getItem("egg_calCount") + " calories added!";
    } else { //if gram is selected
        calories = amount * gramAmount;
        //add to local storage
        localStorage.setItem("egg_calCount", calories);
        document.getElementById("showCal").innerHTML = localStorage.getItem("egg_calCount") + " calories added!";
    }
}

function eggReset() {
    localStorage.removeItem("egg_calCount");
    document.getElementById("showCal").innerHTML = localStorage.getItem("egg_calCount");
}
//..................................................milk....................................

function milk(){
    //get type of food size (portion/100g)
    let type = document.getElementById("inputSize").value;
    let amount = document.getElementById("input").value;
    let portionAmount = document.getElementById("portionAmo").textContent;
    let gramAmount = document.getElementById("gramAmo").textContent;
    let calories;
    


    if (type == "portion") { //if portion is selected
        calories = amount * portionAmount; 
        //add to local storage
        localStorage.setItem("milk_calCount", calories);
        document.getElementById("showCal").innerHTML = localStorage.getItem("milk_calCount") + " calories added!";
    } else { //if gram is selected
        calories = amount * gramAmount;
        //add to local storage
        localStorage.setItem("milk_calCount", calories);
        document.getElementById("showCal").innerHTML = localStorage.getItem("milk_calCount") + " calories added!";
    }
}

function milkReset() {
    localStorage.removeItem("milk_calCount");
    document.getElementById("showCal").innerHTML = localStorage.getItem("milk_calCount");
}
//..................................................apple....................................

function apple(){
    //get type of food size (portion/100g)
    let type = document.getElementById("inputSize").value;
    let amount = document.getElementById("input").value;
    let portionAmount = document.getElementById("portionAmo").textContent;
    let gramAmount = document.getElementById("gramAmo").textContent;
    let calories;
    


    if (type == "portion") { //if portion is selected
        calories = amount * portionAmount; 
        //add to local storage
        localStorage.setItem("apple_calCount", calories);
        document.getElementById("showCal").innerHTML = localStorage.getItem("apple_calCount") + " calories added!";
    } else { //if gram is selected
        calories = amount * gramAmount;
        //add to local storage
        localStorage.setItem("apple_calCount", calories);
        document.getElementById("showCal").innerHTML = localStorage.getItem("apple_calCount") + " calories added!";
    }
}

function appleReset() {
    localStorage.removeItem("apple_calCount");
    document.getElementById("showCal").innerHTML = localStorage.getItem("apple_calCount");
}

//..................................................banana....................................

function banana(){
    //get type of food size (portion/100g)
    let type = document.getElementById("inputSize").value;
    let amount = document.getElementById("input").value;
    let portionAmount = document.getElementById("portionAmo").textContent;
    let gramAmount = document.getElementById("gramAmo").textContent;
    let calories;
    


    if (type == "portion") { //if portion is selected
        calories = amount * portionAmount; 
        //add to local storage
        localStorage.setItem("banana_calCount", calories);
        document.getElementById("showCal").innerHTML = localStorage.getItem("banana_calCount") + " calories added!";
    } else { //if gram is selected
        calories = amount * gramAmount;
        //add to local storage
        localStorage.setItem("banana_calCount", calories);
        document.getElementById("showCal").innerHTML = localStorage.getItem("banana_calCount") + " calories added!";
    }
}

function bananaReset() {
    localStorage.removeItem("banana_calCount");
    document.getElementById("showCal").innerHTML = localStorage.getItem("banana_calCount");
}
//..................................................broccoli....................................

function broccoli(){
    //get type of food size (portion/100g)
    let type = document.getElementById("inputSize").value;
    let amount = document.getElementById("input").value;
    let portionAmount = document.getElementById("portionAmo").textContent;
    let gramAmount = document.getElementById("gramAmo").textContent;
    let calories;
    


    if (type == "portion") { //if portion is selected
        calories = amount * portionAmount; 
        //add to local storage
        localStorage.setItem("broccoli_calCount", calories);
        document.getElementById("showCal").innerHTML = localStorage.getItem("broccoli_calCount") + " calories added!";
    } else { //if gram is selected
        calories = amount * gramAmount;
        //add to local storage
        localStorage.setItem("broccoli_calCount", calories);
        document.getElementById("showCal").innerHTML = localStorage.getItem("broccoli_calCount") + " calories added!";
    }
}

function broccoliReset() {
    localStorage.removeItem("broccoli_calCount");
    document.getElementById("showCal").innerHTML = localStorage.getItem("broccoli_calCount");
}
//..................................................beef....................................

function beef(){
    //get type of food size (portion/100g)
    let type = document.getElementById("inputSize").value;
    let amount = document.getElementById("input").value;
    let portionAmount = document.getElementById("portionAmo").textContent;
    let gramAmount = document.getElementById("gramAmo").textContent;
    let calories;
    


    if (type == "portion") { //if portion is selected
        calories = amount * portionAmount; 
        //add to local storage
        localStorage.setItem("beef_calCount", calories);
        document.getElementById("showCal").innerHTML = localStorage.getItem("beef_calCount") + " calories added!";
    } else { //if gram is selected
        calories = amount * gramAmount;
        //add to local storage
        localStorage.setItem("beef_calCount", calories);
        document.getElementById("showCal").innerHTML = localStorage.getItem("beef_calCount") + " calories added!";
    }
}

function beefReset() {
    localStorage.removeItem("beef_calCount");
    document.getElementById("showCal").innerHTML = localStorage.getItem("beef_calCount");
}
//..................................................chicken....................................

function chicken(){
    //get type of food size (portion/100g)
    let type = document.getElementById("inputSize").value;
    let amount = document.getElementById("input").value;
    let portionAmount = document.getElementById("portionAmo").textContent;
    let gramAmount = document.getElementById("gramAmo").textContent;
    let calories;
    


    if (type == "portion") { //if portion is selected
        calories = amount * portionAmount; 
        //add to local storage
        localStorage.setItem("chicken_calCount", calories);
        document.getElementById("showCal").innerHTML = localStorage.getItem("chicken_calCount") + " calories added!";
    } else { //if gram is selected
        calories = amount * gramAmount;
        //add to local storage
        localStorage.setItem("chicken_calCount", calories);
        document.getElementById("showCal").innerHTML = localStorage.getItem("chicken_calCount") + " calories added!";
    }
}

function chickenReset() {
    localStorage.removeItem("chicken_calCount");
    document.getElementById("showCal").innerHTML = localStorage.getItem("chicken_calCount");
}
//..................................................cod....................................

function cod(){
    //get type of food size (portion/100g)
    let type = document.getElementById("inputSize").value;
    let amount = document.getElementById("input").value;
    let portionAmount = document.getElementById("portionAmo").textContent;
    let gramAmount = document.getElementById("gramAmo").textContent;
    let calories;
    


    if (type == "portion") { //if portion is selected
        calories = amount * portionAmount; 
        //add to local storage
        localStorage.setItem("cod_calCount", calories);
        document.getElementById("showCal").innerHTML = localStorage.getItem("cod_calCount") + " calories added!";
    } else { //if gram is selected
        calories = amount * gramAmount;
        //add to local storage
        localStorage.setItem("cod_calCount", calories);
        document.getElementById("showCal").innerHTML = localStorage.getItem("cod_calCount") + " calories added!";
    }
}

function codReset() {
    localStorage.removeItem("cod_calCount");
    document.getElementById("showCal").innerHTML = localStorage.getItem("cod_calCount");
}
//..................................................crab....................................

function crab(){
    //get type of food size (portion/100g)
    let type = document.getElementById("inputSize").value;
    let amount = document.getElementById("input").value;
    let portionAmount = document.getElementById("portionAmo").textContent;
    let gramAmount = document.getElementById("gramAmo").textContent;
    let calories;
    


    if (type == "portion") { //if portion is selected
        calories = amount * portionAmount; 
        //add to local storage
        localStorage.setItem("crab_calCount", calories);
        document.getElementById("showCal").innerHTML = localStorage.getItem("crab_calCount") + " calories added!";
    } else { //if gram is selected
        calories = amount * gramAmount;
        //add to local storage
        localStorage.setItem("crab_calCount", calories);
        document.getElementById("showCal").innerHTML = localStorage.getItem("crab_calCount") + " calories added!";
    }
}

function crabReset() {
    localStorage.removeItem("crab_calCount");
    document.getElementById("showCal").innerHTML = localStorage.getItem("crab_calCount");
}
//..................................................ham....................................

function ham(){
    //get type of food size (portion/100g)
    let type = document.getElementById("inputSize").value;
    let amount = document.getElementById("input").value;
    let portionAmount = document.getElementById("portionAmo").textContent;
    let gramAmount = document.getElementById("gramAmo").textContent;
    let calories;
    


    if (type == "portion") { //if portion is selected
        calories = amount * portionAmount; 
        //add to local storage
        localStorage.setItem("ham_calCount", calories);
        document.getElementById("showCal").innerHTML = localStorage.getItem("ham_calCount") + " calories added!";
    } else { //if gram is selected
        calories = amount * gramAmount;
        //add to local storage
        localStorage.setItem("ham_calCount", calories);
        document.getElementById("showCal").innerHTML = localStorage.getItem("ham_calCount") + " calories added!";
    }
}

function hamReset() {
    localStorage.removeItem("ham_calCount");
    document.getElementById("showCal").innerHTML = localStorage.getItem("ham_calCount");
}

//..................................................lobster....................................



function lobster(){
    //get type of food size (portion/100g)
    let type = document.getElementById("inputSize").value;
    let amount = document.getElementById("input").value;
    let portionAmount = document.getElementById("portionAmo").textContent;
    let gramAmount = document.getElementById("gramAmo").textContent;
    let calories;
    


    if (type == "portion") { //if portion is selected
        calories = amount * portionAmount; 
        //add to local storage
        localStorage.setItem("lobster_calCount", calories);
        document.getElementById("showCal").innerHTML = localStorage.getItem("lobster_calCount") + " calories added!";
        lob = localStorage.getItem("lobster_calCount");
        
    } else { //if gram is selected
        calories = amount * gramAmount;
        //add to local storage
        localStorage.setItem("lobster_calCount", calories);
        document.getElementById("showCal").innerHTML = localStorage.getItem("lobster_calCount") + " calories added!";
        lob = localStorage.getItem("lobster_calCount");
        
    }
}

function lobsterReset() {
    localStorage.removeItem("lobster_calCount");
    document.getElementById("showCal").innerHTML = localStorage.getItem("lobster_calCount");
    lob = ("0");
    

}

//.................................calorie count page.................................

//declare local storage values as integers (0 if NaN)

//cereals
let breadCal = parseInt(localStorage.getItem("bread_calCount")) || 0;
let cornflakesCal = parseInt(localStorage.getItem("cornflakes_calCount")) || 0;
let noodlesCal = parseInt(localStorage.getItem("noodles_calCount")) || 0;
let pastaCal = parseInt(localStorage.getItem("pasta_calCount")) || 0;
let potatoCal = parseInt(localStorage.getItem("potato_calCount")) || 0;
let riceCal = parseInt(localStorage.getItem("rice_calCount")) || 0;
//dairy
let cheeseCal = parseInt(localStorage.getItem("cheese_calCount")) || 0;
let eggCal = parseInt(localStorage.getItem("egg_calCount")) || 0;
let milkCal = parseInt(localStorage.getItem("milk_calCount")) || 0;
//fruit
let appleCal = parseInt(localStorage.getItem("apple_calCount")) || 0;
let bananaCal = parseInt(localStorage.getItem("banana_calCount")) || 0;
let broccoliCal = parseInt(localStorage.getItem("broccoli_calCount")) || 0;
//meat
let beefCal = parseInt(localStorage.getItem("beed_calCount")) || 0;
let chickenCal = parseInt(localStorage.getItem("chicken_calCount")) || 0;
let codCal = parseInt(localStorage.getItem("cod_calCount")) || 0;
let crabCal = parseInt(localStorage.getItem("crab_calCount")) || 0;
let hamCal = parseInt(localStorage.getItem("ham_calCount")) || 0;
let lobsterCal = parseInt(localStorage.getItem("lobster_calCount")) || 0;

//...........................reset all calories...........................


function resetAll() {
    localStorage.clear();
    total.innerHTML = 0;
}

//add total calories

let totalCal = (breadCal + cornflakesCal + noodlesCal + pastaCal + potatoCal + riceCal +
    cheeseCal + eggCal + milkCal + appleCal + bananaCal + broccoliCal + 
    beefCal + chickenCal + codCal + crabCal + hamCal + lobsterCal);

document.getElementById("total").innerHTML = totalCal;


