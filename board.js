export const boardMap = [
    ["#", "#", "#", "#", "#", "#", "#", "#"],
    ["#", ".", ".", ".", ".", ".", ".", "#"],
    ["#", ".", ".", ".", "#", ".", ".", "#"],
    ["#", ".", "#", ".", "G", ".", ".", "#"],
    ["#", ".", ".", ".", "B", "#", ".", "#"],
    ["#", ".", ".", "#", "P", "B", "G", "#"],
    ["#", ".", ".", ".", ".", ".", ".", "#"],
    ["#", "#", "#", "#", "#", "#", "#", "#"]
]

const NUM_ROWS = boardMap.length;
const NUM_COLS = boardMap[0].length;

export function buildGameBoard() {
    const pieces = {
        boxes: []
    };
    
    const game = document.getElementById('game');
    const board = createGameElement('div', 'board', game);

    for (let i = 0; i < NUM_ROWS; i++) {
        const linha = createGameElement('div', 'row', board);
        for (let j = 0; j < NUM_COLS; j++) {
            const celula = createGameElement('div', 'cell', linha);
            const char = boardMap[i][j];
            const position = { x: j, y: i };
            
            if (char === '#') celula.classList.add('wall');
            // if (char === 'B') celula.classList.add('box');
            if (char === 'G') celula.classList.add('goal');
            if (char === 'P') pieces.player = position;
            if (char === 'B') pieces.boxes.push(position);
        }
    }
    
    return pieces;
}

export function createGameElement(elementName, className, parentNode) {
    const element = document.createElement(elementName)
    element.classList.add(className);
    parentNode.append(element);
    return element;
}