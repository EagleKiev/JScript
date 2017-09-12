<script>
function moveon() {
                        //Вывести модальный диалог, чтобы получить ответ пользователя
    var answer = confirm("Ready to move on?");
                        //Если пользователь щелкнул на кнопке "OK", заставить броузер загрузить новую страницу
    if (answer) window.location = "http://google.com";
}
                        //Запустить функцию, объявленную выше, через 1 минуту (60000 миллисекунд).
setTimeout(moveon, 60000);
</script>
