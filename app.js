let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newbtngame = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO =  true;

const winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

const resetgame= () =>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    
}

boxes.forEach((box) =>{
    box.addEventListener("click" ,() =>{
        if(turnO){
            box.innerHTML ="O";
            turnO = false;
        }
        else{
            box.innerHTML = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerHTML = "";
    }
}

const showWinner = (winner) =>{
    disableBoxes();
    msg.innerHTML = `Congratulations Winner is ${winner}`;
    msgContainer.classList.remove("hide");
}

const checkWinner = () => {
    for(pattern of winPattern){
     let pos1Val = boxes[pattern[0]].innerHTML;
     let pos2Val = boxes[pattern[1]].innerHTML;
     let pos3Val = boxes[pattern[2]].innerHTML;

     if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
        if(pos1Val == pos2Val && pos2Val == pos3Val){
          showWinner(pos1Val);
        }
     }
    }
}
newbtngame.addEventListener("click" , resetgame);
resetbtn.addEventListener("click" , resetgame);