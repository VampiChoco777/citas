import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-citas',
  templateUrl: './list-citas.component.html',
  styleUrl: './list-citas.component.css'
})
export class ListCitasComponent {

@Input() listadoCitas: any;
@Output() deleteCita = new EventEmitter<number>();
constructor() {
}
ngOnit(): void {
}
eliminarCita(index: number) {
  this.listadoCitas.splice(index, 1);
  this.deleteCita.emit(index);
}
}
