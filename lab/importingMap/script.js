const boardMap = [
    [ "#", "#", "#", "#", "#", "#", "#", "#" ],
    [ "#", ".", ".", ".", ".", ".", ".", "#" ],
    [ "#", ".", ".", ".", "#", ".", ".", "#" ],
    [ "#", ".", "#", "G", ".", ".", ".", "#" ],
    [ "#", ".", ".", "G", "B", "#", ".", "#" ],
    [ "#", ".", ".", "#", ".", "B", ".", "#" ],
    [ "#", ".", ".", "P", ".", ".", ".", "#" ],
    [ "#", "#", "#", "#", "#", "#", "#", "#" ]
]

const DIST_SALTO = 66;
const MARGIN_FIX = 4;
const NUM_ROWS = boardMap[0].length;
const NUM_COLS = boardMap.length;

buildBoard(NUM_ROWS, NUM_COLS);

function buildBoard(qtd_row, qtd_cell) {
    const game = document.getElementById('game');
    const board = createGameElement('div', 'board', game);

    for (let y = 0; y < qtd_row; y++) {
        const linha = createGameElement('div', 'row', board);
        
        for (let x = 0; x < qtd_cell; x++) {
            const celula = createGameElement('div', 'cell', linha);
            const char = boardMap[y][x];
            console.log(char);

            if(char === '#') celula.classList.add('wall');
            if(char === 'B') celula.classList.add('box');
            if(char === 'G') celula.classList.add('goal');
        }
    }
}

function createGameElement(nomeElemento, nomeClasse, parentNode) {
    const element = document.createElement(nomeElemento);
    element.classList.add(nomeClasse);
    parentNode.append(element);
    
    return element;
}