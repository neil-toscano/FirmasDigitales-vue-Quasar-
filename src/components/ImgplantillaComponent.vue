<template>
  <div class="row justify-around" style="width: 90%">
    <q-card
      class="my-card q-my-sm q-mx-xs shadow-6"
      v-for="(item, index) in listImgPlantilla"
      :key="index"
      @click="goTemplate('editor', item.plantilla)"
    >
      <q-img :src="item.url" />
    </q-card>
  </div>
</template>

<script>
import { ref, onMounted, computed, onUnmounted } from "vue";
import { useArchivo } from "../composables/useArchivo.js";
import { useLogin } from "src/composables/useAuth";
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";
export default {
  setup() {
    const $q = useQuasar();
    const router = useRouter();
    const { getImgPlantilla } = useArchivo();
    const { userInfo } = useLogin();
    let listImgPlantilla = ref([]);
    $q.loading.show();

    onMounted(async () => {
      console.log("se monto el componente-imgplantilla");
      const { data } = await getImgPlantilla();
      $q.loading.hide();
      listImgPlantilla.value = data;
    });
    onUnmounted(() => {
      console.log("se desmonto el componente -imgplantilla");
    });
    return {
      listImgPlantilla,
      goTemplate: (name, id) => {
        router.push({ name, params: { id } });
      },
    };
  },
};
</script>
<style scoped>
.my-card {
  width: 25%;
  cursor: pointer;
}
</style>
