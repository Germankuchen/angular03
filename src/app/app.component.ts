import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';

  nombre = 'Kuchen, Germán';
  PI = Math.PI;
  salario = 23500.5;
  hoy = new Date();
  prueba = 'ACA tenes';
  contrasena = 'pepe';
  activar = true;

}
