import Piece from "./piece.js";
import { buildGameBoard, boardMap } from "./board.js";

const pieces = buildGameBoard();
const board = document.querySelector('.board');

const player = createBoardPiece(pieces.player, 'player')
const boxes = [];

for (let b = 0; b < pieces.boxes.length; b++) {
    boxes.push(createBoardPiece(pieces.boxes[b], 'box'));
}

window.addEventListener("keydown", function (event) {
    // event.preventDefault();

    handlePieceMovement(event.code);
});

console.log(pieces.boxes);

/** Tarefa #1: implementar função para localizar uma caixa à partir de um
 * uma dada coordenada.
*/
function findBoxAtPosition(position) {

    return boxes.find((box) => box.x === position.x && box.y === position.y);
}

/** Tarefa #2: modificar a função abaixo de forma a tratar tanto a movimentação
 * do jogador quanto das caixas.
*/
function handlePieceMovement(keycode) {
    // Variável destinada ao pré-cálculo da posição do jogador
    const nextPlayerPosition = player.nextPosition(keycode);
    // (Modificar) Variável para detectar a "presença" de outra peça
    const foundBox = findBoxAtPosition(nextPlayerPosition);

    // Implementar lógica caso encontre uma outra peça no caminho.
    if (foundBox) {
        const nextBoxPosition = foundBox.nextPosition(keycode);
        const boxCanMove = verifyPosition(nextBoxPosition) && !findBoxAtPosition(nextBoxPosition);

        if (boxCanMove) {
            foundBox.moveTo(nextBoxPosition);
            player.moveTo(nextPlayerPosition);
        }
    }
    // E caso não encontre outra peça...
    else {
        // Faça as modificações que forem necessárias para manter o
        // funcionamento do jogo.
        const playerCanMove = verifyPosition(nextPlayerPosition);

        if (playerCanMove) {
            player.moveTo(nextPlayerPosition);
        }
    }
}

function createBoardPiece(piecePosition, className) {
    const piece = new Piece(piecePosition.x, piecePosition.y);
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