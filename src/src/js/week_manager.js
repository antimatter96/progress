import { createDir as _createDir, readTextFile as _read } from "@tauri-apps/api/fs";
import { homeDir as _homeDir } from "@tauri-apps/api/path";

export class WeekManager {
  constructor() {

  }

  loadLocal() {
    
  }

  static async ensureFileExists() {
    // Create or read folder
    try {
      let homeDir = await _homeDir();
      let dataDir = homeDir + ".tauri_progres";
      let created = await _createDir(dataDir);
      console.log(created);
    } catch (e) {
      console.log(e);
    }

    // Folder now exists
    try {
      let homeDir = await _homeDir();
      let file = homeDir + ".tauri_progres/data.json";

      let text = await _read(file);
      console.log(text);
    } catch (e) {
      console.log(e);
    }
  }
}
