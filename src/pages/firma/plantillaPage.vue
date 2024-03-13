<template>
  <div class="row justify-center q-py-sm">
    <ImgPlantillaComponent />
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import ImgPlantillaComponent from "components/ImgplantillaComponent.vue";
import { useQuasar } from "quasar";
export default {
  components: {
    ImgPlantillaComponent,
  },
  setup() {
    const url = ref("https://picsum.photos/500/300");
    const $q = useQuasar();

    return {
      url,
      refresh() {
        url.value = "https://picsum.photos/500/300?t=" + Math.random();
      },
    };
  },
};
</script>
