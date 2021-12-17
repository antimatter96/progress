import {
  createDir as _createDir,
  readTextFile as _read,
  writeFile as _write,
} from "@tauri-apps/api/fs";
import { homeDir as _homeDir } from "@tauri-apps/api/path";

export async function customConfirm(message: string) : Promise<boolean> {
  if(window.__TAURI__) {
    return window.confirm("Do you really want to delete this ?");
  } else {
    return window.go.main.App.ConfirmDelete();
  }
}

export async function saveFile(data) {
  if(window.__TAURI__) {
    try {
      let homeDir = await _homeDir();
      let path = homeDir + DATA_FILE_NAME;

      let text = await _write({
        contents: JSON.stringify(data, null, 2),
        path,
      });
    } catch (e) {
      console.log(e)
    }
  } else {

  }
}

export async function loadLocal() {
  if(window.__TAURI__) {
    let text;
    try {
      let homeDir = await _homeDir();
      let file = homeDir + DATA_FILE_NAME;

      text = await _read(file);
      console.log(text);
    } catch (e) {
      throw e;
    }

    return text;
  } else {

  }
}

const TAURI_BASE_DIR = ".tauri_progres"
const DATA_FILE_NAME = TAURI_BASE_DIR + "/data.json"

export async function ensureFileExists() {
  if(window.__TAURI__) {
    let homeDir;
    try {
      homeDir = await _homeDir();
      let dataDir = homeDir + TAURI_BASE_DIR;
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
      let file = homeDir + DATA_FILE_NAME;

      let text = await _read(file);
      console.log(text);
    } catch (e) {
      console.log(e);
      if (typeof e == 'string' && e.includes("os error 2")) {
        // no file exists, create now
        try {
          let homeDir = await _homeDir();
          let path = homeDir + DATA_FILE_NAME;

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
  } else {
    // handled by app
  }
}
