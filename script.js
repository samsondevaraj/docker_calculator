const display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        if (!/^[0-9+\-*/.() ]+$/.test(display.value)) {
            throw new Error("Invalid input");
        }

        display.value = Function(
            '"use strict"; return (' + display.value + ')'
        )();

        if (!Number.isFinite(Number(display.value))) {
            throw new Error("Invalid calculation");
        }
    } catch {
        display.value = "Error";
    }
}