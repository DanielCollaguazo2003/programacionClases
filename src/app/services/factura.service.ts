import { Injectable } from '@angular/core';
import { environment } from '../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Factura } from '../domain/factura';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {


  constructor(private http: HttpClient) {

  }


  //MEtodo para devolver Facturas:
  getFacturas(){
    let url = environment.WS_PATH + "/facturas/list"
    return this.http.get<any>(url)
  }

  //Metodo para guardar Facturas
  saveFactura(factura: Factura){
    let url = environment.WS_PATH + "/facturas"
    return this.http.post<any>(url, factura);
  }

  //Metodo para eliminar
  deleteFactura(factura: Factura){
    let url = environment.WS_PATH + `/facturas?id=${factura.codigo}`
    return this.http.delete<any>(url);
  }

  //MEtodo para devolver una Factura:
  getFacturaPorId(){
    let url = environment.WS_PATH + "/facturas/list"
    return this.http.get<any>(url)
  }
}
