import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/domain/persona';
import { ContactosService } from 'src/app/services/contactos.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
})
export class ContactoComponent {
  //id: string = ""
  //nombre: string = ""

  persona: Persona = new Persona();

  constructor(
    private router: Router,
    private contactoServices: ContactosService
  ) {
    let params = this.router.getCurrentNavigation()?.extras.queryParams;
    if(params){
      console.log(params);
      this.persona = params['contacto']
    }
  }

  savePersona() {
    this.contactoServices.addContacto(this.persona);
    this.persona = new Persona();
    console.log('contactos', this.contactoServices.getContactos());
  }

  goAcerca() {
    console.log('LLamada al metodo', this.persona.id, this.persona.name);
    this.router.navigate(['paginas/acerca']);
  }

  goListado() {
    this.router.navigate(['paginas/listado-contacts']);
  }
}
