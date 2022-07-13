const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");


const canvasSize = 600;
canvas.width = canvasSize;
canvas.height = canvasSize;


const snakeBox = 20;
const totalMoves = canvasSize/snakeBox;


const apple = new Image();
apple.src = "images/apple.png";


let dead = new Audio();
let eat = new Audio();
let up = new Audio();
let down = new Audio();
let left = new Audio();
let right = new Audio();


dead.src = "audio/dead.mp3";
eat.src = "audio/eat.mp3";
up.src = "audio/up.mp3";
down.src = "audio/down.mp3";
left.src = "audio/left.mp3";
right.src = "audio/right.mp3";

//define snake
let snake = [];
snake[0] = {
    x:15*snakeBox,
    y:16*snakeBox
};
//create food
let food = {};
getFood();




//score
let score = 0;

//snakedirection
let dir = "";
