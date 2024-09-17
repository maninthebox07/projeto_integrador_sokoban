const board = document.getElementById('board2');

function tab(qtd_row, qtd_cell) {
    for(let y=0; y<qtd_row; y++) {
        const linha = document.createElement('div');
        linha.classList.add('row');
        board.append(linha);
        for(let x=0; x<qtd_cell; x++) {
            const celula = document.createElement('div');
            celula.classList.add('cell');
            linha.append(celula);

        // if(y == 0 || y == qtd_row -1 || x == 0 || x == qtd_cell - 1) {
        //     celula.classList.add('empty');
        // }

        if(y < qtd_row - 1 && y > 0 && x < qtd_cell - 1 && x > 0) {
            celula.classList.add('empty');
        }
    }
}
}

tab(8,8);