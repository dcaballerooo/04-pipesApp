import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent {

  nombreLower: string = 'daniel'
  nombreUpper: string = 'DANIEL'
  nombreCompleto: string = 'DaNieL CabaLleRo'

  fecha: Date = new Date(); //El día de hoy

}
