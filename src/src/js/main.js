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
  let alerts = new AlertHandler(document.getElementById('alert'));

 // alerts.hideAll();


  let wm = new WeekManager(alerts);

  let ww = JSON.parse(`{"id":"763405e5-405c-4fc1-872d-48ce24e87fc5","name":"Maths Week 1","factor":0.05,"solvableTime":5,"solvable":{"activities":{"total":1,"left":1},"tutorials":{"total":1,"left":1},"assignments":{"total":2,"left":2}},"videos":[{"m":12,"s":12,"seen":false}],"lastChangeTime":1634845763686}`)
  ww.hidden = true;
  let w2 = new Week(ww);
  wm.registerWeek(w2);

  ww.id = "asdasdasdasdasd"
  ww.hidden = false;

  let w3 = new Week(ww);
  wm.registerWeek(w3);

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
    console.log(error);
    alerts.show("error", error, 10_000);
  }
};
