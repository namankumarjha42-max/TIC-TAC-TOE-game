let boxes=document.querySelectorAll('.box');
let newgamebtn=document.querySelector("#new-btn");
let resetbtn=document.querySelector('#reset-btn');
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turn0=true; //playerx
let count=0; //to track draw
const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]

        ];

boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        if(turn0){
            box.innerText="0";
            turn0=false;
    }else{
        box.innerText="x";
        turn0=true;
    }
     box.disabled=true;
     count++;

     let iswinner=checkWinner();
     if(count === 9 && !iswinner){
        gamedraw();
     }

    });
});
const gamedraw=()=>{
    msg.innerText="game was draw";
    msgcontainer.classList.remove("hide");
    disableboxes();
};

const showwinner=(winner)=>{
    msg.innerText=`congratulation,winner is ${winner}`;
    msgcontainer.classList.remove('hide');
    disableboxes();
};

const resetgame=()=>{
    turn0=true;
    enableboxes();
    count=0;
    msgcontainer.classList.add('hide');
};

const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const checkWinner =()=>{
    for( let pattern of winpattern){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val !=="" && pos2val !=="" && pos3val !==""){
            if(pos1val === pos2val && pos2val === pos3val){
                showwinner(pos1val);
                return true;
            }
        }
    }
};

newgamebtn.addEventListener('click',resetgame);
resetbtn.addEventListener('click',resetgame);