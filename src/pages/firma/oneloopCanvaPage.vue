<template>
  <div class="card-container q-gutter-sm">
    <q-toolbar
      class="bg-indigo-1 text-dark toolbar-canvas shadow-1"
      style="border-radius: 5px"
    >
      <div>
        {{ widthScreen }}
        <q-btn
          flat
          round
          dense
          icon="circle"
          class="q-mr-xs"
          @click="newCircle"
        />
        <q-btn flat round dense icon="rectangle" @click="newRectangle" />
        <q-btn flat round dense icon="title" @click="newText" />
        <q-btn flat round dense icon="colorize" label="color">
          <q-menu>
            <q-color v-model="hex" class="my-picker" />
          </q-menu>
        </q-btn>
        <q-btn flat round dense icon="delete" @click="removeItem" />
        <q-range
          v-model="step"
          :min="0"
          :max="100"
          :step="2"
          label
          color="deep-orange"
          class="q-my-sm"
        />
      </div>
    </q-toolbar>

    <q-card class="my-card">
      <q-card-section>
        <canvas
          id="c"
          :width="widthScreen"
          height="500"
          style="border: 2px ridge"
        ></canvas>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import * as fabric from "fabric";
import { ref, onMounted, watch } from "vue";
import { useCanva } from "src/composables/useCanvas.js";
export default {
  setup() {
    const {
      widthScreen,
      circleCanva,
      rectangleCanva,
      textCanva,
      changeFigureColor,
      changeTextHeight,
      removeObject,
    } = useCanva();
    const hex = ref("#FF00FF");
    const step = ref({
      min: 10,
      max: 100,
    });
    let canvas;

    watch(widthScreen, async (newWidth, oldWdth) => {
      canvas.setWidth(newWidth);
    });
    onMounted(() => {
      canvas = new fabric.Canvas("c");
      canvas.on("mouse:down", function (options) {
        if (options.target) {
          const clickedObject = options.target;
          if (clickedObject) {
            canvas.setActiveObject(clickedObject);
          }
        }
      });
    });

    const newCircle = () => {
      const circle = circleCanva();
      canvas.add(circle);
    };

    const newRectangle = () => {
      const rectangle = rectangleCanva();
      canvas.add(rectangle);
    };
    const newText = () => {
      const text = textCanva();
      canvas.add(text);
    };
    const removeItem = () => {
      removeObject(canvas);
    };
    watch(hex, async (newHex, oldHex) => {
      const colorFigure = changeFigureColor(canvas, newHex);
    });
    watch(step, async (newStep, oldStep) => {
      const textHight = changeTextHeight(canvas, newStep.min);
    });

    return {
      lorem: "canva",
      widthScreen,
      newCircle,
      newRectangle,
      newText,
      removeItem,
      hex,
      step,
    };
  },
};
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  height: 100%
.card-container
  width: 100%
  height: 90vh
</style>
