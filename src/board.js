function string2BoardMap(level) {
    const lines = level.trim().split('\n');

    return lines;
}

export function buildGameBoard(mapa) {
    const boardMap = string2BoardMap(mapa);
    const pieces = {
        boxes: []
    };

    const NUM_ROWS = boardMap.length;

    let numberOfGoals = 0;

    const game = document.getElementById('game');
    const board = createGameElement('div', 'board', game);

    for (let i = 0; i < NUM_ROWS; i++) {
        const linha = createGameElement('div', 'row', board);
        const NUM_COLS = boardMap[i].length;

        for (let j = 0; j < NUM_COLS; j++) {
            const celula = createGameElement('div', 'cell', linha);
            const char = boardMap[i][j];
            const position = { x: j, y: i };

            if (char === '#') celula.classList.add('wall');
            if (char === 'P') pieces.player = position;
            if (char === 'B') pieces.boxes.push(position);
            if (char === 'G') {
                celula.classList.add('goal');
                numberOfGoals++;
            }
            if (char === ' ') celula.classList.add('empty');
            if (char === '_') celula.classList.add('empty');
        }
    }

    return { boardMap, pieces, numberOfGoals };
}

export function createGameElement(elementName, className, parentNode) {
    const element = document.createElement(elementName)
    element.classList.add(className);
    parentNode.append(element);
    return element;
}