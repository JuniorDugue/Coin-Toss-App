const message = document.querySelector(".message");
const buttons = document.querySelectorAll("button");
console.log(buttons);

for (let i=0; i<buttons.length; i++){
  console.log(buttons[i]);
  buttons[i].addEventListener("click",tossCoin);
}

function tossCoin(e){
  console.log(e.target.innerText);
  let computerToss = Math.floor(Math.random()*2);
  console.log(computerToss);
}

