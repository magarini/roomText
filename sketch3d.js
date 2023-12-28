let thoughts = ['Σε στίβες',
'πολλές στρώσεις από ζουμερά',
'που βγάζουνε αφρούς',
'Ξέρουν, ότι είναι μόνο σχηματάκια κάτω από τον χάρτη του υγρού,',
'κοιτάνε σαν ψάρια από κοντά',
'Και τα βλέπω που κοιτάνε τον αδένα μου',
'Γιατί πάνε να ξεφύγουν από μέσα τα καλώδια',
'Από τα σφιχτά',
'Ίσως αν χαλάσει να ξέρει πως να ξαναγίνει',
'λίγο έξω από την τρύπα',
'Εκεί στο μεταξύ,',
'και αγγίζουν τις συνδέσεις',
'στεριές, από μακριά, δίνουν φιλάκια',
'καταβράχηκαν μέχρι έξω από τα σάλια',
'που τα κολλάνε μεταξύ τους,',
'που τα κολλάνε μεταξύ τους',
'Και μας κοροϊδεύουν.',
];

let pg;
let pg2;
let pg3;

let randomLine=0;
let randomPosX=0;
let randomPosY=0;
let randomPosZ=0;

let pgs=[];
let pgsPositions={
  x:0,
  y:0,
  z:0,
  rotation:0
}

let pgPositonArray=[];

function setup() {
    
    let canvas=createCanvas(windowWidth,windowHeight,WEBGL)

  pg = createGraphics(200, 50);
  pg.textSize(16);

  pg2 = createGraphics(200, 50);
  pg2.textSize(16);

  pg3 = createGraphics(200, 50);
  pg3.textSize(16);

  
for (i=0;i<=thoughts.length;i++){
pg[i]=createGraphics(200, 50);
pg[i].textSize(16);
pg[i].text(thoughts[i], 0, 24);

}



}

function draw(){
    background(255,240,245);
    orbitControl();


//text
push();
noStroke();
translate(randomPosX,-randomPosY,-randomPosZ);


pg.text(thoughts[randomLine], 0, 24);
texture(pg);
plane(200,50);
pop();

//text
push();
noStroke();
pg2.text('infront', 0, 24);
texture(pg2);
translate(200,200,-200);
plane(200,50);

pop();

//text
push();
noStroke();
pg3.text('behind', 0, 24);
texture(pg3);
translate(200,-100,-300);
plane(200,50);

pop();




  //dwmatio
  fill(255,240,245);
  //translate(0,0,200);
  box(1800);


  for (i=0;i<=randomLine;i++){
    // setTimeout(function(){

      push();
      noStroke();
      rotateY(randomPosY)
      texture(pg[i]);
      translate(i*randomPosX,i*randomPosY,i*randomPosZ);
      plane(200,50);
      
      pop();
    }
}

setInterval(newPlane,4000);

function newPlane(){
randomLine=getRandomIntInclusive(0, thoughts.length);
pg.clear();
const myArray = thoughts[randomLine].split("");
let newPlaneWidth=myArray.length*50;

let newPg = createGraphics(newPlaneWidth, 50);
//text
push();
// noStroke();
translate(randomPosX,randomPosY,randomPosZ);


newPg.text(thoughts[randomLine], 0, 100);
texture(newPg);
plane(newPlaneWidth,50);
pop();


randomPosX=getRandomIntInclusive(-200, 200);
randomPosY=getRandomIntInclusive(-200, 200);
randomPosZ=getRandomIntInclusive(-200, 200);
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}