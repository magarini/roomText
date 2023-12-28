let thoughts = ['overthinking',
'in my room',
'I’m supposed to be ',
'insulated from the outside',
'but i keeps calling me ',
'to make decisions',
'it calls me to know',
'what’s going on',
'i will never know',
'trying to find ',
'new approaches to',
'what i was always looking for',
'trying to stop thinking for a little',
'staring at the ceiling ',
'my walls souround me',
'enclosing me from',
'can we pause',
'can i access my feelings',
'can i have 3 mins of',
'quietness',
'in my room',
'I’m supposed to be ',
'insulated from the outside',
'but i keeps calling me ',
'to make decisions',
'it calls me to know',
'what’s going on',
'i will never know',
'trying to find ',
'new approaches to',
'what i was always looking for',
'trying to stop thinking for a little',
'staring at the ceiling ',
'my walls souround me',
'enclosing me from',
'can we pause',
'can i access my feelings',
'can i have 3 mins of',
'quietness',
];



let randomLine=0;
let randomPosX=0;
let randomPosY=0;
let randomPosZ=0;

let pg=[];


let pgX=[];
let pgY=[];
let pgZ=[]
let pgRotY=[];
let planeWidth=[];

let font;

function preload() {
  font = loadFont('Poppins-Regular.ttf');
}


function setup() {
    
    let canvas=createCanvas(windowWidth,windowHeight,WEBGL)



  
for (i=0;i<=thoughts.length;i++){
pg[i]=createGraphics(300, 50);
pg[i].textSize(24);
pg[i].text(thoughts[i], 0, 30);
pg[i].textFont(font);

pgX[i]=getRandomIntInclusive(-500, 500);
pgY[i]=getRandomIntInclusive(-500, 500);
pgZ[i]=getRandomIntInclusive(-500, 500);
pgRotY[i]=getRandomIntInclusive(-500, 500);

}



}

function draw(){
    background(255,240,245);
    orbitControl();







  //dwmatio
  fill(255,240,245);
  translate(0,0,200);
  stroke(0);
  box(2000);


  for (i=0;i<=thoughts.length;i++){

      push();
      noStroke();
      rotateY(pgRotY[i]);
      texture(pg[i]);
      translate( pgX[i],pgY[i],pgZ[i]);
      plane(300,50);
      
      pop();
    }
}

setInterval(newPlane,4000);

function newPlane(){
  for (i=0;i<=random(thoughts.length);i++){
  pgX[i]=getRandomIntInclusive(-500, 500);
  pgY[i]=getRandomIntInclusive(-500, 500);
  pgZ[i]=getRandomIntInclusive(-500, 500);

    }
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}




