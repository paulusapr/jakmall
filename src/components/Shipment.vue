<template>
  <Fragment>
    <Step v-bind:step="2" />
    <div class="content">
      <div class="form">
        <div class="back-btn">
          <router-link to="/">
            <font-awesome-icon icon="arrow-left" />
            <span>Back to delivery</span>
          </router-link>
        </div>
        <div class="form-title">
          <div class="title">
            <span>Shipment</span>
            <div class="underline"></div>
          </div>
        </div>
        <Picker name="shipment" classname="picker-container margin" v-bind:picker="[{ name: 'GO-SEND', price: 25000, estimate: 'today' }, { name: 'JNE', price: 15000, estimate: '2 days' }, { name: 'Personal Courier', price: 10000, estimate: '1 day' }]"/>
        <div class="form-title">
          <div class="title">
            <span>Payment</span>
            <div class="underline"></div>
          </div>
        </div>
        <Picker name="payment" classname="picker-container" v-bind:picker="['e-Wallet', 'Bank Tranfer', 'Virtual Account']"/>
      </div>
      <div class="line-border"></div>
      <div class="result">
        <div class="summary">
          <span class="main">Summary</span>
          <span class="sub">10 items purchased</span>
          <div class="underline-info"></div>
          <span class="sub-main">Delivery estimation</span>
          <span class="sub-text" v-if="computedShipment">{{ computedShipment.estimate }} by {{ computedShipment.name }}</span>
        </div>
        <div class="pay-btn">
          <div class="info">
            <span>Cost of goods</span>
            <span>500,000</span>
          </div>
          <div class="info" v-if="dropship">
            <span>Dropshipping Fee</span>
            <span>5,900</span>
          </div>
          <div class="info" v-if="computedShipment">
            <span><font style="font-weight: bold">{{ computedShipment.name }}</font> shipment</span>
            <span>{{ formatPrice(computedShipment.price) }}</span>
          </div>
          <div class="price">
            <span>Total</span>
            <span>{{ formatPrice(computedPrice) }}</span>
          </div>
          <router-link to="/finish" class="next" v-if="computedShipment && computedPayment">
            Pay with {{ computedPayment }}
          </router-link>
        </div>
      </div>
    </div>
  </Fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'
import Step from '@/components/Step'
import Picker from '@/components/Picker'
import { globalState } from '../main.js'

export default {
  name: 'Shipment',
  data () {
    return {
      msg: 'Shipment',
      shipment: globalState.shipment,
      payment: globalState.payment,
      price: globalState.price,
      dropship: globalState.dropship
    }
  },
  components: {
    Step,
    Fragment,
    Picker
  },
  methods: {
    formatPrice (value) {
      let val = (value / 1).toFixed(0).replace(',', '.')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }
  },
  computed: {
    computedShipment: function () {
      return globalState.shipment
    },
    computedPayment: function () {
      return globalState.payment
    },
    computedPrice: function () {
      return globalState.price
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
@import "../assets/content.styl"
</style>
