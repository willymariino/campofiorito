const board = document.querySelector(".board")

for (let i = 0; i < 100; i++) {
    const cell = document.createElement("div")
    cell.innerText = i + 1
    cell.addEventListener("click", function (e) {
        // cell.classList.remove("closed")
        // cell.classList.add("open")
        e.target.classList.remove("closed")
        e.target.classList.add("open")
    })


    cell.classList.add("cell", "closed")
    board.append(cell)
}
const maxBombs = 16


const bombs = []

while (bombs.length < maxBombs) {

    const random = Math.floor(Math.random() * 100)// crea un numero da 0 a 99 
    if (!bombs.includes(random)) { // controllo che non ci siano doppioni
        bombs.push(random)
    }
}
console.table(bombs)



