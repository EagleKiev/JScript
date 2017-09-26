"use strict";

let now = new Date();

function kursEuro(x,y) {
    console.log("");
    console.log("");
    console.log("Курс евро на " + now.toLocaleDateString() + " ---> " + (x / y).toFixed(8));
    // console.log(Math.round((x / y)*1000000000000)/1000000000000);
}

function kursDollar(x,y) {
    console.log("___________________________________________");
    console.log("");
    console.log("Курс $доллара на " + now.toLocaleDateString() + " ---> " + (x / y).toFixed(8));
    // console.log(Math.round((x / y)*1000000)/1000000);
    console.log("");
    console.log("");
    console.log("");
}

kursEuro(1,31.4);
kursDollar(1,26.5);