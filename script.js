const boardMap = [
    ["#", "#", "#", "#", "#", "#", "#", "#"],
    ["#", ".", ".", ".", ".", ".", ".", "#"],
    ["#", ".", ".", ".", "#", ".", ".", "#"],
    ["#", ".", "#", "G", ".", ".", ".", "#"],
    ["#", ".", ".", "G", "B", "#", ".", "#"],
    ["#", ".", ".", "#", ".", "B", ".", "#"],
    ["#", ".", ".", "P", ".", ".", ".", "#"],
    ["#", "#", "#", "#", "#", "#", "#", "#"]
]

const NUM_ROWS = boardMap.length;
const NUM_COLS = boardMap[0].length;

const DIST_SALTO = 66;
const MARGIN_FIX = 4;

const pieces = buildGameBoard(NUM_ROWS, NUM_COLS);
const player = new Player(pieces.player.x, pieces.player.y);
const board = document.querySelector('.board');
const playerElement = createGameElement('div', 'player', board);

playerElement.style.top = calculaPosicao(player.x);
playerElement.style.left = calculaPosicao(player.y);

window.addEventListener("keydown", function (event) {
    const next = player.nextPosition(event.code);
    
    if (verifyPosition(next)) {
        player.moveTo(next, playerElement);
    }
});

function Player(posX, posY) {
    this.x = posX;
    this.y = posY;
    this.nextPosition = function (keycode) {
        let { x, y } = this;
        
        if (keycode === 'ArrowUp') x--;
        if (keycode === 'ArrowDown') x++;
        if (keycode === 'ArrowLeft') y--;
        if (keycode === 'ArrowRight') y++;
        console.log(keycode, player);
        return { x, y };
    }

    this.moveTo = function (position, element) {
        this.x = position.x;
        this.y = position.y;
        
        element.style.top = calculaPosicao(this.x);
        element.style.left = calculaPosicao(this.y);
    }
}

function verifyPosition(position) {
    let { x, y } = position;
    return boardMap[x][y] !== "#";
}

function calculaPosicao(qtd) {
    return qtd * DIST_SALTO + MARGIN_FIX + "px";
}

function createGameElement(elementName, className, parentNode) {
    const element = document.createElement(elementName)
    element.classList.add(className);
    parentNode.append(element);
    return element;
}

function buildGameBoard(linhas, celulas) {
    const positionOfPieces = {};
    
    const game = document.getElementById('game');
    const board = createGameElement('div', 'board', game);

    for (let i = 0; i < linhas; i++) {
        const linha = createGameElement('div', 'row', board);
        for (let j = 0; j < celulas; j++) {
            const celula = createGameElement('div', 'cell', linha);
            const char = boardMap[i][j];
            
            if (char === '#') celula.classList.add('wall');
            if (char === 'B') celula.classList.add('box');
            if (char === 'G') celula.classList.add('goal');
            if (char === 'P') positionOfPieces.player = { x: i, y: j }
        }
    }
    
    return positionOfPieces;
}