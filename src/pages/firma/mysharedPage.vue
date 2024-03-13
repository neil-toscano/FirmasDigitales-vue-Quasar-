<template>
  <div class="q-pa-md q-gutter-sm">
    <q-btn
      color="primary"
      style="width: 200px"
      v-for="(item, index) in listMyShared"
      :key="index"
      @click="goPage('firmar', item.uid)"
    >
      <div>
        {{ item.nombre }}
      </div>
    </q-btn>
  </div>
</template>
<script>
import { useShared } from "src/composables/useShared";
import { useLogin } from "src/composables/useAuth";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";
export default {
  setup() {
    const $q = useQuasar();
    const router = useRouter();
    const { getMySharedPlantilla } = useShared();
    const { userInfo } = useLogin();
    const listMyShared = ref([]);
    $q.loading.show();
    onMounted(async () => {
      const { ok, msg } = await getMySharedPlantilla(userInfo.value.uid);
      $q.loading.hide();
      if (ok) {
        listMyShared.value = msg;
        console.log(msg, "lado front, msg");
      }
    });
    return {
      listMyShared,
      goPage: (name, id) => {
        console.log("firmar-j", id);
        router.push({ name, params: { uid: id } });
      },
    };
  },
};
</script>
