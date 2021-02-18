// Get the context

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let score = 0;


function redraw() {
    ctx.clearRect(0,0,canvas.width, canvas.height);
    ctx.filStyle = "black";
    ctx.font = "30px Times New Roman";
    ctx.fillText(`Score: ${score}`, canvas.width * 0.80, 50);

}
function incrementScore (score) {
    score++;
}
document.addEventListener('keydown', ({ key }) => {
    if (key == "w" || key == "a" || key == "s" || key == "d"){
        //incrementScore(score);
        score++;
        redraw();
        console.log("Your chief: " + key + ", Score = " + score);
    
    }
});

ctx.font = "30px Times New Roman";
//ctx.fillText("Score: " + score, 890,25);

// Draw a circle
ctx.beginPath();

ctx.arc(100,75,50,0,2 * Math.PI);
ctx.stroke();

ctx.beginPath();


ctx.moveTo(0, 0);
ctx.lineTo(200, 150);
ctx.closePath();
ctx.stroke();

//Create a triangle
ctx.beginPath();
ctx.moveTo(65, 50);
ctx.lineTo(100, 75);
ctx.lineTo(100, 25);
//ctx.fillStyle = "blue";
ctx.fill();



/* function logKey(e) {
    console.log(e);
  } */