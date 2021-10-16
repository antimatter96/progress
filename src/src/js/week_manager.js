import {
  createDir as _createDir,
  readTextFile as _read,
  writeFile as _write,
} from "@tauri-apps/api/fs";
import { homeDir as _homeDir } from "@tauri-apps/api/path";

export class WeekManager {
  constructor() {

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
        console.log(e);
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
      if (typeof e == 'string' && e.includes("os error 2")) {
        // no file exists, create now
        try {
          let homeDir = await _homeDir();
          let path = homeDir + ".tauri_progres/data.json";

          let text = await _write({
            contents: "",
            path,
          });
        } catch (error) {
          throw error;
        }
      } else {
        console.log(e);
        throw e;
      }
    }
  }
}
