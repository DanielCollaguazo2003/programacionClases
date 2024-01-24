import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environments';
import { Cliente } from '../domain/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) {

  }


  //MEtodo para devolver clientes:
  getClientes(){
    let url = environment.WS_PATH + "/clientes/list"
    return this.http.get<any>(url)
  }

  //Metodo para guardar clientes
  saveCliente(cliente: Cliente){
    let url = environment.WS_PATH + "/clientes"
    return this.http.post<any>(url, cliente);
  }

  //Metodo para eliminar
  deleteCliente(cliente: Cliente){
    let url = environment.WS_PATH + `/clientes?id=${cliente.codigo}`
    return this.http.delete<any>(url);
  }

  //MEtodo para devolver un cliente:
  getClientePorId(codigo: number){
    let url = environment.WS_PATH + `/clientes?codigo=${codigo}`
    return this.http.get<any>(url)
  }
}
