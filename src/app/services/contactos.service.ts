import { Injectable } from '@angular/core';
import { Persona } from '../domain/persona';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {

  //contactos = [] //-> declaracion de array
  contactos:Persona[] = [] //-> Arreglo de objetos persona

  constructor() { }

  addContacto(persona: Persona){
    this.contactos.push(persona);
  }

  getContactos(){
    return this.contactos;
  }
}
