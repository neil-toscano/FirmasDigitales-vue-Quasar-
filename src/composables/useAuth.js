import { useLoginStore } from '../stores/login.js'
import { computed } from 'vue';
import { api } from 'src/boot/axios.js';
import { storeToRefs } from 'pinia';

export function useLogin() {
    const store = useLoginStore();
    const { onChecking, onLogin, onLogout, clearErrorMessage, initializeAuth } = store;
    const { initialState, userInfo, count } = storeToRefs(store);

    const isErrorLogin = computed(() => initialState.value.errorMessage)
    const isAuth = computed(initialState.value.status)

    const startLogin = async({ user_email, user_password}) => {
        onChecking();
        try {
            const { data } = await api.post('/api/auth/login', {email: user_email, password: user_password})
            onLogin( { name: data.usuario.nombre, uid: data.usuario.uid, email: data.usuario.email })
            localStorage.setItem('idToken', data.token );
            localStorage.setItem('token-init-date', new Date().getTime() )
            localStorage.setItem('refresh-token', data.refreshtoken)
            
        } catch (error) {
            console.log(error);
            const errorResponse = error.response.data.msg;
            onLogout(errorResponse)
            setTimeout(() => {
                clearErrorMessage();
            }, 10000);
        }
    }
    const checkAuthStatus = async() => {
        const resp = await initializeAuth();
        return resp;
    }
    const startLogout = () => {
        onLogout();
    }

  return { startLogin, startLogout, isErrorLogin, isAuth,
           checkAuthStatus, onLogout, userInfo, count }
}