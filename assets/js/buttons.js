const buttons = document.querySelectorAll('.btn');
const buttonsContainer = document.querySelector('#btn-container');
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

/* funzione di incremento/decremento/reset del valore del counter, della barra dell'esperienza al 
 e sound effect al click dei pulsanti*/

buttonsContainer.addEventListener('click', function(e){
    const styles = e.target.id;
         if(styles.includes('btn-10')){
             if(count <= 9){ // non fa scendere il valore sotto lo zero
                 count = 0; 
             }else{
                 count-= 10;
             }
             expWidth-= 100;
             clickSound.play();
         } 
        else if(styles.includes('decrement') && count > 0 ){
             count--;
             expWidth-= 10;
             clickSound.play();
         }
         else if(styles.includes('incr-10')){
             count+= 10;
             expWidth += 100;
         }
         else if(styles.includes('increment')){
             count++;
             expWidth+= 10;
             clickSound.play();
         }
         else if(styles.includes('reset')){
             count = 0;
             lvlCount = 1;
             expWidth -= expWidth;
             clickSound.play();
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

     })