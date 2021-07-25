const items = document.querySelectorAll('.key_num');
const del = document.querySelector('.delete');
const sum = document.querySelector('.sum');
const resta = document.querySelector('.menos');
const mult = document.querySelector('.mult');
const div = document.querySelector('.division');
const equal = document.querySelector('.equal');
const reset = document.querySelector('.reset');
const circle = document.querySelector('.circle');
let themes = localStorage.getItem('themes');
let board = document.querySelector('.result');
let printNum = "";
let first = "";
let opcion = "";

const enableFirstTheme = () => {
    document.body.classList.remove('thirdtheme');
    localStorage.setItem('themes', 'first');
    circle.classList.remove('third_theme');
}

const enableSecondTheme = () => {
    document.body.classList.add('sectheme');
    localStorage.setItem('themes', 'second');
    circle.classList.add('second_theme');
}

const enableThirdTheme = () => {
    document.body.classList.remove('sectheme');
    localStorage.setItem('themes', 'third');
    document.body.classList.add('thirdtheme');
    circle.classList.remove('second_theme');
    circle.classList.add('third_theme');
}

if (themes){
    if (themes == 'second') enableSecondTheme();
    if (themes == 'third') enableThirdTheme();
}

circle.addEventListener('click', ()=>{
    themes = localStorage.getItem('themes');
    if(themes){
        switch(themes){
            case 'first':
                enableSecondTheme();
                break;
            case 'second':
                enableThirdTheme();
                break;
            case 'third':
                enableFirstTheme();
                break;
        }
    }else{
        enableSecondTheme();
    }
})

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
