const board = document.querySelector(".board")
const counter = document.querySelector(".counter")
const over = document.querySelector(".game-over")
const newGame = document.getElementById("new-game")

const maxBombs = 16
const bombs = []
let score = 0
let gameOver = false

function createBombs() {

    bombs.splice(0, bombs.length)

    while (bombs.length < maxBombs) {

        const random = Math.floor(Math.random() * 100)// crea un numero da 0 a 99 
        if (!bombs.includes(random)) { // controllo che non ci siano doppioni
            bombs.push(random)
        }
    }
    console.table(bombs)
}


function createCells() {

    board.innerText = ""


    for (let i = 0; i < 100; i++) {
        const cell = document.createElement("div")
        cell.innerText = i + 1


        cell.addEventListener("click", function (e) {
            if (gameOver === false) { // if (!gameOver){ 
                // cell.classList.remove("closed")
                // cell.classList.add("open")
                e.target.classList.remove("closed")
                console.log(i)
                if (bombs.includes(i)) { // se è vera questa condizione, vuol dire che ho cliccato su una bomba
                    e.target.classList.add("mine")
                    e.target.innerText = ""
                    gameOver = true
                    over.innerText = "gioco finito"

                }
                else {
                    e.target.classList.add("open")
                    score++
                    counter.innerText = score
                }
            }

        })


        cell.classList.add("cell", "closed")
        board.append(cell)
    }
}


function restartGame() { // funziona che azzera e rigenera la board
    if (gameOver === true) {
        gameOver = false
        score = 0
        counter.innerText = score
        createBombs()
        createCells()
    }
}

newGame.addEventListener("click", function (e) { // evento che invoca la funzione al click
    restartGame()
})

createBombs()

createCells()

/*
gestione pulsante new game ✅
azzerare il punteggio ✅
azzerare le bombe ✅
e rigenerarle


*/