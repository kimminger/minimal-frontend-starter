
console.log("Hello World!");

const columns = 3;
const rows = 3;

boardStatus = [
    "","","",
    "","","",
    "","",""
];

const container = document.getElementById("board");
const gameStatus = document.getElementById("gameStatus");


class Player {
    #isPlaying = false;
    #mark = "";
    #score = 0;
    constructor(isPlaying, mark) {
        this.#isPlaying = isPlaying;
        this.#mark = mark;
    }

    isPlaying() {
        return this.#isPlaying;
    }

    getMark() {
        return this.#mark;
    }

    getScore() {
        return this.#score;
    }

}

/**
 * Initialize Game, Create Players
 */
this.gameStatus.innerText = 'Player X begins!'
const players = [
    new Player(true, "X"),
    new Player(false, "O")
];


container.addEventListener("click", (event) => {
    console.log(event);
    clickedFieldId = event.target.id;
    console.log(clickedFieldId);
    const currentPlayer = getCurrentPlayer();
    console.log(currentPlayer);
    updateBoardStatus(currentPlayer, clickedFieldId);
});

function getCurrentPlayer() {
    // filter is a positive lookup, so you get what you seek and returns the array
    // but with find you return the value, so here we want to return the player and not an array of players
    return players.find(p => p.isPlaying() == true);
}

function updateBoardStatus(currentPlayer, clickedFieldId) {
    console.log("Updating Board with Player=" + currentPlayer.getMark() + " and Id=" + clickedFieldId);
}