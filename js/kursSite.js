"use strict";

let now = new Date();

function kursDollar(x,y) {
    console.log("");
    console.log("Курс Доллара на " + now.toLocaleDateString() + " ---> " + (x / y).toFixed(9));
    //console.log(Math.round((x / y)*1000000)/1000000);
    console.log("");

}

function kursEuro(x,y) {
    console.log("");
    console.log("Курс Евро на " + now.toLocaleDateString() + " ---> "+ (x / y).toFixed(9));
    //console.log(Math.round((x / y)*1000000)/1000000);
    console.log("");

}

kursDollar(1,26.5);
kursEuro(1,31.4);