<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bloque-fondo1(data-aos="zoom-in-left")
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Evaluación
    .row.justify-content-center.align-items-start.mb-5           
      .col-lg-2
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/2.svg', alt='')    
      .col-lg-10
        p(data-aos="fade-down") Para iniciar, hablemos del concepto de evaluación, el cual hace referencia al conjunto de determinadas acciones de un proceso, estructurado para la medición de un resultado, con la finalidad de emitir un juicio sobre la relación de la medida estándar o base; es decir, en el contexto empresarial, la evaluación se puede definir como los mecanismos utilizados para la medición de los productos o servicios que son emitidos o elaborados tanto, por el talento humano, como por la cadena productiva; en este sentido, es importante resaltar que las evaluaciones al interior de las organizaciones, son factores claves para identificar fortalezas, debilidades, oportunidades y amenazas para, de acuerdo con su resultado, tomar acciones para la mitigación o mejoramiento del desarrollo de cada uno de los ítems evaluados; es por esta razón que se deben identificar los diversos tipos de evaluaciones.

    p(data-aos="fade-down").mb-5 A nivel organizativo, es indispensable identificar los rasgos predominantes de la cadena de suministro, teniendo en cuenta los aspectos positivos y negativos; en este orden de ideas, es fundamental conocer los diferentes tipos de evaluación y sus características, las cuales se presentan a continuación:

    TabsA.color-acento-contenido.mb-5(data-aos="fade-left")
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Evaluación de mercados")
        .row.justify-content-center.align-items-start
          .col-lg-7
            p Consiste en identificar si los diferentes productos y/o servicios ofrecidos al interior o al exterior de la organización, cumplen con las expectativas y/o necesidades de los clientes; adicional a esto, este modelo de evaluación es de suma importancia, porque los estudios de mercado, los cuales son claves para la estructuración de la oferta y demanda arrojan, como resultado, planes de mercadeo para la atracción de nuevos clientes.
          .col-lg-5 
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/3.png', alt='')   
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Evaluación de calidad")
        .row.justify-content-center.align-items-start
          .col-lg-7
            p Al momento de ejecutar la prestación de un servicio o la elaboración de un producto, es de vital importancia evaluar constantemente la calidad de los mismos. Esta evaluación la realiza el departamento de talento humano, de manera periódica, con base en los estándares establecidos por la organización, para verificar el cumplimiento de cada uno de los criterios de calidad y establecer las acciones correctivas que se necesiten.

          .col-lg-5 
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/4.png', alt='')  
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Evaluación financiera")
        .row.justify-content-center.align-items-start
          .col-lg-7
            p Para las organizaciones, es fundamental conocer la rentabilidad y la capacidad financiera del negocio, para poder determinar la perdurabilidad en el tiempo; en este orden de ideas, este tipo de evaluación se fundamenta en medir, mediante ecuaciones matemáticas, los indicadores relacionados con los beneficios económicos y el retorno de la inversión generada, gracias a los productos y/o servicios ofrecidos por la organización. Particularmente, es un insumo o indicador importante para la toma de decisiones por parte de las directivas, en busca de la articulación como empresa sostenible.
          .col-lg-5 
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/5.png', alt='')  
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Evaluación de riesgos")
        .row.justify-content-center.align-items-start
          .col-lg-7
            p A nivel organizacional, es primordial estar preparado para cualquier imprevisto, ayudando a responder positivamente a los cambios de variables que afectan directamente a la viabilidad y la rentabilidad de la organización; el análisis de riesgos consiste en identificar los posibles cambios económicos, ambientales, de seguridad y salud, que pueden afectar positiva o negativamente la operación, o a los integrantes de la organización, lo que permite mejorar la toma de decisiones al interior de la misma.
          .col-lg-5 
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/6.png', alt='')  
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Evaluación de impacto")
        .row.justify-content-center.align-items-start
          .col-lg-7
            p Las organizaciones no solo deben interesarse por los criterios de evaluación al interior de ellas, sino en la forma en que la ejecución de su operación pueda afectar su entorno; en este orden de ideas, el objetivo de esta evaluación consiste en relacionar los resultados generados, con los beneficios o perjuicios, frente a la comunidad o al medio ambiente.
          .col-lg-5 
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/7.png', alt='')  
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Evaluación de desempeño")
        .row.justify-content-center.align-items-start
          .col-lg-7
            p Este tipo de valoración consiste en evaluar periódicamente el desempeño de los colaboradores, al interior de la organización.
          .col-lg-5 
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/8.png', alt='')

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12(data-aos="fade-left")
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/9.png')})`}"
          )
          .bloque-texto-g__texto.p-4.py-5
            p.mb-0 Hablemos un poco más sobre la evaluación del desempeño del personal. En el contexto organizacional, permite a la empresa identificar las fortalezas y debilidades de los colaboradores en relación con sus responsabilidades laborales, mediante un procedimiento sistemático, objetivo y con diferentes métodos, conociendo las habilidades e identificando problemas de productividad, con la finalidad de establecer planes de acción, de acuerdo con los puntos débiles, como son las capacitaciones y la elección del perfil laboral adecuado para el desempeño del cargo y, del mismo modo, lograr la optimización de procesos. 

    p(data-aos="fade-down").mb-5 Según el enfoque que se desee dar a la evaluación del desempeño, existen diferentes métodos que brindan un direccionamiento lógico a los resultados del mismo; estos métodos se distribuyen en: 

    ImagenInfograficaC.color-acento-botones.mb-5(data-aos="zoom-in")
      template(v-slot:imagen)
        figure
          img.img-a.img-t(src='@/assets/curso/temas/10.svg', alt='')

      .tarjeta.color-primario.p-3(x="50.7%" y="24.5%" numero="1")
        p.mb-0 Este método consiste en que el colaborador responde un cuestionario, a través de preguntas estructuradas, direccionadas a la reflexión y autocrítica sobre su propio desempeño laboral en el periodo a evaluar; esto permite reconocer los aspectos que se deben mejorar y continuar potencializando sus fortalezas, para lograr alinear sus capacidades con las del perfil del cargo definido, cumpliendo con las metas establecidas y facilitando su desarrollo profesional al interior de la organización.
      .tarjeta.color-primario.p-3(x="62%" y="29%" numero="2")
        p.mb-0 La retroalimentación ayuda a los trabajadores a comprender la forma en la que su desempeño impacta en el crecimiento de la organización; esta es la razón por la cual este método hace referencia a la evaluación que recibe el trabajador por parte de su jefe inmediato, donde debe resaltar las acciones positivas, e incentivar la mejora continua de las competencias, ayudando a identificar las necesidades del equipo de trabajo, para establecer las acciones sobre cómo mejorarlas e impulsar la confianza sobre la relación empleador-trabajador. 
      .tarjeta.color-primario.p-3(x="68%" y="38%" numero="3")
        p.mb-0 Esta evaluación relaciona a todos los actores involucrados, con los colaboradores; en este caso, consiste en evaluar las competencias y el desempeño de un individuo, desde la óptica del jefe inmediato, compañeros de trabajo y subordinados, debido a que se obtiene un alto flujo de información que, al momento de correlacionarse, ilustra un panorama global del desempeño del evaluado.
      .tarjeta.color-primario.p-3(x="71%" y="50%" numero="4")
        p.mb-0 Este método se fundamenta en la evaluación efectuada por los colaboradores hacia los líderes o jefes inmediatos, logrando identificar si este funcionario suple con las necesidades y requerimientos de los colaboradores, permitiendo entonces exigir nuevos enfoques de formación a los líderes de equipo, en habilidades relacionadas con el liderazgo, trabajo en equipo, motivación y comunicación, para lograr, de esta manera, alcanzar los objetivos de la organización.
      .tarjeta.color-primario.p-3(x="69.5%" y="63%" numero="5")
        p.mb-0 Esta evaluación es usual en los departamentos de proyectos y áreas comerciales, debido a que este método se basa en analizar el cumplimiento de los objetivos propuestos por la organización, mediante indicadores, desligando los aspectos actitudinales y de destreza de los evaluados, permitiendo analizar las dificultades de la ejecución del trabajo, de forma integral.
      .tarjeta.color-primario.p-3(x="64%" y="72.5%" numero="6")
        p.mb-0 Este método mide el desempeño de los colaboradores con base al rol y responsabilidad del cargo que desempeñan; en esta evaluación, se miden factores relacionados con las habilidades y aptitudes para la construcción de planes de mejora, para el desarrollo de las competencias de los colaboradores.
      .tarjeta.color-primario.p-3(x="55.5%" y="79%" numero="7")
        p.mb-0 Esta evaluación se realiza con base en la respuesta de cuestionarios que miden factores o competencias ya definidos, los cuales se ilustran gráficamente mediante líneas horizontales, las cuales clasifican los resultados de la evaluación del desempeño y, las líneas verticales, representan la variación que hay entre estos resultados. 
      .tarjeta.color-primario.p-3(x="45%" y="79%" numero="8")
        p.mb-0 Este método de evaluación consiste en establecer una serie de frases donde el evaluador describe al colaborador, de acuerdo con su desempeño laboral.
      .tarjeta.color-primario.p-3(x="36%" y="73%" numero="9")
        p.mb-0 Este método está basado en las encuestas semiestructuradas que el evaluador efectúa a los integrantes de la organización y a los datos recopilados en las observaciones realizadas, las cuales son el insumo para el veredicto en la evaluación del desempeño. 
      .tarjeta.color-primario.p-3(x="30%" y="63%" numero="10")
        p.mb-0 Está enlazado al comportamiento del colaborador, el cual puede ser percibido como positivo o negativo, de acuerdo con la experticia y la valoración del evaluador y con relación a los efectos que llegan a tener las acciones del evaluado, frente al desempeño laboral.
      .tarjeta.color-primario.p-3(x="29%" y="48%" numero="11")
        p.mb-0 Este método consiste en evaluar al colaborador con base en una lista que contiene afirmaciones o descripciones del proceso; en este sentido, el evaluador califica de acuerdo con el cumplimiento de las metas, arrojando el resultado de la evaluación del desempeño.
      .tarjeta.color-primario.p-3(x="33%" y="35%" numero="12")
        p.mb-0 Este método consiste en recopilar información de carácter anónimo, por parte de los compañeros de trabajo con relación a competencias específicas, enlazadas al desempeño laboral del colaborador; de igual manera, permite identificar las cualidades de los colaboradores, de acuerdo con la perspectiva de sus propios compañeros.
      .tarjeta.color-primario.p-3(x="40.5%" y="27%" numero="13")
        p.mb-0 Este método consiste en involucrar a las directivas, con los colaboradores, para la retroalimentación de las acciones tomadas en el pasado y las decisiones que se tomarán para el futuro, asumiendo responsabilidad y control sobre este proceso; en este sentido, todos los actores involucrados dirigen la evaluación participativa de lo que se quiere evaluar, la metodología que tendrá el análisis de la información, y la forma en la que se presentarán los resultados.

    .row.justify-content-center.align-items-start.mb-5           
      .col-lg-2
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/11.svg', alt='')    
      .col-lg-10
        p(data-aos="fade-down") Ampliemos la información sobre los dos métodos más utilizados.

        p(data-aos="fade-down") El método de <b>escala gráfica</b> es el método de evaluación del desempeño que más se utiliza y más se conoce. Aunque aparenta ser sencillo, su aplicación exige ser cuidadosos para evitar la subjetividad y que el evaluador prejuzgue y cause interferencias importantes.

        p(data-aos="fade-down") Utiliza un formulario de doble entrada, donde las líneas horizontales representan los factores de evaluación del desempeño y las columnas, los grados de valoración de esos factores.

    p(data-aos="fade-down").mb-5 Este método puede ser implementado a través de varios procesos de clasificación. Los más conocidos son: 


    .row.justify-content-center.align-items-start.mb-5   
      .col-lg-5
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/12.svg', alt='')     
      .col-lg-7
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg6")
          .row.justify-content-center.align-items-center(titulo="Gráficas continuas")
            .col-10
              P Se refiere a aquella escala en donde el resultado de la evaluación se puede situar en cualquiera de los dos puntos extremos.  
          .row.justify-content-center.align-items-center(titulo="Gráficas semicontinuas")
            .col-10
              P Su visualización es similar a las continuas; sin embargo, en este proceso se incluyen puntos intermedios, los cuales facilitan el análisis del proceso evaluativo.

          .row.justify-content-center.align-items-center(titulo="Gráficas discontinuas")
            .col-10
              P Se refiere a las escalas que cuentan con diferentes niveles, en los cuales el evaluador define dónde se sitúan los resultados de la evaluación, contando con valores intermedios.

    .row.justify-content-center.align-items-start.mb-5 
      .col-lg-4
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/13.png', alt='')        
      .col-lg-8
        .cajon.color-primario.p-4.mb-5(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 El método de <b>elección forzada</b> fue desarrollado por estadounidenses durante la Segunda Guerra Mundial, para seleccionar oficiales de las fuerzas armadas que se iban a promover. Se quería lograr un sistema de evaluación que neutralizara los efectos de Halo, el subjetivismo y el proteccionismo. 
        p(data-aos="fade-down") Este método consiste en evaluar el desempeño de las personas, a través de frases descriptivas que son seleccionadas por el evaluador. El objetivo es el de evaluar el desempeño de los colaboradores, para poder mejorar el desempeño tanto individual, como de la organización.
        p(data-aos="fade-down") Proporciona resultados más confiables y no están influenciados por resultados subjetivos o personales. Elimina el efecto de generalización, se aplica de forma simple y no necesita mucha preparación. 

    p(data-aos="fade-down").mb-5 Este método tiene dos formas de composición:

    TabsC.color-acento-contenido.mb-5(data-aos="fade-right")
      .py-3.py-md-4(titulo="Frases de tipo positivo y negativo")
        .row.justify-content-center.align-items-start
          .col-lg-5.col-md-11.mb-4.mb-md-0
            p El evaluador selecciona la cantidad de frases, en igual cantidad, que más se asemejan al desempeño laboral del evaluado, y luego las que menos se ajustan, para su posterior análisis.
          .col-lg-5.col-md-11
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/14.svg', alt='') 
      .py-3.py-md-4(titulo="Bloques de frases de tipo positivo")
        .row.justify-content-center.align-items-start
          .col-lg-5.col-md-11.mb-4.mb-md-0
            p El evaluador selecciona las frases que más se asemejan al desempeño laboral del evaluado.
          .col-lg-5.col-md-11
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/15.svg', alt='') 


    .row.justify-content-center.align-items-start.mb-5           
      .col-lg-2
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/18.svg', alt='')    
      .col-lg-10
        p(data-aos="fade-down") Ahora, una vez conocido el método que se va a utilizar, el personal encargado de realizar la evaluación del desempeño, decide con qué tipo de herramienta apoyarse como complemento, siendo esta fundamental para brindar coherencia y precisar si el desempeño de los colaboradores está alineado con el cumplimiento de las metas organizacionales. 
    p(data-aos="fade-down").mb-5 Por tal razón, el equipo de talento humano debe conocer las siguientes herramientas de evaluación:

    .bg2
      .row.justify-content-center.align-items-start(data-aos="fade-right").mb-5           
        .col-lg-10  
          .crd.crd--avatarHorizontal.crd--first.py-4
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/20.png", alt="alt").img100
              .col
                h5 Indicadores de gestión
                p Cuando, previamente los indicadores de gestión son estructurados al interior de las organizaciones, esta información es enlazada con los diferentes métodos de evaluación del desempeño, logrando de esta manera, obtener resultados con mayor confiabilidad con relación al desempeño del colaborador.
          .crd.crd--avatarHorizontal.py-4
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/21.png", alt="alt").img100
              .col
                h5 Actuación de proveedores
                p Este tipo de herramienta consiste en revisar y analizar la información relacionada con los proveedores, para identificar cómo las decisiones de estos, afectan la productividad y el desempeño del colaborador.
          .crd.crd--avatarHorizontal.crd--med.py-4
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/22.png", alt="alt").img100
              .col
                h5 Satisfacción del cliente
                p Resolver las necesidades o requerimientos de los clientes, no solo bastan para medir el desempeño de los trabajadores, también es de suma importancia conocer el nivel de satisfacción de los usuarios, puesto que es un factor clave para adherirse en el resultado de la valoración final de la evaluación.
          .crd.crd--avatarHorizontal.py-4
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/23.png", alt="alt").img100
              .col
                h5 Auditoría interna
                p Las auditorías siempre serán un buen mecanismo de medición dado que, mediante esta herramienta, se puede evidenciar el cumplimiento a los procedimientos, errores o fallos en la ejecución de los procesos y edificar oportunidades de mejora, las cuales sirven de insumo para la ejecución de la evaluación del desempeño.                           
          .crd.crd--avatarHorizontal.crd--last.py-4
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/24.png", alt="alt").img100
              .col
                h5 Seguimiento a las no conformidades
                p Cuando se presentan “no conformidades” en las organizaciones, debido a los resultados de auditorías internas o externas, es importante documentar el registro de estos hallazgos, de tal forma que esta información se encuentre directamente relacionada con el desempeño del colaborador, sea por su gestión de corregir esta no conformidad, o ser el causante de ella.

      .row.justify-content-center.align-items-start.mb-5           
        .col-lg-2
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/25.png', alt='')    
        .col-lg-10
          p(data-aos="fade-down") Cuando se conoce la herramienta, es entonces que entra al juego, el instrumento de evaluación del desempeño, el cual contribuye con la efectividad de los resultados; entre más idóneo sea el instrumento, más coherente va a ser el resultado del mismo. 

    p(data-aos="fade-down").mb-5 Estos instrumentos de evaluación pueden ser: 

    .row.justify-content-center.align-items-stretch.mb-5.text-center           
      .col-lg-5(data-aos="fade-left")
        .bg1.p-5.h-100
          img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/16.svg', alt='')
          h4.mb-5 Digitales
          p Se encuentran relacionados con las bases de datos integradas a la organización, las cuales pueden brindar a tan solo un par de “clics”, el rendimiento del colaborador, siempre y cuando toda la información se encuentre parametrizada en nubes digitales o sistemas integrados de trazabilidad; del mismo modo, hacen parte de este grupo los #[em software] especializados, proporcionados por las áreas de tecnologías de la información o empresas externas, con base en la evaluación del desempeño, de acuerdo con la necesidad de la organización. 
                        
      .col-lg-5(data-aos="fade-right")
        .bg1.p-5.h-100
          img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/17.svg', alt='')
          h4.mb-5 Manuales
          p Hace referencia a la ejecución manual de la información a analizar, basándose en las diferentes metodologías de evaluación; es decir, en este tipo de instrumentos es común el uso de planillas manuales designadas a una persona responsable de la triangulación de datos y de la entrega de los informes respectivos.
 
    .row.justify-content-center.align-items-start.mb-5 
      .col-lg-4
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/27.png', alt='')        
      .col-lg-8
        p(data-aos="fade-down") La escala de valoración con relación a la evaluación del desempeño, está directamente relacionada con la cultura de la organización y con la forma en la cual se desea visualizar y comunicar los resultados; en este sentido, de acuerdo con las variables a evaluar, los resultados pueden ser presentados de manera cualitativa o cuantitativa.
 
        .row.justify-content-center.align-items-start
          .col-lg-10           
            .cajon.color-acento-contenido.p-4.mb-5(data-aos="flip-down")
              p(data-aos="fade-down").mb-0 Ejemplo:
              .row.justify-content-center.align-items-start
                .col-lg-4          
                  ul.lista-ul
                    li 
                      i.fas.fa-angle-right.colorv
                      p.mb-0 0 a 10
                    li 
                      i.fas.fa-angle-right.colorv
                      p.mb-0 0 % a 100 %
                    li 
                      i.fas.fa-angle-right.colorv
                      p.mb-0 Alto - Bajo
                
                .col-lg-8          
                  ul.lista-ul
                    li 
                      i.fas.fa-angle-right.colorv
                      p.mb-0 Conforme - No conforme
                    li 
                      i.fas.fa-angle-right.colorv
                      p.mb-0 Competente - No competente
                    li 
                      i.fas.fa-angle-right.colorv
                      p.mb-0 Satisfactorio - Insatisfactorio

             
</template>

<script>
import ImagenInfograficaC from '../components/ImagenInfograficaC.vue'
export default {
  name: 'Tema1',
  components: {
    ImagenInfograficaC,
  },
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
