const buttons = document.querySelectorAll('.btn');
const valore = document.querySelector('#value');

let count = 0; 

buttons.forEach(function(btn) {
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.id;
        if(styles.includes('decr-10')){
            count-= 10;
            console.log('hai cliccato -10');
        } 
        else if(styles.includes('decr-1')){
            count--;
            console.log('hai cliccato -1');
        }
        else if(styles.includes('incr-10')){
            count+= 10;
            console.log('hai cliccato +10');
        }
        else if(styles.includes('incr-1')){
            count++;
            console.log('hai cliccato -1')
        }
        else if(styles.includes('reset')){
            count = 0;
            console.log('il contatore è stato resettato');
        }

       valore.textContent = count ;  
    })
});
