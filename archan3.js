let boxs = document.querySelectorAll(".box");
let bigdiv = document.querySelector(".bigd");
let para = document.querySelector("#ms");
let newbotton = document.querySelector(".newbtn");

let turnO = true;

let winpat = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]

boxs.forEach((box) => {
    box.addEventListener("click", () =>{
        if(turnO){
        box.innerText = "O"
        turnO = false;
    }else{
        box.innerText = "X"
        turnO = true;
    }
    box.disabled = true;
    checkwinner();
    })
})
const checkwinner = () => {
    for(let pat of winpat){
        //console.log(boxs[pat[0]],boxs[pat[1]],boxs[pat[2]]);
        let pos1 = boxs[pat[0]].innerText;
        let pos2 = boxs[pat[1]].innerText;
        let pos3 = boxs[pat[2]].innerText;


    if(pos1 != "" && pos2 != "" && pos3 != ""){
        if(pos1 === pos2 && pos2 === pos3){
            console.log("Winner" ,pos1);
            
            showwinner(pos1);
            
        }
    }
}
}
const showwinner = (winner) => {
    para.innerText = `Congratulation winner ${winner}`;
    bigdiv.classList.remove("hide");
    disablebox();

}
const disablebox = () => {
    for(let bo of boxs){
        bo.disabled = true;
    }
}
const enablebox = () => {
     for(let bo of boxs){
        bo.disabled = false;
        bo.innerText = ""
    }
}
newbotton.addEventListener("click", () =>{
    turnO = true;
    enablebox();
    bigdiv.classList.add("hide");

})

