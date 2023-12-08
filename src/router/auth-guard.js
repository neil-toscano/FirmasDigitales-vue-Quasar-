import { useLoginStore } from '../stores/login.js'
const { initialState } = useLoginStore();

export const isAuthenticatedGuard = async( to, from, next) => {
    if(initialState.status !== 'Authenticated' && to.name !== 'login') {
      return { name: 'login' }
    }
}
