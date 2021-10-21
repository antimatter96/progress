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

  alerts : AlertHandler

  constructor(alerts: AlertHandler) {
    this.weeksContainer = document.getElementById("weeks");

    this.weeks = [];
    this.htmlWeeks = [];

    this.alerts = alerts;
  }


  registerWeek(week: Week) {
    let htmlcontainer = document.createElement('div');
    htmlcontainer.id = week.id;

    this.htmlWeeks.unshift(htmlcontainer);
    this.weeks.unshift(week);
    this.weeksContainer.prepend(htmlcontainer);

    render(templateFunc(week), htmlcontainer);
    console.log("here");
    week.addEventListeners();
    console.log("here 2");

    let updateFunction = () => {
      render(templateFunc(week), htmlcontainer);
    }

    let alertFunction = (type, message) => {
      this.alerts.show(type, message, 5_000);
    }

    let deleteFucntion = () => {
      this.weeksContainer.removeChild(htmlcontainer);
      this.weeks = this.weeks.filter(item => item.id != week.id);

      week = null;
      console.log(this.weeks);
    }

    console.log(this.weeks);
    week.setUpdateFunction(updateFunction);
    week.setAlertFunction(alertFunction);
    week.setDeleteFunction(deleteFucntion);
  }

  createNewWeek(input): Week {
    let week = new Week(input);

    this.registerWeek(week);

    return week;
  }

  async loadLocal() {
    try {
      let homeDir = await _homeDir();
      let file = homeDir + ".tauri_progres/data.json";

      let text = await _read(file);
      console.log(text);
    } catch (e) {
      throw e;
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
        } catch (error) {
          throw error;
        }
      } else {
        throw e;
      }
    }
  }
}
