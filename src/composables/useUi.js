import { storeToRefs } from 'pinia';
import { useUiStore } from 'src/stores/ui.js';
import { useQuasar } from 'quasar'
import { computed, watch } from 'vue';
export function useUi() {
    const store = useUiStore();
    const $q = useQuasar();
    const { isDrawerOpen } = storeToRefs(store);
    const { toggleDrawer, forceToggleDrawer } = store;


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
    
  return { toggleDrawer, isDrawerOpen }
}