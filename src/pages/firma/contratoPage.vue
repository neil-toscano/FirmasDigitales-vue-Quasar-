<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card">
      <!-- TODO primer párrafo -->
      <q-card-section>
        <div class="wrap first-paragraph">
          <div class="text-h7">{{ dd.content[0].text[0].text }}</div>
          <input v-model="nombreEmpresa" placeholder="Nombre de la empresa" />

          <div class="text-h7">{{ dd.content[0].text[2].text }}</div>
          <input
            v-model="numeroRuc"
            placeholder="Número de Ruc si es que lo tiene"
          />

          <div class="text-h7">. {{ dd.content[0].text[4].text }}</div>
          <input
            v-model="nombreContratista"
            placeholder="Nombre del contratista"
          />

          <div class="text-h7">{{ dd.content[0].text[6].text }}</div>
          <input v-model="dniContratista" placeholder="N° Dni" />

          <div class="text-h7">{{ dd.content[0].text[8].text }}</div>
          <input
            v-model="ubiDomicilioContratista"
            placeholder="ubicación del domicilio"
          />

          <div class="text-h7">{{ dd.content[0].text[10].text }}</div>
          <input
            v-model="nombreSolicitaServicio"
            placeholder="Nombre del que solicita el servicio"
          />

          <div class="text-h7">{{ dd.content[0].text[12].text }}</div>
          <input v-model="dniSolicitante" placeholder="dni" />

          <div class="text-h7">{{ dd.content[0].text[14].text }}</div>
          <input
            v-model="domicilioSolicitaServicio"
            placeholder="domicilio del que solicita el servicio"
          />

          <div class="text-h7">{{ dd.content[0].text[16].text }}</div>
        </div>
      </q-card-section>
      <!-- TODO segundo parrafo -->
      <q-card-section>
        <div class="row wrap first-paragraph">
          <div class="text-h7">
            <span class="text-bold">{{ dd.content[1].text[0].text }}</span>
            {{ dd.content[1].text[1].text }}
            <input v-model="lugarCompromiso" />
          </div>
        </div>
      </q-card-section>

      <!-- TODO tercer parrafo //todo -->
      <q-card-section>
        <div>
          <div class="wrap first-paragraph">
            <div class="text-h7">
              <span class="text-bold">{{ dd.content[2].text[0].text }}</span>
              {{ dd.content[2].text[1].text }}
            </div>

            <q-list
              dense
              bordered
              padding
              class="rounded-borders q-my-md list-horario"
            >
              <q-item>
                <!-- { table: {
              body: [
                [
                  { text: [ { text: 'Vispera de '}, { text: '...'}, { text: 'a'}, { text: '...'}]},
                  { text: [ { text: '1er día de '}, { text: '...'}, { text: 'a'}, { text: '...'}]},
                  { text: [ { text: '2do día de '}, { text: '...'}, { text: 'a'}, { text: '...'}]}
                ],
                [
                  { text: [ { text: '3er día. de '}, { text: '...'}, { text: 'a'}, { text: '...'}]},
                  { text: [ { text: '5to día de '}, { text: '...'}, { text: 'a'}, { text: '...'}]},
                  { text: [ { text: '6to día de '}, { text: '...'}, { text: 'a'}, { text: '...'}]}
                ],
                [
                 { text: [ { text: '6to día de '}, { text: '...'}, { text: 'a'}, { text: '...'}]},
                 { text: [ { text: '7mo día de '}, { text: '...'}, { text: 'a'}, { text: '...'}]},
                ]
              ]
            }
          } -->
                <div>
                  <div v-for="(item, index) in [0, 1, 2]" :key="index">
                    <div v-for="(item2, index2) in [0, 1, 2]" :key="index2">
                      <div class="row">
                        <div class="col">
                          <q-item-section>
                            <span
                              ><q-badge rounded color="yellow" />
                              {{
                                dd.content[3].table.body[index][index2].text[0]
                                  .text
                              }}
                              <input
                                v-model="
                                  dd.content[3].table.body[index][index2]
                                    .text[1].text
                                "
                              />
                              {{
                                dd.content[3].table.body[index][index2].text[2]
                                  .text
                              }}
                              <input
                                v-model="
                                  dd.content[3].table.body[index][index2]
                                    .text[3].text
                                "
                              />
                            </span>
                          </q-item-section>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </q-item>
            </q-list>
          </div>
        </div>
      </q-card-section>

      <!-- TODO cuarto parrafo -->

      <q-card-section>
        <div>
          <div class="wrap first-paragraph">
            <div class="text-h7 text-bold">
              {{ dd.content[4].text[0].text }}
            </div>

            <div class="text-h7">{{ dd.content[4].text[1].text }}</div>
            <input v-model="nombrePagaServicio" placeholder="Señor" />

            <div class="text-h7">{{ dd.content[4].text[3].text }}</div>
            <input
              v-model="nombreOrquesta"
              placeholder="Nombre de la Orquesta"
            />

            <div class="text-h7">{{ dd.content[4].text[5].text }}</div>
            <input v-model="montoOrquesta" placeholder="Monto de la Orquesta" />

            <div class="text-h7">{{ dd.content[4].text[7].text }}</div>
            <input v-model="montoAdelanto" placeholder="Monto Adelanto" />

            <div class="text-h7">{{ dd.content[4].text[9].text }}</div>
            <input v-model="montoRestante" placeholder="Monto Restante" />
          </div>
        </div>
      </q-card-section>
      <!-- TODO quinto parrafo -->
      <q-card-section>
        <div class="text-h7">{{ dd.content[5].text }}</div>
        <ol>
          <li class="q-my-md">
            {{ dd.content[6].ol[0].text[0].text }}
            <input v-model="nombreLugarTrabajo" placeholder="Lugar Trabajo" />
          </li>
          <li class="q-my-md">
            {{ dd.content[6].ol[1].text[0].text }}
            <input
              v-model="DiaFechaTrabajo"
              placeholder="Dia y Fecha de Trabajo"
            />
          </li>
          <li class="q-my-md">
            {{ dd.content[6].ol[2].text[0].text }}
            <input v-model="horaPresentacion" placeholder="Hora presentación" />
          </li>
          <li class="q-my-md">
            {{ dd.content[6].ol[3].text[0].text }}
            <input v-model="numIntegrantes" placeholder="número Integrantes" />
          </li>
          <li class="q-my-md">
            {{ dd.content[6].ol[4].text[0].text }}
            <input
              v-model="contactoContratante"
              placeholder="Contacto Contratante"
            />
          </li>
          <li class="q-my-md">
            {{ dd.content[6].ol[5].text[0].text }}
            <input v-model="nombreDirector" placeholder="Nombre Director" />
          </li>
        </ol>
      </q-card-section>
      <q-card-section>
        <span class="text-h7 text-bold">{{ dd.content[7].text[0].text }}</span>
        <span class="text-h7">{{ dd.content[7].text[1].text }}</span>
      </q-card-section>
      <q-card-section>
        <span class="text-h7 text-bold">{{ dd.content[8].text }}</span>
        <ol>
          <li class="q-my-md">{{ dd.content[9].ol[0] }}</li>
          <li class="q-my-md">{{ dd.content[9].ol[1] }}</li>
          <li class="q-my-md">{{ dd.content[9].ol[2] }}</li>
          <li class="q-my-md">{{ dd.content[9].ol[3] }}</li>
        </ol>
      </q-card-section>
      <q-card-section>
        <span class="text-h7 text-bold">{{ dd.content[10].text }}</span>
        <ol>
          <li class="q-my-md">{{ dd.content[11].ol[0] }}</li>
          <li class="q-my-md">{{ dd.content[11].ol[1] }}</li>
          <li class="q-my-md">{{ dd.content[11].ol[2] }}</li>
          <li class="q-my-md">{{ dd.content[11].ol[3] }}</li>
        </ol>
      </q-card-section>
      <div class="row">
        <div class="col">
          <div id="signature-pad" class="signature-pad">
            <div class="signature-pad--body">
              <canvas
                style="background-color: pink"
                ref="canvasRef"
                width="300"
                height="200"
              ></canvas>
            </div>
            <div class="signature-pad--footer">
              <div class="description">Sign above</div>

              <div class="signature-pad--actions">
                <div>
                  <button
                    type="button"
                    class="button clear"
                    data-action="clear"
                    @click="clear"
                  >
                    Clear
                  </button>
                  <button
                    type="button"
                    class="button"
                    data-action="change-color"
                  >
                    Change color
                  </button>
                  <button type="button" class="button" data-action="undo">
                    Undo
                  </button>
                </div>
                <div>
                  <button
                    type="button"
                    class="button save"
                    data-action="save-png"
                  >
                    Save as PNG
                  </button>
                  <button
                    type="button"
                    class="button save"
                    data-action="save-jpg"
                  >
                    Save as JPG
                  </button>
                  <button
                    type="button"
                    class="button save"
                    data-action="save-svg"
                  >
                    Save as SVG
                  </button>
                  <button
                    type="button"
                    class="button save"
                    data-action="save-svg"
                    @click="abrir"
                  >
                    Abrir en nuevo window
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div id="signature-pad" class="signature-pad">
            <div class="signature-pad--body">
              <canvas
                style="background-color: pink"
                ref="canvasRef_Second"
                width="300"
                height="200"
              ></canvas>
            </div>
            <div class="signature-pad--footer">
              <div class="description">Sign above</div>

              <div class="signature-pad--actions">
                <div>
                  <button
                    type="button"
                    class="button clear"
                    data-action="clear"
                    @click="clear"
                  >
                    Clear
                  </button>
                  <button
                    type="button"
                    class="button"
                    data-action="change-color"
                  >
                    Change color
                  </button>
                  <button type="button" class="button" data-action="undo">
                    Undo
                  </button>
                </div>
                <div>
                  <button
                    type="button"
                    class="button save"
                    data-action="save-png"
                  >
                    Save as PNG
                  </button>
                  <button
                    type="button"
                    class="button save"
                    data-action="save-jpg"
                  >
                    Save as JPG
                  </button>
                  <button
                    type="button"
                    class="button save"
                    data-action="save-svg"
                  >
                    Save as SVG
                  </button>
                  <button
                    type="button"
                    class="button save"
                    data-action="save-svg"
                    @click="abrir"
                  >
                    Abrir en nuevo window
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </q-card>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn
        fab
        icon="add"
        color="accent"
        label="Compartir6"
        @click="compartirPdf"
      />
    </q-page-sticky>
  </div>
</template>
<script>
import { ref, onMounted, computed } from "vue";
import SignaturePad from "signature_pad";
import pdfMake from "pdfmake/build/pdfmake";
// import pdfFonts from "pdfmake/build/vfs_fonts";
import { api } from "src/boot/axios";
import { useLogin } from "src/composables/useAuth";
import { useShared } from "src/composables/useShared";
import { useQuasar } from "quasar";

export default {
  setup() {
    const { userInfo } = useLogin();
    const { confirm } = useShared();
    // pdfMake.vfs = pdfFonts.pdfMake.vfs;
    const $q = useQuasar();
    const canvasRef = ref(null);
    const canvasRef_Second = ref(null);
    const nombreEmpresa = ref("");
    const numeroRuc = ref("");
    const nombreContratista = ref("");
    const dniContratista = ref("");
    const ubiDomicilioContratista = ref("");
    const nombreSolicitaServicio = ref("");
    const dniSolicitante = ref("");
    const domicilioSolicitaServicio = ref("");
    const lugarCompromiso = ref("");
    const nombrePagaServicio = ref("");
    const nombreOrquesta = ref("");
    const montoOrquesta = ref("");
    const montoAdelanto = ref("");
    const montoRestante = ref("");
    const nombreLugarTrabajo = ref("");
    const DiaFechaTrabajo = ref("");
    const horaPresentacion = ref("");
    const numIntegrantes = ref("");
    const contactoContratante = ref("");
    const nombreDirector = ref("");
    let signaturePad;
    let signaturePad_second;
    onMounted(() => {
      signaturePad = new SignaturePad(canvasRef.value);
      signaturePad_second = new SignaturePad(canvasRef_Second.value);
    });

    const dd = computed(() => {
      return {
        content: [
          {
            text: [
              {
                text: "Conste por tenor literal del presente Documento, el contrato de Servicios Personales y Profesionales de música, que celebramos de una parte la Orquesta ",
              },
              { text: `${nombreEmpresa.value}` },
              { text: " con RUC. N° " },
              { text: `${numeroRuc.value}.` },
              { text: " Representado debidamente por su socio integrante " },
              { text: `${nombreContratista.value}, ` },
              { text: "identificado con DNI " },
              { text: `${dniContratista.value}, ` },
              { text: "con domicilio legal en " },
              { text: `${ubiDomicilioContratista.value}` },
              { text: "y por otra parte el Señor(a) " },
              { text: `${nombreSolicitaServicio.value} ` },
              { text: "identificado con DNI" },
              { text: `${dniSolicitante.value},` },
              { text: " con domicilio legal en " },
              { text: `${domicilioSolicitaServicio.value}` },
              {
                text: "Quienes en adelante firman este contrato, bajo los términos y condiciones siguientes:",
              },
            ],
          },

          {
            text: [
              {
                text: "CLAUSULA PRIMERA (OBJETO DEL CONTRATO):",
                fontSize: 15,
                bold: true,
              },
              {
                text:
                  "La Orquesta, haciendo uso de sus atribuciones y previo acuerdo de los socios integrantes" +
                  " aceptan firmar este Contrato para que presten servicios profesionales de música en la localidad de",
              },
              { text: `${lugarCompromiso.value}` },
            ],
          },
          {
            text: [
              {
                text: "CLÁUSULA SEGUNDA FORMA DEL TRABAJO:",
                fontSize: 15,
                bold: true,
              },
              {
                text:
                  "La Orquesta respetara el horario de trabajo de 11 horas por día y como cortesía " +
                  "media hora fuera de la contrata a sus contratantes .Los horarios de trabajo los darán " +
                  " a conocer el Contratante y es como sigue:\n",
              },
            ],
          },
          {
            table: {
              body: [
                [
                  {
                    text: [
                      { text: "Vispera de " },
                      { text: "..." },
                      { text: "a" },
                      { text: "..." },
                    ],
                  },
                  {
                    text: [
                      { text: "1er día de " },
                      { text: "..." },
                      { text: "a" },
                      { text: "..." },
                    ],
                  },
                  {
                    text: [
                      { text: "2do día de " },
                      { text: "..." },
                      { text: "a" },
                      { text: "..." },
                    ],
                  },
                ],
                [
                  {
                    text: [
                      { text: "3er día. de " },
                      { text: "..." },
                      { text: "a" },
                      { text: "..." },
                    ],
                  },
                  {
                    text: [
                      { text: "5to día de " },
                      { text: "..." },
                      { text: "a" },
                      { text: "..." },
                    ],
                  },
                  {
                    text: [
                      { text: "6to día de " },
                      { text: "..." },
                      { text: "a" },
                      { text: "..." },
                    ],
                  },
                ],
                [
                  {
                    text: [
                      { text: "6to día de " },
                      { text: "..." },
                      { text: "a" },
                      { text: "..." },
                    ],
                  },
                  {
                    text: [
                      { text: "7mo día de " },
                      { text: "..." },
                      { text: "a" },
                      { text: "..." },
                    ],
                  },
                  {
                    text: [
                      { text: "7mo día de " },
                      { text: "..." },
                      { text: "a" },
                      { text: "..." },
                    ],
                  },
                ],
              ],
            },
            layout: "noBorders",
          },
          {
            text: [
              {
                text: "CLÁUSULA TERCERA: (DE LA COMPENSACIÓN ECONÓMICA):",
                fontSize: 15,
                bold: true,
              },
              { text: "El Señor (a) " },
              { text: `${nombrePagaServicio.value}` },
              {
                text: " se compromete a pagar por los servicios prestados de la Orquesta",
              },
              { text: `${nombreOrquesta.value}` },
              { text: "previo acuerdo la suma de S/." },
              { text: `${montoOrquesta.value}` },
              { text: " de los cuales dio como adelanto lasuma de S/." },
              { text: `${montoAdelanto.value}` },
              {
                text: " y comprometiéndose a cancelar a la mitad del compromiso la suma de S/.",
              },
              { text: ` ${montoRestante.value} \n` },
            ],
          },
          { text: "\n\nCLÁUSULA CUARTA: BASE LEGAL:", style: "header" },
          {
            ol: [
              {
                text: [
                  { text: "Lugar de trabajo:" },
                  { text: `${nombreLugarTrabajo.value}` },
                ],
              },
              {
                text: [
                  { text: "Días y fechas de trabajo:" },
                  { text: `${DiaFechaTrabajo.value}` },
                ],
              },
              {
                text: [
                  { text: "Hora de presentación:" },
                  { text: `${horaPresentacion.value}` },
                ],
              },
              {
                text: [
                  { text: "Compuesto por su plana titular con:" },
                  { text: `${numIntegrantes.value}` },
                ],
              },
              {
                text: [
                  { text: "Contacto del Contratante:" },
                  { text: `${contactoContratante.value}` },
                ],
              },
              {
                text: [
                  { text: "Contacto del director:" },
                  { text: `${nombreDirector.value}` },
                ],
              },
            ],
          },
          {
            text: [
              {
                text: "CLÁUSULA QUINTA (ANTECEDENTES):",
                fontSize: 15,
                bold: true,
              },
              {
                text:
                  " En caso de incumplimiento de parte de la Orquesta, se compromete a devolver" +
                  " el adelanto más daños y perjuicios y así mismo de los Contratantes que no" +
                  "cumplan con el término del contrato , perderán totalmente el adelanto y responderán por los daños y perjuicios de la Orquesta. ",
              },
            ],
          },
          {
            text: "\n\nCLÁUSULA SEXTA: PENALIDADES Y DEBERES DE LA ORQUESTA:",
            style: "header",
          },
          {
            ol: [
              "La Orquesta tiene el deber de cumplir el contrato sin perjudicar , ni abandonar el trabajo.",
              "La Orquesta debe presentarse puntualmente y presentarse con sus respectivos uniformes.",
              "La Orquesta deberá respetar y cumplir con el horario puntual de la contrata.",
              "La Orquesta tomará el nombre correspondiente a partir de los 16 números.",
            ],
          },
          {
            text: "\n\nCLÁUSULA SÉPTIMA: PENALIDADES Y DERECHOS DE LA ORQUESTA:",
            style: "header",
          },
          {
            ol: [
              "El Contratante deberá respetar y atender a la Orquesta durante las horas de trabajo.",
              "La Orquesta tendrá el derecho de almorzar antes que el público para que así puedan amenizar el almuerzo del público con retretas musicales.",
              "Elcontratante no deberá dar licores en horario de trabajo a la Orquesta o integrantes , todo será previo acuerdo con la Directiva.",
              "La Orquesta tendrá el derecho de obedecer a personas indicadas y no más a cualquier otra tercera persona ebrias , caso contrario abandonara el trabajo poniendo en conocimiento a sus contratantes u otra autoridad en casos de cualquier lío o exigencia exagerada.",
            ],
          },
        ],
        styles: {
          header: {
            fontSize: 18,
            bold: true,
            alignment: "justify",
          },
        },
      };
    });
    const abrir = () => {
      const win = window.open("", "_blank");
      pdfMake.createPdf(dd.value).open({}, win);

      const pdfDoc = pdfMake.createPdf(dd.value);
      pdfDoc.getBlob((blob) => {
        // Crear un FormData y adjuntar el archivo Blob del PDF
        const formData = new FormData();
        formData.append("archivo", blob, "nombre_del_archivo.pdf");
        const uid = userInfo.value.uid;
        // Enviar el archivo Blob al backend utilizando Axios
        api
          .post("api/files", formData, {
            params: { uid },
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((response) => {
            console.log(
              "El archivo fue enviado al backend con éxito",
              response
            );
          })
          .catch((error) => {
            // Manejar errores en la solicitud
            console.error("Error al enviar el archivo al backend", error);
          });
      });
    };

    const compartirPdf = () => {
      const pdfDoc = pdfMake.createPdf(dd.value);
      pdfDoc.getBlob((blob) => {
        // Crear un FormData y adjuntar el archivo Blob del PDF
        const formData = new FormData();
        formData.append("archivo", blob, "nombre_del_archivo.pdf");
        console.log(formData);
        const uid = userInfo.value.uid;
        confirm(uid, formData);
      });
    };

    const clear = () => {
      const data = signaturePad.toDataURL();
      const data2 = signaturePad_second.toDataURL();
      fetch("https://cdn.quasar.dev/img/avatar1.jpg")
        .then((response) => response.blob())
        .then((blob) => {
          const reader = new FileReader();
          reader.readAsDataURL(blob);
          reader.onloadend = () => {
            const base64data = reader.result;
            dd.value.content.push({
              columns: [
                { image: signaturePad.toDataURL() },
                { image: base64data },
              ],
            });
            console.log(base64data); // Aquí está la imagen en formato base64
          };
        })
        .catch((error) => {
          console.error("Error al obtener la imagen:", error);
        });

      console.log(data);
    };

    return {
      userInfo,
      compartirPdf,
      nombreEmpresa,
      numeroRuc,
      nombreContratista,
      dniContratista,
      ubiDomicilioContratista,
      nombreSolicitaServicio,
      dniSolicitante,
      domicilioSolicitaServicio,
      nombrePagaServicio,
      nombreOrquesta,
      montoOrquesta,
      montoAdelanto,
      montoRestante,
      lugarCompromiso,
      nombreLugarTrabajo,
      DiaFechaTrabajo,
      horaPresentacion,
      numIntegrantes,
      contactoContratante,
      nombreDirector,
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      text: "",
      canvasRef,
      canvasRef_Second,

      abrir,
      clear,
      dd,
    };
  },
};
</script>

<style lang="css" scoped>
.my-card {
  width: 100%;
}
.list-horario {
  background-color: rgb(233, 228, 228);
}
.first-paragraph div {
  margin-top: 5px;
  margin-right: 5px;
  margin-left: 5px;
}
.first-paragraph {
  display: flex;
}
.first-paragraph input {
  margin-top: 5px;
  margin-left: 5px;
  margin-right: 5px;
  border: 1px solid rgb(236, 216, 179);
  color: blue;
}
.first-paragraph input:focus {
  box-shadow: 0 0 5px #007bff;
}
@media only screen and (max-width: 600px) {
  .first-paragraph {
    display: block;
  }
}
</style>
