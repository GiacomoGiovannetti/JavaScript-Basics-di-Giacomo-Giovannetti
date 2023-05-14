let lvlUpSound = new Audio('assets/audio/oh-yes.mp3');
let lvlDownSound = new Audio('assets/audio/oh-no.mp3');


//dichiarazione funzione per il level up attraverso il pulsante +1 e sound effect level up
function lvlUpByPlus1(styles){
    if(expWidth > 100 && styles.includes('increment')){
        expWidth -= expWidth;
        expWidth+= 10; 
        lvlCount++;
        expAmount.style.width= `${expWidth}%`;
        lvlPopUpp(styles);
        lvlUpSound.play();
    }
}

//dichirazione funzione per il level up attraverso il pulsante +10 e sound effect level up
function lvlUpByPlus10(styles){
    if(styles.includes('incr-10') && expWidth >= 110 && expWidth <= 190){
        let previousExp = expWidth ; 
        expWidth -= expWidth;
        previousExp -= 100;
        expAmount.style.width = `${previousExp}%`;
        lvlCount++;
        expWidth = previousExp;
        lvlPopUpp(styles);
        lvlUpSound.play();
    }else if(expWidth > 100 && styles.includes('incr-10')){
        if(expWidth > 200){
            expWidth -= 200;
        }else{
            expWidth -= 100;
        }
        lvlCount++;
        expAmount.style.width= `${expWidth}%`;
        lvlPopUpp(styles);
        lvlUpSound.play();
    }
}


//dichiarazione funzione per il level down attravarso il pulsante -1 e sound effect level down
function lvlDownByMinus1(styles , counter){
    if(styles.includes('decrement')){
        if(counter == 0){
            expWidth = 0;
        }else if(expWidth <= 10 && counter >= 10){
            expWidth += 100;
            expAmount.style.width = `${expWidth}`;
            if(expWidth == 100){
                lvlCount--;
                lvlPopUpp(styles);
                lvlDownSound.play();
                expAmount.style.width = `${expWidth}%`;
            }
        }else if(expWidth== 100){
            lvlCount--;
            lvlPopUpp(styles);
            lvlDownSound.play();
        }
    } 
}

//dichiarazione funzione per il level down attraverso il pulsante -10 e sound effect level down
function lvlDownByMinus10(styles , counter){
    if(styles.includes('btn-10')){
        if(counter >= 10){
            expWidth += 100;
            if(expWidth > 100){
                expWidth-= 100;
            }
            lvlCount--;
            lvlPopUpp(styles);
            lvlDownSound.play();
        }else if(counter <=9){
            expWidth = counter*10;
            if(lvlCount > 1){
                lvlCount--;
                lvlPopUpp(styles);
                lvlDownSound.play();
            }
        }
        expAmount.style.width = `${expWidth}%`;
    }
}

//dichiarazione funzione per mostrare il messaggio level up/down  
function lvlPopUpp(styles){
    if(styles.includes('increment') || styles.includes('incr-10')){
        lvlPopUpValue.textContent ='LEVEL UP!';
        lvlPopUpDisplay.style.visibility = 'visible';
    }else if(styles.includes('decrement') || styles.includes('btn-10')){
        lvlPopUpValue.textContent ='LEVEL DOWN!';
        lvlPopUpDisplay.style.visibility = 'visible';
    }
}

//dichiarazione funzione per nascondere il messaggio di level-up/down
function hideLvlPopUp(){
    if(lvlPopUpDisplay.style.visibility == 'visible'){
        lvlPopUpDisplay.style.visibility = 'hidden';
    }
}


