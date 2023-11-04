import { Injectable } from '@angular/core';
import { Persona } from '../domain/persona';

@Injectable({
  providedIn: 'root',
})
export class ContactosService {
  //contactos = [] //-> declaracion de array
  contactos: Persona[] = []; //-> Arreglo de objetos persona
  persona: Persona = new Persona();

  constructor() {}

  addContacto(persona: Persona) {
    let verificar = false;
  
    for (let i = 0; i < this.contactos.length; i++) {
      if (this.contactos[i].id === persona.id) {
        this.contactos[i] = persona;
        verificar = true;
        break; 
      }
    }
  
    if (verificar) {
      console.log('Persona Editada');
    } else {
      this.contactos.push(persona);
      verificar = true;
    }
  }
  

  getContactos() {
    return this.contactos;
  }

  encontrarPersona(persona: Persona) {
    this.contactos.forEach((persona) => {
      this.persona = persona;
    });
  }
}
