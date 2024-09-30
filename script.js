import Piece from "./piece.js";
import { buildGameBoard, boardMap } from "./board.js";

const pieces = buildGameBoard();
const board = document.querySelector('.board');

console.log(pieces);

const playerPiece = createBoardPiece(pieces.player, 'player')
const boxesPiece = [];
for(let b=0; b<pieces.boxes.length; b++) {
    boxesPiece.push(createBoardPiece(pieces.boxes[b], 'box'));
}

function createBoardPiece(piecePosition, className) {
    const piece =  new Piece(piecePosition.x, piecePosition.y);
    piece.insertElementInto(className, board)
    
    return piece;
}

window.addEventListener("keydown", function (event) {
    const next = playerPiece.nextPosition(event.code);
    
    if (verifyPosition(next)) {
        playerPiece.moveTo(next);
    }
});

function verifyPosition(position) {
    let { x: j, y: i } = position;
    return boardMap[i][j] !== "#";
}