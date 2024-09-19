let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO=true;//playerX,playerY

const winPatterns=[
    [0,1,2],
    [3,4,5],
    [2,5,8],
    [0,4,8],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,4,6]
];

const resetGame= () =>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");  //enabled hide
}

boxes.forEach( (box) => {
    box.addEventListener("click",() =>{
        console.log("Box was clicked");
        if(turnO==true){ //playerX
           box.innerText="O";
           turnO=false;
        }
        else{  //playerY
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    });
});

const enableBoxes = () =>{
    for(j of boxes){
        j.disabled=false;
        j.innerText="";
    }
}

const disableBoxes = () =>{
    for(i of boxes){
        i.disabled=true;
    }
}

const showWinner = (winner) =>{
    msg.innerText=`Congratulations! Winner is ${winner}`;
    msgContainer.classList.remove("hide");  //hide class becomes visible
    
}

const checkWinner = () =>{
    for(pattern of winPatterns){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1 !="" && pos2 !="" && pos3 !=""){
            if(pos1==pos2 && pos2==pos3){
                console.log("Winner",pos1);
                disableBoxes();
                showWinner(pos1);
            }
        }
    }
}

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);


