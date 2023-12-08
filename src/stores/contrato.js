import { defineStore } from "pinia"
import { ref } from "vue"

export const useContratoStore = defineStore('contrato', () => {
    const drawerLeft = ref(false)
    const drawerRight = ref(false)

    function toggleDrawerLeft() {
        drawerLeft.value = !drawerLeft.value
    }
    function toggleDrawerRight() {
        drawerRight.value = !drawerRight.value
    }
    function forceToggleDrawer() {
        drawerLeft.value = false;
    }

    return { drawerLeft, drawerRight, toggleDrawerLeft, toggleDrawerRight, forceToggleDrawer }
  })