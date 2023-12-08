import { storeToRefs } from 'pinia';
import { useContratoStore } from 'src/stores/contrato.js';
import { useQuasar } from 'quasar'
import { computed, watch } from 'vue';


export function useContrato() {
    const store = useContratoStore();
    const $q = useQuasar();
    const { drawerLeft, drawerRight } = storeToRefs(store);
    const { toggleDrawerLeft, toggleDrawerRight, forceToggleDrawer } = store;


    const widthScreen = computed(() => {
        return $q.screen.width;
      })
    
    // const isScreenSmall = computed(() => {
    //   return widthScreen.value < 600;
    // });

    watch(widthScreen, (newWidth, oldWidth) => {
      if (newWidth >= 600) {
        forceToggleDrawer(); // Llamar a la función para forzar el cierre del cajón
      }
    });
    
  return { toggleDrawerLeft, toggleDrawerRight, drawerLeft, drawerRight }
}