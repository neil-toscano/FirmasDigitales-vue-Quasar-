<template>
  <q-page>
    <div
      class="q-pa-md row justify-center content-center q-gutter-md container-card"
    >
      <q-card class="my-card text-white shadow-up-10">
        <form @submit.prevent.stop="onSubmit" @reset.prevent.stop="onReset">
          <q-card-section class="bg-deep-purple-7 q-mb-md">
            <div class="text-h4 text-center">Login</div>
          </q-card-section>
          <q-card-section>
            <div>{{ JSON.stringify(isErrorLogin) }}</div>
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
          <q-card-section class="text-center row q-pa-sm">
            <div class="text-grey-6 q-mx-md">Olvidé la contraseña?</div>
            <div class="text-grey-6 volver-home" @click="goLink">
              Volver principal
            </div>
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
import { useLogin } from "../composables/useAuth.js";
export default {
  setup() {
    const { startLogin, startLogout, isErrorLogin } = useLogin();
    const $q = useQuasar();
    const router = useRouter();

    const email = ref(null);
    const emailRef = ref(null);

    const password = ref("");
    const passwordRef = ref("");
    const isPwd = ref(true);

    return {
      router,
      isErrorLogin,
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

        if (emailRef.value.hasError || passwordRef.value.hasError) {
          $q.notify({
            color: "negative",
            message: "complete los campos correctamente",
          });

          // form has error
        } else {
          const user_email = email.value;
          const user_password = password.value;

          $q.loading.show();
          await startLogin({ user_email, user_password });
          console.log("salio");
          $q.loading.hide();
          if (isErrorLogin.value !== undefined) {
            $q.notify({
              icon: "done",
              color: "negative",
              message: isErrorLogin.value,
            });
          } else {
            router.push({
              name: "editor",
              params: { id: "6578f48788533b3799749e52" },
            });
          }
        }
      },
      goLink: () => {
        router.push({ name: "home" });
      },

      // onReset () {
      //   name.value = null
      //   age.value = null
      //   nameRef.value.resetValidation()
      //   ageRef.value.resetValidation()
      // }
    };
  },
};
</script>

<style lang="css" scoped>
.my-card {
  width: 100%;
  max-width: 400px;
}
.container-card {
  min-height: 100vh;
  background-image: url("https://images.pexels.com/photos/6775241/pexels-photo-6775241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
  background-size: cover;
}
.volver-home {
  border-bottom: 1px solid #219ebc;
}
.volver-home:hover {
  color: #219ebc !important;
  cursor: pointer;
}
</style>
