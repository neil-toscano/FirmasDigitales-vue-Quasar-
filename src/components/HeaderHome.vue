<template>
  <div class="q-pa-sm bg-turquoise">
    <q-toolbar class="bg-turquoise text-white">
      <q-btn
        flat
        round
        dense
        label="OneLoop"
        class="q-mr-sm"
        @click="goLink('home')"
      />

      <q-space />
      <q-btn
        color="turquoise"
        class="list-items-navbar"
        unelevated
        v-for="(item, index) in options"
        :key="index"
        :label="item.label"
        @click="goLink(item.value)"
      />
      <q-btn flat round dense icon="menu" class="icon" @click="toggleDrawer" />
    </q-toolbar>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useUi } from "../composables/useUi.js";
export default {
  setup() {
    const { toggleDrawer } = useUi();
    const router = useRouter();
    const goLink = (nameLink) => {
      router.push({ name: nameLink });
    };
    return {
      toggleDrawer,
      model: ref("one"),
      goLink,
      options: [
        { label: "Contacto", value: "contacto" },
        { label: "Nosotros", value: "nosotros" },
        { label: "login", value: "login" },
        { label: "Registrarse", value: "registrarse" },
      ],
    };
  },
};
</script>
<style lang="css" scoped>
.icon {
  display: none;
}

.bg-turquoise {
  background: #24dbbf !important;
}

@media screen and (max-width: 600px) {
  .list-items-navbar {
    display: none;
  }
  .icon {
    display: block;
  }
}
</style>
