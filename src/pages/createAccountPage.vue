<template>
  <q-page>
    <div
      class="q-pa-md row justify-center content-center q-gutter-md container-card"
    >
      <q-card class="my-card text-white shadow-up-10">
        <form @submit.prevent.stop="onSubmit" @reset.prevent.stop="onReset">
          <q-card-section class="bg-deep-purple-7 q-mb-md">
            <div class="text-h4 text-center">Crear Cuenta</div>
          </q-card-section>
          <q-card-section>
            <q-input
              ref="nombreRef"
              v-model="nombre"
              rounded
              outlined
              label="nombre completo"
              lazy-rules
              :rules="nombreRules"
              class="q-my-md"
            >
              <template v-slot:prepend>
                <q-icon name="person" />
              </template>
            </q-input>

            <q-input
              ref="emailRef"
              v-model="email"
              rounded
              outlined
              label="su correo *"
              lazy-rules
              :rules="emailRules"
              class="q-my-md"
            >
              <template v-slot:prepend>
                <q-icon name="email" />
              </template>
            </q-input>

            <q-input
              ref="passwordRef"
              v-model="password"
              label="Password"
              rounded
              outlined
              :type="isPwd ? 'password' : 'text'"
              :rules="passwordRules"
              class="q-my-md"
            >
              <template v-slot:prepend>
                <q-icon name="lock" />
              </template>
              <template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
            </q-input>

            <q-btn
              size="lg"
              style="width: 100%"
              label="Submit"
              type="submit"
              color="secondary"
            />
          </q-card-section>
          <q-card-section class="text-center q-pa-sm">
            <div class="text-grey-6">Ya tengo cuenta</div>
            <div class="text-grey-6 volver-home">Volver principal</div>
          </q-card-section>
        </form>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";
import { useCreateAccount } from "../composables/useCreateAccount.js";
export default {
  setup() {
    const { newAccount } = useCreateAccount();
    const $q = useQuasar();
    const router = useRouter();

    const nombre = ref(null);
    const nombreRef = ref(null);

    const email = ref(null);
    const emailRef = ref(null);

    const password = ref("");
    const passwordRef = ref("");
    const isPwd = ref(true);

    return {
      router,
      newAccount,
      nombre,
      nombreRef,
      nombreRules: [
        (val) =>
          (val !== null && val !== "") || "introduzca su Nombre completo",
        (val) => val.length > 3 || "mayor a 3 caracteres",
      ],
      email,
      emailRef,
      emailRules: [
        (val) => !!val || "ingrese correo",
        (val) =>
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val) ||
          "Ingresa un correo electrónico válido",
      ],
      password,
      passwordRef,
      isPwd,
      passwordRules: [
        (val) => (val !== null && val !== "") || "introduzca contraseña",
        (val) => val.length > 8 || "mayor a 8 caracteres",
      ],
      async onSubmit() {
        emailRef.value.validate();
        passwordRef.value.validate();
        nombreRef.value.validate();

        if (
          emailRef.value.hasError ||
          passwordRef.value.hasError ||
          nombreRef.value.hasError
        ) {
          $q.notify({
            color: "negative",
            message: "complete los campos correctamente",
          });

          // form has error
        } else {
          const user_email = email.value;
          const user_password = password.value;
          const user_nombre = nombre.value;

          const resp = await newAccount({
            user_nombre,
            user_email,
            user_password,
          });
          if (resp.ok) {
            $q.notify({
              color: "secondary",
              message: resp.msg,
              type: "positive",
            });
            router.push({ name: "login" });
          } else {
            $q.notify({
              color: "negative",
              message: resp.msg,
              type: "negative",
            });
          }
        }
      },
    };
  },
};
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 400px
.container-card
  min-height: 100vh
  background-image: url('https://images.pexels.com/photos/6775241/pexels-photo-6775241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
  background-size: cover
</style>
