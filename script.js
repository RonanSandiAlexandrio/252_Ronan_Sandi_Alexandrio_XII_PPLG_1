function appendValue(value) {
    const display = document.getElementById("display");
    display.value += value === "*" ? "x" : value === "/" ? ":" : value;
}

function clearDisplay() {
    const display = document.getElementById("display").value = "";
}

function deleteDisplay() {
    const display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function calculate() {
    const display = document.getElementById("display");
    display.value = eval(display.value.replace(/x/g, "*").replace(/:/g, "/"));
} 

function percentage() {
    let display = document.getElementById("display");
    display.value = display.value ? parseFloat(display.value) / 100 : "";
}