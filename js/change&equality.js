//Бла­го­да­ря гиб­ко­сти пре­об­ра­зо­ва­ний ти­пов в  Ja­va­Script опе­ра­тор ра­вен­ст­ва == так­же гиб­ко оп­ре­де­ля­ет ра­вен­ст­во зна­че­ний. На­при­мер, все сле­дую­щие срав­не­ния воз­вра­ща­ют true:

null == undefined //Эти два зна­че­ния счи­та­ют­ся рав­ны­ми.
"0" == 0          //Пе­ред срав­не­ни­ем стро­ка пре­об­ра­зу­ет­ся в чис­ло.
0 == false        //Пе­ред срав­не­ни­ем ло­гич. зна­че­ние пре­об­ра­зу­ет­ся в чис­ло.
"0" == false      //Пе­ред срав­не­ни­ем оба опе­ран­да пре­об­ра­зу­ют­ся в чис­ла.

//В раз­де­ле чет­ко опи­сы­ва­ет­ся, ка­кие пре­об­ра­зо­ва­ния вы­пол­ня­ет опе­ра­тор ==, что­бы оп­ре­де­лить, яв­ля­ют­ся ли два зна­че­ния рав­ны­ми, и в этом же раз­де­ле опи­сы­ва­ет­ся опе­ра­тор иден­тич­но­сти ===, ко­то­рый не вы­пол­ня­ет ни­ка­ких пре­об­ра­зо­ва­ний пе­ред срав­не­ни­ем.
//Имей­те в  ви­ду, что воз­мож­ность пре­об­ра­зо­ва­ния од­но­го зна­че­ния в  дру­гое не оз­на­ча­ет ра­вен­ст­ва этих двух зна­че­ний. Ес­ли, на­при­мер, в ло­ги­че­ском кон­тек­сте ис­поль­зу­ет­ся зна­че­ние undefined, оно бу­дет пре­об­ра­зо­ва­но в зна­че­ние false. Но это не оз­на­ча­ет, что undefined == false. Опе­ра­то­ры и ин­ст­рук­ции Ja­va­Script ожи­да­ют по­лу­чить зна­че­ния оп­ре­де­лен­ных ти­пов и вы­пол­ня­ют пре­об­ра­зо­ва­ния в эти ти­пы. Ин­ст­рук­ция if пре­об­ра­зу­ет зна­че­ние undefined в false, но опе­ра­тор == ни­ко­гда не пы­та­ет­ся пре­об­ра­зо­вать свои опе­ран­ды в ло­ги­че­ские зна­че­ния.