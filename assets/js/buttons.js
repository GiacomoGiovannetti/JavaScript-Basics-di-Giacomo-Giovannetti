const buttons = document.querySelectorAll('.btn');
const valore = document.querySelector('#value');
let clickSound = new Audio('assets/audio/swoosh.mp3');

let count = 0; 

//Dichiarazione funzione di incremento/decremento/reset al click dei pulsanti 

buttons.forEach(function(btn) {
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.id;
        if(styles.includes('btn-10')){
            if(count <= 9){
                count = 0; 
            }else{
                count-= 10;
            }
        } 
        else if(styles.includes('decrement') && count > 0 ){
            count--;
        }
        else if(styles.includes('incr-10')){
            count+= 10;
        }
        else if(styles.includes('increment')){
            count++;
        }
        else if(styles.includes('reset')){
            count = 0;
        }

       valore.textContent = count ;
       clickSound.play();
    })
});
