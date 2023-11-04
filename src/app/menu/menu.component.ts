import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  pages = [
    {title: 'Acerca de', path: 'paginas/acerca'},
    {title: 'Contacto', path: 'paginas/contacto'},
    {title: 'Listado', path: 'paginas/listado-contacts'},
  ]
}
