let leaf;
let tree;
let nest;
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




  'Χωρικός προσανατολισμός και πλοήγηση',
  'στον τρισδιάστατο χώρο είναι πολύπλοκες ανθρώπινες δεξιότητες',
  'που απαιτούν, μεταξύ άλλων,',
  'παρακολούθηση της τρέχουσας θέσης του σώματος',
  'με αναφορά σε προηγούμενες θέσεις στο περιβάλλον.',



];

var fade;
var fadeAmount = 1

function preload() {
  // leaf=loadImage("leaf.png");
  // tree=loadImage("tree.jpg");
  // nest=loadImage("nest.jpg");


}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(0.5);
  push();
  tint(255, 200);
  // image(tree,0,0);
  pop();
  fill('white');
  textSize(16);
  textAlign(CENTER);

  textFont('monospace');
  let thought = random(thoughts);
  text(thought, width / 2, height / 2);
  background(0);
  setInterval(clearText, 10000);



}

function draw() {
  //background(220);


  //angleMode(DEGREES);
  push();
  tint(255, 150);
  scale(random(0.5, 2));
  // rotate(random(2)*HALF_PI);

  // imageMode(CENTER);
  // image(tree, random(width),random(height));
  //  pop();
  let thought = random(thoughts);
  textAlign(CENTER);
  // text(thought,random(10,width-100),random(height-10));
  text(thought, random(width / 8, 7 * width / 8,), random(height / 8, 7 * height / 8,));



}

function clearText() {
  // clear();
  background(0);
  console.log('cleared')

  // push();
  // tint(255, 200);

  // image(tree,0,0);
  // pop();


  // imageMode(CENTER);
  // image(nest,width/2,height/2);
  let thought = random(thoughts);
  text(thought, random(10, width - 100), random(height - 10));
  //text('we escaped in a bug of time',width/4,height/2+36);
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

}