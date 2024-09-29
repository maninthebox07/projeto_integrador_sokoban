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

function buildGameBoard(linhas, celulas) {
    const pieces = {
        boxes: []
    };

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
            if (char === 'P') pieces.player = { x: i, y: j };
            if (char === 'B') pieces.boxes.push({ x: i, y: j });
        }
    }

    return pieces;
}

function createGameElement(elementName, className, parentNode) {
    const element = document.createElement(elementName)
    element.classList.add(className);
    parentNode.append(element);
    return element;
}