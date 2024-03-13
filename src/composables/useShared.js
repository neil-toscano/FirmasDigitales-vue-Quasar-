import { useQuasar } from "quasar";
import { api } from "src/boot/axios";

export function useShared() {
  const $q = useQuasar();

  function confirm(uid, formData) {
    $q.dialog({
      title: "Compartir",
      message: "Would you like to turn on the wifi?",
      prompt: {
        model: "",
        isValid: (val) => val.length > 2, // << here is the magic
        type: "text", // optional
      },
      cancel: true,
      persistent: true,
    })
      .onOk(async (email) => {
        console.log(formData, "data");
        try {
          const { data } = await api.post("/api/files/shared", formData, {
            params: { uid: uid, email: email },
          });
          console.log(data);
          console.log("ok, shared");
        } catch (error) {
          console.log(error);
        }
        // console.log('>>>> OK')
      })
      .onOk(() => {
        // console.log('>>>> second OK catcher')
      })
      .onCancel(() => {
        // console.log('>>>> Cancel')
      })
      .onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
      });
  }

  async function uploadPlantilla(nombre, uid, categoria, texthtml, formData) {
    try {
      formData.append("texthtml", texthtml);
      console.log(texthtml, "txt");
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        params: {
          nombre: nombre,
          uid: uid,
          categoria: categoria,
        },
      };

      const response = await api.post("/api/plantillas", formData, config);
      return {
        ok: true,
        msg: response.data,
      };
    } catch (error) {
      console.error("Error al subir datos:", error);
      return {
        ok: false,
        msg: "Error al subir datos",
      };
    }
  }
  async function uploadSharedPlantilla(
    nombre,
    uid,
    fromemail,
    categoria,
    texthtml
  ) {
    $q.dialog({
      title: "Compartir-plantilla",
      message: "Estás seguro de compartir?",
      prompt: {
        model: "",
        isValid: (val) => val.length > 2, // << here is the magic
        type: "text", // optional
      },
      cancel: true,
      persistent: true,
    })
      .onOk(async (email) => {
        const formData = new FormData();
        try {
          formData.append("texthtml", texthtml);
          console.log(texthtml, "txt");
          const config = {
            headers: {
              "Content-Type": "multipart/form-data",
            },
            params: {
              nombre: nombre,
              uid: uid,
              email: fromemail,
              categoria: categoria,
              receivedNotify: email,
            },
          };
          console.log(email);
          const response = await api.post(
            "/api/plantillas/user",
            formData,
            config
          );
          return {
            ok: true,
            msg: response.data,
          };
        } catch (error) {
          console.error("Error al subir datos:", error);
          return {
            ok: false,
            msg: "Error al subir datos",
          };
        }
        // console.log('>>>> OK')
      })
      .onOk(() => {
        // console.log('>>>> second OK catcher')
      })
      .onCancel(() => {
        // console.log('>>>> Cancel')
      })
      .onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
      });
  }

  async function getPlantilla(id) {
    console.log("que raro");
    try {
      const { data } = await api.get("/api/plantillas", { params: { id } });
      return {
        ok: true,
        msg: data,
      };
      console.log("raro");
    } catch (error) {
      console.log(error, "que raro-error");
      const { data } = error.response;
      return data;
    }
  }
  async function uploadUpdatePlantilla(id, texthtml) {
    try {
      const formData = new FormData();

      formData.append("texthtml", texthtml);

      const { data } = await api.put("/api/plantillas/user", formData, {
        params: { id },
      });
      console.log(data);
      return {
        ok: true,
        msg: data,
      };
    } catch (error) {
      console.log(error, "que raro-error");
      const { data } = error.response;
      return data;
    }
  }

  async function getMySharedPlantilla(id) {
    try {
      const { data } = await api.get("/api/plantillas/myshared", {
        params: { id },
      });
      return {
        ok: true,
        msg: data.msg,
      };
    } catch (error) {
      console.log(error, "que raro-error");
      const { data } = error.response;
      return data;
    }
  }

  return {
    confirm,
    uploadPlantilla,
    getPlantilla,
    uploadSharedPlantilla,
    uploadUpdatePlantilla,
    getMySharedPlantilla,
  };
}
