let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGameBtn = document.querySelector("#newGame");
let msgContainerBtn = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");      
//turn of player
let turnO = true;

const WinArr =[
    [0,1,2],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turnO) {
            //playerA
            box.innerText = "X"; 
            turnO = false;
        } else {
            //playerB
            box.innerText = "O";
            turnO = true;
        }
        box.disabled = true;
        winner();
    });
});

const showWinner = (winner)=>{
    msg.innerText = `Congratulations! Winner is ${winner}`; 
    msgContainerBtn.classList.remove("hide");
    disabledBoxes();
};

const winner = () =>{
    for( let pattern of WinArr){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if(pos1Val != "" && pos2Val != "" && pos3Val!=""){
           if(pos1Val === pos2Val && pos2Val === pos3Val){
            console.log("winner", pos1Val);
            showWinner(pos1Val);
           }
        }
    }
};

const resetBtn =() =>{
    turnO =true;
    enableBoxes();
    msgContainerBtn.classList.add("hide");
}


const disabledBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

newGameBtn.addEventListener("click", resetBtn);
reset.addEventListener("click", resetBtn);   