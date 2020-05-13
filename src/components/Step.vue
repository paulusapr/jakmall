<template>
    <div class="step-container">
        <div class="nav">
            <div v-bind:class="{'bullet':true, 'active':(step === 1 || step === 2 || step === 3)}">1</div>
            Delivery
        </div>
        <div class="arrow-space-between"><font-awesome-icon icon="angle-right" /></div>
        <div class="nav">
            <div v-bind:class="{'bullet':true, 'active':(step === 2 || step === 3)}">2</div>
            Payment
        </div>
        <div class="arrow-space-between"><font-awesome-icon icon="angle-right" /></div>
        <div class="nav">
            <div v-bind:class="{'bullet':true, 'active':(step === 3)}">3</div>
            Finish
        </div>
    </div>
</template>

<script>
export default {
  name: 'Step',
  props: {
    step: Number
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
@import "../assets/step.styl"
</style>
