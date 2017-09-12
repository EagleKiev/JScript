//В базовом языке JavaScript имеется конструктор Date() для создания объектов, представляющих дату и время.
// Эти объекты Date обладают методами для выполнения простых вычислений с участием дат. Объект Date не является
// фундаментальным типом данных, как числа. Этот раздел представляет собой краткое пособие по работе с датами.
// Полное описание можно найти в справочном разделе:

var then = new Date(2010, 0, 1);		        //Первый день первого месяца 2010 года
var later = new Date(2010, 0, 1, 17, 10, 30); 	//Та же дата, в 17:10:30 локального времени
var now = new Date() 				            //Текущие дата и время
var elapsed = now - then; 			            //Разность дат: интервал в миллисекундах
later.getFullYear()                           	//=> 2010
later.getMonth()                              	//=> 0: счет месяцев начинается с нуля
later.getDate()                               	//=> 1: счет дней начинается с единицы
later.getDay()                                	//=> 5: день недели. 0 - воскр., 5 - пятн.
later.getHours()                             	//=> 17: 17 часов локального времени
later.getUTCHours()                           	//часы по UTC; зависит от часового пояса
later.toString()                              	//=> "Fri Jan 01 2010 17:10:30 GMT+0300"
later.toUTCString()                           	//=> "Fri, 01 Jan 2010 14:10:30 GMT"
later.toLocaleDateString()                    	//=> "1 Январь 2010 г."
later.toLocaleTimeString()                    	//=> "17:10:30"
later.toISOString()                           	//=> "2010-01-01T14:10:30.000Z"


console.log(later.getFullYear())
