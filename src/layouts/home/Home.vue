<template>
  <q-layout view="lHr Lpr lFf">
    <q-header>
      <HeaderHome />
    </q-header>
    <q-drawer
      v-model="isDrawerOpen"
      side="right"
      :width="200"
      :breakpoint="1200"
      overlay
      bordered
      :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'"
    >
      <q-scroll-area class="fit">
        <q-list>
          <q-item>
            <q-item-section> Close </q-item-section>
            <q-item-section avatar @click="toggleDrawer">
              <q-icon name="close" style="color: rgb(233, 29, 29)" />
            </q-item-section>
          </q-item>
          <template v-for="(menuItem, index) in menuList" :key="index">
            <q-item
              clickable
              :active="menuItem.label === 'Outbox'"
              v-ripple
              @click="goLink(menuItem.value)"
            >
              <q-item-section avatar>
                <q-icon :name="menuItem.icon" />
              </q-item-section>
              <q-item-section>
                {{ menuItem.label }}
              </q-item-section>
            </q-item>
            <q-separator :key="'sep' + index" v-if="menuItem.separator" />
          </template>
        </q-list>
      </q-scroll-area>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useUi } from "../../composables/useUi.js";
import HeaderHome from "components/HeaderHome.vue";
import { useRouter } from "vue-router";

const menuList = [
  {
    icon: "inbox",
    label: "Contacto",
    value: "contacto",
    separator: true,
  },
  {
    icon: "send",
    label: "Nosotros",
    value: "nosotros",
    separator: false,
  },
  {
    icon: "delete",
    label: "Login",
    value: "login",
    separator: false,
  },
  {
    icon: "person_add",
    label: "Registrarse",
    value: "registrarse",
    separator: false,
  },
];

export default defineComponent({
  name: "HomeLayout",

  components: {
    HeaderHome,
  },

  setup() {
    const { isDrawerOpen, toggleDrawer } = useUi();
    const router = useRouter();
    const goLink = (nameLink) => {
      router.push({ name: nameLink });
    };
    return {
      toggleDrawer,
      isDrawerOpen,
      menuList,
      goLink,
    };
  },
});
</script>
