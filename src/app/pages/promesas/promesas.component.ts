import { Component, OnInit } from '@angular/core';
import { rejects } from 'assert';
import { resolve } from 'dns';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css']
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    this.getUsuarios();
    /** CREACION DE LA PROMSESA */
    /* const promesa = new Promise( (resolve , rejects) => {
        if( false ){
          resolve('Hola Mundo');
        } else {
          rejects('Algo salio mal');
        }
    });

    /** resolvemos la promesa 
     * .catch -> recuperamos el error y lo tratamos.
    */
    /*promesa
    .then(mensaje => {
      console.log(mensaje);
    })
    .catch( error => console.log('Error en mi promesa' , error ) );

    console.log('Fin del Init');*/
  }
  getUsuarios() {
    fetch('https://reqres.in/api/users')
    .then( resp => console.log(resp));
  }

}
