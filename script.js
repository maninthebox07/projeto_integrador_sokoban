const NUM_ROWS = boardMap.length;
const NUM_COLS = boardMap[0].length;

const DIST_SALTO = 66;
const MARGIN_FIX = 4;

const pieces = buildGameBoard(NUM_ROWS, NUM_COLS);
const board = document.querySelector('.board');

const player = new Piece(pieces.player.x, pieces.player.y);
const playerElement = createBoardPiece(player, 'player')

function createBoardPiece(piece, className) {
    piece.insertElementInto(className, board)
    // const element = createGameElement('div', className, board);

    // element.style.top = calculaPosicao(piece.x);
    // element.style.left = calculaPosicao(piece.y);

    // return element;
    return piece.element;
}

window.addEventListener("keydown", function (event) {
    const next = player.nextPosition(event.code);
    
    if (verifyPosition(next)) {
        player.moveTo(next, playerElement);
    }
});

function verifyPosition(position) {
    let { x, y } = position;
    return boardMap[x][y] !== "#";
}

function calculaPosicao(qtd) {
    return qtd * DIST_SALTO + MARGIN_FIX + "px";
}