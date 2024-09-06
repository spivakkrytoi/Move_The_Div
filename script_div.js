// Отримуємо елемент div
var div = document.getElementById("movableDiv");

// Функція для переміщення div вправо
function right() {
    var left = parseInt(window.getComputedStyle(div).left);
    div.style.left = (left + 10) + "px";
}

// Функція для переміщення div вліво
function left() {
    var left = parseInt(window.getComputedStyle(div).left);
    div.style.left = (left - 10) + "px";
}

// Функція для переміщення div вниз
function down() {
    var top = parseInt(window.getComputedStyle(div).top);
    div.style.top = (top + 10) + "px";
}

// Функція для переміщення div вверх
function moveUp() {
    var top = parseInt(window.getComputedStyle(div).top);
    div.style.top = (top - 10) + "px";
}
