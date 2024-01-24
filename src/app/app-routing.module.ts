import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercadeComponent } from './pages/acercade/acercade.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ListaContactosComponent } from './pages/lista-contactos/lista-contactos.component';
import { ViewContactoComponent } from './pages/view-contacto/view-contacto.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { FacturasComponent } from './pages/facturas/facturas.component';

const routes: Routes = [
  {path: "paginas/acerca", component: AcercadeComponent},
  {path: "paginas/contacto", component: ContactoComponent},
  {path: "paginas/view-contacto/:id", component: ViewContactoComponent},
  {path: "paginas/listado-contacts", component: ListaContactosComponent},
  {path: "paginas/clientes", component: ClientesComponent},
  {path: "paginas/facturas", component: FacturasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
