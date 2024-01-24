import { Component } from '@angular/core';
import { Cliente } from 'src/app/domain/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import { Detalle } from '../../domain/detalle';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Factura } from 'src/app/domain/factura';
import { FacturaService } from 'src/app/services/factura.service';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css']
})
export class FacturasComponent {
  clientes: any
  cliente: Cliente = new Cliente();
  date: Date = new Date();

  detalle: Detalle = new Detalle();
  detalles: Detalle[] = [];


  facturas: any;
  factura: Factura = new Factura();

  codigoDetalle: number = 0;

  constructor(private clienteService: ClienteService, private facturaService: FacturaService) {

  }

  ngOnInit(): void {
    this.clientes = this.clienteService.getClientes();
    this.facturas = this.facturaService.getFacturas();
  }

  changeCliente(e: any) {
    console.log(e.target.value);
    this.clienteService.getClientePorId(e.target.value).subscribe(data => {
      console.log(data);
      this.cliente = data;
    })

  }
  form = new FormGroup({
    //codigo: new FormControl(this.codigoDetalle, []),
    nombre: new FormControl('', [Validators.required]),
    cantidad: new FormControl(0, [Validators.required, Validators.min(1)]),
    precio: new FormControl(0, [Validators.required, Validators.min(0.01)]),
  })

  agregarDetalle() {
    if (this.form.invalid) {
      alert('La informacion ingresada es incorrecta o incompleta');
      return
    }
    const detalle: Detalle = <Detalle>(this.form.getRawValue());
   // detalle.codigo = this.codigoDetalle;
    this.detalles.push(detalle);
    console.log(detalle);
    this.codigoDetalle = this.codigoDetalle + 1;
    this.form.reset();
  }

  guardarFactura() {
    /*
    codigo?: number;
    cliente?: Cliente;
    numero?: number;
    fecha?: Date;
    total?: number;
    detalles?: Detalle[];
    * */
    const codigo = this.facturas.length;
    const numero = "001-001-000000" + codigo
    const fecha = new Date();
    let totalFactura = this.detalles.reduce((total, detalle) => total + detalle.precio, 0);

    this.factura.cliente = this.cliente;
    this.factura.codigo = codigo;
    this.factura.fechaEmision = fecha;
    this.factura.numero = numero;
    this.factura.total = totalFactura;
    this.factura.detalles = this.detalles;



    this.facturaService.saveFactura(this.factura).subscribe(data => {
      console.log(data);
      if (data.codigo == 1)
        this.ngOnInit()
      else
        alert("no se pudo ingresar" + data.mensaje);
    })

    console.log(this.factura)
  }
}
