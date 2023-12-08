<template>
  <div class="q-pa-md">
    <q-layout view="hHr Lpr lff">
      <q-header elevated class="bg-white text-grey-8" height-hint="64">
        {{ userInfo }}
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

          <q-toolbar-title v-if="$q.screen.gt.xs" shrink class="row items-center no-wrap">
            <div class="circle-first"></div>
            <div class="circle-second"></div>
            <div class="circle-third"></div>
          </q-toolbar-title>

          <q-space />


          <div class="q-gutter-sm row items-center no-wrap">
            <q-btn round dense flat color="grey-8" icon="notifications">
              <q-badge color="red" text-color="white" floating>
                2
              </q-badge>
              <q-tooltip>Notifications</q-tooltip>
            </q-btn>
            <q-btn round flat @click="toggleDrawerRight">
              <q-avatar size="26px">
                <img src="https://cdn.quasar.dev/img/boy-avatar.png">
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
        :width="200"
        :breakpoint="500"
        overlay
        :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'"
      >
        <q-scroll-area style="height: calc(100%); border-right: 1px solid #ddd">
          <q-list padding>
            <q-item>
              <q-item-section>
                Close
              </q-item-section>
              <q-item-section avatar @click="toggleDrawerLeft" class="pointer-item">
                <q-icon name="close" style="color: rgb(233, 29, 29);"/>
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="home" />
              </q-item-section>

              <q-item-section>
                Home
              </q-item-section>
            </q-item>

            <q-item active clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="tab" />
              </q-item-section>

              <q-item-section>
                Plantillas
              </q-item-section>
            </q-item>
            <q-separator/>
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="payments" />
              </q-item-section>

              <q-item-section>
                Comprar
              </q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="delete" />
              </q-item-section>

              <q-item-section>
                Papelera
              </q-item-section>
            </q-item>
            <q-separator />
            <!-- //! list of repositories -->
            <q-item>
              <q-item-section>
                <div class="text-grey-8">Repositorios</div>
              </q-item-section>
            </q-item>

            <FileComponent/>

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
        <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
          <q-list padding>
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="person" />
              </q-item-section>

              <q-item-section>
                Perfil
              </q-item-section>
            </q-item>

            <q-item active clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="description" />
              </q-item-section>

              <q-item-section>
                Mis proyectos
              </q-item-section>
            </q-item>
            
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="settings" />
              </q-item-section>

              <q-item-section>
                Configuración
              </q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable v-ripple @click="logout">
              <q-item-section avatar>
                <q-icon name="logout" />
              </q-item-section>

              <q-item-section>
                Sign Out
              </q-item-section>
            </q-item>

          </q-list>
        </q-scroll-area>

        <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            <div class="text-weight-bold">{{ userInfo.name }}</div>
            <div>{{ userInfo.email }}</div>
          </div>
        </q-img>
      </q-drawer>

      <q-page-container>
        <router-view/>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useContrato } from '../../composables/useContrato.js'
import { useLogin } from '../../composables/useAuth.js'
import { useRouter } from 'vue-router'
import FileComponent from 'components/FileComponent.vue'


export default {
  components: {
    FileComponent
  },
  setup () {
    const router = useRouter();
    const { drawerLeft, drawerRight, toggleDrawerLeft, toggleDrawerRight } = useContrato();
    const { onLogout, userInfo } = useLogin();
    return {
      userInfo,
      drawerLeft,
      drawerRight,
      toggleDrawerLeft,
      toggleDrawerRight,
      logout: () => {
        onLogout();
        router.push({name: "login" })
      }
    }
  }
}
</script>
<style>
.pointer-item{
  cursor: pointer;
}
.circle-first {
  width: 20px; /* Define el ancho del círculo */
  height: 20px; /* Define la altura del círculo */
  background-color: rgb(238, 255, 0); /* Establece el color de fondo a rojo */
  border-radius: 50%; /* Hace que el borde tenga forma de círculo */
}
.circle-second {
  width: 20px; /* Define el ancho del círculo */
  height: 20px; /* Define la altura del círculo */
  background-color: rgb(0, 255, 200); /* Establece el color de fondo a rojo */
  border-radius: 50%; /* Hace que el borde tenga forma de círculo */
}
.circle-third {
  width: 20px; /* Define el ancho del círculo */
  height: 20px; /* Define la altura del círculo */
  background-color: rgb(255, 0, 128); /* Establece el color de fondo a rojo */
  border-radius: 50%; /* Hace que el borde tenga forma de círculo */
}

</style>
