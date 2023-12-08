import { defineStore } from "pinia"
import { api } from "src/boot/axios"
import { computed, ref } from "vue"

export const useLoginStore = defineStore('login', () => {
    const initialState = ref({
        status: 'checking',
        user: {},
        errorMessage: undefined
    })


    const userInfo = computed(() => initialState.value.user);
    const getErrorLogin = computed(() => initialState.value.errorMessage)

    function onChecking() {
      initialState.value.status = 'checking'
      initialState.value.user = {}
      initialState.value.errorMessage = undefined
    }

    function onLogin(payload) {
        initialState.value.status = 'authenticated'
        initialState.value.user = payload
        initialState.value.errorMessage = undefined
        
    }

    function onLogout(payload) {
        initialState.value.status = 'not-authenticated'
        initialState.value.user = {}
        initialState.value.errorMessage = payload
        localStorage.removeItem('idToken');
        localStorage.removeItem('refresh-token');

    }

    function clearErrorMessage() {
        initialState.value.errorMessage = undefined
    }

    async function initializeAuth() {
        const token = localStorage.getItem('idToken');
        if(!token){
            onLogout(undefined);
            return { ok: false }
        }
        try {
            const {data} = await api.post('/api/lookup',{ idToken:token })
            const { nombre, email, uid } = data.usuario;
            onLogin( { name: nombre, uid: uid, email: email } )
            return { ok: true }
        } catch (error) {
            console.log(error);
            onLogout(undefined);
            return { ok: false, message: "error" }
            
        }
    }


    return { onChecking, onLogin, onLogout, clearErrorMessage, initialState,
             getErrorLogin, initialState, initializeAuth, userInfo }
  })