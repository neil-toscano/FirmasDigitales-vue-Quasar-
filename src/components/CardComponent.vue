<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card">
      <q-card-section>
        <q-card-section class="col-5 flex flex-center">
          <q-img
            v-show="!sizeWindow"
            class="rounded-borders"
            src="https://cdn.quasar.dev/img/parallax1.jpg"
          />
          <q-parallax
            v-show="sizeWindow"
            src="https://cdn.quasar.dev/img/parallax1.jpg"
            :height="400"
          />
        </q-card-section>

        <q-card-section>
          <div class="text-h6">{{ lorem }}</div>
        </q-card-section>
      </q-card-section>
    </q-card>
    <q-card class="my-card">
      <q-card-section :horizontal="sizeWindow">
        <q-img
          class="col-5 rounded-borders"
          src="https://images.pexels.com/photos/48195/document-agreement-documents-sign-48195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />

        <q-card-section>
          <q-list bordered>
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-badge rounded color="red" label="1" />
              </q-item-section>
              <q-item-section> {{ lorem }}</q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-badge rounded color="pink-11" label="2" />
              </q-item-section>

              <q-item-section>{{ firmaDesc }}</q-item-section>
            </q-item>
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-badge rounded color="purple-11" label="3" />
              </q-item-section>

              <q-item-section>{{ firmaDesc2 }}</q-item-section>
            </q-item>
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-badge rounded color="cyan-13" label="4" />
              </q-item-section>

              <q-item-section>{{ firmaDesc3 }}</q-item-section>
            </q-item>
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-badge rounded color="yellow-12" label="5" />
              </q-item-section>

              <q-item-section>{{ firmaDesc4 }}</q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
      </q-card-section>

      <q-separator />
    </q-card>
  </div>
</template>

<script>
import { useQuasar } from "quasar";
import { computed } from "vue";
export default {
  setup() {
    const $q = useQuasar();
    const sizeWindow = computed(() => {
      return $q.screen.lt.sm ? false : true;
    });
    return {
      sizeWindow,
      lorem:
        "Nos especializamos en el diseño y desarrollo de soluciones a medida, desde creación de plataformas web y aplicaciones móviles hasta la implementación de inteligencia artificial y análisis de datos con Python.",
      firmaDesc:
        "Ofrecemos una plataforma que facilita la creación y firma digital de diversos tipos de documentos.",
      firmaDesc2:
        "Ya sea para la compra de artículos, contratación de servicios como propiedades inmobiliarias o la contratación de bandas para eventos.",
      firmaDesc3:
        "nuestra herramienta simplifica el proceso al ofrecer una interfaz fácil de usar para crear, revisar y firmar contratos con comodidad.",
      firmaDesc4:
        "Olvídate del papeleo y da la bienvenida a acuerdos eficientes, seguros y legalmente vinculantes, todo accesible al alcance de tu mano",
    };
  },
};
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
</style>
