const pieces = buildGameBoard(NUM_ROWS, NUM_COLS);
const board = document.querySelector('.board');

console.log(pieces.boxes);

const player = createBoardPiece(pieces.player, 'player');

function createBoardPiece(piecePosition, className) {
    const piece = new Piece(piecePosition.x, piecePosition.y);
    piece.insertElementInto(className, board)

    return piece;
}

window.addEventListener("keydown", function (event) {
    const next = player.nextPosition(event.code);

    if (verifyPosition(next)) {
        player.moveTo(next);
    }
});

function verifyPosition(position) {
    let { x, y } = position;
    return boardMap[x][y] !== "#";
}