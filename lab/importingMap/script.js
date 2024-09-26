buildBoard(8, 8, rule1);
buildBoard(8, 8, rule2);
buildBoard(8, 8, rule3);
buildBoard(8, 8, rule4);
buildBoard(8, 8, rule5);
buildBoard(8, 8, rule6);

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

            if(rule(y, x, qtd_row, qtd_cell, celula)) {
                celula.classList.add('empty');
            };
        }
        game.append(board)
    }
}

function rule1(y, x, qtd_row, qtd_cell, celula) {
    return y == 0 || y == qtd_row - 1 || x == 0 || x == qtd_cell - 1
}

function rule2(y, x, qtd_row, qtd_cell, celula) {
    return y < qtd_row - 1 && y > 0 && x < qtd_cell - 1 && x > 0
}

function rule3(x, y, qtd_row, qtd_cell, celula) {
    return x == y
}

function rule4(x, y, qtd_row, qtd_cell, celula) {
    return y + x == qtd_row - 1
}

function rule5(x, y, qtd_row, qtd_cell, celula) {
    return y == x || y + x == qtd_row - 1
}

function rule6(x, y, qtd_row, qtd_cell, celula) {
    return x % 2 == 1 && y % 2 == 0 || y % 2 == 1 && x % 2 == 0
}