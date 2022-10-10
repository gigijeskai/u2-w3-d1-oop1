
//  let form = document.querySelector('form');
//  let nome = document.querySelector('#nome');
//  let cognome = document.querySelector('#cognome');
//  let anni = document.querySelector('#anni');



class Persona {
    constructor (nome,cognome,anni){

     this.nome = nome
     this.cognome = cognome
     this.anni = anni
     }
    createTablePersone(){

let table = document.createElement('table')
let tr = document.createElement('tr')
 table.appendChild(tr)
let td = document.createElement('td')
 tr.appendChild(td)
 td.value = this.nome
// let persone = document.querySelector('persone')
// persone.appendChild(table)

    } 
 }

//  let persone = [
//     new persona(document.querySelector('#nome').value),
//    (document.querySelector('#cognome').value),
//    (document.querySelector('#anni').value)
//  ]

