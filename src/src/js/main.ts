import { render } from "lit-html";
import { AlertHandler } from "./alerts";
import { FormHandler } from "./form";
import { Week, templateFunc } from "./week";
import { WeekManager } from "./week_manager";

class Main {
  formOpenBtn : HTMLElement
  formCloseBtn : HTMLElement
  formEnclosure : HTMLElement


  wm : WeekManager
  fm : FormHandler
  am : AlertHandler

  constructor() {
    this.formOpenBtn = document.getElementById("open-form");
    this.formCloseBtn = document.getElementById("close-form");
    this.formEnclosure = document.getElementById("form-enclosure");

    this.fm = new FormHandler();
    this.am = new AlertHandler(document.getElementById('alert'));

    this.wm = new WeekManager(this.am);


    this.addListeners()
  }

  async run() {
    // let ww = JSON.parse(`{"id":"763405e5-405c-4fc1-872d-48ce24e87fc5","name":"Maths Week 1","factor":0.05,"solvableTime":5,"solvable":{"activities":{"total":1,"left":1},"tutorials":{"total":1,"left":1},"assignments":{"total":2,"left":2}},"videos":[{"m":33,"s":23,"seen":true}, {"m":12,"s":12,"seen":false}],"lastChangeTime":1634845763686}`)
    //   ww.hidden = true;
    // let w2 = new Week(ww);
    // this.wm.registerWeek(w2);

    //   ww.id = "asdasdasdasdasd"
    //   ww.hidden = false;

    // let w3 = new Week(ww);
    // this.wm.registerWeek(w3);

    try {
      let exists = await WeekManager.ensureFileExists();
      console.log(exists);
      this.wm.loadLocal();
    } catch (error) {
      console.log(error);
      this.am.show("error", error, 10_000);
    }
  }

  addListeners() {
    this.formOpenBtn.addEventListener("click", () => {
      this.formEnclosure.style.display = "flex";
    });
  
    this.formCloseBtn.addEventListener("click", () => {
      this.formEnclosure.style.display = "none";
    });


    const form = document.getElementById("add-form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      let errors = this.fm.validate();
  
      if (errors.length > 0) {
        this.am.show("error", errors.join("\n"), 60_000);
      } else {
        let weekInput = this.fm.submit();

        let week = this.wm.createNewWeek(weekInput);
        console.log(Week.Validate(JSON.parse(JSON.stringify(week))));
      }
    });
  }
}

window.onload = async function () {
  let m =  new Main();

  m.run();



};
