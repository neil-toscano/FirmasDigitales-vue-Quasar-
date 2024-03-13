<template>
  <div class="bg-brown-1 q-pb-md">
    <div class="q-col-gutter-md row items-start">
      <div class="col">
        <CardComponent />
      </div>
    </div>
    <q-separator />
    <div class="q-mt-xl row justify-around q-gutter-md">
      <div
        class="text-h7 q-gutter-md"
        style="
          font-family: Georgia, 'Times New Roman', Times, serif;
          max-width: 450px;
        "
      >
        <div>Copyright © 2023 Firmas Digitales. Powered by OneLoop.</div>
      </div>
      <div class="text-red-13 q-gutter-sm" style="font-size: 2em">
        <q-icon name="mail" />
        <q-icon name="fa-brands fa-youtube" />
        <q-icon name="fa-brands fa-instagram" />
        <q-icon name="fa-brands fa-facebook" />
        <q-icon name="fa-brands fa-x-twitter" />
        <q-icon name="fa-brands fa-google" />
      </div>
    </div>
  </div>
</template>
<script>
import CardComponent from "../components/CardComponent.vue";
export default {
  components: {
    CardComponent,
  },
  setup() {
    return {
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    };
  },
};
</script>
