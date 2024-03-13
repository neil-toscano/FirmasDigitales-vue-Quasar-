<template>
  <div>
    <q-btn
      round
      dense
      flat
      size="1.3em"
      icon="notifications"
      color="red-13"
      class="bg-white"
    >
      <q-badge color="red-13" text-color="white" floating> 1 </q-badge>
      <q-menu>
        <q-list style="min-width: 100px">
          <q-separator />
          <q-item
            clickable
            v-close-popup
            v-for="(item, index) in listSharedPlantillas"
            :key="index"
          >
            <q-item-section @click="goPage('firmar', item.uid)">
              {{ item.nombre }}
              <div class="text-grey-6">
                Documento Compartido por {{ item.email }}
              </div>
            </q-item-section>
            <q-separator />
          </q-item>
        </q-list>
      </q-menu>
      <q-tooltip>Notificaciones</q-tooltip>
    </q-btn>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useArchivo } from "../composables/useArchivo.js";
import { useLogin } from "src/composables/useAuth";
import SignaturePad from "signature_pad";
import { useRouter } from "vue-router";

export default {
  setup() {
    const { getSharedPlantillas } = useArchivo();
    const { userInfo } = useLogin();
    const router = useRouter();
    const alert = ref(false);
    let listSharedPlantillas = ref([]);
    onMounted(async () => {
      console.log("se monta-notify");
      const { ok, msg } = await getSharedPlantillas(userInfo.value.uid);
      listSharedPlantillas.value = msg.slice().reverse();
    });

    return {
      alert,
      listSharedPlantillas,
      userInfo,
      goPage: (name, id) => {
        console.log("firmar-j", id);
        router.push({ name, params: { uid: id } });
      },
    };
  },
};
</script>
<style scoped></style>
