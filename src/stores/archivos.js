import { defineStore } from "pinia"
import { ref } from "vue"

export const useArchivoStore = defineStore('archivo', () => {
    const listPdfFiles = ref([])
    const listSharedFiles = ref([])
    
    function setListPdf(pdfPayload) {
        listPdfFiles.value = pdfPayload;
    }

    function setListSharedFiles(pdfSharedPayload) {
        listSharedFiles.value = pdfSharedPayload
    }
    return { listPdfFiles, setListPdf , listSharedFiles, setListSharedFiles }
  })