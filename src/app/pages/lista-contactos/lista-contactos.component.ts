import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Persona } from 'src/app/domain/persona';
import { ContactoFirebaseService } from 'src/app/services/contacto-firebase.service';
import { ContactosService } from 'src/app/services/contactos.service';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.css']
})
export class ListaContactosComponent {
  contactos:Persona[] = []

  listaContactos: any

  constructor(private contactoService: ContactosService,
      private router: Router, private contactoFirebaseService: ContactoFirebaseService){
    this.contactos = contactoService.getContactos()

    this.listaContactos = this.contactoFirebaseService.getAll()
  }

  goEditar(contacto: any){
    console.log("editando", contacto)

    let params: NavigationExtras = {
      queryParams: {
        contacto: contacto
      }
    }

    this.router.navigate(['paginas/contacto'], params)
  }

}
