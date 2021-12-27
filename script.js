let boxContainer = document.getElementById("numbers"); //richiamo elemento html
const numbersArray = []; //genero array vuoto

for (let index = 0; index < 5; index++) {  //con ciclo for genero 5 numeri casuali 
    let randomNumber = Math.floor(Math.random()*50+1);
    if(!numbersArray.includes(randomNumber)){ //se l'array include già il numero casuale, non lo aggiugerà, altrimenti verrà aggiunto
        numbersArray.push(randomNumber);
    }
}
console.log (numbersArray)
boxContainer.innerHTML += numbersArray;  //stampo in html il mio array

setTimeout (play, 3000); //setto un timer di 30s che poi lancerà la funzione

function play (){
    boxContainer.innerHTML = '';
    const userArray = [];
    for (let index = 1; index < numbersArray.length; index++) {
        let userNumber = parseInt(prompt('inserisci i numeri che hai visto'));
        if(numbersArray.includes(userNumber)){
            userArray.push(numbersArray)
            boxContainer.innerHTML = userArray;
        }
    }
}


