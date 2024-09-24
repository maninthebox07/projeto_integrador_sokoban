function rule1(y, x, qtd_row, qtd_cell, celula) {
    return y == qtd_cell && x == qtd_row;
}

buildBoard(10, 10, rule1);

function buildBoard(qtd_row, qtd_cell, rule) {
    const game = document.getElementById('game');
    const board = document.createElement('div');
    board.classList.add('board');



    for (let y = 0; y < qtd_row; y++) {
        const linha = document.createElement('div');
        linha.classList.add('row');
        board.append(linha);
        for (let x = 0; x < qtd_cell; x++) {
            const celula = document.createElement('div');
            celula.classList.add('cell');
            linha.append(celula);

            if (rule(y, x, qtd_row, qtd_cell, celula)) {
                celula.classList.add('empty');
            };
        }
        game.append(board);
    }

    const createPlayer = document.createElement('div');
    createPlayer.classList.add('player');
    board.append(createPlayer);

    const player = new Player(0, 0);
    const playerElement = document.querySelector('.player');

    const DIST_SALTO = 66;
    const MARGIN_FIX = 4;

    playerElement.style.top = calculaPosicao(0);
    playerElement.style.left = calculaPosicao(0);

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
        return x >= 0 && x < qtd_row && y >= 0 && y < qtd_cell;
    }
}