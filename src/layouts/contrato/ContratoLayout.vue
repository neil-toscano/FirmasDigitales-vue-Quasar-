<template>
  <div class="q-pa-md" style="background-color: #f5f7f9">
    <q-layout view="hHr Lpr lff">
      <q-header elevated class="bg-turquoise text-white" height-hint="64">
        <q-toolbar class="GNL__toolbar">
          <q-btn
            flat
            dense
            round
            @click="toggleDrawerLeft"
            aria-label="Menu"
            icon="menu"
            class="q-mr-sm"
          />

          <q-toolbar-title
            v-if="$q.screen.gt.xs"
            shrink
            class="row items-center no-wrap"
          >
            <div class="circle-first"></div>
            <div class="circle-second"></div>
            <div class="circle-third"></div>
          </q-toolbar-title>

          <q-space />

          <div class="q-gutter-sm row items-center no-wrap">
            <NotifyComponent />
            <q-btn round flat @click="toggleDrawerRight" size="1.2rem">
              <q-avatar color="white" size="2rem" text-color="teal-4">
                {{ userInfo.name.charAt(0).toUpperCase() }}
              </q-avatar>
              <q-tooltip>Account</q-tooltip>
            </q-btn>
          </div>
        </q-toolbar>
      </q-header>

      <q-drawer
        side="left"
        v-model="drawerLeft"
        bordered
        :width="250"
        :breakpoint="500"
        overlay
        :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'"
      >
        <q-scroll-area
          class="bg-coral text-white"
          style="height: calc(100%); border-right: 1px solid #ddd"
        >
          <q-list padding>
            <q-item>
              <q-item-section class="logo-style"> OneLoop </q-item-section>
              <q-item-section
                avatar
                @click="toggleDrawerLeft"
                class="pointer-item"
              >
                <q-icon name="close" style="color: white" size="2rem" />
              </q-item-section>
            </q-item>
            <q-separator color="white" />

            <q-item
              clickable
              v-ripple
              :active="link === 'home'"
              @click="link = 'home'"
              active-class="my-menu-link text-turquoise"
              class="navbar-item"
            >
              <q-item-section avatar>
                <q-icon name="home" />
              </q-item-section>

              <q-item-section
                @click="navigationParams('editor', '6578f48788533b3799749e52')"
              >
                Home
              </q-item-section>
            </q-item>

            <q-item
              clickable
              v-ripple
              :active="link === 'plantillas'"
              @click="link = 'plantillas'"
              active-class="my-menu-link"
              class="navbar-item"
            >
              <q-item-section avatar>
                <q-icon name="tab" />
              </q-item-section>
              <q-item-section @click="navigationPage('plantilla')">
                Plantillas
              </q-item-section>
            </q-item>

            <q-item
              clickable
              v-ripple
              :active="link === 'compartidos'"
              @click="link = 'compartidos'"
              active-class="my-menu-link"
              class="navbar-item"
            >
              <q-item-section avatar>
                <q-icon name="share" />
              </q-item-section>
              <q-item-section @click="navigationPage('myshared')">
                Compartidos
              </q-item-section>
            </q-item>

            <q-item
              clickable
              v-ripple
              :active="link === 'canvas'"
              @click="link = 'canvas'"
              active-class="my-menu-link"
              class="navbar-item"
            >
              <q-item-section avatar>
                <q-icon name="category" />
              </q-item-section>

              <q-item-section @click="navigationPage('canva')">
                Canvas
              </q-item-section>
            </q-item>
            <q-item
              clickable
              v-ripple
              :active="link === 'newtemplate'"
              @click="link = 'newtemplate'"
              active-class="my-menu-link"
              class="navbar-item"
            >
              <q-item-section avatar>
                <q-icon name="draw" />
              </q-item-section>

              <q-item-section @click="navigationPage('froala')">
                Crear plantilla
                <q-tooltip> Admin</q-tooltip>
              </q-item-section>
            </q-item>
            <q-item
              clickable
              v-ripple
              :active="link === 'comprar'"
              @click="link = 'comprar'"
              active-class="my-menu-link"
              class="navbar-item"
            >
              <q-item-section avatar>
                <q-icon name="payments" />
              </q-item-section>

              <q-item-section @click="navigationPage('payment')">
                Comprar
              </q-item-section>
            </q-item>
            <q-item
              clickable
              v-ripple
              :active="link === 'papelera'"
              @click="link = 'papelera'"
              active-class="my-menu-link"
              class="navbar-item"
            >
              <q-item-section avatar>
                <q-icon name="delete" />
              </q-item-section>

              <q-item-section> Papelera </q-item-section>
            </q-item>
            <q-separator color="white" />
            <!-- //! list of repositories -->
            <q-item>
              <q-item-section>
                <div class="text-grey-4">Repositorios</div>
              </q-item-section>
            </q-item>

            <FileComponent />
          </q-list>
        </q-scroll-area>
      </q-drawer>

      <q-drawer
        v-model="drawerRight"
        side="right"
        :width="300"
        :breakpoint="1800"
        elevated
        overlay
      >
        <q-scroll-area
          style="
            height: calc(100% - 150px);
            margin-top: 150px;
            border-right: 1px solid #ddd;
          "
        >
          <q-list padding>
            <q-item
              clickable
              v-ripple
              :active="link === 'perfil'"
              @click="link = 'perfil'"
              active-class="my-menu-link"
              class="navbar-item"
            >
              <q-item-section avatar>
                <q-icon name="person" />
              </q-item-section>

              <q-item-section> Perfil </q-item-section>
            </q-item>

            <q-item
              clickable
              v-ripple
              :active="link === 'proyectos'"
              @click="link = 'proyectos'"
              active-class="my-menu-link"
              class="navbar-item"
            >
              <q-item-section avatar>
                <q-icon name="description" />
              </q-item-section>

              <q-item-section> Mis proyectos </q-item-section>
            </q-item>

            <q-item
              clickable
              v-ripple
              :active="link === 'settings'"
              @click="link = 'settings'"
              active-class="my-menu-link"
              class="navbar-item"
            >
              <q-item-section avatar>
                <q-icon name="settings" />
              </q-item-section>

              <q-item-section> Configuración </q-item-section>
            </q-item>
            <q-separator />
            <q-item
              clickable
              v-ripple
              @click="logout"
              :active="link === 'logout'"
              active-class="my-menu-link"
              class="navbar-item"
            >
              <q-item-section avatar>
                <q-icon name="logout" />
              </q-item-section>

              <q-item-section> Sign Out </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>

        <q-img
          class="absolute-top"
          src="https://picsum.photos/500/300"
          style="height: 150px"
        >
          <div class="absolute-bottom bg-transparent">
            <q-avatar
              color="white"
              size="56px"
              class="q-mb-sm"
              text-color="teal-5"
            >
              {{ userInfo.name.charAt(0).toUpperCase() }}
            </q-avatar>
            <div class="text-weight-bold">{{ userInfo.name }}</div>
            <div>{{ userInfo.email }}</div>
          </div>
        </q-img>
      </q-drawer>

      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import { ref } from "vue";
import { useContrato } from "../../composables/useContrato.js";
import { useLogin } from "../../composables/useAuth.js";
import { useRouter } from "vue-router";
import FileComponent from "components/FileComponent.vue";
import NotifyComponent from "components/NotifyComponent.vue";

export default {
  components: {
    FileComponent,
    NotifyComponent,
  },
  setup() {
    const router = useRouter();
    const { drawerLeft, drawerRight, toggleDrawerLeft, toggleDrawerRight } =
      useContrato();
    const { onLogout, userInfo } = useLogin();
    return {
      link: ref("inbox"),
      userInfo,
      drawerLeft,
      drawerRight,
      toggleDrawerLeft,
      toggleDrawerRight,
      logout: () => {
        onLogout();
        router.push({ name: "login" });
      },
      navigationPage: (namepage) => {
        router.push({ name: namepage });
      },
      navigationParams: (namepage, id) => {
        router.push({
          name: namepage,
          params: { id },
        });
      },
    };
  },
};
</script>
<style scoped lang="css">
.pointer-item {
  cursor: pointer;
}
.circle-first {
  width: 15px;
  height: 15px;
  background-color: white;
  border-radius: 50%;
  margin-right: 2px;
}
.circle-second {
  width: 15px;
  height: 15px;
  background-color: white;
  border-radius: 50%;
  margin-right: 2px;
}
.circle-third {
  width: 15px;
  height: 15px;
  background-color: white;
  border-radius: 50%;
}
.my-card {
  width: 100%;
  max-width: 250px;
}
.my-menu-link {
  color: white;
  background: #24dbbf;
}
.navbar-item:hover {
  color: white;
  background: #24dbbf;
}
.logo-style {
  color: white;
  font-size: 1.5rem;
  font-family: "Courier New", Courier, monospace;
  font-weight: bold;
}
.bg-turquoise {
  background: #24dbbf !important;
}
.bg-coral {
  /* background: #7e7b84 !important; */
  /* background: #293657 !important; */
  background: #435b6a !important;
  /* background: #4e5975 !important; */
}
</style>
