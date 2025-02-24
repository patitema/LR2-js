btn = document.getElementById("button");

btn.addEventListener("click", function() {
    let a = prompt("Введите номер месяца:");

    a = parseInt(a);

    if (isNaN(a)){
        alert("Введите число!")
    } else if(a > 12){
        alert("Введите число месяца! (От 1 до 12)")
    } else {
        if (a === 12 || a <= 2) {
            alert(`${a} месяц - это зима`);
        } else if (a <= 5) {
            alert(`${a} месяц - это весна`);
        } else if (a <= 8) {
            alert(`${a} месяц - это лето`);
        } else {
            alert(`${a} месяц - это осень`);
        }
    }
    
    
    
});