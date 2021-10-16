import { createDir } from "@tauri-apps/api/fs";
import { homeDir } from "@tauri-apps/api/path";
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

// const form = document.getElementById('form');
// form.addEventListener('submit', logSubmit);

// <form id="form">
// <textarea id='minutes' form="form" rows="10", cols="6" required></textarea>
//  <button type='submit'>Yes</button>
// </form>

async function makeSureItExists() {
  try {
    let AhomeDir = await homeDir();
    let AdataDir = AhomeDir + ".tauri_progres";
    let Acreated = await createDir(AdataDir);
    console.log(Acreated);
  } catch (e) {
    console.log(e);
  }
}

// makeSureItExists();

class FormHandler {
  constructor() {
    this.titleInput = document.getElementById("input-title");

    this.activities = document.getElementById("input-activities");
    this.tutorials = document.getElementById("input-tutorials");
    this.assignments = document.getElementById("input-assignments");

    this.factor = document.getElementById("input-factor");

    this.videoLength = document.getElementById("input-videos");

    console.log(this.titleInput);

    console.log(
      this.titleInput,
      this.activities,
      this.tutorials,
      this.assignments
    );
    console.log(this.factor);
    console.log(this.videoLength);
  }

  validate() {
    let errors = [];

    console.log("titleInput", this.titleInput.value);
    console.log("activities", this.activities.value);
    console.log("tutorials", this.tutorials.value);
    console.log("assignments", this.assignments.value);
    console.log("factor", this.factor.value);
    console.log("videoLength", this.videoLength.value);

    [this.titleInput].forEach((ele) => {
      let title = ele.value;

      if (title.trim().length == 0) {
        errors.push(`Title is required`);
      }
    });

    [this.activities, this.tutorials, this.assignments].forEach((ele) => {
      let val = parseInt(ele.value, 10);
      if (Number.isInteger(val) && val >= 0) {
      } else {
        errors.push(`'${ele.dataset.name}' should be a non-negative integer`);
      }
    });

    [this.factor].forEach((ele) => {
      let val = parseFloat(ele.value, 10);
      if (Number.isFinite(val) && val >= 0.0) {
      } else {
        errors.push(`'${ele.dataset.name}' should be a non-negative number`);
      }
    });

    //    let num = /^\d+:[0-5]\d$/;

    // let value = document.getElementById('minutes').value;
    // console.log(value.length);

    // for(let i = 0; i < value.length; i++) {
    //   console.log(i, value[i]);
    // }

    // let arr = value.split(/\s/ig);

    // for(let i = 0; i < arr.length; i++) {
    //   console.log(arr[i].length, (arr[i].match(num)));
    // }

    return errors;
  }

  submit() {}
}

window.onload = function () {
  let formOpenBtn = document.getElementById("open-form");
  let formCloseBtn = document.getElementById("close-form");
  let formEnclosure = document.getElementById("form-enclosure");

  console.log(formOpenBtn, formCloseBtn, formEnclosure);

  formOpenBtn.addEventListener("click", () => {
    formEnclosure.style.display = "block";
  });

  formCloseBtn.addEventListener("click", () => {
    formEnclosure.style.display = "none";
  });

  let f = new FormHandler();

  const form = document.getElementById("add-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    console.log(f.validate());
  });
};
