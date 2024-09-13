const board = document.getElementById('board2');

for(let i=0; i<8; i++) {
    const linha = document.createElement('div');
    linha.classList.add('row');
    board.append(linha);
    for(let i=0; i<8; i++) {
        const celula = document.createElement('div');
        celula.classList.add('cell');
        linha.append(celula);
    }
}