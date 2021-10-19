import {
  createDir as _createDir,
  readTextFile as _read,
  writeFile as _write,
} from "@tauri-apps/api/fs";
import { homeDir as _homeDir } from "@tauri-apps/api/path";
import { render } from "lit-html";
import { templateFunc, Week } from "./week";

export class WeekManager {

  weeksContainer: HTMLElement;

  htmlWeeks : Array<HTMLElement>
  weeks : Array<Week>;

  constructor() {
    this.weeksContainer = document.getElementById("weeks");
    this.weeks = [];
    this.htmlWeeks = [];
  }

  createNewWeek(input): Week {
    let week = new Week(input);

    let htmlcontainer  = document.createElement('div');
    htmlcontainer.id = week.id;

    this.htmlWeeks.unshift(htmlcontainer);
    this.weeks.unshift(week);
    this.weeksContainer.prepend(htmlcontainer);

    render(templateFunc(week), htmlcontainer);
    console.log("here");
    week.addEventListeners();
    console.log("here 2");

    setTimeout(() => {
      week.markSolvableDone('activities');
      render(templateFunc(week), htmlcontainer);
    }, 5_000)

    let updateFunction = () => {
      render(templateFunc(week), htmlcontainer);
    }

    week.setUpdateFunction(updateFunction);
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
