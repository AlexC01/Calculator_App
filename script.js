const items = document.querySelectorAll('.key_num');
const del = document.querySelector('.delete');
const sum = document.querySelector('.sum');
const resta = document.querySelector('.menos');
const mult = document.querySelector('.mult');
const div = document.querySelector('.division');
const equal = document.querySelector('.equal');
const reset = document.querySelector('.reset');
let board = document.querySelector('.result');
let printNum = "";
let first = "";
let opcion = "";

items.forEach(item => {
    item.addEventListener("click",()=>{
        printBoard(item.firstChild.textContent)
    })
})

const printBoard = num => {
    printNum += num;
    board.textContent = printNum;
}

del.addEventListener('click', () => {
    if(printNum){
        printNum = printNum.slice(0,-1);
        board.textContent = printNum;
    }
})

sum.addEventListener('click', () => {
    if(!first){
        if(printNum){
            first = printNum;
            opcion = "sum";
            printNum = "";
        }
    }
})

resta.addEventListener('click', () => {
    if(!first){
        if(printNum){
            first = printNum;
            opcion = "resta";
            printNum = "";
        }
    }
})

mult.addEventListener('click', () => {
    if(!first){
        if(printNum){
            first = printNum;
            opcion = "mult";
            printNum = "";
        }
    }
})

div.addEventListener('click', () => {
    if(!first){
        if(printNum){
            first = printNum;
            opcion = "div";
            printNum = "";
        }
    }
})


equal.addEventListener('click', () =>{
    if(printNum && first){
        let x = parseFloat(first);
        let y = parseFloat(printNum);
        switch(opcion){
            case 'sum':
                const res = x+y
                board.textContent = res.toString();;
                first = "";
                printNum = "";
                opcion = "";
                break;
            case 'resta':
                const resp = x-y;
                board.textContent = resp.toString();;
                first = "";
                printNum = "";
                opcion = "";
                break;
            case 'mult':
                const respu = x*y;
                board.textContent = respu.toFixed(2).toString();;
                first = "";
                printNum = "";
                opcion = "";
                break;
            case 'div':
                const respue = x/y;
                board.textContent = respue.toFixed(2).toString();;
                first = "";
                printNum = "";
                opcion = "";
                break;
        }
    }
})

reset.addEventListener('click', () => {
    board.textContent = "";
    first = "";
    printNum = "";
    opcion = "";
})
