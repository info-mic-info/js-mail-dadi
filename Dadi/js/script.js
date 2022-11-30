// PROBLEMA

// Gioco dei dadi Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.




// 1 - Generare un numero random da 1 a 6, sia per il computer 
let number_player = Math.floor(Math.random() * 6) + 1;
// 2 - Generare un numero random da 1 a 6, sia per il giocatore 
let number_computer = Math.floor(Math.random() * 6) + 1;



// 3 - Controllare il valore più alto

// 3.1 SE il giocatore e il computer hanno lo stesso numero 
if (number_player == number_computer) {
    console.log(`numero giocatore è: ${number_player}`)
    console.log(`numero del computer è: ${number_computer}`)
    console.log(`PAREGGIO`)
}
// 3.2 SE il giocatore ha il dado con il punteggio più basso, mostra il meggaggio "il computer ha vinto"
else if (number_computer > number_player) {
    console.log(`numero giocatore è: ${number_player}`)
    console.log(`numero del computer è: ${number_computer}`)
    console.log(`IL COMPUTER HA VINTO`)
}
// 3.3 ALTRIMENTI il giocatore ha il dado con il punteggio più alto, mostra il meggaggio "hai vinto tu"
else  {
    console.log(`numero giocatore è: ${number_player}`)
    console.log(`numero del computer è: ${number_computer}`)
    console.log(`HAI VINTO TU`)

}