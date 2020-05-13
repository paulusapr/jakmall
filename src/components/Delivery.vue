<template>
  <Fragment>
    <Step v-bind:step="1" />
    <div class="content">
      <div class="form">
        <div class="back-btn">
          <router-link to="/">
            <font-awesome-icon icon="arrow-left" />
            <span>Back to cart</span>
          </router-link>
        </div>
        <div class="form-title">
          <div class="title">
            <span>Delivery details</span>
            <div class="underline"></div>
          </div>
          <div class="checkbox">
            <input class="checkbox" v-on:change="dropshipCheck" type="checkbox" :checked="computedDropship"/>
            <span>Send as dropshipper</span>
          </div>
        </div>
        <div class="form-group">
          <input type="text" placeholder="Email" :value="computedName" v-on:input="setVal($event.target.value, 'name')"/>
          <input type="text" placeholder="Dropshipper Name" :disabled="computedDropship ? false : true" :value="computedDropshipName" v-on:input="setVal($event.target.value, 'dropship_name')"/>
        </div>
        <div class="form-group">
          <input type="text" placeholder="Phone Number" :value="computedPhoneNumber" v-on:input="setVal($event.target.value, 'phone_number')"/>
          <input type="text" placeholder="Dropshipper Phone Number" :disabled="computedDropship ? false : true" :value="computedDropshipNumber" v-on:input="setVal($event.target.value, 'dropship_number')"/>
        </div>
        <div class="form-group">
          <textarea placeholder="Delivery Address" :value="computedDeliveryAddress" v-on:input="setVal($event.target.value, 'delivery_address')"></textarea>
        </div>
      </div>
      <div class="line-border"></div>
      <div class="result">
        <div class="summary">
          <span class="main">Summary</span>
          <span class="sub">10 items purchased</span>
        </div>
        <div class="pay-btn">
          <div class="info">
            <span>Cost of goods</span>
            <span>500,000</span>
          </div>
          <div class="info" v-if="computedDropship">
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
          <router-link to="/shipment" class="next">
            Continue to Payment
          </router-link>
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
  name: 'Delivery',
  data () {
    return {
      msg: 'Delivery'
    }
  },
  components: {
    Step,
    Fragment
  },
  methods: {
    formatPrice (value) {
      let val = (value / 1).toFixed(0).replace(',', '.')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },
    dropshipCheck: function () {
      if (!globalState.dropship) {
        globalState.dropship = true
        globalState.price += 5900
      } else {
        globalState.dropship_name = null
        globalState.dropship_number = null
        globalState.dropship = false
        globalState.price -= 5900
      }
    },
    setVal: function (e, idx) {
      globalState[idx] = e
    }
  },
  computed: {
    computedShipment: function () {
      return globalState.shipment
    },
    computedDropship: function () {
      return globalState.dropship
    },
    computedPrice: function () {
      return globalState.price
    },
    computedName: function () {
      return globalState.name
    },
    computedPhoneNumber: function () {
      return globalState.phone_number
    },
    computedDeliveryAddress: function () {
      return globalState.delivery_address
    },
    computedDropshipName: function () {
      return globalState.dropship_name
    },
    computedDropshipNumber: function () {
      return globalState.dropship_number
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
@import "../assets/content.styl"
</style>
