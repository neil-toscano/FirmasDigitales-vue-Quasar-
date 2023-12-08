import { defineStore } from "pinia"
import { ref } from "vue"

export const useArchivoStore = defineStore('archivo', () => {
    const listPdfFiles = ref([])
    
    function setListPdf(pdfPayload) {
        listPdfFiles.value = pdfPayload;
    }

    return { listPdfFiles, setListPdf }
  })