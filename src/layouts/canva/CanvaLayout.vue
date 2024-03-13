<template>
  <div>
    <q-layout view="lHh lpr lFf" container style="height: 100vh; width: 100%" class="shadow-2 rounded-borders">
      <q-header elevated>
        <q-toolbar>
          <q-btn flat round dense icon="menu" class="q-mr-sm" />
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>

          <q-toolbar-title>Quasar Framework</q-toolbar-title>

          <q-btn flat round dense icon="rectangle" />
          <q-btn flat round dense icon="circle" />
          <q-btn flat round dense icon="whatshot" />
        </q-toolbar>
      </q-header>

      <q-page-container>
          <router-view/>
      </q-page-container>
    </q-layout>
  </div>
</template>