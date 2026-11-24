import type { CategoriaTematica, EstadoStock, TalleRemera } from "./types.ts";

export interface EtiquetaTematica {
  readonly codigo: string;
  nombre: string;
  referenciaCultural?: string;
}

export interface PromocionAplicable {
  readonly id: string;
  titulo: string;
  porcentajeDescuento: number;
  activa: boolean;
}

export interface Remera {
  readonly id: number;
  nombre: string;
  categoria: CategoriaTematica;
  precioBase: number;
  estado: EstadoStock;
  tallesDisponibles: TalleRemera[];
  etiqueta: EtiquetaTematica;
  promocion?: PromocionAplicable;
  descripcion?: string;
}