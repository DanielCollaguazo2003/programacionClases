import { Cliente } from "./cliente";
import { Detalle } from "./detalle";

export class Factura
{
  codigo?: number;
  cliente?: Cliente;
  numero?: String;
  fechaEmision?: Date;
  total?: number;
  detalles?: Detalle[];
}
