
function draw() {
    const c = document.getElementById("myCanvas");
    const ctx = c.getContext("2d");

 

    //X e Y FLECHAS
    
    for (i = 1; i < 20; i++) {
        canvas_arrow(ctx, 100 + i, 375 + i, 100 + i, 50 + i);
    }
    for (i = 1; i < 20; i++) {
        canvas_arrow(ctx, 100 + i, 375 + i, 400 + i, 375 + i);
    }

    ctx.strokeStyle = "rgb(64, 143, 221)";
    ctx.stroke();

    // LETRAS EM BAIXO TEMPO
    ctx.font = "25px serif";
    ctx.fillStyle = "rgb(71, 205, 0)";
    ctx.fillText("1 s", 150, 425);
    ctx.fillText("2 s", 225, 425);
    ctx.fillText("3 s", 300, 425);

    // Velocidade
    ctx.font = "bold 50px verdana, sans-serif";
    ctx.fillStyle = "rgb(71, 205, 0)";
    ctx.fillText("0.0 " + " x", 150, 150);

    botarImagem('img/logo-passaro.png', 175, 250, ctx);
    botarImagem('img/estilingue.png', 125, 300, ctx);
}



function botarImagem(imagem, x, y, ctx) {
    base_image = new Image();
    base_image.src = imagem;
    ctx.drawImage(base_image, x, y);//X,Y,TAMANHOS

}

function canvas_arrow(context, fromx, fromy, tox, toy) {
    var headlen = 10; // length of head in pixels
    var dx = tox - fromx;
    var dy = toy - fromy;
    var angle = Math.atan2(dy, dx);
    context.moveTo(fromx, fromy);
    context.lineTo(tox, toy);
    context.lineTo(tox - headlen * Math.cos(angle - Math.PI / 6), toy - headlen * Math.sin(angle - Math.PI / 6));
    context.moveTo(tox, toy);
    context.lineTo(tox - headlen * Math.cos(angle + Math.PI / 6), toy - headlen * Math.sin(angle + Math.PI / 6));
}

window.onload = function (e) {
    draw();
}