const body = document.body;

//creazione section  

const section = document.createElement('section');
    body.appendChild(section);

// creazione contenitore counter con titolo

const container = document.createElement('div');
    section.appendChild(container);
    container.setAttribute('id' ,'container');

const title = document.createElement('h1');
    title.textContent = 'EXP Counter';
    container.appendChild(title);

//creazione contenitore valore e  paragrafo valore

const valueContainer = document.createElement('div');
    container.appendChild(valueContainer);
    valueContainer.setAttribute('id', 'value-container');

const value = document.createElement('p');
    value.textContent = '0';
    valueContainer.appendChild(value);
    value.setAttribute('id', 'value');

//creazione contenitore Exp 

const expContainer = document.createElement('div');
    container.appendChild(expContainer);
    expContainer.setAttribute('id', 'exp-container');

//creazione barra exp e livello 

const expBar = document.createElement('div');
    expContainer.appendChild(expBar);
    expBar.setAttribute('id', 'exp-bar')

const exp = document.createElement('div');
    expBar.appendChild(exp);
    exp.setAttribute('id', 'exp')

const lvlContainer= document.createElement('div');
    expContainer.appendChild(lvlContainer);
    lvlContainer.setAttribute('id', 'lvl-container');

const lvl= document.createElement('p');
    lvl.textContent= '0';
    lvlContainer.appendChild(lvl);
    lvl.setAttribute('id', 'lvl-value');

//creazione container pulsanti
const btnContainer= document.createElement('div'); 
    container.appendChild(btnContainer);
    btnContainer.setAttribute('id', 'btn-container');

//creazione pulsanti decremento

const btnDecrement10 = document.createElement('div');
    btnContainer.appendChild(btnDecrement10);
    btnDecrement10.setAttribute('class', 'btn');
    btnDecrement10.setAttribute('id', 'decr-10');
const valueBtnDecrement10 = document.createElement('p');
    valueBtnDecrement10.textContent= '-10'; 
    btnDecrement10.appendChild(valueBtnDecrement10);

const btnDecrement1 = document.createElement('div');
    btnContainer.appendChild(btnDecrement1);
    btnDecrement1.setAttribute('class', 'btn');
    btnDecrement1.setAttribute('id', 'decr-1');
const valueBtnDecrement1 = document.createElement('p');
    valueBtnDecrement1.textContent='-1';
    btnDecrement1.appendChild(valueBtnDecrement1);

//creazione pulsante reset

const btnReset = document.createElement('div'); 
    btnContainer.appendChild(btnReset);
    btnReset.setAttribute('class', 'btn');
    btnReset.setAttribute('id', 'reset');
const valueBtnReset = document.createElement('p'); 
    valueBtnReset.textContent = 'Reset';
    btnReset.appendChild(valueBtnReset);

//creazione pulsanti incremento

const btnIncrement10 = document.createElement('div');
    btnContainer.appendChild(btnIncrement10);
    btnIncrement10.setAttribute('class', 'btn');
    btnIncrement10.setAttribute('id', 'incr-10');
const valueBtnIncrement10 = document.createElement('p');
    valueBtnIncrement10.textContent = '+10';
    btnIncrement10.appendChild(valueBtnIncrement10);

const btnIncrement1 = document.createElement('div');
    btnContainer.appendChild(btnIncrement1);
    btnIncrement1.setAttribute('class', 'btn');
    btnIncrement1.setAttribute('id', 'incr-1');
const valueBtnIncrement1 = document.createElement('p');
    valueBtnIncrement1.textContent= '+1';
    btnIncrement1.appendChild(valueBtnIncrement1);