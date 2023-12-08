import { storeToRefs } from 'pinia';
import { api } from 'src/boot/axios';
import { useArchivoStore } from 'src/stores/archivos';

export function useArchivo() {
    const store = useArchivoStore();

    const { listPdfFiles } = storeToRefs(store);
    const { setListPdf } = store;

    const getArchivos = async(uid) => {

        try {
            const { data } = await api.get('/api/files', { params: { uid } })
            setListPdf(data);

        } catch (error) {
            console.log(error);
        }
    }

  return { listPdfFiles,  getArchivos }
}