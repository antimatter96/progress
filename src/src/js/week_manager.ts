import {
  createDir as _createDir,
  readTextFile as _read,
  writeFile as _write,
} from "@tauri-apps/api/fs";
import { homeDir as _homeDir } from "@tauri-apps/api/path";
import { render } from "lit-html";
import { templateFunc, Week } from "./week";
import { AlertHandler } from './alerts'

export class WeekManager {

  weeksContainer: HTMLElement;

  htmlWeeks: Array<HTMLElement>
  weeks: Array<Week>;

  alerts: AlertHandler

  lastSaveTime: number
  lastUpdateTime: number

  constructor(alerts: AlertHandler) {
    this.weeksContainer = document.getElementById("weeks");

    this.weeks = [];
    this.htmlWeeks = [];

    this.alerts = alerts;


    this.lastSaveTime = Date.now();
    this.lastUpdateTime = this.lastSaveTime;


    setInterval(async () => {
      if (this.lastUpdateTime > this.lastSaveTime) {
        this.alerts.show('info', "Saving file", 10_000);
        await this.saveFile();
        this.lastSaveTime = Date.now();
        this.alerts.hide();
      }
    }, 10_000)
  }


  registerWeek(week: Week) {
    let htmlcontainer = document.createElement('div');
    htmlcontainer.id = week.id;

    this.htmlWeeks.unshift(htmlcontainer);
    this.weeks.unshift(week);

    this.weeksContainer.prepend(htmlcontainer);

    let updateFunction = () => {
      render(templateFunc(week), htmlcontainer);
      this.lastUpdateTime = Date.now();
    }

    let alertFunction = (type, message) => {
      this.alerts.show(type, message, 5_000);
    }

    let deleteFucntion = () => {
      updateFunction()
      this.weeksContainer.removeChild(htmlcontainer);
    }
    updateFunction();

    week.addEventListeners();
    week.setUpdateFunction(updateFunction);
    week.setAlertFunction(alertFunction);
    week.setDeleteFunction(deleteFucntion);
  }

  createNewWeek(input): Week {
    if (input.deleted) {
      return null;
    }
    let week = new Week(input);

    this.registerWeek(week);

    return week;
  }

  async saveFile() {
    try {
      let homeDir = await _homeDir();
      let path = homeDir + ".tauri_progres/data.json";

      let text = await _write({
        contents: JSON.stringify(this.weeks, null, 2),
        path,
      });
    } catch (e) {
      console.log(e)
    }
  }

  async loadLocal() {
    let text;
    try {
      let homeDir = await _homeDir();
      let file = homeDir + ".tauri_progres/data.json";

      text = await _read(file);
      console.log(text);
    } catch (e) {
      throw e;
    }

    let weeks = JSON.parse(text);
    console.log("weeks", weeks);
    for (let i = weeks.length - 1; i > -1; i--) {
      console.log("week", weeks[i]);

      this.createNewWeek(weeks[i]);
    }
  }

  static async ensureFileExists() {
    // Create or read folder

    let homeDir;
    try {
      homeDir = await _homeDir();
      let dataDir = homeDir + ".tauri_progres";
      let created = await _createDir(dataDir);
      console.log("Created", created);
    } catch (e) {
      console.log(e);
      if (typeof e == 'string' && e.includes("os error 17")) {
        // already exists
      } else {
        throw e;
      }
    }

    // Folder now exists
    try {
      let homeDir = await _homeDir();
      let file = homeDir + ".tauri_progres/data.json";

      let text = await _read(file);
      console.log(text);
    } catch (e) {
      console.log(e);
      if (typeof e == 'string' && e.includes("os error 2")) {
        // no file exists, create now
        try {
          let homeDir = await _homeDir();
          let path = homeDir + ".tauri_progres/data.json";

          let text = await _write({
            contents: "{}",
            path,
          });

          console.log(">>>>>>>>>>>>>>>", "EXISTING", text);
        } catch (error) {
          throw error;
        }
      } else {
        throw e;
      }
    }
  }
}
