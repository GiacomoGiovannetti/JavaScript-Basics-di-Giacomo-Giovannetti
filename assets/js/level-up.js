function lvlUpByPlus1(styles){
    if(expWidth > 100 && styles.includes('increment')){
        expWidth -= expWidth;
        expWidth+= 10; 
        lvlCount++;
        expAmount.style.width= `${expWidth}%`;
        lvlPopUpp(styles);
    }
}

function lvlUpByPlus10(styles){
    if(styles.includes('incr-10') && expWidth >= 110 && expWidth <= 190){
        let previousExp = expWidth ; 
        expWidth -= expWidth;
        previousExp -= 100;
        expAmount.style.width = `${expWidth}%`;
        expAmount.style.width = `${previousExp}%`;
        lvlCount++;
        expWidth = previousExp;
        lvlPopUpp(styles)
    }else if(expWidth > 100 && styles.includes('incr-10')){
        //expWidth -= expWidth;
        expWidth-= 100; 
        lvlCount++
        expAmount.style.width= `${expWidth}%`;
        console.log('full lvl up', expWidth);
        lvlPopUpp(styles)
    }
}

function lvlDownByMinus1(styles , counter){
    if(styles.includes('decrement')){
        if(counter == 1){
            expWidth -= 10; 
            console.log('counter maggiore di 1');
        }else if(expWidth <= 10 && counter >= 10){
            expWidth += 100;
            if(expWidth == 100){
                lvlCount--;
                lvlPopUpp(styles);
                expAmount.style.width = `${expWidth}%`;
            }
        }else if(expWidth== 100){
            lvlCount--;
            lvlPopUpp(styles);
            expAmount.style.width = `${expWidth}%`;
        }
    }   
}

function lvlDownByMinus10(styles , counter){
    if(styles.includes('btn-10')){
        if(counter >= 10){
            expWidth += 100;
            if(expWidth > 100){
                expWidth-= 100;
            }
            expAmount.style.width = `${expWidth}%`;
            lvlCount--;
            lvlPopUpp(styles)
        }else if(counter <=9){
            expWidth = counter*10;
            if(lvlCount > 1){
                lvlCount--;
                lvlPopUpp(styles)
            }
            expAmount.style.width = `${expWidth}%`;
        }
    }
}

function lvlPopUpp(styles){
    if(styles.includes('increment') || styles.includes('incr-10')){
        lvlPopUpValue.textContent ='LEVEL UP!';
        lvlPopUpDisplay.style.display = 'block';
    }else if(styles.includes('decrement') || styles.includes('btn-10')){
        lvlPopUpValue.textContent ='LEVEL DOWN!';
        lvlPopUpDisplay.style.display = 'block';
    }
}

function hideLvlPopUp(){
    if(lvlPopUpDisplay.style.display == 'block'){
        lvlPopUpDisplay.style.display = 'none';
    }
}


