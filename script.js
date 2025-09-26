let boxes=document.querySelectorAll(".box");
let winnertext= document.getElementById("winner");
let resetbtn= document.getElementById("newgame")

let turnO= true;
let count=0
let winner= true;



boxes.forEach((box)=>{
box.addEventListener("click", () => {

    if(turnO){
        box.innerText= "O";
        turnO=false;}

        else{
            box.innerText= "x";
            turnO=true;
        }
    box.disabled=true;
    checkwinner();
})
})

boxes.forEach((box)=> {
    box.addEventListener("click", () => {
        count = count + 1;
        //console.log(count);
        if (count===9 && winner===false){
            console.log("draw");
            winnertext.innerText = "This match is draw";
        }
    })
})


const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const checkwinner= ()=> {
    for (let pattern of winPatterns){

        //console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText);
        let pos1value=boxes[pattern[0]].innerText;
        let pos2value=boxes[pattern[1]].innerText;
        let pos3value=boxes[pattern[2]].innerText;
        if (pos1value !="" && pos2value !="" && pos3value != ""){
            if (pos1value ===  pos2value && pos2value ===  pos3value ){
                console.log("winner is ",pos1value);
                document.getElementsByClassName("box").disabled= true;
                winnertext.innerText = `Player ${pos1value} is winner`;
                disableboxes();
                winner=true;
            }
            else{
                winner=false;
            }
        }
    }
}



const disableboxes=() =>{
    for(box of boxes){
        box.disabled=true;
    }
}
const enableboxes=() =>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const resetgame= () =>{
    enableboxes();
    turnO= true;
    winnertext.innerText = "";
    count=0;
}

resetbtn.addEventListener("click",resetgame);