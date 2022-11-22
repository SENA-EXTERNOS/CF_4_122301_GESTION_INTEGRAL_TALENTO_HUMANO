export default {
  global: {
    componenteFormativo:
      'Preparación y planeación de la evaluación de desempeño',
    descripcionCurso:
      'El recurso humano ejerce un papel fundamental en el crecimiento de todo tipo de organizaciones; por esa razón el área de talento humano es clave en la planeación y ejecución de la evaluación del desempeño, dando como resultado insumos para la articulación de planes de formación, acciones de mejora y toma de decisiones direccionados a fortalecer la competencia del personal.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/4.png'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/5.png'),
      },
      {
        clases: ['banner-principal-decorativo-6'],
        imagen: require('@/assets/curso/portada/6.png'),
      },
      {
        clases: ['banner-principal-decorativo-7'],
        imagen: require('@/assets/curso/portada/7.svg'),
      },
      {
        clases: ['banner-principal-decorativo-8'],
        imagen: require('@/assets/curso/portada/8.svg'),
      },
      {
        clases: ['banner-principal-decorativo-9'],
        imagen: require('@/assets/curso/portada/9.svg'),
      },
      {
        clases: ['banner-principal-decorativo-11'],
        imagen: require('@/assets/curso/portada/11.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Evaluación',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Planeación y evaluación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Normativa de evaluación de desempeño y confidencialidad',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Evaluación',
      referencia:
        'Universidad Continental - Modalidad a Distancia. (2021). <i>Tipos de métodos para evaluar el desempeño: métodos tradicionales y métodos modernos</i> (video). ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=2T4cpCUp3L4',
    },
    {
      tema: 'Normativa de evaluación de desempeño y confidencialidad',
      referencia:
        'Decreto 255 de 2022. (Ministerio de Comercio, Industria y Turismo). Por el cual se adiciona la Sección 7 al Capítulo 25 del Título 2 de la Parte 2 del Libro 2 del Decreto 1074 de 2015, Decreto Único Reglamentario del Sector Comercio, Industria y Turismo, sobre normas corporativas vinculantes para la certificación de buenas prácticas en protección de datos personales y su transferencia a terceros países. Febrero 23 de 2022. ',
      tipo: 'PDF',
      link:
        'https://www.mincit.gov.co/getattachment/87475afd-65c0-484f-a6e8-6b606c97be58/Decreto-255-del-23-de-febrero-de-2022.aspx',
    },
    {
      tema: 'Normativa de evaluación de desempeño y confidencialidad',
      referencia:
        'Decreto 1081 de 2015. (Presidencia de la República). Por medio del cual se expide el Decreto Reglamentario Único del Sector Presidencia de la República. Mayo 26 de 2015.',
      tipo: 'Decreto',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=73593',
    },
    {
      tema: 'Normativa de evaluación de desempeño y confidencialidad',
      referencia:
        'Decreto 1377 de 2013. Por el cual se reglamenta parcialmente la Ley 1581 de 2012, Derogado Parcialmente por el Decreto 1081 de 2015. Junio 27 de 2013. ',
      tipo: 'Decreto',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=53646',
    },
    {
      tema: 'Normativa de evaluación de desempeño y confidencialidad',
      referencia:
        'Ley Estatutaria 1581 de 2012. Por la cual se dictan disposiciones generales para la protección de datos personales. Octubre 17 de 2012.',
      tipo: 'Ley',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=49981',
    },
    {
      tema: 'Normativa de evaluación de desempeño y confidencialidad',
      referencia:
        'Sentencia 748 de 2011 Corte Constitucional. Control constitucional al Proyecto de Ley Estatutaria No. 184 de 2010 Senado; 046 de 2010 Cámara, "por la cual se dictan disposiciones generales para la protección de datos personales". Octubre 6 de 2011. ',
      tipo: 'Sentencia',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=50042#:~:text=%2D%20Subtema%3A%20Protecci%C3%B3n%20del%20Derecho%20Fundamental&text=Por%20el%20principio%20de%20veracidad,encuentre%20prohibido%20(ordinal%20a).',
    },
  ],
  glosario: [
    {
      termino: 'Articular',
      significado:
        'unir varios procesos con la finalidad de cumplir un objetivo.',
    },
    {
      termino: 'Auditoría',
      significado:
        'inspección o verificación de los procedimientos en una empresa.',
    },
    {
      termino: 'Colaborador',
      significado: 'trabajador de una empresa.',
    },
    {
      termino: 'Competencia',
      significado: 'capacidad de un individuo para ejecutar una acción.',
    },
    {
      termino: 'Estimar',
      significado: 'atribuir un valor.',
    },
    {
      termino: 'Gestor',
      significado: 'persona encargada de dirigir  o administrar una empresa.',
    },
    {
      termino: 'Indicador',
      significado:
        'unidad que sirve para evaluar el rendimiento de las áreas o procesos.',
    },
    {
      termino: 'Parametrizar',
      significado: 'adaptar automáticamente una forma similar.',
    },
    {
      termino: 'Plan',
      significado: 'estategia de llevar a cabo un conjunto de actividades.',
    },
    {
      termino: 'Rol',
      significado:
        'función de una persona que se desempeña al interior de una organización.',
    },
  ],
  referencias: [
    {
      referencia:
        'Flores Mendoza, R. L. y Cervantes Penagos, M. Á. (2019). <i>Evaluación del desempeño del Gobierno Corporativo.</i>. Instituto Mexicano de Contadores. Públicos. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/124949',
    },
    {
      referencia:
        'González Gaya, C. y Manzanares Cañizares, C. (2020). <i>Sistemas de Gestión de la Calidad ISO 9001: guía de aplicación.</i> UNED - Universidad Nacional de Educación a Distancia.',
      link:
        'https://login.bdigital.sena.edu.co/login?qurl=https://elibro.net%2fes%2flc%2fsenavirtual%2ftitulos%2f162883',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
