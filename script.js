const board = document.querySelector(".board")

for (let i = 0; i < 100; i++) {
    const cell = document.createElement("div")
    cell.innerText = i + 1
    cell.classList.add("cell")
    board.append(cell)
}

