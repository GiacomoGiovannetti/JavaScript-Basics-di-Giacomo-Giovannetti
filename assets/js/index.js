const body = document.body;

//creazione section  

const section = document.createElement('section');
    body.appendChild(section);

//dichiaro funzioni per creazione Elementi html 

function createDiv(nome, parent, id){
    nome = document.createElement('div');
    parent.appendChild(nome); 
    nome.setAttribute('id', `${id}`);
    return nome;
}

function createP(nome, parent , id, text){
    nome = document.createElement('p');
    parent.appendChild(nome);
    nome.setAttribute('id', `${id}`);
    nome.textContent = `${text}`;
}

function createBtn(nome, parent, id, classSelector){
    nome = document.createElement('div');
    parent.appendChild(nome); 
    nome.setAttribute('id', `${id}`);
    nome.setAttribute('class', `${classSelector}`);
    return nome;
}

//dichiaro container counter e titolo

const container = createDiv('container', section , 'container');

const title = document.createElement('h1');
    title.textContent = 'EXP Counter';
    container.appendChild(title);

//creazione contenitore exp e value 

const containerValueExp = createDiv('containerValueExp', container , 'value-exp-container');

//creazione value container e paragrafo value

const valueContainer = createDiv('valueContainer', containerValueExp, 'value-container');
const value = createP('value', valueContainer, 'value', '0')

//creazione contenitore Exp 

const expContainer = createDiv('expContainer', containerValueExp, 'exp-container');

//creazione barraExp e livello 

const expBar = createDiv('expBar', expContainer, 'exp-bar');
const exp = createDiv('exp', expBar, 'exp');
const lvlContainer = createDiv('lvlContainer', expContainer, 'lvl-container');
const lvl = createP('lvl', lvlContainer, 'lvl-value', '0');

//lvl pop-up container and lvl pop-up
const lvlPopUpContainer = createDiv('lvlPopUpContainer', containerValueExp, 'lvl-pop-up-container');
const lvlPopUp = createP('lvlPopUp', lvlPopUpContainer, 'lvl-pop-up');

//creazione container pulsanti

const btnContainer = createDiv('btnContainer', container , 'btn-container');

//creazione pulsanti decremento

const decrementBtnContainer = createDiv('decrementBtnContainer', btnContainer, 'decrement-btn-container');

const btnDecrement10 = createBtn('btnDecrement10' , decrementBtnContainer , 'btn-10', 'btn');
const valueBtnDecrement10 = createP('valueBtnDecrement10', btnDecrement10, 'value-btn-10', '-10');

const btnDecrement1 = createBtn('btnDecrement1', decrementBtnContainer, 'decrement', 'btn');
const valueBtnDecrement1 = createP('valueBtnDecrement1', btnDecrement1, 'value-btn-decrement', '-1')

//creazione pulsante reset

const btnReset = createBtn('btnReset', btnContainer, 'reset', 'btn');
const valueBtnReset = createP('valueBtn', btnReset, 'btn-reset', 'Reset');

//creazione pulsanti incremento

const incrementBtnContainer = createDiv('incrementBtnContainer', btnContainer, 'increment-btn-container');

const btnIncrement10 = createBtn('btnIncrement10', incrementBtnContainer, 'incr-10', 'btn');
const valueBtnIncrement10 = createP('valueBtnIncrement10', btnIncrement10, 'value-btn-incr-10', '+10');

const btnIncrement1 = createBtn('btnIncrement1', incrementBtnContainer, 'increment', 'btn');
const valueBtnIncrement1 = createP('valueBtnIncrement1', btnIncrement1, 'value-btn-increment', '+1');

//disattivo evidenziazione

body.addEventListener('selectstart', e => e.preventDefault());