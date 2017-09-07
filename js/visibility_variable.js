//Область видимости переменной 

//Об­ласть ви­ди­мо­сти (scope) пе­ре­мен­ной – это та часть про­грам­мы, для ко­то­рой эта пе­ре­мен­ная оп­ре­де­ле­на. Гло­баль­ная пе­ре­мен­ная име­ет гло­баль­ную об­ласть ви­ди­мо­сти – она оп­ре­де­ле­на для всей Ja­va­Script-про­грам­мы. В то же вре­мя пе­ре­мен­ные, объ­яв­лен­ные внут­ри функ­ции, оп­ре­де­ле­ны толь­ко в ее те­ле. Они на­зы­ва­ют­ся ло­каль­ны­ми и  име­ют ло­каль­ную об­ласть ви­ди­мо­сти. Па­ра­мет­ры функ­ций так­же счи­та­ют­ся ло­каль­ны­ми пе­ре­мен­ны­ми, оп­ре­де­лен­ны­ми толь­ко в те­ле этой функ­ции.

//Внут­ри те­ла функ­ции ло­каль­ная пе­ре­мен­ная име­ет пре­иму­ще­ст­во пе­ред гло­баль­ной пе­ре­мен­ной с тем же име­нем. Ес­ли объ­я­вить ло­каль­ную пе­ре­мен­ную или па­ра­метр функ­ции с тем же име­нем, что у гло­баль­ной пе­ре­мен­ной, то фак­ти­че­ски гло­баль­ная пе­ре­мен­ная бу­дет скры­та:

var scope = "global";               // Объ­яв­ле­ние гло­баль­ной пе­ре­мен­ной
function checkscope() {
    var scope = "local";            // Объ­яв­ле­ние ло­каль­ной пе­ре­мен­ной с тем же име­нем
    return scope;                   // Вер­нет ло­каль­ное зна­че­ние, а не гло­баль­ное
}
checkscope()                        // => "local"

//Объ­яв­ляя пе­ре­мен­ные с гло­баль­ной об­ла­стью ви­ди­мо­сти, ин­ст­рук­цию var мож­но опус­тить, но при объ­яв­ле­нии ло­каль­ных пе­ре­мен­ных все­гда сле­ду­ет ис­поль­зо­вать ин­ст­рук­цию var. По­смот­ри­те, что по­лу­ча­ет­ся, ес­ли это­го не сде­лать:

scope = "global";                   // Объ­яв­ле­ние гло­баль­ной пе­ре­мен­ной, да­же без var.
function checkscope2() {
    scope = "local";                // Ой! Мы из­ме­ни­ли гло­баль­ную пе­ре­мен­ную.
    myscope = "local";              // Не­яв­но объ­яв­ля­ет­ся но­вая глоб. пе­ре­мен­ная.
    return [scope, myscope];        // Вер­нуть два зна­че­ния.
}
checkscope2()            // => ["local", "local"]: име­ет­ся по­боч­ный эф­фект!
scope                    // => "local": гло­баль­ная пе­ре­мен­ная из­ме­ни­лась.
myscope                  // => "local": на­ру­шен по­ря­док в гло­баль­ном про­стран­ст­ве имен.

//Оп­ре­де­ле­ния функ­ций мо­гут быть вло­жен­ны­ми. Ка­ж­дая функ­ция име­ет соб­ст­вен­ную ло­каль­ную об­ласть ви­ди­мо­сти, по­это­му мо­жет быть не­сколь­ко вло­жен­ных уров­ней ло­каль­ных об­лас­тей ви­ди­мо­сти. На­при­мер:

var scope = "global scope";         // Гло­баль­ная пе­ре­мен­ная
function checkscope() {
    var scope = "local scope";      // Ло­каль­ная пе­ре­мен­ная
    function nested() {
        var scope = "nested scope"; // Вло­жен­ная об­ласть ви­ди­мо­сти ло­каль­ных пе­ре­мен­ных
        return scope;               // Вер­нет зна­че­ние этой пе­ре­мен­ной scope
    }
    return nested();
}
checkscope()                        // => "nested scope"
