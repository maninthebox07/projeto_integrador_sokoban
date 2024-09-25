const player = new Player(0, 0)
const playerElement = document.querySelector('.player');
const celulas = document.querySelectorAll('.cell');

const DIST_SALTO = 66;
const MARGIN_FIX = 4;

playerElement.style.top = calculaPosicao(0);
playerElement.style.left = calculaPosicao(0);

function calculaPosicao(qtd) {
    return `${qtd * DIST_SALTO + MARGIN_FIX}px`;
}

window.addEventListener("keydown", function(event) {
    const next = player.nextPosition(event.code);
    if(verifyPosition(next)) {
        let K = next.x * 4 + next.y;
        player.moveTo(next, playerElement, celulas[K]);
    }
})

function Player(posX, posY) {
    this.x = posX;
    this.y = posY;
    this.nextPosition = function(keycode) {
        let {x, y} = this;
        if (keycode == 'ArrowUp') x--;
        if (keycode == 'ArrowDown') x++;
        if (keycode == 'ArrowRight') y++;
        if (keycode == 'ArrowLeft') y--;
        return {x, y};
    }
    
    this.moveTo = function(position, element, _parent) {
        this.x = position.x;
        this.y = position.y;
        
        element.style.top = calculaPosicao(this.x, 67)
        element.style.left = calculaPosicao(this.y, 67);
    }
}

function verifyPosition(position) {
    let {x, y} = position;
    return x >= 0 && x < 4 && y >= 0 && y < 4;
}

console.log(calculaPosicao(0, 64) === "0px");
console.log(calculaPosicao(1, 64) === "64px");
console.log(calculaPosicao(2, 32) === "64px");
console.log(calculaPosicao(10, 60) === "600px");
console.log(calculaPosicao(-3, 45) === "-135px");