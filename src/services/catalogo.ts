import type { PromocionAplicable, Remera } from "../models/remera.ts";
import { mapRemeraDtoToRemera, type RemeraExternaDTO } from "../models/remera-dto.ts";
import type { CategoriaTematica } from "../models/types.ts";

export interface ResumenPrecioRemera {
  readonly id: number;
  nombre: string;
  categoria: CategoriaTematica;
  precioOriginal: number;
  precioFinal: number;
  tieneDescuento: boolean;
}

export function calcularResumenesPrecios(remeras: readonly Remera[]): ResumenPrecioRemera[] {
  return remeras.map((remera) => {
    const promoActiva: PromocionAplicable | undefined =
      remera.promocion && remera.promocion.activa ? remera.promocion : undefined;

    const descuento = promoActiva
      ? (remera.precioBase * promoActiva.porcentajeDescuento) / 100
      : 0;
    const precioFinal = Math.round(remera.precioBase - descuento);

    return {
      id: remera.id,
      nombre: remera.nombre,
      categoria: remera.categoria,
      precioOriginal: remera.precioBase,
      precioFinal,
      tieneDescuento: Boolean(promoActiva),
    };
  });
}

export function filtrarRemerasDisponiblesPorCategoria(
  remeras: readonly Remera[],
  categoria?: CategoriaTematica
): Remera[] {
  return remeras.filter((remera) => {
    const disponible = remera.estado !== "agotada";
    const coincideCategoria = categoria ? remera.categoria === categoria : true;
    return disponible && coincideCategoria;
  });
}

export function buscarRemeraPorId(remeras: readonly Remera[], id: number): Remera | undefined {
  return remeras.find((remera) => remera.id === id);
}

export function importarRemerasDesdeDto(
  dtos: readonly RemeraExternaDTO[],
  ultimoIdActual: number
): Remera[] {
  return dtos.map((dto, index) => mapRemeraDtoToRemera(dto, ultimoIdActual + index + 1));
}