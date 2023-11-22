import { Injectable } from '@angular/core';
import { Persona } from '../domain/persona';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore'

@Injectable({
  providedIn: 'root'
})
export class ContactoFirebaseService {

  private path = '/contactos'

  contactosRef: AngularFirestoreCollection<any>

  constructor(private db: AngularFirestore) {
    this.contactosRef = db.collection(this.path)

    this.contactosRef.valueChanges().subscribe(data => {
      console.log(data)
    })
  }

  getAll(){
    return this.contactosRef.valueChanges()
  }

  generateUid(){
    const uid = this.db.createId();
    return uid;
  }

  save(persona: Persona){
    const uid = this.db.createId()
    persona.uid = uid
    console.log('persona', persona)
    return this.contactosRef.doc(uid).set(Object.assign({}, persona));
  }

  update(persona: Persona){
    return this.contactosRef.doc(persona.uid).update(Object.assign({}, persona));
  }

  delete(persona: Persona){
    return this.contactosRef.doc(persona.uid).delete();
  }

  getPersona(uid: string){
    console.log('uid', uid)
    return this.db.doc(this.path+'/'+uid).valueChanges()
  }
}
