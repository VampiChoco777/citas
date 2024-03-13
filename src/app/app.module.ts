import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CearCitasComponent } from './components/cear-citas/cear-citas.component';
import { ListCitasComponent } from './components/list-citas/list-citas.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CearCitasComponent,
    ListCitasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  listCitas: any [] = [];
  agregarCita(cita: any) {
    this.listCitas.push(cita);
  }
}
