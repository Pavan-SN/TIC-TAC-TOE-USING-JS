let boxes=document.querySelectorAll(".box");
let reset=document.querySelector;(".reset");
let newgame=document.querySelector("#new-button");
let msg=document.querySelector("#msg");
let msgcontainer=document.querySelector(".msg-container");
let turno=true;
const winningpattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
          console.log("box was clicked");
          if(turno)
          {
            box.innerText="o";
            turno=false;
          }
          else{
            box.innerText="x";
            turno=true;
          }
          box.disabled=true;
          checkWinner();
    });
});
const resetgame=()=>{
  turno=true;
  enableBoxes();
  msgcontainer.classList.add("hide");
}
const disableBoxes=()=>{
  for(let box of boxes){
    box.disabled=true;
  }
}
const enableBoxes=()=>{
  for(let box of boxes){
    box.disabled=false;
    box.innerText="";
  }
}
const showWinner=(winner)=>{
    msg.innerText=`congratulations!!! winner is player ${winner} would u like play again!!!`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
};
const checkWinner=()=>{
   for(let pattern of winningpattern)
   {
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
       if(pos1 !="" && pos2 !=""&& pos3 !="")
       {
        if(pos1===pos2 && pos2===pos3)
        {
               console.log("winner",pos1);
               showWinner(pos1);
        }
       }

   }
};
newgame.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);

