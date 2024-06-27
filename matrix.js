const canvas = document.getElementById('canvas');
const canvasContext = canvas.getContext('2d');

let canvasHeight = window.innerHeight;
let canvadWidth = window.innerWidth;

let charArr = [];
//we're going to use these to drip down the screen
let tempCharStr = 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z 1 2 3 4 5 6 7 8 9 0 Á Æ ð Î Í ı È Ë Ê Ð Ø Ü'	 
charArr = tempCharStr.split(' ');

let maxCharCount = 300;
let fallingCharArr = [];
let fontSize = 13;
let maxColums = canvadWidth / fontSize;
canvas.width = canvadWidth;
canvas.height = canvasHeight;

let frames = 0;

class FallingChar{
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    draw(canvasContext) {
        //get any random letter from our collection of characters
        this.value = charArr[Math.floor(Math.random() * (charArr.length - 1))]
            .toUpperCase();
        this.speed =( Math.random() * fontSize * 3) / 4 + fontSize * 3 / 4;
        canvasContext.fillStyle = "rgba(0,0255,0)"  //bright green
        canvasContext.font = "px san-serif";
        canvasContext.fillText(this.value, this.x, this.y)
        this.y += this.speed;

        if (this.y > canvasHeight) {
            this.y = Math.random() * canvasHeight / 2 - 50;
            this.x = Math.floor(Math.random() * maxColums) * fontSize;
            this.speed = -Math.random() * fontSize * 3 / 4 + (fontSize * 3) / 4;
        }
    }
}

function update(){
    if (fallingCharArr.length < maxCharCount) {
        let fallingChar = new FallingChar(Math.floor(Math.random() * maxColums) * fontSize,
            Math.random() * canvasHeight / 2 - 50)
        
        fallingCharArr.push(fallingChar)
    }
    canvasContext.fillStyle = "rgba(0,0,0,0.05)";
    canvasContext.fillRect(0, 0, canvadWidth, canvasHeight);
    for (let i = 0; i < fallingCharArr.length && frames%2==0; i++){
        fallingCharArr[i].draw(canvasContext);
    }
    requestAnimationFrame(update);
    frames++;
};

update();

//factorail Function using recursion
function factorial(num)
{
    if (num == 1) return num;
    
    return num * factorial(num - 1);
}

/*console.log(BigInt(factorial(25)));
console.log(factorial(45));

let fac = BigInt(factorial(45));
console.log(fac);*/