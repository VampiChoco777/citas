import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-cear-citas',
  templateUrl: './cear-citas.component.html',
  styleUrl: './cear-citas.component.css'
})
export class CearCitasComponent {
  nombre: string = '';
  fecha: string = '';
  hora: string = '';
  sintomas: string = '';

  formularioIncorrecto: boolean = false;

  agregarCita() {
    if(this.nombre == '' || this.fecha == '' || this.hora == '' || this.sintomas == '') {
      this.formularioIncorrecto = true;
      return;
    }
    this.formularioIncorrecto = false;
    const cita =
    {
      nombre: this.nombre,
      fecha: this.fecha,
      hora: this.hora,
      sintomas: this.sintomas
    }
    this.nuevaCita.emit(cita);
    this.resetCampos();
  }

  resetCampos()
  {
    this.nombre = '';
    this.fecha = '';
    this.hora = '';
    this.sintomas = '';
  }

  @Output() nuevaCita = new EventEmitter<any>();
  constructor() {

  }

}
