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

function buildGameBoard(linhas, celulas) {
    const positionOfPieces = {};
    
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
            if (char === 'P') positionOfPieces.player = { x: i, y: j }
        }
    }
    
    return positionOfPieces;
}