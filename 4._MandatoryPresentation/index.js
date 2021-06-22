

const   Engine = Matter.Engine,
        Render = Matter.Render,
        World = Matter.World,
        Bodies = Matter.Bodies;


const engine = Engine.create();
const render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        width: 2000,
        height: 1200,
        wireframes: false
    }
});

let mouse = Matter.Mouse.create(render.canvas);

let mouseConstraint = Matter.MouseConstraint.create(engine,{
    mouse : mouse,
    constraint : {
        render : {visible: false}
    }
});

Matter.Events.on(mouseConstraint, 'mousedown', () =>  {
    console.log('Gravity added');
    setGravity();
});


let ground = Bodies.rectangle(1000,800,2000,60, {isStatic: true});
let roof = Bodies.rectangle(1000,100,2000,60,{isStatic: true});

World.add(engine.world, [ground,roof,mouseConstraint]);
Engine.run(engine);
Render.run(render);

let gravity = false;

function setGravity() {
    if(!gravity){
        engine.world.gravity.y = 0.5;
        return gravity = true;
    }

    if(gravity) {
        engine.world.gravity.y = -0.5;
        return gravity = false;
    }
    
};
function dropBox() {
    
    boxDrop = setInterval(function() {       
        let dropBox = World.addBody(engine.world, Bodies.rectangle(Math.floor(Math.random()*2000),200,80,80));
        console.log("Box Dropped")   
    },500);
    
}
function pauseDrop() {
    console.log('Called Pause');
    clearInterval(boxDrop);
    clearInterval(circleDrop);
    clearInterval(polygonDrop);

}

function dropCircle() {
    circleDrop = setInterval(function() {
        let dropCircles = World.addBody(engine.world, Bodies.circle(Math.floor(Math.random()*2000),200,50,50));
        console.log('Circle Dropped');
    }, 500);
    

}

function dropPolygon() {
    polygonDrop = setInterval(function() {
        let dropPolygons = World.addBody(engine.world, Bodies.polygon(Math.floor(Math.random()*2000),200,6,50));
        console.log('Polygon Dropped')
    },500);
}

function addGravity() {

}