const body = document.body;

//creazione section  

const section = document.createElement('section');
    body.appendChild(section);

//funzione per creazione elementi HTML
function create(nome, tag, parent, id, text,  classSelector){
    nome = document.createElement(tag);
    parent.appendChild(nome);
    nome.setAttribute('id', `${id}`);
    nome.textContent = `${text}`;
    if(classSelector){ //se è presente il parametro classSelector crea l'attributo class 
        nome.setAttribute('class', `${classSelector}`)
    }
    return nome;
}

//dichiaro container counter e titolo

const container = create('container', 'div', section, 'container', '');

const title= create('title', 'h1', container, '', 'EXP Counter', '');

//creazione contenitore exp e value 

const containerValueExp = create('containerValueExp', 'div', container , 'value-exp-container', '');

//creazione value container e paragrafo value

const valueContainer = create('valueContainer','div', containerValueExp, 'value-container', '');
const value = create('value', 'p', valueContainer, 'value', '0', '');

//creazione contenitore Exp 

const expContainer = create('expContainer','div', containerValueExp, 'exp-container', '');

//creazione barraExp e livello 

const expBar = create('expBar','div', expContainer, 'exp-bar', '');
const exp = create('exp','div', expBar, 'exp', '');
const lvlContainer = create('lvlContainer','div', expContainer, 'lvl-container','');
const lvl = create('lvl', 'p', lvlContainer, 'lvl-value', '0','');

//lvl pop-up container and lvl pop-up
const lvlPopUpContainer = create('lvlPopUpContainer','div', containerValueExp, 'lvl-pop-up-container', '');
const lvlPopUp = create('lvlPopUp', 'p', lvlPopUpContainer, 'lvl-pop-up','');

//creazione container pulsanti

const btnContainer = create('btnContainer','div', container , 'btn-container', ' ');

//creazione pulsanti decremento

const decrementBtnContainer = create('decrementBtnContainer', 'div', btnContainer, 'decrement-btn-container','');

const btnDecrement10 = create('btnDecrement10' , 'div', decrementBtnContainer , 'btn-10','', 'btn');
const valueBtnDecrement10 = create('valueBtnDecrement10', 'p', btnDecrement10, 'value-btn-10', '-10');

const btnDecrement1 = create('btnDecrement1', 'div', decrementBtnContainer, 'decrement','', 'btn');
const valueBtnDecrement1 = create('valueBtnDecrement1', 'p', btnDecrement1, 'value-btn-decrement', '-1');

//creazione pulsante reset

const btnReset = create('btnReset', 'div', btnContainer, 'reset','', 'btn');
const valueBtnReset = create('valueBtn', 'p', btnReset, 'btn-reset', 'Reset');

//creazione pulsanti incremento

const incrementBtnContainer = create('incrementBtnContainer','div', btnContainer, 'increment-btn-container','');

const btnIncrement10 = create('btnIncrement10', 'div', incrementBtnContainer, 'incr-10','', 'btn');
const valueBtnIncrement10 = create('valueBtnIncrement10', 'p', btnIncrement10, 'value-btn-incr-10', '+10');

const btnIncrement1 = create('btnIncrement1', 'div', incrementBtnContainer, 'increment','', 'btn');
const valueBtnIncrement1 = create('valueBtnIncrement1', 'p', btnIncrement1, 'value-btn-increment', '+1');

//disattivo evidenziazione

body.addEventListener('selectstart', e => e.preventDefault());