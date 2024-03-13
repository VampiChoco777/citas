import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  listCitas: any [] = [];
  agregarCita(cita: any) {
    this.listCitas.push(cita);
  }
  title = 'citas';

  eliminarCitaListado(index: number) {
    this.listCitas.splice(index, 1);
  }
}
