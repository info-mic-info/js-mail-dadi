
// PROBLEMA

// Mail
// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.  Non utilizzare le funzioni indexOf o includes!


// 1 - Creare un array con la lista delle email che possono accedere

const email = [`pippo@gmail.com`, `pluto@gmail.com`, `paperino@gmail.com`, `topolino@gmail.com`,]

// 2 - Chiedi all'utente di inserire la sua email

let cerca = prompt(`Inserisci la tua email:`)

let flag= false

// 3 - controllo tramite variabile booleana

for (let i=0; i < email.length; i++){
    if(email [i] == cerca){
        flag=true;
    }
}

// 3.1 - SE l'email risulta nella lista allora scrivi "l'email è presente nella lista"
if(flag == true){
    console.log ("l'email è presente nella lista")

}

// 3.1 - SE l'email non risulta nella lista allora scrivi "l'email non è presente nella lista"
else {
    console.log ("l'email non è presente nella lista")
}



