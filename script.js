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

