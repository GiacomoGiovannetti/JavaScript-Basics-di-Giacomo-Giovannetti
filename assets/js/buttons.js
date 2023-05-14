const buttons = document.querySelectorAll('.btn');
const valore = document.querySelector('#value');
const expAmount = document.querySelector('#exp');
const lvlValue = document.querySelector('#lvl-value');
const lvlPopUpDisplay = document.querySelector('#lvl-pop-up-container');
const lvlPopUpValue = document.querySelector('#lvl-pop-up');

let clickSound = new Audio('assets/audio/swoosh.mp3');

let count = 0; 
let lvlCount = 1;
let expWidth = 0;

lvlValue.textContent = lvlCount;

/*Dichiarazione funzione di incremento/decremento/reset del valore del counter al 
    click dei pulsanti e per sound effect al click dei pulsanti */
//dichiarazione funzione di incremento/decremento/reset della barra dell'esperienza al click dei pulsanti 

buttons.forEach(function(btn) {
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.id;
        if(styles.includes('btn-10')){
            if(count <= 9){
                count = 0; 
            }else{
                count-= 10;
            }
            expWidth-= 100;
        } 
        else if(styles.includes('decrement') && count > 0 ){
            count--;
            expWidth-= 10;
        }
        else if(styles.includes('incr-10')){
            count+= 10;
            expWidth += 100;
        }
        else if(styles.includes('increment')){
            count++;
            expWidth+= 10;
        }
        else if(styles.includes('reset')){
            count = 0;
            lvlCount = 1;
            expWidth -= expWidth;
        }
        expAmount.style.width = `${expWidth}%`;
        valore.textContent = count ;
        
        //funzioni per la barra dell'esperienza quando si verifica un level up/level down e per nascondere il pop-up
        hideLvlPopUp();
        lvlUpByPlus10(styles);
        lvlUpByPlus1(styles);
        lvlDownByMinus10(styles , count);
        lvlDownByMinus1(styles , count);
        
        lvlValue.textContent = lvlCount;
        clickSound.play();
    })
});
