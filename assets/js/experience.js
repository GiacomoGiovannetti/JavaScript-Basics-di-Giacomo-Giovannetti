const expAmount = document.querySelector('#exp');
const lvlValue = document.querySelector('#lvl-value');
 
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

        lvlUpByPlus10(styles , counter);
        lvlUpByPlus1(styles , counter);
        lvlDownByMinus10(styles , counter);
        lvlDownByMinus1(styles , counter);

        lvlValue.textContent = lvlCount;
    })
})
