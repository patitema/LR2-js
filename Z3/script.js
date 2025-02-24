btn = document.getElementById("button");

btn.addEventListener("click", function() {
    let age = prompt("Пожалуйста, введите ваш возраст:");

    age = parseInt(age);

    if (isNaN(age)) {
        alert("Вы ввели некорректное значение!");
    } else if (age < 18) {
        alert("Доступ закрыт, вам меньше 18-и");
    } else if (age > 99) {
        alert("Доступ закрыт, вам больше 99-и");
    } else {
        alert("Доступ открыт");
    }
    
    
    
});