import { validaInputs, validaTextAreas } from "./validaciones.js";


const inputs = document.querySelectorAll("input");
const textareas = document.querySelectorAll("textarea");
const botonDescargaCv = document.querySelector(".title__network__item--descargaCV")

inputs.forEach((input) => {
  input.addEventListener("blur", (input) => {
    validaInputs(input.target);
  });
});

textareas.forEach((textarea) => {
  textarea.addEventListener("blur", (textarea) => {
    validaTextAreas(textarea.target);
  });
});


botonDescargaCv.addEventListener("click", () => {
    window.open('./assets/cv/cv tomas.pdf');
});


