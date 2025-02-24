if (confirm("Вы уверены, что хотите продолжить?")) {

    document.getElementById("message").innerHTML = "Вы нажали кнопку 'Ок'.";
} else {

    document.getElementById("message").innerHTML = "Вы нажали кнопку 'Отмена'.";
}