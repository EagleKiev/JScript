'use strict';

let a = 50;//число
let a1 = 150;//число
let a2 =350;//число
let b = 'Между первой и второй\nсимвол будет небольшой';//строка
let c = null;//число
let d = true;//Булевские величины
let e;//непонятно что
let f = {};//число
let g = [];//число
let h = {
    name: "Vasya", who: 9, adadadad: null
};
let form = {
    name: 'Alexey',
    fam: 'Ivanov'
    };

let k = 2.998e8;//степень (Это 2.998 × 10^8 = 299800000.)
let k1 = 100 + 4 * 11;//математика
let l = 0/0;//«not a number» (не число)
//let k = 2.998e8;//степень (Это 2.998 × 10^8 = 299800000.)
//let k = 2.998e8;//степень (Это 2.998 × 10^8 = 299800000.)
//let k = 2.998e8;//степень (Это 2.998 × 10^8 = 299800000.)
//let k = 2.998e8;//степень (Это 2.998 × 10^8 = 299800000.)
//let k = 2.998e8;//степень (Это 2.998 × 10^8 = 299800000.)
//let k = 2.998e8;//степень (Это 2.998 × 10^8 = 299800000.)
//let k = 2.998e8;//степень (Это 2.998 × 10^8 = 299800000.)
//let k = 2.998e8;//степень (Это 2.998 × 10^8 = 299800000.)
//let k = 2.998e8;//степень (Это 2.998 × 10^8 = 299800000.)
//let k = 2.998e8;//степень (Это 2.998 × 10^8 = 299800000.)
//let k = 2.998e8;//степень (Это 2.998 × 10^8 = 299800000.)

function range(start, end, step) {
    if (step == null) step = 1;
    var array = [];

    if (step > 0) {
        for (var i = start; i <= end; i += step)
            array.push(i);
    } else {
        for (var i = start; i >= end; i += step)
            array.push(i);
    }
    return array;
}

function sum(array) {
    var total = 0;
    for (var i = 0; i < array.length; i++)
        total += array[i];
    return total;
}



g.push(a+a1+a2);
g.push(125);
g.push(75);
-
//console.dir({ form });
-
console.log(typeof(a));

console.log(b);
console.log(typeof(b));

console.log(typeof(c));
console.log(typeof(d));
console.log(typeof(e));
console.log(typeof(f));
console.log(typeof(g));
-
console.log(g)
-
console.log('h = ', h, typeof(h)  );
-
console.log('a == ', a,'type == ', typeof(a));
console.log('b == ', typeof(b));
-
console.log("Арбуз" <  "Яблоко")//сравнение
// → true

console.log(typeof 4.5)
// → number
-
console.log(typeof "x")
// → string

console.log(- (10 - 2))
// → -8

console.log(3 > 2)
// → true

console.log(3 < 2)
// → false

console.log(k)
console.log("Хочется" != "Колется")
// → true
console.log("Хочется" == "Хочется")
// → true
console.log(k1)

console.log(l)
console.log(typeof(l))

console.log(NaN == NaN)
// → false
console.log(true && false)//Оператор && — логическое «и».
// → false
console.log(true && true)//Оператор && — логическое «и».
// → true
console.log(1 + 1 == 2 && 10 * 10 > 50)
// → true
console.log(false || true)//логическое «или». Выдаёт true, если одна из величин true
// → true
console.log(false || false)//логическое «или». Выдаёт true, если одна из величин true
// → false
console.log(8 * null)
// → 0
console.log("5" - 1)
// → 4
console.log("5" + 1)
// → 51
console.log("пять" * 2)
// → NaN
console.log(false == 0)
// → true
console.log(sum(range(1, 10)));
// → 55
for (let line = "#"; line.length < 68; line += "#")
    console.log(line);



//console.log(k)

//console.log(k)

//console.log(k)

//console.log(k)

//console.log(k)

//console.log(k)

//console.log(k)

//console.log(k)

//console.log(k)

//console.log(k)

//console.log(k)

//console.log(k)

//console.log(k)

//console.log(k)