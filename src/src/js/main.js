import { AlertHandler } from "./alerts"
import { FormHandler } from './form'
import { WeekManager } from './week_manager'

function parseTimings(s) {
  let videos = [];
}

window.onload = async function () {
  let formOpenBtn = document.getElementById("open-form");
  let formCloseBtn = document.getElementById("close-form");
  let formEnclosure = document.getElementById("form-enclosure");

  console.log(formOpenBtn, formCloseBtn, formEnclosure);

  formOpenBtn.addEventListener("click", () => {
    formEnclosure.style.display = "block";
  });

  formCloseBtn.addEventListener("click", () => {
    formEnclosure.style.display = "none";
  });

  let f = new FormHandler();
  let alerts = new AlertHandler();

  alerts.hideAll();

  
  const form = document.getElementById("add-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let errors = f.validate();

    alerts.show('error', errors.join('\n'));
  });





  let exists = await WeekManager.ensureFileExists();
  console.log(exists);
};
