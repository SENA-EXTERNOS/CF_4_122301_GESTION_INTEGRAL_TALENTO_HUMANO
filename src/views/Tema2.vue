<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5(data-aos="zoom-in-left")
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Planeación y evaluación

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12(data-aos="fade-left")
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/28.png')})`}"
          )
          .bloque-texto-g__texto.p-4.py-5
            p.mb-0 Cuando se hace mención al concepto de planificación, se hace referencia al conjunto de acciones y decisiones que tienen el objetivo de cumplir metas establecidas por la organización; dentro de este marco, planificar todo el proceso de la evaluación del desempeño, es fundamental para evitar contratiempos y sobreesfuerzos por parte del talento humano involucrado, con el objetivo de finiquitar efectivamente, la aplicación de esta medición y contar con un margen de error bajo, para el análisis de la información.

    p(data-aos="fade-down").mb-5 Para conocer cómo se realiza el diseño del plan de evaluación, lo invitamos a ver el siguiente video:                   

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/t9PhHqODLdg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen) 

    .row.justify-content-center.align-items-start.mb-5           
      .col-lg-2
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/29.png', alt='')    
      .col-lg-10
        p(data-aos="fade-down") Cuando se tiene el diseño del plan de evaluación, se continúa con la construcción del cronograma. La definición de cronograma se basa en la representación, en una línea de tiempo, de las actividades que se plantean para alcanzar un objetivo propuesto; en el contexto empresarial, la planificación del cronograma de la evaluación del desempeño, precisa cada uno de los deberes y el tiempo que se estima para cumplir y lograr con el desarrollo del proyecto.   

    p(data-aos="fade-down").mb-5 El tiempo es un factor clave para establecer los límites y alcance de las actividades en la planificación de la evaluación del desempeño; por este motivo, existen diferentes pasos para la construcción de un cronograma. Conozcamos cada uno de ellos:  

    .bg3
      ImagenInfograficaC.color-acento-botones.mb-5(data-aos="zoom-in")
        template(v-slot:imagen)
          figure
            img.img-a.img-t(src='@/assets/curso/temas/31.svg', alt='')

        .tarjeta.color-primario.p-3(x="15.5%" y="63%" numero="1")
          p.mb-0 Para la construcción del cronograma de la evaluación del desempeño, es crucial identificar la población a evaluar, lo cual permite definir el alcance del proyecto.      
        .tarjeta.color-primario.p-3(x="29.5%" y="40%" numero="2")
          p.mb-0 Este paso es fundamental, dado que, se deben enlistar cada una de las actividades de manera detallada, para identificar riesgos y posibles circunstancias que puedan afectar la ejecución de la evaluación.   

        .tarjeta.color-primario.p-3(x="43.5%" y="63%" numero="3")
          p.mb-0 Una vez que hayan sido identificadas las actividades y los entregables, el personal encargado, estructura secuencialmente las tareas, según la etapa correspondiente en la evaluación del desempeño.      
        .tarjeta.color-primario.p-3(x="57.5%" y="40%" numero="4")
          p.mb-0 Para construir eficazmente el cronograma, también es importante identificar los recursos necesarios de cada actividad, lo cual no solo permite mitigar riesgos, sino desarrollar efectivamente la evaluación del desempeño.        

        .tarjeta.color-primario.p-3(x="70.5%" y="63%" numero="5")
          p.mb-0 Todas las actividades cuentan con niveles de complejidad diferentes; por esta razón la asignación de los tiempos debe ser ajustada a la realidad y basada en los recursos otorgados, lo que brinda coherencia en el momento de definir el cronograma de la evaluación      
        .tarjeta.color-primario.p-3(x="85%" y="40%" numero="6")
          p.mb-0 Según los roles, las responsabilidades establecidas, y las habilidades del talento humano, se hace la asignación de actividades, teniendo en cuenta que es importante contar con una persona competente en la ejecución. 

      .row.justify-content-center.align-items-start.my-5.pt-5
        .col-lg-8
          p(data-aos="fade-down") El formato del cronograma acostumbraba ser físico, o sea en papel, hasta que estas nuevas tecnologías han perfeccionado la creación de un cronograma digital, que puede plasmar todos los componentes y organizar las tareas de forma colaborativa.

          p(data-aos="fade-down") Una vez diseñado el cronograma, se procede con la aprobación por parte de las áreas competentes, para continuar con la asignación de fechas para la ejecución del mismo.

  
          .row.justify-content-center.align-items-start
            .col-lg-10           
              .cajon.color-acento-contenido.p-4.mb-5(data-aos="flip-down")
                p(data-aos="fade-down").mb-0 Desde una perspectiva más general, para finalizar con la construcción del plan de evaluación del desempeño, se toma como insumo primordial el cronograma de actividades y los plazos establecidos, la asignación de fechas de inicio y de finalización de esta evaluación, y se ajusta directamente con la frecuencia definida en los procedimientos que se han establecido en la organización.
        .col-lg-4
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/32.png', alt='') 
    p(data-aos="fade-down").mb-5 Una asignación se puede llevar a cabo de la siguiente forma:          
    .row.justify-content-center      
      .col-lg-10
        .row.justify-content-center.mb-5           
          .col-lg-4.col-md-6.col-sm-8.my-3(data-aos="fade-left")
            .tarjeta-avatar
              img.img-a.img-t.img-w1(src='@/assets/curso/temas/33.svg' alt='AvatarTop')
              div.text-center.bg4.p-4.pt-5.h-100
                h4.pt-3.mb-3 Asignación anual
          .col-lg-4.col-md-6.col-sm-8.my-3(data-aos="fade-left")
            .tarjeta-avatar
              img.img-a.img-t.img-w1(src='@/assets/curso/temas/33.svg' alt='AvatarTop')
              div.text-center.bg4.p-4.pt-5.h-100
                h4.pt-3.mb-3 Asignación semestral
          .col-lg-4.col-md-6.col-sm-8.my-3(data-aos="fade-left")
            .tarjeta-avatar
              img.img-a.img-t.img-w1(src='@/assets/curso/temas/33.svg' alt='AvatarTop')
              div.text-center.bg4.p-4.pt-5.h-100
                h4.pt-3.mb-3 Asignación trimestral
</template>

<script>
import ImagenInfograficaC from '../components/ImagenInfograficaC.vue'
export default {
  name: 'Tema2',
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
