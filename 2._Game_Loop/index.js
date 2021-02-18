    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const centerX = canvas.width /2;
    const centerY = canvas.height /2;
    const clockWidth = 360;
    

function setupClock(cw) {
    getDateInString();
    tick();
    window.setInterval(tick, 1000);
}


function tick() {
    const date = new Date();
    ctx.clearRect(0,0, canvas.width, canvas.height);
    

    drawStaticElements();

    let hour = date.getHours();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    drawHand(clockWidth / 3, hour * 30);

    let minutes = date.getMinutes();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    drawHand(clockWidth /2, minutes * 6);

    let seconds = date.getSeconds();
    ctx.strokeStyle = "gray";
    ctx.lineWidth = 1;
    drawHand(clockWidth / 2, seconds * 6);

}

function drawStaticElements() {
    ctx.beginPath();
    ctx.arc(centerX, centerY, clockWidth / 2, 0,2 * Math.PI, false);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(centerX, centerY, 2, 0, 2 * Math.PI, false);
    ctx.strokeStyle = "black";
    ctx.fill();
    ctx.closePath();

    drawNumber();
}

function drawNumber(){
    let i = 12;
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;

    while(i > 0) {
        ctx.save();
        ctx.beginPath();
        ctx.translate(centerX, centerY);
        let ang = (i * 30) * Math.PI / 180;
        ctx.rotate(ang);
        ctx.translate(0, -clockWidth / 2);

        ctx.save();
        ctx.translate(0, -10);
        ctx.rotate(-ang);
        ctx.font = "13px Times New Roman";
        ctx.fillText(i, -4, 2);
        ctx.restore();

        ctx.moveTo(0,0);
        ctx.lineTo(0,5);
        ctx.stroke();
        ctx.closePath();
        ctx.restore();

        i--;


    }
}

function drawHand(length, ang) {
    ctx.save();
    ctx.beginPath();
    ctx.translate(centerX, centerY);
    ctx.rotate(-180 * Math.PI / 180);
    ctx.rotate(ang * Math.PI / 180);
    ctx.moveTo(0,0);
    ctx.lineTo(0, length);
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
}

setupClock(360);

function getDateInString() {
    const dateToBrowser = new Date();
    document.getElementById("datetime").innerHTML = dateToBrowser.toLocaleDateString() + " " + dateToBrowser.toLocaleTimeString() ;
}