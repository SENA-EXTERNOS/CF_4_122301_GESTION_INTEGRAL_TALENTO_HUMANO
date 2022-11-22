<template lang="pug">
.img-infograficaC
  .img-infograficaC__img(:ref="'img-ref-'+mainId")
    slot(name="imagen")
  .img-infograficaC__content(v-if="elements.length")
    .img-infograficaC__item(
        v-for="(item, index) in elements"
        :key="'img-infograficaC-btn-'+item.id"
        :style="[{top: item.y},{left: item.x}]"
        @mouseover="selected = item.id"
        @mouseleave="selected = 0"
      )
      .img-infograficaC__item__dot
      .img-infograficaC__item__numero(v-if="item.hasOwnProperty('numero')") {{item.numero}}
    .img-infograficaC__card(
      v-for="item in elements"
      :key="'img-infograficaC-card-'+item.id"
      :ref="'card-ref-'+item.id"
      :style="getCardCords(item.id)"
      :class="{'img-infograficaC__card--selected' : selected === item.id}"
      @mouseover="selected = item.id"
      @mouseleave="selected = 0"
      v-child="item.elm"
    )
    .img-infograficaC__indicador(
      v-if="firstElement && showIndicator"
      :style="[{top: firstElement.y},{left: firstElement.x}]"
    )
      .indicador--hover

  .hidden-slot
    slot
</template>

<script>
import componentSlotMixins from './componentSlotMixins'
export default {
  name: 'ImagenInfografica1',
  mixins: [componentSlotMixins],
  data: () => ({
    firstSelection: false,
    showIndicator: true,
  }),
  computed: {
    firstElement() {
      return this.elements.length && this.elements[0]
    },
  },
  watch: {
    selected() {
      if (this.showIndicator) {
        this.showIndicator = false
      }
    },
  },
  methods: {
    getCardCords(cardId) {
      const ref = 'card-ref-' + cardId
      if (!(ref in this.$refs)) {
        return [{ top: 0 }, { left: 0 }]
      }

      const currentCard = this.elements.find(card => card.id === cardId)
      const imgElement = this.$refs['img-ref-' + this.mainId]
      const imgObj = {
        w: imgElement.clientWidth,
        h: imgElement.clientHeight,
      }
      const cardElement = this.$refs[ref][0]
      const cardObj = {
        x: parseInt(currentCard.x, 10),
        y: parseInt(currentCard.y, 10),
        w: cardElement.clientWidth,
        h: cardElement.clientHeight,
      }

      const cardPosY = (cardObj.y / 100) * imgObj.h
      const cardPosX = (cardObj.x / 100) * imgObj.w

      const finalObj = []

      if (cardPosY + cardObj.h > imgObj.h) {
        finalObj.push({ bottom: 0 })
      } else {
        finalObj.push({ top: currentCard.y })
      }

      if (cardPosX + cardObj.w > imgObj.w) {
        finalObj.push({ right: 0 })
      } else {
        finalObj.push({ left: currentCard.x })
      }

      return finalObj
    },
  },
}
</script>

<style lang="sass">
.img-infograficaC, .img-infograficaC-b
  position: relative
  &__item
    position: absolute
    cursor: pointer
    transform: translate(-50%,-50%)
    width: 2.5%
    &:hover
      .img-infograficaC__item, .img-infograficaC-b__item
        &__tooltip
          opacity: 1

    &__tooltip
      position: absolute
      bottom: calc(100% + 5px)
      left: 50%
      transform: translateX(-50%)
      background-color: $lighter-gray
      padding: 10px
      width: 150px
      opacity: 0
      transition: opacity 0.3s ease-in-out
      pointer-events: none
      span
        display: block
        text-align: center
        line-height: 1em
    &__dot
      position: relative
      width: 100%
      padding-top: 100%
      i
        position: absolute
        top: 50%
        left: 50%
        transform: translate(-50%,-50%)
      &:before, &:after
        content: ''
        display: block
        width: 100%
        height: 100%
        border-radius: 50%
        position: absolute
        top: 0
        left: 0
        transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out
        opacity: .7
      &:after
        animation: pulse 2s infinite
        pointer-events: none
    &__numero
      position: absolute
      left: 50%
      top: 50%
      transform: translate(-50%,-50%)
      font-weight: $base-bold-font-weight
      line-height: 1em
  &__card
    position: absolute
    width: 300px
    opacity: 0
    pointer-events: none
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out
    transform: translateY(-10px)
    cursor: pointer
    &--selected
      opacity: 1
      transform: translateY(0)
      pointer-events: auto

  &__indicador
    position: absolute

  &.color-primario
    .img-infograficaC__item__dot, .img-infograficaC-b__item__dot
      i
        color: textColor($color-primario)
      &:before, &:after
        background-color: $color-primario
    .img-infograficaC__item__numero
      color: textColor($color-primario)
  &.color-secundario
    .img-infograficaC__item__dot, .img-infograficaC-b__item__dot
      i
        color: textColor($color-secundario)
      &:before, &:after
        background-color: $color-secundario
    .img-infograficaC__item__numero
      color: textColor($color-secundario)
  &.color-acento-contenido
    .img-infograficaC__item__dot, .img-infograficaC-b__item__dot
      i
        color: textColor($color-acento-contenido)
      &:before, &:after
        background-color: $color-acento-contenido
    .img-infograficaC__item__numero
      color: textColor($color-acento-contenido)
  &.color-acento-botones
    .img-infograficaC__item__dot, .img-infograficaC-b__item__dot
      i
        color: textColor($color-acento-botones)
      &:before, &:after
        background-color: $color-acento-botones
    .img-infograficaC__item__numero
      color: textColor($color-acento-botones)

  @media (max-width: $bp-max-sm)
    &__item
      width: 5%

.img-infograficaC-b
  &--open
    .img-infograficaC-b__img
      position: absolute
      width: 100%
  &__modal
    background-color: rgba($black, .9)
    animation: entrada-modal 0.2s ease-in-out forwards
    &__contenido
      div > *
        color: $white !important
    &__btn-cerrar
      position: absolute
      right: 10px
      top: 10px
      padding: 5px
      cursor: pointer
      i
        display: block
        line-height: 0.8em
        font-size: 1.5rem
        color: $white
      @media (max-width: $bp-max-lg)
        right: 0px
        top: 0px
        i
          font-size: 1rem

  &.color-primario
    .img-infograficaC-b__item__numero
      color: textColor($color-primario)
      i
        color: textColor($color-primario)

  &.color-secundario
    .img-infograficaC-b__item__numero
      color: textColor($color-secundario)
      i
        color: textColor($color-secundario)

  &.color-acento-contenido
    .img-infograficaC-b__item__numero
      color: textColor($color-acento-contenido)
      i
        color: textColor($color-acento-contenido)

  &.color-acento-botones
    .img-infograficaC-b__item__numero
      color: textColor($color-acento-botones)
      i
        color: textColor($color-acento-botones)

@keyframes pulse
  0%
    transform: scale(1)
    opacity: 0
  10%
    opacity: .7
  100%
    transform: scale(2)
    opacity: 0

@keyframes entrada-modal
  0%
    transform: scale(0.9)
    opacity: 0
  100%
    transform: scale(1)
    opacity: 1
</style>
