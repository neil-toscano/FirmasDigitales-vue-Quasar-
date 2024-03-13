<template>
  <div>
    <q-dialog v-model="alert">
      <q-card>
        <q-card-section>
          <div class="text-h6">Firmar el documento</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Revisa el archivo que se a Descargado(abierto) antes de firmar
        </q-card-section>
        <q-card-section>
          <div id="signature-pad" class="signature-pad">
            <div class="signature-pad--body">
              <canvas
                class="canvas-signature"
                style="background-color: pink"
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
import { ref } from "vue";
import { useArchivo } from "../composables/useArchivo.js";
import { useLogin } from "src/composables/useAuth";
import SignaturePad from "signature_pad";

export default {
  setup() {
    const { listSharedFiles, getSharedFiles, saveImageSignature } =
      useArchivo();
    const { userInfo } = useLogin();
    const alert = ref(false);
    let signatureShared;
    getSharedFiles(userInfo.value.uid);

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
      setTimeout(() => {
        const DataUrlPngSignature = signatureShared.toDataURL();
        var blob = dataURLToBlob(DataUrlPngSignature);
        console.log(DataUrlPngSignature, "signature");
        // saveImageSignature(userInfo.value.uid, listSharedFiles.value[0].uid, blob)
      }, 100);
    };
    return {
      alert,
      listSharedFiles,
      showDialog,
      sendImageSignature,
    };
  },
};
</script>
<style scoped></style>
