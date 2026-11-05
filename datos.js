/* =========================================================================
   DATOS DEL PORTAFOLIO · Brigitte Núñez
   -------------------------------------------------------------------------
   Este archivo es tu "panel de administración". Para cambiar textos,
   proyectos o fotos, edita SOLO lo que está entre comillas "..." y guarda.
   - Mantén las comas y llaves tal como están.
   - Las fotos van en la carpeta /img (sube la foto y escribe aquí su nombre).
   - "visible: false" oculta un proyecto sin borrarlo.
   ========================================================================= */

window.PORTAFOLIO = {

  /* ---------- PORTADA Y CONTACTO ---------- */
  perfil: {
    nombre: "Brigitte Núñez",
    titular: "Ingeniera Civil y Project Manager con más de 10 años de experiencia en dirección y ejecución de proyectos de construcción.",
    especialidades: "Construcción | Planificación | Project Controls",
    ubicacion: "Madrid, España",
    disponibilidad: "Disponibilidad presencial",
    telefono: "+34 613 741 120",
    correo: "brigitte.nunez.maldonado@gmail.com",
    linkedin: "https://www.linkedin.com/in/brigitte-nu%C3%B1ez/",
    linkedinTexto: "linkedin.com/in/brigitte-nuñez",
    cv: "docs/CV_Brigitte_Nunez_ES.pdf",
    qr: "img/qr-linkedin.jpg"
  },

  /* ---------- CARTERA DE PROYECTOS ----------
     Orden: del más reciente al más antiguo.
     fotos: el primer elemento es el principal; hasta 3 adicionales.
     Para un vídeo usa: { video: "img/archivo.mp4", poster: "img/portada.jpg", alt: "..." } */
  proyectos: [
    {
      visible: true,
      nombre: "Arenas de San Antonio · Etapas 4A y 4B",
      pais: "Perú",
      periodo: "Ago 2026 – Oct 2026",
      cargo: "Jefa de Obra",
      sector: "Urbanismo",
      etiquetas: ["Habilitación urbana", "Movimiento de tierras"],
      resultados: "7 ha · +50.650 m³ · 100% culminada",
      detalles: [
        "Coordinación de frentes, producción, equipos y recursos.",
        "9.500 horas-hombre · 1.560 horas-máquina controladas."
      ],
      fotos: [
        { video: "img/arenas-video.mp4", poster: "img/arenas-video-portada.jpg", alt: "Vídeo de la obra Arenas de San Antonio, etapas 4A y 4B" },
        { src: "img/arenas-1.jpg", alt: "Equipo y maquinaria en la obra Arenas de San Antonio, etapas 4A y 4B" },
        { src: "img/arenas-2.jpg", alt: "Vista general del frente de movimiento de tierras en Arenas de San Antonio" }
      ]
    },
    {
      visible: true,
      nombre: "Centro Logístico Industrial Gambetta",
      pais: "Perú",
      periodo: "Jul 2025 – Jul 2026",
      cargo: "Site Manager",
      sector: "Almacenes logísticos",
      etiquetas: ["Proyecto EPC"],
      resultados: "1 ha",
      detalles: [
        "Ejecución y coordinación de ingeniería, producción, contratistas, calidad y SSOMA.",
        "Gestión de línea base, Look Ahead y restricciones."
      ],
      fotos: [
        { src: "img/gambetta-1.jpg", alt: "Equipo de obra del Centro Logístico Industrial Gambetta" },
        { src: "img/gambetta-2.jpg", alt: "Avance de obra en el Centro Logístico Industrial Gambetta" }
      ]
    },
    {
      visible: true,
      nombre: "Aeropuerto Internacional Jorge Chávez · Talleres y hangares",
      pais: "Perú",
      periodo: "Abr 2025 – Jul 2025",
      cargo: "Construction Manager",
      sector: "Infraestructura aeroportuaria",
      etiquetas: ["Proyecto EPC"],
      resultados: "1 ha",
      detalles: [
        "Coordinación de planificación, producción, especialidades y resolución de incidencias para mantener la continuidad de la ejecución."
      ],
      fotos: [
        { src: "img/jorge-chavez-1.jpg", alt: "Modelo estructural de los nuevos talleres y hangares del Aeropuerto Jorge Chávez" }
      ]
    },
    {
      visible: true,
      nombre: "Puerto del Callao · Acceso logístico para carga general y rodante",
      pais: "Perú",
      periodo: "Jul 2024 – Abr 2025",
      cargo: "Construction Manager",
      sector: "Infraestructura portuaria",
      etiquetas: [],
      resultados: "1,5 ha",
      detalles: [
        "Dirección de la ejecución y coordinación de producción, recursos, presupuesto, aprovisionamiento, calidad, seguridad y seguimiento de planificación."
      ],
      fotos: [
        { src: "img/callao-1.jpg", alt: "Trabajos de cimentación en el acceso logístico del Puerto del Callao" }
      ]
    },
    {
      visible: true,
      nombre: "Movimiento de tierras en I.E. 1267 y demolición en I.E. 7207",
      pais: "Perú",
      periodo: "Ago 2023 – Jun 2024",
      cargo: "Site Manager",
      sector: "Obras públicas",
      etiquetas: ["Proyectos NEC", "Movimiento de tierras", "Demolición"],
      resultados: "",
      detalles: [
        "Gestión de frentes de obra, recursos, producción y riesgos.",
        "Coordinación de equipos y obligaciones contractuales bajo contratos NEC."
      ],
      fotos: [
        { src: "img/ie-1267-1.jpg", alt: "Equipo de obra frente a los edificios en construcción" },
        { src: "img/ie-1267-2.jpg", alt: "Brigitte Núñez dirigiendo una reunión de coordinación con el equipo en la oficina de obra" },
        { src: "img/ie-1267-3.jpg", alt: "Equipo de pilotaje trabajando en el terreno de la obra" },
        { src: "img/ie-1267-4.jpg", alt: "Grúa sobre orugas y equipo de obra en el área de trabajos" }
      ]
    },
    {
      visible: true,
      nombre: "Planta Concentradora Cerro Lindo",
      pais: "Perú",
      periodo: "Oct 2022 – Abr 2023",
      cargo: "Site Manager",
      sector: "Construcción industrial",
      etiquetas: ["Minería"],
      resultados: "",
      detalles: [
        "Infraestructura industrial y coordinación de obra."
      ],
      fotos: [
        { src: "img/cerro-lindo-1.jpg", alt: "Equipo revisando la planificación en un tablero de obra, Planta Concentradora Cerro Lindo" }
      ]
    },
    {
      visible: true,
      nombre: "Mina Antamina · Almacén de residuos peligrosos",
      pais: "Perú",
      periodo: "Ene 2022 – Jul 2022",
      cargo: "Responsable de Producción",
      sector: "Construcción industrial",
      etiquetas: ["Minería", "Movimiento de tierras masivo"],
      resultados: "",
      detalles: [
        "Almacén de residuos peligrosos y movimiento de tierras masivo."
      ],
      fotos: [
        { src: "img/antamina-1.jpg", alt: "Equipo de obra durante el vaciado de concreto en Mina Antamina" },
        { src: "img/antamina-2.jpg", alt: "Brigitte Núñez en el frente de obra de Mina Antamina" },
        { src: "img/antamina-3.jpg", alt: "Equipo de obra en turno nocturno en Mina Antamina" }
      ]
    },
    {
      visible: true,
      nombre: "Obras viales y urbanas en Lima · Damero del Centro Histórico",
      pais: "Perú",
      periodo: "Abr 2021 – Sep 2021",
      cargo: "Jefa de Obra / Coordinación de cartera",
      sector: "Obras públicas",
      etiquetas: ["Obras viales"],
      resultados: "",
      detalles: [
        "Obras viales y urbanas en Lima; intervención del Damero del Centro Histórico."
      ],
      fotos: [
        { src: "img/lima-damero-1.jpg", alt: "Brigitte Núñez con el equipo en obras viales y urbanas de Lima" },
        { src: "img/lima-damero-2.jpg", alt: "Colocación de adoquines de piedra en una calle del Centro Histórico de Lima" },
        { src: "img/lima-damero-3.jpg", alt: "Instalación de losas de piedra en vereda del Centro Histórico de Lima" },
        { src: "img/lima-damero-4.jpg", alt: "Cuadrilla colocando adoquines en una calle del Centro Histórico de Lima" }
      ]
    },
    {
      visible: true,
      nombre: "Mantenimiento periódico de caminos vecinales · Canta",
      pais: "Perú",
      periodo: "Sep 2020 – Dic 2020",
      cargo: "Inspectora de Obra",
      sector: "Obras públicas",
      etiquetas: [],
      resultados: "",
      detalles: [],
      fotos: [
        { src: "img/caminos-1.jpg", alt: "Mantenimiento de camino vecinal en zona de montaña, Canta" }
      ]
    }
  ],

  /* ---------- OTROS PROYECTOS ----------
     Se muestran al final de la cartera (botón "Otros proyectos").
     Sin nombre de proyecto: solo tipo de trabajo, lugar y hasta 3 fotos. */
  otrosProyectos: [
    {
      visible: true,
      tipo: "Movimiento de tierras",
      lugar: "Cañete, Perú",
      fotos: [
        { src: "img/otros-canete-movimiento-tierras.jpg", alt: "Brigitte Núñez supervisando trabajos de movimiento de tierras con maquinaria en Cañete, Perú" }
      ]
    },
    {
      visible: true,
      tipo: "Puente Conchucos",
      lugar: "Perú",
      fotos: [
        { src: "img/otros-puente-conchucos.jpg", alt: "Collage del Puente Conchucos: charla con el equipo, movimiento de tierras y armado de acero y encofrado de estribos" }
      ]
    }
  ],

  /* ---------- FORMACIÓN (mismo orden que el CV) ---------- */
  formacion: [
    {
      titulo: "Máster Universitario en Project Management",
      centro: "Universidad Europea de Madrid",
      periodo: "En curso desde oct 2026",
      estado: "En curso",
      logo: "img/logo-uem.jpg",
      logros: [],
      fotos: [
        { src: "img/uem-grupo.jpg", alt: "Grupo del Máster en Project Management, Universidad Europea de Madrid" }
      ]
    },
    {
      titulo: "Máster en Dirección de Empresas Inmobiliarias (MDI)",
      centro: "Universidad Politécnica de Madrid",
      periodo: "2022–2023",
      estado: "Finalizado",
      logo: "img/logo-upm.jpg",
      logros: [],
      fotos: [
        { src: "img/upm-campus.jpg", alt: "Grupo del MDI en el campus de la Universidad Politécnica de Madrid" },
        { src: "img/upm-aula.jpg", alt: "Grupo del MDI en el aula, Universidad Politécnica de Madrid" },
        { src: "img/upm-fachada.jpg", alt: "Grupo del MDI en la fachada de la Universidad Politécnica de Madrid" }
      ]
    },
    {
      titulo: "Maestría en Gestión y Dirección de Empresas Constructoras e Inmobiliarias",
      centro: "CENTRUM PUCP",
      periodo: "2021–2023",
      estado: "Finalizado",
      logo: "img/logo-centrum.jpg",
      destacado: "Primer puesto · Tesis sobresaliente",
      logros: [
        "Reconocimiento UNESCO–Perú (2024) por la creación de un modelo de negocio con impacto social positivo.",
        "Certificado CENTRUM PUCP · Cátedra UNESCO: «Creación de Modelos de Negocio que Generan Impacto Social Positivo» · ProLab de 96 horas · 14 de octubre de 2024."
      ],
      fotos: [
        { src: "img/centrum-1.jpg", alt: "Brigitte Núñez en CENTRUM PUCP" },
        { src: "img/centrum-2.jpg", alt: "Brigitte Núñez con autoridades en CENTRUM PUCP" },
        { src: "img/centrum-unesco.jpg", alt: "Certificado de reconocimiento UNESCO–Perú, CENTRUM PUCP", etiqueta: "Reconocimiento UNESCO–Perú" }
      ]
    },
    {
      titulo: "Grado en Ingeniería Civil",
      centro: "Universidad Ricardo Palma",
      periodo: "2011–2016",
      estado: "Finalizado",
      logo: "img/logo-urp.jpg",
      destacado: "Tercer puesto · Quinto superior",
      logros: [
        "CIP 212176 · Colegiada y habilitada en Perú."
      ],
      fotos: []
    }
  ],

  /* ---------- COMPETENCIAS ---------- */
  aporte: "Dirección integral de proyectos de construcción e infraestructura, con foco en plazo, coste, producción y coordinación multidisciplinar.",
  competencias: [
    { titulo: "Dirección y gestión de proyectos",
      texto: "Construction Project Manager · Construction Manager · Site Manager · Project Controls · Project Engineer · Jefa de Obra · Jefa de Producción" },
    { titulo: "Planificación y control",
      texto: "Scheduling · Primavera P6 · MS Project · Last Planner System · Lean Construction · costes · presupuestos · seguimiento de producción" },
    { titulo: "Gestión contractual",
      texto: "Contratos EPC · Contratos NEC · Change Management · procura · subcontratación · adicionales y deductivos" },
    { titulo: "Oficina técnica e ingeniería",
      texto: "Metrados · ACU · valorizaciones · AutoCAD · Civil 3D · Revit · S10 · Presto · Power BI · Excel" }
  ],
  sectores: ["Infraestructura", "Construcción industrial", "Almacenes logísticos", "Infraestructura aeroportuaria", "Edificación", "Obras públicas", "Movimiento de tierras"],
  complementaria: [
    "Lean Construction · UNI",
    "Derecho de la Construcción y Solución de Controversias · UPC",
    "Contrataciones con el Estado · Preparación PMP · CIP",
    "ISO 45001 y Seguridad y Salud en el Trabajo",
    "Gestión de Proyectos con MS Project",
    "Inteligencia Inmobiliaria · Tecnológico de Monterrey",
    "Miembro activo PMI Lima – Perú Chapter"
  ],
  enPreparacion: ["Certificación PM²", "PSM I · Professional Scrum Master I (Scrum.org)"],
  ia: ["Claude", "ChatGPT"],
  idiomas: "Español nativo · Inglés intermedio"
};
