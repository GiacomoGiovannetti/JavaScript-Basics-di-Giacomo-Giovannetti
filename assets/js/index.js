const body = document.body;

//creazione section  

const section = document.createElement('section');
    body.appendChild(section);

// creazione contenitore counter con titolo

const container = document.createElement('div');
    section.appendChild(container);

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

//creazione contenitore Exp 

const expContainer = document.createElement('div');
    container.appendChild(expContainer);

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

//creazione container pulsanti
const btnContainer= document.createElement('div'); 
    container.appendChild(btnContainer);

//creazione pulsanti decremento

const btnDecrement10 = document.createElement('div');
    btnContainer.appendChild(btnDecrement10);
const valueBtnDecrement10 = document.createElement('p');
    valueBtnDecrement10.textContent= '-10'; 
    btnDecrement10.appendChild(valueBtnDecrement10);

const btnDecrement1 = document.createElement('div');
    btnContainer.appendChild(btnDecrement1);
const valueBtnDecrement1 = document.createElement('p');
    valueBtnDecrement1.textContent='-1';
    btnDecrement1.appendChild(valueBtnDecrement1);

//creazione pulsante reset

const btnReset = document.createElement('div'); 
    btnContainer.appendChild(btnReset);
const valueBtnReset = document.createElement('p'); 
    valueBtnReset.textContent = 'Reset';
    btnReset.appendChild(valueBtnReset);

//creazione pulsanti incremento

const btnIncrement10 = document.createElement('div');
    btnContainer.appendChild(btnIncrement10);
const valueBtnIncrement10 = document.createElement('p');
    valueBtnIncrement10.textContent = '+10';
    btnIncrement10.appendChild(valueBtnIncrement10);

const btnIncrement1 = document.createElement('div');
    btnContainer.appendChild(btnIncrement1);
const valueBtnIncrement1 = document.createElement('p');
    valueBtnIncrement1.textContent= '+1';
    btnIncrement1.appendChild(valueBtnIncrement1);