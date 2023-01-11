import { Component } from '@angular/core';

import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html'
})
export class NoComunesComponent {


  // i18nSelect
  nombre: string = 'Daniel';
  genero: string = 'masculino';

  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural
  clientes: string [] = ['Maria','Pepe', 'Jose'];
  clientesMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'actualmete tenemos un cliente esperando',
    'other': 'actualmente tenemos # clientes esperando'
  }

  cambiarCliente(){
      this.nombre = 'Melissa'
      this.genero = 'femenino'
  }

  borrarCliente(){
    this.clientes.pop();
  }

  //KeyValue Pipe
  persona = {
    nombre: 'Daniel',
    edad: 21,
    dirección: 'Logroño, La Rioja'
  }

  //Json Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }

  ]

  //Async Pipe
  miObservable = interval(1000); //0,1,2,3,4,5,6,7,8,9....

  valorPromesa = new Promise((resolve, reject) => {

    setTimeout(() => {
      resolve('Tenemos data de promesa')
    },3500)
    
  })

}
