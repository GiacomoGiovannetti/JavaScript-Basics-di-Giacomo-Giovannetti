let lvlUpSound = new Audio('assets/audio/oh-yes.mp3');
let lvlDownSound = new Audio('assets/audio/oh-no.mp3');

//Funzioni Principali

    //funzione per il level up attraverso il pulsante +1 con reset della barra exp e sound effect
    function lvlUpByPlus1(styles){
        if(expWidth > 100 && styles.includes('increment')){
            expWidth -= expWidth;
            expWidth+= 10; 
            expAmount.style.width= `${expWidth}%`;
            lvlIncrease(styles);
        }
    }

    //funzione per il level up attraverso il pulsante +10 e sound effect 
    function lvlUpByPlus10(styles){
        if(expWidth > 100 && styles.includes('incr-10')){
            adjustExpWidthBtnPlus10();
            expAmount.style.width= `${expWidth}%`;
            lvlIncrease(styles)
        }
    }


    //funzione per il level down attravarso il pulsante -1 e sound effect 
    function lvlDownByMinus1(styles , counter){
        if(styles.includes('decrement')){
            refillExpBarBtnMinus1(counter);
            if(expWidth == 100){ // se dopo aver premuto meno uno la barra exp è piena diminuisce il lvl
                lvlDecrease(styles);
            }
        } 
    }

    //funzione per il level down attraverso il pulsante -10 e sound effect
    function lvlDownByMinus10(styles , counter){
        if(styles.includes('btn-10')){
            if(counter >= 10){
                expWidth += 100;
                lvlDecrease(styles);
            }
            adjustExpWidthAndLvlBtnMinus10(styles, counter);
            expAmount.style.width = `${expWidth}%`;
        }
    }

    //funzione per mostrare il messaggio level up/down  
    function lvlPopUpp(styles){
        displayLvlUp(styles);
        displayLvlDown(styles);
    }

    //funzione per nascondere il messaggio di level-up/down
    function hideLvlPopUp(){
        if(lvlPopUpDisplay.style.visibility == 'visible'){
            lvlPopUpDisplay.style.visibility = 'hidden';
        }
    }

//Funzioni usate da altre funzioni 

    /*funzione controllo expWidth se superiore a 100 la riporta in un valore compreso tra 0 e 100
    quando si verifica lvlUpByPlus10*/
    function adjustExpWidthBtnPlus10(){
        if(expWidth > 200){ //controlla se il valore di expWidth è superiore a 200 
            expWidth -= 200;   //in caso lo riporta a un valore compreso tra 0 e 100
        }else{
            expWidth -= 100;
        }
    }

    //funzione che riempie la expBar quando si verifica lvlDownByMinus1
    function refillExpBarBtnMinus1(counter){
        if(expWidth< 10 && counter >= 10){
            expWidth += 100;
            expAmount.style.width = `${expWidth}%`;       
        }
    }

    /*funzione  con value minore 10 imposta expWidth al valore del counter x10 
        e non diminuisce il livello se è uguale a uno qunado si verifica lvlDownByMinus10*/ 
    function adjustExpWidthAndLvlBtnMinus10(styles, counter){
        if(counter <=9){
            expWidth = counter*10;
            if(lvlCount > 1){
                lvlDecrease(styles);
            }
            }
    }

    //funzione incremento livello
    function lvlIncrease(styles){
        lvlCount++;
        lvlPopUpp(styles);
        lvlUpSound.play();
    }

    //funzione diminuzione livello
    function lvlDecrease(styles){
        lvlCount--;
        lvlPopUpp(styles);
        lvlDownSound.play();
    }

    //funzione che mostra messaggio level-up

    function displayLvlUp(styles){
        if(styles.includes('increment') || styles.includes('incr-10')){
            lvlPopUpValue.textContent ='LEVEL UP!';
            lvlPopUpDisplay.style.visibility = 'visible';
        }
    }

    //funzione che mostra messaggio lvl-down

    function displayLvlDown(styles){
        if(styles.includes('decrement') || styles.includes('btn-10')){
            lvlPopUpValue.textContent ='LEVEL DOWN!';
            lvlPopUpDisplay.style.visibility = 'visible';
        }
    }
