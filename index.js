
let count = 0;

let countEl = document.getElementById("count-el");

function increase() {
    count++;
    countEl.textContent = count;
}

function decrease() {
    count--;
    countEl.textContent = count;
}

let saveEl = document.getElementById("saved");

function save() {
    saveEl.textContent += count + " - ";
    count = 0;
    countEl.textContent = 0;

}

function stop() {
    count = 0;
    countEl.textContent = 0;
    saveEl.textContent = "Saved Count: ";

}

function restart() {
    count = 0;
    countEl.textContent = 0;
}