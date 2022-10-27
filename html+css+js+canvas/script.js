function changeColor(idEl){ //Изменение цвета рисуемых квадратов
    let colorType = document.getElementById(idEl),
    ctx       = colorType.getContext('2d');
    if(choosenColor == colors.length - 1) choosenColor = 0;
    else choosenColor++;
    ctx.fillStyle = colors[choosenColor];
    ctx.fillRect(1,1, 18, 18);
}

function getValue(){ //Получение значения размера стороны рисуемого квадрата
    rectSize = document.getElementById("txt").value;
}

function clearCanvas(){ // Кнопка очистки холста
    ctxCanv.clearRect(0, 0, canv.width, canv.height);
}

let colors = ["yellow", "black", "red", "blue", "white", "green"]; // Массив цветов
let choosenColor = 0;

let colorType = document.getElementById("colorType"),
    ctxType   = colorType.getContext('2d');

colorType.width = 20;
colorType.height = 20;
ctxType.fillStyle = colors[choosenColor];
ctxType.strokeRect(0, 0, 20, 20);
ctxType.fillRect(1,1, 18, 18);


let canv = document.getElementById("example"),
    ctxCanv  = canv.getContext('2d');
let mouse = {x: 0, y:0};
let rectSize = 10;

canv.width = 400;
canv.height = 400;
canv.addEventListener("mousedown", function(e){   // Рисование квадратов
    console.log(rectSize);
    ctxCanv.fillStyle = colors[choosenColor];        
    mouse.x = e.pageX - this.offsetLeft;
    mouse.y = e.pageY - this.offsetTop;
    ctxCanv.strokeRect(mouse.x, mouse.y, rectSize, rectSize);
    ctxCanv.fillRect(mouse.x + 1, mouse.y + 1, rectSize - 2, rectSize - 2);
});