import { AlertHandler } from "./alerts";
import { FormHandler } from "./form";
import { Week } from "./week";
import { WeekManager } from "./week_manager";

class Main {
  formOpenBtn: HTMLElement
  formCloseBtn: HTMLElement
  formEnclosure: HTMLElement

  wm: WeekManager
  fm: FormHandler
  am: AlertHandler

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
    let trial = () => {
      let ww = JSON.parse(`{"id":"1","name":"1","factor":0.05,"solvableTime":5,"solvable":{"activities":{"total":1,"left":0},"tutorials":{"total":1,"left":0},"assignments":{"total":2,"left":1}},"videos":[{"m":33,"s":3,"seen":true}, {"m":3,"s":23,"seen":true},{"m":33,"s":23,"seen":true},{"m":33,"s":23,"seen":true},{"m":33,"s":23,"seen":true},{"m":33,"s":23,"seen":true},{"m":12,"s":12,"seen":true}],"lastChangeTime":1634845763686}`)
      ww.hidden = false;
      let w2 = new Week(ww);
      this.wm.registerWeek(w2);

      ww.id = "2"
      ww.name = "2";
      ww.hidden = true;

      let w3 = new Week(ww);
      this.wm.registerWeek(w3);

      ww.id = "3"
      ww.name = "3";
      ww.hidden = true;

      let w4 = new Week(ww);
      this.wm.registerWeek(w4);

      ww.id = "4"
      ww.name = "4";
      ww.hidden = true;

      let w5 = new Week(ww);
      this.wm.registerWeek(w5);
    }

    if (window.__TAURI__) {

    } else {
      trial();
    }

    if (window.__TAURI__) {
      try {
        let exists = await WeekManager.ensureFileExists();
        console.log(exists);
        this.wm.loadLocal();
      } catch (error) {
        console.log(error);
        this.am.show("error", error, 1_000);
      }
    }
  }

  addListeners() {
    this.formOpenBtn.addEventListener("click", () => {
      this.formEnclosure.style.display = "flex";
    });

    this.formCloseBtn.addEventListener("click", () => {
      this.formEnclosure.style.display = "none";
    });


    const form = document.getElementById("add-form") as HTMLFormElement;
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      let errors = this.fm.validate();

      if (errors.length > 0) {
        this.am.show("error", errors.join("\n"), 10_000);
      } else {
        let weekInput = this.fm.submit();
        form.reset();

        let week = this.wm.createNewWeek(weekInput);
        console.log(Week.Validate(JSON.parse(JSON.stringify(week))));
      }
    });
  }
}

window.onload = async function () {
  let m = new Main();

  await m.run();
};
