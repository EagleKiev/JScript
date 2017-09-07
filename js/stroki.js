//Работа со строками
//Од­ной из встро­ен­ных воз­мож­но­стей Ja­va­Script яв­ля­ет­ся спо­соб­ность кон­ка­те­ни­ро­вать стро­ки. Ес­ли опе­ра­тор + при­ме­ня­ет­ся к чис­лам, они скла­ды­ва­ют­ся, а ес­ли к стро­кам – они объ­еди­ня­ют­ся, при этом вто­рая стро­ка до­бав­ля­ет­ся в ко­нец пер­вой. На­при­мер:
msg = "Hello, " + "world";  // По­лу­ча­ет­ся стро­ка "Hello, world"
greeting = "Доб­ро по­жа­ло­вать на мою до­маш­нюю стра­ни­цу," + " " + name;

//Для оп­ре­де­ле­ния дли­ны стро­ки – ко­ли­че­ст­ва со­дер­жа­щих­ся в  ней 16-би­тных зна­че­ний – ис­поль­зу­ет­ся свой­ст­во стро­ки length. На­при­мер, дли­ну стро­ки s мож­но по­лу­чить сле­дую­щим об­ра­зом:
s.length

//Кро­ме то­го, в до­пол­не­ние к свой­ст­ву length стро­ки име­ют мно­же­ст­во ме­то­дов (как обыч­но, бо­лее пол­ную ин­фор­ма­цию ищи­те в спра­воч­ном раз­де­ле):
var s = "hello, world"      // Нач­нем с то­го же тек­ста.
s.charAt(0)                 // => "h": пер­вый сим­вол.
s.charAt(s.length-1)        // => "d": по­след­ний сим­вол.
s.substring(1,4)            // => "ell": 2-й, 3-й и 4-й сим­во­лы.
s.slice(1,4)                // => "ell": то же са­мое
s.slice(-3)                 // => "rld": по­след­ние 3 сим­во­ла
s.indexOf("l")              // => 2: по­зи­ция пер­во­го сим­во­ла l.
s.lastIndexOf("l")          // => 10: по­зи­ция по­след­не­го сим­во­ла l.
s.indexOf("l", 3)           // => 3: по­зи­ция пер­во­го сим­во­ла "l", сле­дую­ще­го
                            //       за 3 сим­во­лом в стро­ке
s.split(", ")               // => ["hello", "world"] раз­би­ва­ет на под­стро­ки
s.replace("h", "H")         // => "Hello, world": за­ме­ща­ет все вхо­ж­де­ния под­стро­ки
s.toUpperCase()             // => "HELLO, WORLD"

//Не за­бы­вай­те, что стро­ки в Ja­va­Script яв­ля­ют­ся не­из­ме­няе­мы­ми. Та­кие ме­то­ды, как replace() и toUpperCase() воз­вра­ща­ют но­вые стро­ки: они не из­ме­ня­ют стро­ку, от­но­си­тель­но ко­то­рой бы­ли вы­зва­ны.
//В стан­дар­те ECMAScript 5 стро­ки мо­гут ин­тер­пре­ти­ро­вать­ся как мас­си­вы, дос­туп­ные толь­ко для чте­ния, и вме­сто ис­поль­зо­ва­ния ме­то­да charAt() к от­дель­ным сим­во­лам (16-би­тным зна­че­ни­ям) стро­ки мож­но об­ра­щать­ся с по­мо­щью ин­дек­сов в квад­рат­ных скоб­ках:
s = "hello, world";
s[0]           // => "h"
s[s.length-1]  // => "d"



