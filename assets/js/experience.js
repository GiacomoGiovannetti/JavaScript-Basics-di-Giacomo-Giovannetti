const expAmount = document.querySelector('#exp');
const lvlValue = document.querySelector('#lvl-value');
const lvlPopUpDisplay = document.querySelector('#lvl-pop-up-container');
const lvlPopUpValue = document.querySelector('#lvl-pop-up');
 
let lvlCount = 1;
let expWidth = 0; 

lvlValue.textContent = lvlCount;

buttons.forEach(function(btn){
    btn.addEventListener('click', function(e){
        let counter = valore.textContent;
        let styles = e.currentTarget.id;

        if(styles.includes('incr-10')){
            expWidth += 100;
        }else if(styles.includes('increment')){
            expWidth+= 10;
        }else if(styles.includes('btn-10')){
                expWidth-= 100;
        }else if(styles.includes('decrement') && counter > 0){
            expWidth-= 10;
        }else if(styles.includes('reset')){
            expWidth -= expWidth;
            lvlCount = 1; //lvlCount -= lvlCount (cambia concezione di partenze del primo livello)
        }
        expAmount.style.width = `${expWidth}%`;

        hideLvlPopUp();
        lvlUpByPlus10(styles);
        lvlUpByPlus1(styles);
        lvlDownByMinus10(styles , counter);
        lvlDownByMinus1(styles , counter);

        lvlValue.textContent = lvlCount;
    })
})