class Week {
  name = "Sample Week 1";
  factor = 1;
  solvableTime = 20;

  solvable = {
    activities: { total: 3, left: 3 },
    tutorials: { total: 2, left: 2 },
    practice: { total: 1, left: 1 },
    graded: { total: 1, left: 1 },
  };

  videos = [{ m: 40, s: 10, seen: false }];

  constructor(input) {
    this.name = input.name;
    this.factor = input.factor;
    this.solvableTime = input.solvableTime;

    this.videos = [];
    this.videos = input.videos.map((video) => {
      return {
        m: video.m,
        s: video.s,
        seen: false,
      };
    });

    this.solvable = {
      activities: {
        total: input.activiyCount,
        left: input.activiyCount,
      },
      tutorials: {
        total: input.tutorialCount,
        left: input.tutorialCount,
      },
      practice: {
        total: input.practiceCount,
        left: input.practiceCount,
      },
      graded: {
        total: input.gradedCount,
        left: input.gradedCount,
      },
    };
  }

  markVideoSeen(i) {
    this.videos[i].seen = true;
  }
  markVideoLeft(i) {
    this.videos[i].seen = false;
  }

  markSolvableDone(type) {
    if (this.solvable[type].left <= 0) {
      throw new Error("Already done");
    }
    this.solvable[type].left -= 1;
  }

  markSolvableNotDone(type) {
    if (this.solvable[type].left + 1 > this.solvable[type].total) {
      throw new Error("Already done");
    }
    this.solvable[type].left += 1;
  }

  getTotalMinutes() {
    let m = 0;
    let s = 0;

    this.videos.forEach((video) => {
      m += video.m;
      s += video.s;
    });
    m += s / 60;

    let solvableCount = Object.entries(this.solvable).reduce(
      (prev, [_key, data]) => {
        return prev + data.total;
      },
      0
    );

    m += this.solvableTime * solvableCount;
    m /= this.factor * 60;

    return m;
  }

  getLeftMinutes() {
    let m = 0;
    let s = 0;

    this.videos.forEach((video) => {
      if (!video.seen) {
        m += video.m;
        s += video.s;
      }
    });
    m += s / 60;

    let solvableCount = Object.entries(this.solvable).reduce(
      (prev, [_key, data]) => {
        return prev + data.left;
      },
      0
    );

    m += this.solvableTime * solvableCount;
    m /= this.factor * 60;

    return m;
  }

  getPercentage() {
    let p = this.getTotalMinutes();
    let l = this.getLeftMinutes();

    let e = p - l;
    return 100 * (e / p);
  }
}

function parseTimings(s) {
  let videos = [];
}


let num = /^\d+:[0-5]\d$/;
function logSubmit(event) {
  event.preventDefault();
  let value = document.getElementById('minutes').value;
  console.log(value.length);
  
  for(let i = 0; i < value.length; i++) {
    console.log(i, value[i]);
  }
  
  let arr = value.split(/\s/ig);
  
   for(let i = 0; i < arr.length; i++) {
    console.log(arr[i].length, (arr[i].match(num)));
  }
}

// const form = document.getElementById('form');
// form.addEventListener('submit', logSubmit);


// <form id="form">
// <textarea id='minutes' form="form" rows="10", cols="6" required></textarea>
//  <button type='submit'>Yes</button>
// </form>


import { createDir } from "@tauri-apps/api/fs";
import { homeDir } from "@tauri-apps/api/path";

async function makeSureItExists() {
  try {
    let AhomeDir = await homeDir();
    let AdataDir = AhomeDir + ".tauri_progres";
    let Acreated = await createDir(AdataDir);
    console.log(Acreated);
  } catch(e) {
    console.log(e);
  }
}

async function main() {

  let as = await window.__TAURI__.path.currentDir();
  console.log(as);
  let ff = await window.__TAURI__.fs.readDir(as);

  console.log(ff);
}

makeSureItExists();
