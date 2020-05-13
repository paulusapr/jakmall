<template>
    <div :class="classname">
        <div v-on:click="name === 'shipment' ? changeShipment(price, value) : changePayment(value)" :class="name === 'shipment' ? computedShipment ? value.name === computedShipment.name ? 'picker-check active' : 'picker-check' : 'picker-check' : value === computedPayment ? 'picker-check active' : 'picker-check'" v-bind:key="index" v-for="(value, index) in picker">
            {{ name === 'shipment' ? value.name : value }}
        </div>
    </div>
</template>

<script>
import { globalState } from '../main.js'

export default {
  methods: {
    changeShipment: function (price, e) {
      globalState.shipment = e
      globalState.price = price
      globalState.price += e.price
    },
    changePayment: function (e) {
      globalState.payment = e
    }
  },
  computed: {
    computedShipment: function () {
      return globalState.shipment
    },
    computedPayment: function () {
      return globalState.payment
    }
  },
  name: 'Picker',
  data () {
    return {
      shipment: globalState.shipment,
      payment: globalState.payment,
      price: globalState.price
    }
  },
  props: {
    name: String,
    classname: String,
    picker: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
@import "../assets/picker.styl"
</style>
