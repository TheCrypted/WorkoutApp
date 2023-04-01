let rand = document.getElementById("dynamic-text-inner");
const attributes = ["Lat Pull-Downs", "Hip Abductions", "Seated Leg Curls", "Chest Presses"]
let index = 0;
let wordInd = 0;
let workOuts = document.getElementsByClassName("workOuts");

for( let workout of workOuts ){
  workout.addEventListener("mousemove", function(){
    workout.style.opacity = "100%"
  })
  workout.addEventListener("mouseout", function(){
    workout.style.opacity = "20%"
  })
}

let cursorDiv = document.getElementById("cursorBox");
const move = (e) => setTimeout(function(){
  let x  = e.pageX;
  let y = e.pageY;

  cursorDiv.style.left = (x) + "px";
  cursorDiv.style.top = (y) + "px";
}, 100)
document.addEventListener("mousemove", (e) => {
  move(e)
});

function printLetters(attribute){
  const letterNum = attribute.length;
  if(index===letterNum){
    index--;
    clearLetters();
  }
  else if(index < attribute.length){
    rand.textContent += attribute.charAt(index);
    index++;
    setTimeout(function(){printLetters(attribute)}, 300);
  }
}

let links = document.getElementsByTagName("a");
for(let link of links){
  link.addEventListener("mousemove", function(){
    cursorDiv.style.height = "60px";
    cursorDiv.style.width = "60px";
    cursorDiv.style.backgroundColor= "rgba(255, 255, 255, 1)";
    cursorDiv.style.mixBlendMode = "difference";
    cursorDiv.style.border= "none";
  })
  link.addEventListener("mouseout", function(){
    cursorDiv.style.height = "40px";
    cursorDiv.style.width = "40px";
    cursorDiv.style.backgroundColor= "transparent";
    cursorDiv.style.border= "2px solid white";
    cursorDiv.style.mixBlendMode = "difference";
  })
}

function clearLetters(){
  if (index === -1) {
    wordInd = (wordInd + 1) % attributes.length;
    index = 0;
    printLetters(attributes[wordInd])
  }
  else if(index > -1) {
    let empty = "";
    for(let i = 0; i < index; i++) {
      empty += attributes[wordInd].charAt(i);
    }
    index--;
    rand.textContent = empty;
    setTimeout(clearLetters, 100);
  }
}
printLetters(attributes[wordInd])

