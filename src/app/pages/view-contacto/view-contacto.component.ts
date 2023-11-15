import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/domain/persona';
import { ContactoFirebaseService } from '../../services/contacto-firebase.service';

@Component({
  selector: 'app-view-contacto',
  templateUrl: './view-contacto.component.html',
  styleUrls: ['./view-contacto.component.css']
})
export class ViewContactoComponent {
  persona: Persona = new Persona();

  constructor(
    private router: Router,
    private route: ActivatedRoute,  //con estos pasamos el parametro el cual le pasamos como parametro en la ruta
    private _contactoFirebaseService: ContactoFirebaseService,
  )
  {
    this.route.params.subscribe(params => {
      console.log(params)
      if(params['id']){
        this.loadPersona(params['id'])
      }
    });
  }

  loadPersona(uid: string){
    this._contactoFirebaseService.getPersona(uid).subscribe(data => {
      console.log(data)
      this.persona = <any> data
    });
  }

  goAcerca() {
    console.log('LLamada al metodo', this.persona.id, this.persona.name);
    this.router.navigate(['paginas/acerca']);
  }

  goListado() {
    this.router.navigate(['paginas/listado-contacts']);
  }

  // getPersona(uid: string){
  //   console.log('uid: ', uid)
  //   //return this.contactosRef.doc(uid).get();
  // }

}
