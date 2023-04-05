<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5(data-aos="zoom-in-left")
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-start.mb-5           
      .col-lg-2
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/1.svg', alt='')    
      .col-lg-10
        p(data-aos="fade-down") Apreciado aprendiz, bienvenido a este componente formativo, donde identificará cada una de las generalidades de la preparación y planeación de la evaluación del desempeño, regidos por los lineamientos establecidos en los procedimientos y normativa y, así mismo, conocerá los conceptos relacionados con los métodos de evaluación, creación de cronogramas y asignación de responsabilidades, mediante mecanismos que le permitirán apropiarse, efectivamente, de los conceptos del componente formativo.

    p(data-aos="fade-down").mb-5 En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/hGYQ8TPbD-k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)                 
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
