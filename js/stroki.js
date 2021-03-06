/*//Работа со строками
//Одной из встроенных возможностей JavaScript является способность конкатенировать строки. Если оператор +
//применяется к числам, они складываются, а если к строкам – они объединяются, при этом вторая строка добавляется
//в конец первой. Например:

msg = "Hello, " + "world";  // Получается строка "Hello, world"
greeting = "Добро пожаловать на мою домашнюю страницу," + " " + name;

//Для определения длины строки – количества содержащихся в ней 16-битных значений – используется свойство строки
//length. Например, длину строки s можно получить следующим образом:

s.length

//Кроме того, в дополнение к свойству length строки имеют множество методов (как обычно, более полную информацию
//ищите в справочном разделе):

var s = "hello, world"      // Начнем с того же текста.
s.charAt(0)                 // => "h": первый символ.
s.charAt(s.length-1)        // => "d": последний символ.
s.substring(1,4)            // => "ell": 2-й, 3-й и 4-й символы.
s.slice(1,4)                // => "ell": то же самое
s.slice(-3)                 // => "rld": последние 3 символа
s.indexOf("l")              // => 2: позиция первого символа l.
s.lastIndexOf("l")          // => 10: позиция последнего символа l.
s.indexOf("l", 3)           // => 3: позиция первого символа "l", следующего
                            //       за 3 символом в строке
s.split(", ")               // => ["hello", "world"] разбивает на подстроки
s.replace("h", "H")         // => "Hello, world": замещает все вхождения подстроки
s.toUpperCase()             // => "HELLO, WORLD"

//Не забывайте, что строки в JavaScript являются неизменяемыми. Такие методы, как replace() и toUpperCase()
//возвращают новые строки: они не изменяют строку, относительно которой были вызваны.

//В стандарте ECMAScript 5 строки могут интерпретироваться как массивы, доступные только для чтения, и вместо
//использования метода charAt() к отдельным символам (16-битным значениям) строки можно обращаться с помощью
//индексов в квадратных скобках:

s = "hello, world";
s[0]           // => "h"
s[s.length-1]  // => "d"*/

console.log("Some string");
console.log('Some string1');

console.log('Some "Long" string');
console.log("Some 'Long' string");

console.log("hello Eagleeeeeeeeeeeee".length);
console.log("hello \Eagleee \eeeee \eeeee");
console.log("hello \nEagleee \neeeee \neeeee");
console.log("hello \n\tEagleee \n\t\teeeee \n\t\t\teeeee");
console.log("hello \\ Eagleee \"eeeee\" eeeee");

var string  = "Privet i chto tipa tam..."
console.log(string.charAt(0));
console.log(string.charAt(string.length - 1));
console.log(string.substring(5));
console.log(string.substring(10,17));
console.log(string.slice(-10));
console.log(string.substr(14,7));
console.log(string.indexOf("tam"));
console.log(string.lastIndexOf("tam"));
console.log(string.replace("chto","CHTO!!!"));

console.log("");
string = string.replace("chto","CHTO!!!");
console.log(string);

console.log("");
console.log(string.split(" "));

console.log("");
console.log(string.toUpperCase());
console.log(string.toLocaleLowerCase());

console.log(string[7])