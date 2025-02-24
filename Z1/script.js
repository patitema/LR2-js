btn = document.getElementById("button");

btn.addEventListener("click", function() {
    let a = prompt("Введите первое число:");
    let b = prompt("Введите второе число:");
    
    a = parseFloat(a);
    b = parseFloat(b);
    
    if (isNaN(a) || isNaN(b)) {
        alert("Должны быть введены оба значения, и они должны быть числами!");
    } else {
        if (a > b) {
            alert(`Число ${a} больше чем число ${b}`);
        } else if (b > a) {
            alert(`Число ${b} больше чем число ${a}`);
        } else {
            alert(`Число ${a} равно числу ${b}`);
        }
    }

    
});