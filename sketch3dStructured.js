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



let randomLine=0;
let randomPosX=0;
let randomPosY=0;
let randomPosZ=0;

let pg=[];
let pgsPositions={
  x:0,
  y:0,
  z:0,
  rotation:0
}

let pgX=[];
let pgY=[];
let pgZ=[]
let pgRotY=[];

let pgPositonArray=[];

function setup() {
    
    let canvas=createCanvas(windowWidth,windowHeight,WEBGL)



  
for (i=0;i<=thoughts.length;i++){
pg[i]=createGraphics(200, 50);
pg[i].textSize(16);
pg[i].text(thoughts[i], 0, 24);
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
  //translate(0,0,200);
  box(1800);


  for (i=0;i<=thoughts.length;i++){
    // setTimeout(function(){

      push();
      noStroke();
      rotateY(pgRotY[i]);
      texture(pg[i]);
      translate( pgX[i],pgY[i],pgZ[i]);
      plane(200,50);
      
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




