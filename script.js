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

    createGameElement('div', 'player', board);

    const player = new Player(1, 1);
    const playerElement = document.querySelector('.player');

    playerElement.style.top = calculaPosicao(player.x);
    playerElement.style.left = calculaPosicao(player.y);

    function calculaPosicao(qtd) {
        return `${qtd * DIST_SALTO + MARGIN_FIX}px`;
    }

    window.addEventListener("keydown", function (event) {
        const next = player.nextPosition(event.code);
        if (verifyPosition(next)) {
            player.moveTo(next, playerElement);
        }
    })

    function Player(posX, posY) {
        this.x = posX;
        this.y = posY;
        this.nextPosition = function (keycode) {
            let { x, y } = this;
            if (keycode == 'ArrowUp') x--;
            if (keycode == 'ArrowDown') x++;
            if (keycode == 'ArrowRight') y++;
            if (keycode == 'ArrowLeft') y--;
            return { x, y };
        }

        this.moveTo = function (position, element) {
            this.x = position.x;
            this.y = position.y;

            element.style.top = calculaPosicao(this.x, 67)
            element.style.left = calculaPosicao(this.y, 67);
        }
    }

    function verifyPosition(position) {
        let { x, y } = position;
        return boardMap[x][y] != '#';
    }
}

function createGameElement(nomeElemento, nomeClasse, parentNode) {
    const element = document.createElement(nomeElemento);
    element.classList.add(nomeClasse);
    parentNode.append(element);
    
    return element;
}