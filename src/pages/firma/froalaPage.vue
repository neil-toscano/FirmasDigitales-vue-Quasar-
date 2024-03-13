<template>
  <q-page>
    <q-page-container>
      <q-page class="q-gutter-y-md">
        <div id="example"></div>

        <div>
          <input type="file" ref="fileInput" style="color: teal" />
          <q-page-sticky
            position="bottom-right"
            :offset="[18, 18]"
            style="z-index: 1000"
          >
            <q-btn fab icon="send" color="red-13" @click="uploadFile">
              <q-tooltip> Guardar Plantilla </q-tooltip>
            </q-btn>
          </q-page-sticky>
        </div>
        <div>
          <button @click="pdf">Pdf</button>
          <button @click="imprimir">imprimir</button>
        </div>
      </q-page>
    </q-page-container>
  </q-page>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
import { useShared } from "src/composables/useShared";
import { useLogin } from "src/composables/useAuth";

export default defineComponent({
  name: "IndexPage",
  setup() {
    const { uploadPlantilla } = useShared();
    const { userInfo } = useLogin();
    let editorInstance = null;
    const fileInput = ref(null);

    onMounted(() => {
      editorInstance = new FroalaEditor("#example");
    });

    const getEditorContent = (formData) => {
      if (editorInstance) {
        const categoria = "firma";
        const content = editorInstance.html.get();
        const nombre = "plantilla_cuarta";
        uploadPlantilla(
          nombre,
          userInfo.value.uid,
          categoria,
          content,
          formData
        );
      }
    };
    const imprimir = () => {
      const contenido = editorInstance.html.get();
      var ventanaImpresion = window.open("", "_blank");
      ventanaImpresion.document.write(
        "<html><head><title>Contenido Imprimible</title></head><body>"
      );
      ventanaImpresion.document.write(contenido);
      ventanaImpresion.document.write("</body></html>");
      ventanaImpresion.document.close();
      ventanaImpresion.print();
    };
    const pdf = async () => {
      const contenido = editorInstance.html.get();
      const options = {
        margin: 0,
        filename: "time_sheet_report.pdf",
        image: { type: "jpeg", quality: 0.2 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: "in", format: "a4", orientation: "p" },
      };

      const datos = await html2pdf().from(contenido).set(options).save();
    };
    const uploadFile = () => {
      const file = fileInput.value.files[0];
      if (file) {
        const formData = new FormData();
        formData.append("archivo", file);
        getEditorContent(formData);
      } else {
        console.error("No se ha seleccionado ningún archivo");
      }
    };
    return {
      getEditorContent,
      fileInput,
      uploadFile,
      pdf,
      imprimir,
    };
  },
});
</script>
