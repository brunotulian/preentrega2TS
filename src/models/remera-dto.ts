import type { Remera } from "./remera.ts";
import type { CategoriaTematica, EstadoStock, TalleRemera } from "./types.ts";

export interface RemeraExternaDTO {
  codigoExterno: string;
  tituloProducto: string;
  rubro: CategoriaTematica;
  precioUnitario: number;
  estadoProveedor?: EstadoStock;
  tallesCsv: string;
  codigoEtiqueta: string;
  nombreEtiqueta: string;
  referencia?: string;
  detalle?: string;
}

function normalizarTalles(tallesCsv: string): TalleRemera[] {
  const validos: TalleRemera[] = ["S", "M", "L", "XL"];
  const talles = tallesCsv
    .split(",")
    .map((talle) => talle.trim().toUpperCase())
    .filter((talle): talle is TalleRemera => validos.includes(talle as TalleRemera));

  return talles.length > 0 ? talles : ["M", "L"];
}

export function mapRemeraDtoToRemera(dto: RemeraExternaDTO, idGenerado: number): Remera {
  return {
    id: idGenerado,
    nombre: dto.tituloProducto.trim(),
    categoria: dto.rubro,
    precioBase: dto.precioUnitario,
    estado: dto.estadoProveedor ?? "disponible",
    tallesDisponibles: normalizarTalles(dto.tallesCsv),
    etiqueta: {
      codigo: dto.codigoEtiqueta.trim().toUpperCase(),
      nombre: dto.nombreEtiqueta.trim(),
      referenciaCultural: dto.referencia,
    },
    descripcion: dto.detalle,
  };
}