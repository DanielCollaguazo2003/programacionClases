import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/domain/persona';
import { ContactoFirebaseService } from 'src/app/services/contacto-firebase.service';
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

  constructor(private router: Router,
    private contactoServices: ContactosService,
    private contactoFirebaseService: ContactoFirebaseService){

      let params = this.router.getCurrentNavigation()?.extras.queryParams;
      if(params){
        console.log(params)
        this.persona = params['contacto']

      }
  }

  savePersona(){
    this.contactoServices.addContacto(this.persona)

    console.log('contacots', this.contactoServices.getContactos())

    this.contactoFirebaseService.save(this.persona)
    this.persona = new Persona();
  }

  goAcerca(){
    console.log("llamando acerca de ", this.persona)
    this.router.navigate(['paginas/acerca'])
  }

  goListado(){
    this.router.navigate(['paginas/listado-contactos'])
  }
}
