import "./style.css";
import { REMERAS_EXTERNAS_SIMULADAS, REMERAS_INICIALES } from "./data/remeras.ts";
import {
  buscarRemeraPorId,
  calcularResumenesPrecios,
  filtrarRemerasDisponiblesPorCategoria,
  importarRemerasDesdeDto,
} from "./services/catalogo.ts";

const ultimoId = REMERAS_INICIALES.reduce((max, item) => Math.max(max, item.id), 0);
const remerasImportadas = importarRemerasDesdeDto(REMERAS_EXTERNAS_SIMULADAS, ultimoId);
const catalogoCompleto = [...REMERAS_INICIALES, ...remerasImportadas];

const tituloEl = document.querySelector<HTMLHeadingElement>("#titulo-tienda");
const subtituloEl = document.querySelector<HTMLParagraphElement>("#subtitulo-tienda");
const listaEl = document.querySelector<HTMLUListElement>("#lista-remeras");
const btnPromos = document.querySelector<HTMLButtonElement>("#btn-promos");
const resultadoEl = document.querySelector<HTMLDivElement>("#resultado");

if (tituloEl) {
  tituloEl.textContent = "Catálogo de Remeras Temáticas — Preentrega 2";
}

if (subtituloEl) {
  subtituloEl.textContent =
    "Modelado con interfaces, uniones literales, composición, colecciones tipadas y DTOs.";
}

if (listaEl) {
  listaEl.innerHTML = "";
  const resumenes = calcularResumenesPrecios(catalogoCompleto);

  resumenes.forEach((item) => {
    const remeraOriginal = buscarRemeraPorId(catalogoCompleto, item.id);
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";

    const etiquetaTexto = remeraOriginal
      ? `${remeraOriginal.etiqueta.nombre} (${remeraOriginal.etiqueta.codigo}) · Estado: ${remeraOriginal.estado}`
      : item.categoria;

    const precioTexto = item.tieneDescuento
      ? `$${item.precioFinal.toLocaleString("es-AR")} (antes $${item.precioOriginal.toLocaleString("es-AR")})`
      : `$${item.precioOriginal.toLocaleString("es-AR")}`;

    li.innerHTML = `
      <div>
        <strong>${item.nombre}</strong> <span class="badge bg-secondary ms-1">${item.categoria}</span>
        <div class="small text-muted">${etiquetaTexto}</div>
      </div>
      <span class="fw-semibold">${precioTexto}</span>
    `;
    listaEl.appendChild(li);
  });
}

btnPromos?.addEventListener("click", () => {
  if (!resultadoEl) return;

  const disponibles = filtrarRemerasDisponiblesPorCategoria(catalogoCompleto);
  const conPromo = calcularResumenesPrecios(disponibles).filter((r) => r.tieneDescuento);

  if (conPromo.length === 0) {
    resultadoEl.textContent = "No hay promociones activas en este momento.";
    return;
  }

  resultadoEl.textContent = `Promociones activas (${conPromo.length}): ${conPromo
    .map((p) => `${p.nombre} a $${p.precioFinal.toLocaleString("es-AR")}`)
    .join(" | ")}`;
});