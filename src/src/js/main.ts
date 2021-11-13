import { AlertHandler } from "./alerts";
import { FormHandler, formTemplate } from "./form";
import { Week } from "./week";
import { WeekManager } from "./week_manager";
import { render } from 'lit-html';

var displaceHeader = (function () {
	var target;
	var limit;
	var flag = false;
	function popp() {
		if (window.scrollY >= limit && !flag) {
			target.classList.add("displaced");
		} else if (window.scrollY <= limit) {
			target.classList.remove("displaced");
		}
	}
	return {
		init: function (item) {
			target = document.getElementById(item);
			limit = target.offsetHeight;
			window.addEventListener("scroll", popp);
		}
	};
})();

class Main {
  formToggleBtn: HTMLElement
  formEnclosure: HTMLElement

  wm: WeekManager
  fm: FormHandler
  am: AlertHandler

  formOpen: boolean

  constructor() {
    this.formToggleBtn = document.getElementById("fab");

    this.formEnclosure = document.createElement("div");

    this.fm = new FormHandler();
    this.am = new AlertHandler(document.getElementById('alert'));
    this.wm = new WeekManager(this.am);

    this.formOpen = false;

    let weeks = document.getElementById("weeks");
    weeks.parentNode.insertBefore(this.formEnclosure, weeks);

    this.addListeners()
    //render(templateFunc(week), htmlcontainer);

    displaceHeader.init("nav");
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
    this.formToggleBtn.addEventListener("click", (e) => {
      if(!window.__TAURI__ && this.formOpen) {
        e.preventDefault(); // don't scroll up if form is closed
      }
      this.formOpen = !this.formOpen;

      render(formTemplate(this.formOpen), this.formEnclosure);

      if(this.formOpen) {
        this.formToggleBtn.classList.remove("open");
        this.formToggleBtn.classList.add("close");
      } else {
        this.formToggleBtn.classList.remove("close");
        this.formToggleBtn.classList.add("open");
      }

      if(this.formOpen) {
        let form = document.getElementById("add-form") as HTMLFormElement;
        form.addEventListener("submit", this.submitHandler.bind(this));
      }
    });
  }

  submitHandler(e: Event) {
    e.preventDefault();

    let errors = this.fm.validate();

    if (errors.length > 0) {
      this.am.show("error", errors.join("\n"), 10_000);
    } else {
      let weekInput = this.fm.submit();
      let form = e.target as HTMLFormElement;
      form.reset()

      let week = this.wm.createNewWeek(weekInput);
      console.log(Week.Validate(JSON.parse(JSON.stringify(week))));
    }
  }
}

window.onload = async function () {
  let m = new Main();

  await m.run();
};
