import type { Remera } from "../models/remera.ts";
import type { RemeraExternaDTO } from "../models/remera-dto.ts";

export const REMERAS_INICIALES: Remera[] = [
  {
    id: 1,
    nombre: "Remera Retro Campeón del Mundo",
    categoria: "Fútbol",
    precioBase: 28000,
    estado: "disponible",
    tallesDisponibles: ["S", "M", "L", "XL"],
    etiqueta: {
      codigo: "FUT-10",
      nombre: "Clásicos del Fútbol",
      referenciaCultural: "Homenaje a la albiceleste y el dorsal 10",
    },
    promocion: {
      id: "promo-fut-15",
      titulo: "15% OFF Selección y Clásicos",
      porcentajeDescuento: 15,
      activa: true,
    },
    descripcion: "Algodón peinado 24/1 con estampa serigráfica de alto detalle.",
  },
  {
    id: 2,
    nombre: "Remera En la Boca del Miedo",
    categoria: "Películas",
    precioBase: 26500,
    estado: "ultimas_unidades",
    tallesDisponibles: ["M", "L"],
    etiqueta: {
      codigo: "CIN-THR",
      nombre: "Terror y Suspenso",
      referenciaCultural: "Cine de horror psicológico de los 90",
    },
    descripcion: "Edición limitada en negro carbón con acabado vintage.",
  },
  {
    id: 3,
    nombre: "Remera Gotham Nocturno",
    categoria: "Cómics",
    precioBase: 27000,
    estado: "disponible",
    tallesDisponibles: ["S", "M", "L", "XL"],
    etiqueta: {
      codigo: "COM-GTM",
      nombre: "Universo Gotham",
      referenciaCultural: "Novela gráfica oscura",
    },
    promocion: {
      id: "promo-com-10",
      titulo: "10% OFF en Cómics",
      porcentajeDescuento: 10,
      activa: true,
    },
  },
  {
    id: 4,
    nombre: "Remera Synthwave Tour",
    categoria: "Música",
    precioBase: 25500,
    estado: "agotada",
    tallesDisponibles: ["XL"],
    etiqueta: {
      codigo: "MUS-SYN",
      nombre: "Sonidos de Culto",
      referenciaCultural: "Giras y bandas emblemáticas",
    },
  },
];

export const REMERAS_EXTERNAS_SIMULADAS: RemeraExternaDTO[] = [
  {
    codigoExterno: "EXT-SER-01",
    tituloProducto: "Remera Misterio en el Pueblo",
    rubro: "Series",
    precioUnitario: 26000,
    estadoProveedor: "disponible",
    tallesCsv: "S, M, L",
    codigoEtiqueta: "SER-MYS",
    nombreEtiqueta: "Series de Misterio",
    referencia: "Atmósfera brumosa y códigos ocultos",
    detalle: "Incorporada desde feed externo mediante mapper.",
  },
];