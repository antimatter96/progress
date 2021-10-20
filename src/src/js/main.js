import { render } from "lit-html";
import { AlertHandler } from "./alerts";
import { FormHandler } from "./form";
import { Week, templateFunc } from "./week";
import { WeekManager } from "./week_manager";

window.onload = async function () {
  let formOpenBtn = document.getElementById("open-form");
  let formCloseBtn = document.getElementById("close-form");
  let formEnclosure = document.getElementById("form-enclosure");

  console.log(formOpenBtn, formCloseBtn, formEnclosure);

  formOpenBtn.addEventListener("click", () => {
    formEnclosure.style.display = "flex";
  });

  formCloseBtn.addEventListener("click", () => {
    formEnclosure.style.display = "none";
  });

  let f = new FormHandler();
  let alerts = new AlertHandler();

  alerts.hideAll();

  let wm = new WeekManager(alerts);

  const form = document.getElementById("add-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let errors = f.validate();

    if (errors.length > 0) {
      alerts.show("error", errors.join("\n"), 60_000);
    } else {
      let weekInput = f.submit();
      console.log(weekInput);

      let w = wm.createNewWeek(weekInput);
      console.log(w);

      let sss = JSON.stringify(w);
      console.log(sss);

      let w2 = new Week(JSON.parse(sss));
      w2.name = "Arpit Jain 2";
      console.log(w2);

      //weeks.prepend(w2.getHTML());

      console.log(Week.Validate(JSON.parse(sss)));
    }
  });

  try {
    let exists = await WeekManager.ensureFileExists();
    console.log(exists);
  } catch (error) {
    console.log(console.error());
    alerts.show("error", error, 1_000);
  }
};
