//Пре­ж­де чем ис­поль­зо­вать пе­ре­мен­ную в Ja­va­Script, ее не­об­хо­ди­мо объ­я­вить. Пе­ре­мен­ные объ­яв­ля­ют­ся с по­мо­щью клю­че­во­го сло­ва var сле­дую­щим об­ра­зом:

var i;
var sum;

//Один раз ис­поль­зо­вав клю­че­вое сло­во var, мож­но объ­я­вить не­сколь­ко пе­ре­мен­ных:

var i, sum;

//Объ­яв­ле­ние пе­ре­мен­ных мож­но со­вме­щать с их ини­циа­ли­за­ци­ей:

var message = "hello";
var i = 0, j = 0, k = 0;

//Ес­ли на­чаль­ное зна­че­ние в ин­ст­рук­ции var не за­да­но, то пе­ре­мен­ная объ­яв­ля­ет­ся, но ее на­чаль­ное зна­че­ние ос­та­ет­ся не­оп­ре­де­лен­ным (undefined), по­ка не бу­дет из­ме­не­но про­грам­мой. Об­ра­ти­те вни­ма­ние, что ин­ст­рук­ция var так­же мо­жет вклю­чать­ся в  цик­лы for и for/in (о ко­то­рых рас­ска­зы­ва­ет­ся в гла­ве 5), что по­зво­ля­ет объ­яв­лять пе­ре­мен­ную цик­ла не­по­сред­ст­вен­но в са­мом цик­ле. На­при­мер:

for(var i = 0; i < 10; i++) console.log(i);
for(var i = 0, j=10; i < 10; i++,j--) console.log(i*j);
for(var p in o) console.log(p);

//Ес­ли вы имее­те опыт ис­поль­зо­ва­ния язы­ков про­грам­ми­ро­ва­ния со ста­ти­че­ски­ми ти­па­ми дан­ных, та­ких как C или Java, то мо­же­те за­ме­тить, что в объ­яв­ле­ни­ях пе­ре­мен­ных в язы­ке Ja­va­Script от­сут­ст­ву­ет объ­яв­ле­ние ти­па. Пе­ре­мен­ные в язы­ке Ja­va­Script мо­гут хра­нить зна­че­ния лю­бых ти­пов. На­при­мер, в Ja­va­Script до­пус­ка­ет­ся при­сво­ить не­ко­то­рой пе­ре­мен­ной чис­ло, а  за­тем этой же пе­ре­мен­ной при­сво­ить стро­ку:

var i = 10;
i = "ten";

//С по­мо­щью ин­ст­рук­ции var мож­но объ­я­вить од­ну и ту же пе­ре­мен­ную не­сколь­ко раз. Ес­ли по­втор­ное объ­яв­ле­ние со­дер­жит ини­циа­ли­за­тор, то оно дей­ст­ву­ет как обыч­ная ин­ст­рук­ция при­сваи­ва­ния. Ес­ли по­пы­тать­ся про­чи­тать зна­че­ние не­объ­яв­лен­ной пе­ре­мен­ной, Ja­va­Script сге­не­ри­ру­ет ошиб­ку. В стро­гом ре­жи­ме, пре­ду­смот­рен­ном стан­дар­том ECMA­Script 5, ошиб­ка так­же воз­бу­жда­ет­ся при по­пыт­ке при­сво­ить зна­че­ние не­объ­яв­лен­ной пе­ре­мен­ной. Од­на­ко ис­то­ри­че­ски и при вы­пол­не­нии не в стро­гом ре­жи­ме, ес­ли при­сво­ить зна­че­ние пе­ре­мен­ной, не объ­яв­лен­ной с по­мо­щью ин­ст­рук­ции var, то Ja­va­Script соз­даст эту пе­ре­мен­ную как свой­ст­во гло­баль­но­го объ­ек­та, и она бу­дет дей­ст­во­вать прак­ти­че­ски так же (но с не­ко­то­ры­ми от­ли­чия­ми, опи­сы­вае­мы­ми в раз­де­ле 3.10.2), как кор­рект­но объ­яв­лен­ная пе­ре­мен­ная. Это оз­на­ча­ет, что гло­баль­ные пе­ре­мен­ные мож­но не объ­яв­лять. Од­на­ко это счи­та­ет­ся дур­ной при­выч­кой и мо­жет явить­ся ис­точ­ни­ком оши­бок, по­это­му все­гда ста­рай­тесь объ­яв­лять свои пе­ре­мен­ные с по­мо­щью var.

