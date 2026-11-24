Preentrega 2 — Catálogo de Remeras Tematicas

Descripción y Temática

Aplicación web frontend interactiva desarrollada con Vite y Vanilla TypeScript en modo estricto (strict: true). Continúa el proyecto iniciado en la Preentrega 1 para un catálogo de indumentaria y remeras temáticas inspiradas en la cultura pop: Fútbol, Películas, Cómics, Series y Música.

En Preentrega 2 se incorpora el modelado de datos tipados mediante interfaces, uniones de tipos literales, composición entre entidades, colecciones tipadas con operaciones funcionales (map, filter, find) y transformación de datos externos mediante patrones DTO y mapper.

Tecnologías Utilizadas

Vite: Entorno de desarrollo rápido y empaquetador.

TypeScript: Configurado con strict: true, verbatimModuleSyntax: true y erasableSyntaxOnly: true.

HTML5 & CSS3: Estructura semántica y estilos del catálogo.

Estructura del Proyecto

├── index.html                  # Punto de entrada HTML con contenedores semánticos
├── package.json                # Dependencias y scripts de ejecución (preentrega2)
├── tsconfig.json               # Configuración estricta de TypeScript
├── README.md                   # Documentación técnica del proyecto
└── src/
    ├── models/
    │   ├── types.ts            # Alias de tipos y uniones literales
    │   ├── remera.ts           # Interfaces principales y composición de entidades
    │   └── remera-dto.ts       # DTO de entrada externa y función mapper
    ├── data/
    │   └── remeras.ts          # Colección tipada inicial y registros externos simulados
    ├── services/
    │   └── catalogo.ts         # Funciones tipadas con map(), filter() y find()
    ├── main.ts                 # Lógica principal e integración con el DOM
    └── style.css               # Estilos visuales del catálogo

Modelado de Datos

Entidades Modeladas (src/models/)

Remera: Entidad principal del catálogo. Representa cada prenda disponible en la tienda e incluye su identificador inmutable (readonly id), nombre, categoría temática, precio base, estado de inventario, talles disponibles, una etiqueta temática asociada y, de forma opcional, una promoción aplicable y una descripción.

EtiquetaTematica: Representa la clasificación temática y cultural de la prenda (readonly codigo, nombre y referenciaCultural?), permitiendo agrupar e identificar el trasfondo de cada diseño.

PromocionAplicable: Modela una campaña de descuento vigente (readonly id, titulo, porcentajeDescuento y activa) que puede vincularse a una remera para calcular su precio final.

RemeraExternaDTO: Estructura de transferencia de datos que simula registros provenientes de un proveedor o planilla externa con formato distinto al modelo interno (sin id numérico generado, con nombres de campos diferentes como tituloProducto o rubro, y talles en formato texto separado por comas). Se convierte al modelo Remera mediante la función mapRemeraDtoToRemera.

Relación entre los Modelos (Composición)

Composición directa (Remera → EtiquetaTematica): Cada objeto Remera contiene una propiedad etiqueta tipada con la interfaz EtiquetaTematica, vinculando cada producto con su identidad temática.

Composición opcional (Remera → PromocionAplicable): Cada objeto Remera puede incluir opcionalmente la propiedad promocion?: PromocionAplicable, permitiendo aplicar descuentos dinámicos sin obligar a que todos los artículos estén en oferta.

Estados y Valores Restringidos (Uniones Literales)

En src/models/types.ts se definieron los siguientes tipos literales para evitar el uso de string genéricos:

CategoriaTematica: "Fútbol" | "Películas" | "Cómics" | "Series" | "Música"

TalleRemera: "S" | "M" | "L" | "XL"

EstadoStock: "disponible" | "ultimas_unidades" | "agotada"

Requisitos Previos

Tener instalado Node.js (versión 20 o superior recomendada) y npm.

Instalación y Ejecución

Clonar el repositorio e ingresar al directorio del proyecto:

(Nota: Recordá que la consigna solicita continuar trabajando sobre el mismo repositorio público de GitHub de la Preentrega 1).

Instalar las dependencias:

npm install

Ejecutar el servidor de desarrollo local:

npm run dev

Verificar el tipado estricto y compilar el proyecto para producción:

npm run build

Previsualizar la versión compilada (opcional):

npm run preview
