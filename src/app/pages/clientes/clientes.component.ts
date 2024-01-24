import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente } from '../../domain/cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  clientes: any
cliente: Cliente = new Cliente();


  constructor(private clienteService: ClienteService) {

  }

  ngOnInit(): void {
    this.clientes = this.clienteService.getClientes();
  }

  guardar(){
    this.clienteService.saveCliente(this.cliente).subscribe(data => {
      console.log(data);
      if (data.codigo == 1)
        this.ngOnInit()
      else
        alert("no se pudo ingresar" + data.mensaje);
    })
  }

  eliminar(cliente: Cliente){
     this.clienteService.deleteCliente(cliente).subscribe(data => {
      if (data.codigo == 1)
        this.ngOnInit()
      else
        alert("no se pudo ingresar" + data.mensaje);
     });
  }
}
