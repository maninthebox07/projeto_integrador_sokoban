import Piece from "./piece.js";
import { buildGameBoard, boardMap } from "./board.js";

const pieces = buildGameBoard();
const board = document.querySelector('.board');

const player = createBoardPiece(pieces.player, 'player')
const boxes = [];

for(let b=0; b<pieces.boxes.length; b++) {
    boxes.push(createBoardPiece(pieces.boxes[b], 'box'));
}

window.addEventListener("keydown", function (event) {
    handleKeydownEvent(event.code);
});

function createBoardPiece(piecePosition, className) {
    const piece =  new Piece(piecePosition.x, piecePosition.y);
    piece.insertElementInto(className, board)
    
    return piece;
}

function handleKeydownEvent(keycode) {
    const next = player.nextPosition(keycode);
    
    if (verifyPosition(next)) {
        player.moveTo(next);
    }
}

function verifyPosition(position) {
    let { x: j, y: i } = position;
    return boardMap[i][j] !== "#";
}