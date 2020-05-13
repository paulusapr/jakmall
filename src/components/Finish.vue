<template>
  <Fragment>
    <Step v-bind:step="3" />
    <div class="content">
      <div class="final-result">
        <div class="final-content">
          <div class="title">
            <span>Thank You</span>
            <div class="underline"></div>
          </div>
          <div class="order-detail">
            <span>Order ID : {{ generateOrderId() }}</span>
            <span>Your order will be delivered today with {{ shipment.name }}</span>
          </div>
          <div class="back-btn">
            <router-link to="/" v-on:click.native="reset()">
              <font-awesome-icon icon="arrow-left" />
              <span>Go to homepage</span>
            </router-link>
          </div>
        </div>
      </div>
      <div class="line-border"></div>
      <div class="result">
        <div class="summary">
          <span class="main">Summary</span>
          <span class="sub">10 items purchased</span>
          <div class="underline-info"></div>
          <span class="sub-main">Delivery estimation</span>
          <span class="sub-text">{{ shipment.estimate }} by {{ shipment.name }}</span>
          <div class="underline-info"></div>
          <span class="sub-main">Payment method</span>
          <span class="sub-text">{{ payment }}</span>
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
          <div class="info">
            <span><font style="font-weight: bold">{{ shipment.name }}</font> shipment</span>
            <span>{{ formatPrice(shipment.price) }}</span>
          </div>
          <div class="price">
            <span>Total</span>
            <span>{{ formatPrice(price) }}</span>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'
import Step from '@/components/Step'
import { globalState } from '../main.js'

export default {
  name: 'Finish',
  data () {
    return {
      msg: 'Finish',
      shipment: globalState.shipment,
      payment: globalState.payment,
      price: globalState.price,
      dropship: globalState.dropship
    }
  },
  components: {
    Step,
    Fragment
  },
  methods: {
    generateOrderId: function () {
      let chars = '23456789abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ'
      let length = 5
      let result = ''
      for (let i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)]
      return result
    },
    formatPrice (value) {
      let val = (value / 1).toFixed(0).replace(',', '.')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },
    reset: function () {
      globalState.name = null
      globalState.phone_number = null
      globalState.delivery_address = null
      globalState.dropship = false
      globalState.dropship_name = null
      globalState.dropship_number = null
      globalState.shipment = null
      globalState.payment = null
      globalState.price = 500000
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
@import "../assets/content.styl"
</style>
