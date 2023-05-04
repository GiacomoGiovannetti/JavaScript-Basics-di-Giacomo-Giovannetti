function lvlUpByPlus1(styles , counter){
    if(expWidth > 100 && styles.includes('increment')){
        expWidth -= expWidth;
        expWidth+= 10; 
        lvlCount++;
        expAmount.style.width= `${expWidth}%`;
        console.log('prova' , expWidth);
    }
}

function lvlUpByPlus10(styles , counter){
    if(styles.includes('incr-10') && expWidth >= 110 && expWidth <= 190){
        let previousExp = expWidth ; 
        expWidth -= expWidth;
        previousExp -= 100;
        expAmount.style.width = `${expWidth}%`;
        expAmount.style.width = `${previousExp}%`;
        lvlCount++;
        expWidth = previousExp;
    }else if(expWidth > 100 && styles.includes('incr-10')){
        //expWidth -= expWidth;
        expWidth-= 100; 
        lvlCount++
        expAmount.style.width= `${expWidth}%`;
        console.log('full lvl up', expWidth)
    }
}

function lvlDownByMinus1(styles , counter){
    if(styles.includes('decrement')){
        if(counter == 1){
            expWidth -= 10; 
            console.log('counter maggiore di 1');
        }else if(expWidth <= 10 && counter >= 10){
            expWidth += 100;
            lvlCount--;
            console.log('counter maggiore di 10');
        }
    }
}

function lvlDownByMinus10(styles , counter){
    if(styles.includes('btn-10')){
        if(counter >= 10){
                expWidth += 100;
                expAmount.style.width = `${expWidth}%`;
                lvlCount--;
                console.log('full lvl down', expWidth);
        }else if(counter <=9){
            expWidth = counter*10;
            if(lvlCount > 1){
                lvlCount--;
            }
            expAmount.style.width = `${expWidth}%`;
        }
        //expWidth -= 100;
        //console.log(expWidth);
    }
}