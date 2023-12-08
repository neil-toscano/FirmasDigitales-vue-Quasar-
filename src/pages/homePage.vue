<template>
  <div class="q-pa-md bg-brown-1">
    <div class="q-col-gutter-md row items-start">
      <div class="col">
        <CardComponent/>
      </div>
    </div>
  </div>
</template>
<script>
import CardComponent from '../components/CardComponent.vue'
export default {
  components: {
    CardComponent
  },
  setup () {
    return {
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  }
}
</script>