// Вы­во­дит со­об­ще­ние в спе­ци­аль­ной об­лас­ти для от­ла­доч­ных со­об­ще­ний внут­ри до­ку­мен­та.
// Ес­ли до­ку­мент не со­дер­жит та­кой об­лас­ти, она соз­да­ет­ся.
function debug(msg) {
// Оты­скать об­ласть для от­ла­доч­ных со­об­ще­ний в до­ку­мен­те, по­иск по HTML-ат­ри­бу­ту id
    var log = document.getElementById("debuglog");
// Ес­ли эле­мент с ат­ри­бу­том id="debuglog" от­сут­ст­ву­ет, соз­дать его.
    if (!log) {
        log = document.createElement("div");  // Соз­дать эле­мент <div>
        log.id = "debuglog";                  // Ус­та­но­вить ат­ри­бут id
        log.innerHTML = "<h1>Debug Log</h1>"; // На­чаль­ное со­дер­жи­мое
        document.body.appendChild(log);       // До­ба­вить в ко­нец до­ку­мен­та
    }
// Те­перь обер­нуть со­об­ще­ние в те­ги <pre> и до­ба­вить в эле­мент log
    var pre = document.createElement("pre");  // Соз­дать тег <pre>
    var text = document.createTextNode(msg);  // Обер­нуть msg в тек­сто­вый узел
    pre.appendChild(text);                    // До­ба­вить текст в тег <pre>
    log.appendChild(pre);                     // До­ба­вить <pre> в эле­мент log
}
