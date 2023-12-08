import { defineStore } from "pinia"
import { ref } from "vue"

export const useUiStore = defineStore('ui', () => {
    const isDrawerOpen = ref(false)

    function toggleDrawer() {
        isDrawerOpen.value = !isDrawerOpen.value
    }
    function forceToggleDrawer() {
        isDrawerOpen.value = false;
    }

    return { isDrawerOpen, toggleDrawer, forceToggleDrawer }
  })