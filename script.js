let x = 0;
let y = 0;

const player = document.querySelector('.player');
console.log(player);

player.addEventListener("click", function(){
    alert("Clicou no jogador");
})

window.addEventListener("keydown", function(event) {
    // alert("Pressionou teclado");
    console.log(event);

    if(event.code === 'ArrowRight' && y < 4) {
        y++;
        console.log("y =", y);
        console.log("x =", x, "y =", y);
    }

    if(event.code === 'ArrowDown' && x < 4) {
        x++;
        console.log("x =", x);
        console.log("x =", x, "y =", y);
    }

    if(event.code === 'ArrowLeft' && y > 0) {
        y--;
        console.log("y =", y);
        console.log("x =", x, "y =", y);
    }

    if(event.code === 'ArrowUp' && x > 0) {
        x--;
        console.log("x =", x);
        console.log("x =", x, "y =", y);
    }
})