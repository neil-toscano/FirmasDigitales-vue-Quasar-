<template>
  <div class="q-pa-md q-gutter-md" style="max-width: 350px">
    <q-list bordered separator class="rounded-borders">
      <q-item
        clickable
        v-ripple
        :active="active"
        v-for="(item, index) in listPdfFiles"
        :key="index"
      >
        <q-item-section>
          <a :href="item.url" target="_blank" class="text-ellipsis">
            {{ item.nombre }}
          </a>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
import { ref } from "vue";
import { useArchivo } from "../composables/useArchivo.js";
import { useLogin } from "src/composables/useAuth";
export default {
  setup() {
    const { getArchivos, listPdfFiles } = useArchivo();
    const { userInfo } = useLogin();

    getArchivos(userInfo.value.uid);
    return {
      listPdfFiles,
      active: ref(true),
    };
  },
};
</script>
<style scoped>
.text-ellipsis {
  display: inline-block;
  width: 120px; /* Ancho máximo del enlace */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #d7dbdd;
}
</style>
