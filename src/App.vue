<template>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue'
import { useLogin } from './composables/useAuth.js';

export default defineComponent({
  name: 'App',
  setup() {
    const { checkAuthStatus } = useLogin();
    checkAuthStatus();
    return{

    }
  }
})
</script>
