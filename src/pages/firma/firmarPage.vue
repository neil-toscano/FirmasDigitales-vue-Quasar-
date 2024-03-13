<template>
  <div class="q-pa-md">
    <q-toolbar class="bg-indigo-1 text-white">
      <q-btn size="0.8rem" color="orange">
        <q-menu>
          <q-color v-model="hex" no-footer no-header @click="escogerColor">
          </q-color>
        </q-menu>
      </q-btn>
    </q-toolbar>
    <q-editor
      id="editor"
      v-model="qeditor"
      :dense="$q.screen.lt.md"
      toolbar-bg="indigo-1"
      :toolbar="[
        [
          {
            label: $q.lang.editor.align,
            icon: $q.iconSet.editor.align,
            fixedLabel: true,
            list: 'only-icons',
            options: ['left', 'center', 'right', 'justify'],
          },
          {
            label: $q.lang.editor.align,
            icon: $q.iconSet.editor.align,
            fixedLabel: true,
            options: ['left', 'center', 'right', 'justify'],
          },
        ],
        ['bold', 'italic', 'strike', 'underline', 'subscript', 'superscript'],
        ['token', 'hr', 'link', 'custom_btn'],
        ['print', 'fullscreen'],
        [
          {
            label: $q.lang.editor.formatting,
            icon: $q.iconSet.editor.formatting,
            list: 'no-icons',
            options: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'code'],
          },
          {
            label: $q.lang.editor.fontSize,
            icon: $q.iconSet.editor.fontSize,
            fixedLabel: true,
            fixedIcon: true,
            list: 'no-icons',
            options: [
              'size-1',
              'size-2',
              'size-3',
              'size-4',
              'size-5',
              'size-6',
              'size-7',
            ],
          },
          {
            label: $q.lang.editor.defaultFont,
            icon: $q.iconSet.editor.font,
            fixedIcon: true,
            list: 'no-icons',
            options: [
              'default_font',
              'arial',
              'arial_black',
              'comic_sans',
              'courier_new',
              'impact',
              'lucida_grande',
              'times_new_roman',
              'verdana',
            ],
          },
          'removeFormat',
        ],
        ['quote', 'unordered', 'ordered', 'outdent', 'indent'],

        ['undo', 'redo'],
        ['viewsource'],
      ]"
      :fonts="{
        arial: 'Arial',
        arial_black: 'Arial Black',
        comic_sans: 'Comic Sans MS',
        courier_new: 'Courier New',
        impact: 'Impact',
        lucida_grande: 'Lucida Grande',
        times_new_roman: 'Times New Roman',
        verdana: 'Verdana',
      }"
    />
    <q-btn
      class="q-mt-md"
      color="red-13"
      size="md"
      label="Descargar Archivo"
      @click="pdf"
    />
    <q-page-sticky position="bottom-right" :offset="[50, 18]">
      <q-fab icon="keyboard_arrow_up" direction="up" color="red-13">
        <q-fab-action
          @click="showDialog"
          color="teal-5"
          icon="edit"
          label="firmar"
        />
        <q-fab-action
          @click="sendUpdatePlantilla"
          color="teal-5"
          icon="done_all"
          label="Enviar y finalizar"
        />
      </q-fab>
      <q-tooltip anchor="center left" self="center right">
        Desplegar
      </q-tooltip>
    </q-page-sticky>
    <q-dialog v-model="alert">
      <q-card class="my_card">
        <q-card-section>
          <div class="text-h6">Firmar el documento</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Revisa el archivo que se a Descargado(abierto) antes de firmar
        </q-card-section>
        <q-card-section>
          <div id="signature-pad" class="signature-pad">
            <div class="signature-pad--body row justify-center">
              <canvas
                class="canvas-signature bg-deep-purple-2"
                width="300"
                height="200"
              ></canvas>
            </div>
            <div class="signature-pad--footer"></div>
          </div>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn
            flat
            label="OK"
            color="primary"
            v-close-popup
            @click="sendImageSignature"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { ref, onMounted, watch, computed } from "vue";
import { useShared } from "src/composables/useShared";
import { useRoute } from "vue-router";
import SignaturePad from "signature_pad";
import { useLogin } from "src/composables/useAuth";
import { useArchivo } from "src/composables/useArchivo";

export default {
  setup() {
    const { userInfo } = useLogin();
    const { uploadUpdatePlantilla } = useShared();
    const { saveImageSignature, getSharedPlantilla } = useArchivo();

    const hex = ref(null);
    let qeditor = ref("");
    const route = useRoute();
    const alert = ref(false);
    let signatureShared;
    const currentId = computed(() => route.params.uid);

    watch(currentId, async (newId, oldId) => {
      if (!newId) {
        return;
      }
      console.log("que pasa");
      const { msg, ok } = await getSharedPlantilla(newId);
      if (ok) {
        qeditor.value = msg.contenido;
      } else {
        qeditor.value =
          "<h4>No se encontró plantilla con el Id, crea una nueva</h4>";
      }
    });
    onMounted(async () => {
      const { msg, ok } = await getSharedPlantilla(currentId.value);
      if (ok) {
        qeditor.value = msg.contenido;
      } else {
        qeditor.value =
          "<h4>No se encontró plantilla con el Id, crea una nueva</h4>";
      }
    });

    const showDialog = () => {
      alert.value = true;
      setTimeout(() => {
        const canvasRefShared = document.querySelector(".canvas-signature");
        console.log(canvasRefShared);
        signatureShared = new SignaturePad(canvasRefShared);
      }, 100);
    };

    const sendImageSignature = () => {
      function dataURLToBlob(dataURL) {
        var parts = dataURL.split(";base64,");
        var contentType = parts[0].split(":")[1];
        var raw = window.atob(parts[1]);
        var rawLength = raw.length;
        var uInt8Array = new Uint8Array(rawLength);

        for (var i = 0; i < rawLength; ++i) {
          uInt8Array[i] = raw.charCodeAt(i);
        }

        return new Blob([uInt8Array], { type: contentType });
      }
      setTimeout(async () => {
        const DataUrlPngSignature = signatureShared.toDataURL();
        var blob = dataURLToBlob(DataUrlPngSignature);
        console.log(DataUrlPngSignature, "signature");
        const { msg, ok } = await saveImageSignature(userInfo.value.uid, blob);
        if (ok) {
          qeditor.value += `<img src = ${msg.urlImage} />`;
        } else {
        }
      }, 100);
    };
    const pdf = async () => {
      const contenido = qeditor.value;
      var options = {
        margin: [15, 15],
        filename: "pdfFileName.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 1, letterRendering: true, useCORS: true },
        jsPDF: { unit: "pt", format: "letter", orientation: "portrait" },
        pagebreak: { mode: ["avoid-all", "css", "legacy", "whiteline"] },
      };

      const datos = await html2pdf().from(contenido).set(options).save();
    };

    const sendUpdatePlantilla = async () => {
      if (qeditor.value) {
        const content = qeditor.value;
        await uploadUpdatePlantilla(currentId.value, content);
      }
    };
    return {
      alert,
      pdf,
      hex,
      qeditor,
      escogerColor() {
        if (document.queryCommandEnabled("foreColor")) {
          document.execCommand("styleWithCSS", false, true);
          document.execCommand("foreColor", false, hex.value); // Cambiar color
        } else {
          console.log(
            "El navegador no admite cambiar el color del texto seleccionado."
          );
        }
      },
      showDialog,
      sendImageSignature,
      sendUpdatePlantilla,
    };
  },
};
</script>
<style scoped>
.my_card {
  max-width: 350px;
}
</style>
