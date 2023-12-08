// mouse.js
import { api } from 'src/boot/axios';

export function useCreateAccount() {

  async function newAccount({user_nombre,user_email,user_password}) {
    try {
        const { data } = await api.post('/api/usuarios', {nombre: user_nombre, email: user_email, password: user_password })

        return { ok: true, msg: "Se creó de manera exitosa su cuenta" }
    } catch (error) {
        console.log(error);
        return { ok: false, msg: "Hubo un error al crear la cuenta"}
    }
  }

  return { newAccount }
}