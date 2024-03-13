import { storeToRefs } from "pinia";
import { api } from "src/boot/axios";
import { useArchivoStore } from "src/stores/archivos";

export function useArchivo() {
  const store = useArchivoStore();

  const { listPdfFiles, listSharedFiles } = storeToRefs(store);
  const { setListPdf, setListSharedFiles } = store;

  const getArchivos = async (uid) => {
    try {
      const { data } = await api.get("/api/files", { params: { uid } });
      setListPdf(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getSharedFiles = async (uid) => {
    try {
      const { data } = await api.get("/api/files/shared", { params: { uid } });
      setListSharedFiles(data);
    } catch (error) {
      console.log(error);
    }
  };

  const saveImageSignature = async (uid, dataImage) => {
    try {
      console.log(uid);
      const formData = new FormData();
      formData.append("archivo", dataImage, "nombre_del_archivo.pdf");
      const { data } = await api.post("/api/files/images", formData, {
        params: { uid },
      });
      console.log(data);
      return {
        ok: true,
        msg: data,
      };
    } catch (error) {
      console.log(error, "error imageSignature");
      return {
        ok: false,
        msg: "error",
      };
    }
  };
  const getImgPlantilla = async () => {
    try {
      const { data } = await api.get("/api/plantillas/image");
      console.log(data);
      return {
        data,
      };
    } catch (error) {
      console.log(error);
      return {
        ok: false,
        msg: "error",
      };
    }
  };

  const getSharedPlantillas = async (id) => {
    console.log(id, "id");
    try {
      const { data } = await api.get("/api/plantillas/shared", {
        params: { id },
      });
      console.log(data, "data");
      return {
        ok: true,
        msg: data.msg,
      };
    } catch (error) {
      console.log(error);
    }
  };

  const getSharedPlantilla = async (id) => {
    console.log(id, "id-shared");
    try {
      const { data } = await api.get("/api/plantillas/sharedtemplate", {
        params: { id },
      });
      console.log(data, "data");
      return {
        ok: true,
        msg: data.msg,
      };
    } catch (error) {
      console.log(error);
    }
  };

  return {
    listPdfFiles,
    getArchivos,
    getSharedFiles,
    listSharedFiles,
    saveImageSignature,
    getImgPlantilla,
    getSharedPlantillas,
    getSharedPlantilla,
  };
}
