var x = 3;
switch (x) {
	case 1:
		console.log(x);
		break;
	case 2:
        console.log(x+2);
		break;
	default:
        console.log(x+5);
}

var color = "yellow";
switch (color) {
    case "blue":
        console.log("This is blue");
        break;
    case "red":
        console.log("This is red");
        break;
    case "green":
        console.log("This is green");
        break;
    case "orange":
        console.log("This is orange");
        break;
    default:
        console.log("Color not found");
}

console.log("")

for (i=1; i<=5; i++) {
    console.log(i + "<br />");
}

console.log("")

for (i=1, text=""; i<=5; i++) {
    text = i;
    console.log(i + "<br />");
}

console.log("")
var i = 0;
for (; i < 10; ) {
    console.log(i);
    i++;
}
console.log("")
var x = 0; //vivesti vse chetnie chisla ot 0 do 20
for (; x<=20; x+=2 ) {
    console.log(x);//vivesti vse chetnie chisla ot 0 do 20

}

console.log("")
var i = 0; //vivesti vse chisla ot 0 do 10
while (i<=10) {
    console.log(i+" ");
    i++
}
console.log("")

var i = 20;//vivesti vse chisla ot 20 do 25
do {
    console.log(i + " ");
    i++;
}
while (i<=25);

console.log("")

for (i = 0; i<= 10; i++) {//kak tolko i budet ravno 5 - vihod iz cikla
    if (i == 5) {
        break;
    }
    console.log(i + " ");
    }

console.log("")

for (i = 0; i<= 10; i++) {//kak tolko i budet ravno 5 - ostanavlivaet odnu iteraciyu i prodolzhaet so sled iteracii
    if (i == 5) {
        continue;
    }
    console.log(i + " ");
}

console.log("")

var sum = 0;
for (i = 4; i< 8; i++) {
    if (i == 6) {
        continue;
    }
    sum += i;
}
    console.log(sum + " ");

console.log("")

var x = 0;
while (x<6) {
    x++;
}
console.log(x);