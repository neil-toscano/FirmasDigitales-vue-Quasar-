<template>
  <div class="q-pa-md row justify-center items-center q-gutter-md">
    <q-card class="my-card">
      <q-img src="icons/yape.jpeg" />

      <q-card-section>
        <div class="text-h6">Plataforma Respaldada por OneLoop</div>
        <div class="text-subtitle2">
          Asegurese de enviar la captura al whatsapp
        </div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ lorem }}
      </q-card-section>

      <q-page-sticky position="bottom-right" :offset="[18, 18]">
        <q-btn
          href="https://wa.me/51946684130?text=¡Hola! soy Cliente de OneLoop."
          target="_blank"
          round
          color="green"
          icon="fa-brands fa-whatsapp"
        >
          <q-tooltip>Whatsapp</q-tooltip>
        </q-btn>
      </q-page-sticky>
    </q-card>
  </div>
</template>

<script>
export default {
  setup() {
    return {
      lorem:
        "Por el momento solo recibimos pagos por Yape o alguna transferencia bancaria.",
    };
  },
};
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 280px
</style>
