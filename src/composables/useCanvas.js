import { useQuasar } from "quasar";
import { computed } from "vue";

import * as fabric from "fabric";
export function useCanva() {
  const $q = useQuasar();

  const widthScreen = computed(() => {
    console.log($q.screen.width);
    return $q.screen.width - 80;
  });

  const circleCanva = () => {
    const circle = new fabric.Circle({
      radius: 20,
      fill: "green",
      left: 100,
      top: 100,
    });
    return circle;
  };

  const rectangleCanva = () => {
    const rect = new fabric.Rect({
      left: 100,
      top: 100,
      fill: "red",
      width: 200,
      height: 200,
    });
    return rect;
  };
  const textCanva = () => {
    const text = new fabric.Textbox("hello world", { left: 100, top: 100 });
    return text;
  };
  const changeTextHeight = (canvas, size) => {
    const selectedObject = canvas.getActiveObject();
    if (selectedObject) {
      selectedObject.set({
        fontSize: size,
      });
      canvas.renderAll();
    }
  };

  //! change color figure
  const changeFigureColor = (canvas, color) => {
    const selectedObject = canvas.getActiveObject();

    if (selectedObject) {
      selectedObject.set({
        fill: color,
      });

      canvas.renderAll();
    }
  };
  const removeObject = (canvas) => {
    const selectedObject = canvas.getActiveObject();

    if (selectedObject) {
      canvas.remove(selectedObject); // Eliminar el objeto seleccionado del lienzo
      canvas.discardActiveObject(); // Deseleccionar el objeto después de eliminarlo
      canvas.renderAll(); // Volver a renderizar el lienzo
    }
  };

  return {
    widthScreen,
    circleCanva,
    rectangleCanva,
    textCanva,
    changeFigureColor,
    changeTextHeight,
    removeObject,
  };
}
