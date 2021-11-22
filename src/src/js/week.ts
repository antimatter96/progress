import { html, render } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map';


import { v4 as uuid } from "uuid";

const progress = [
  "text-red-500",
  "text-orange-700", "text-orange-500", "text-amber-600",
  "text-amber-500", "text-amber-500",
  "text-amber-400", "text-yellow-500", "text-yellow-400",
  "text-lime-400",
  "text-lime-500"
]

export class Week {
  id = 'uuid'
  name = "Sample Week 1";
  factor = 1;
  solvableTime = 20;

  solvable = {
    activities: { total: 3, left: 3 },
    tutorials: { total: 2, left: 2 },
    assignments: { total: 1, left: 1 },
  };

  videos = [{ m: 40, s: 10, seen: false }];

  lastChangeTime = 123123;
  updateMe: CallableFunction
  deleteMe: CallableFunction
  alertUser: CallableFunction

  hidden: boolean
  locked: boolean
  deleted: boolean
  menuVisible: boolean

  hideMenuTimer: NodeJS.Timeout

  constructor(input) {
    this.id = input.hasOwnProperty('id') ? input.id : uuid();
    this.name = input.name;
    this.factor = parseFloat(input.factor);
    this.solvableTime = input.solvableTime;

    this.videos = [];
    this.videos = input.videos.map((video) => {
      return {
        m: parseInt(video.m, 10),
        s: parseInt(video.s, 10),
        seen: Boolean(video.seen),
      };
    });

    this.solvable = {
      activities: {
        total: parseInt(input.solvable.activities.total, 10),
        left: parseInt(input.solvable.activities.left, 10),
      },
      tutorials: {
        total: parseInt(input.solvable.tutorials.total, 10),
        left: parseInt(input.solvable.tutorials.left, 10),
      },
      assignments: {
        total: parseInt(input.solvable.assignments.total, 10),
        left: parseInt(input.solvable.assignments.left, 10),
      },
    };

    this.hidden = input.hasOwnProperty('hidden') ? input.hidden : false
    this.locked = input.hasOwnProperty('locked') ? input.locked : false
    this.deleted = input.hasOwnProperty('deleted') ? input.deleted : false;

    this.menuVisible = false;

    this.updateLastChangeTime(false);

    console.log(this);
  }

  setUpdateFunction(fn: CallableFunction) {
    this.updateMe = fn;
  }

  setAlertFunction(fn: CallableFunction) {
    this.alertUser = fn;
  }

  setDeleteFunction(fn: CallableFunction) {
    this.deleteMe = fn;
  }

  updateLastChangeTime(someProgress: boolean) {
    this.lastChangeTime = Date.now();
    if (this.updateMe) {
      this.updateMe(someProgress && this.isDone());
    }
  }

  flipVideo(i: number): void {
    if (this.videos[i].seen) {
      this.markVideoLeft(i);
    } else {
      this.markVideoSeen(i);
    }
  }

  markVideoSeen(i): void {
    if (this.locked) {
      this.alertUser('error', "Please unlock before making any changes");
      return;
    }
    if (this.videos[i].seen) {
      this.alertUser('error', "Already done");
      return;
    }
    this.videos[i].seen = true;
    this.updateLastChangeTime(true);
  }
  markVideoLeft(i): void {
    if (this.locked) {
      this.alertUser('error', "Please unlock before making any changes");
      return;
    }
    if (!this.videos[i].seen) {
      this.alertUser('error', "Already done");
      return;
    }
    this.videos[i].seen = false;
    this.updateLastChangeTime(false);
  }

  markSolvableDone(type): void {
    if (this.locked) {
      this.alertUser('error', "Please unlock before making any changes");
      return;
    }
    if (this.solvable[type].left <= 0) {
      this.alertUser('error', "Already done");
      return;
    }
    this.solvable[type].left -= 1;
    this.updateLastChangeTime(true);
  }
  markSolvableNotDone(type): void {
    if (this.locked) {
      this.alertUser('error', "Please unlock before making any changes");
      return;
    }
    if (this.solvable[type].left + 1 > this.solvable[type].total) {
      this.alertUser('error', "Already done");
      return;
    }
    this.solvable[type].left += 1;
    this.updateLastChangeTime(false);
  }

  validateSelf() { }

  getTotalMinutes(): number {
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

  getElapsedMinutes(): number {
    let m = 0;
    let s = 0;

    this.videos.forEach((video) => {
      if (video.seen) {
        m += video.m;
        s += video.s;
      }
    });
    m += s / 60;

    let solvableCount = Object.entries(this.solvable).reduce(
      (prev, [_key, data]) => {
        return prev + (data.total - data.left);
      },
      0
    );

    m += this.solvableTime * solvableCount;
    m /= this.factor * 60;

    return m;
  }

  getPercentage(total: number, left: number): number {
    return Math.min(Math.ceil(100 * (left) / total), 100);
  }

  isDone() {
    let _projected = this.getTotalMinutes();
    let _elasped = this.getElapsedMinutes();
    let _percentage = this.getPercentage(_projected, _elasped);

    return (Math.floor(_percentage / 10)) == 10
  }

  addEventListeners() {
    let titles = ['Activities', 'Tutorials', 'Assignments'];

    titles.forEach((type) => {
      let ttype = type.toLowerCase();

      if (this.solvable[ttype].total == 0) {
        return;
      }

      let downBtn = document.getElementById(`${this.id}-${ttype}-minus`);
      let upBtn = document.getElementById(`${this.id}-${ttype}-plus`);

      upBtn.addEventListener('click', () => {
        this.markSolvableDone(ttype);
      });

      downBtn.addEventListener('click', () => {
        this.markSolvableNotDone(ttype);
      });
    });

    document.getElementById(`${this.id}-menu`).addEventListener('click', () => {
      clearTimeout(this.hideMenuTimer);

      this.menuVisible = !this.menuVisible;
      this.updateLastChangeTime(false)

      if (this.menuVisible) {
        this.hideMenuTimer = setTimeout(() => {
          this.menuVisible = !this.menuVisible;
          this.updateLastChangeTime(false)
        }, 5_000)
      }
    });

    document.getElementById(`${this.id}-hide`).addEventListener('click', () => {
      clearTimeout(this.hideMenuTimer);
      this.menuVisible = !this.menuVisible;
      this.hidden = !this.hidden;
      this.updateLastChangeTime(false)
    });

    document.getElementById(`${this.id}-lock`).addEventListener('click', () => {
      clearTimeout(this.hideMenuTimer);
      this.menuVisible = !this.menuVisible;
      this.locked = !this.locked;
      this.updateLastChangeTime(false)
    });

    document.getElementById(`${this.id}-delete`).addEventListener('click', async () => {
      clearTimeout(this.hideMenuTimer);
      this.menuVisible = !this.menuVisible;
      if (this.locked) {
        this.alertUser('error', "Please unlock before making any changes");
        return;
      }

      let promise = window.confirm("Do you really want to delete this ?");
      let confirmed = await promise;

      if (confirmed) {
        this.deleted = true;
        this.deleteMe();
      } else {
        this.alertUser('warning', "Please be careful");
      }
    });

    this.videos.forEach((_video, i) => {
      let btn = document.getElementById(`${this.id}-video-${i}`);

      btn.addEventListener('click', () => {
        this.flipVideo(i);
      });
    });
  }

  static Validate(input): void {
    if (!input.id || !input.name) {
      throw new Error(`${input.id} ${input.name}`);
    }

    if (!Number.isFinite(input.factor) || !Number.isInteger(input.solvableTime)) {
      throw new Error();
    }

    input.videos.forEach((video) => {
      if (!Number.isInteger(video.m) || !Number.isInteger(video.s)) {
        throw new Error();
      }

      if (video.s < 0 || video.s >= 60) {
        throw new Error();
      }

      if (video.m < 0) {
        throw new Error();
      }
    });

    ["activities", "tutorials", "assignments"].forEach((key) => {
      let total = input.solvable[key].total;
      let left = input.solvable[key].left;

      if (!Number.isInteger(total) || !Number.isInteger(left)) {
        throw new Error();
      }

      if (total < 0 || left < 0 || left > total) {
        throw new Error();
      }
    });
  }

  static Parse(input): Week {
    try {
      Week.Validate(input);
      return new Week(input);
    } catch (e) {
      return null;
    }
  }
}

export function templateFunc(week: Week) {
  if (week.deleted) {
    return html``
  }

  let id = week.id;

  let _projected = week.getTotalMinutes();
  let _elasped = week.getElapsedMinutes();
  let _percentage = week.getPercentage(_projected, _elasped);

  let videos = [];
  week.videos.forEach((video, i) => {
    const btnClass = {
      'btn-down': video.seen,
      'btn-up': !video.seen
    };

    const inProgress = { 'in-progress': !video.seen, 'done': video.seen }

    videos.push(html`
    <div class="video px-0">
      <p class="video-text ${classMap(inProgress)}">${video.m.toFixed(0).padStart(2, "0")}:${video.s.toFixed(0).padStart(2, "0")}</p>
      <button class="video-btn ${classMap(btnClass)}" id="${id}-video-${i}">${video.seen ? '－' : '+'}</button>
    </div>
  `);
  });


  let _solvable = week.solvable;

  let solvableData = [];

  solvableData.push({
    title: 'Activities',
    done: _solvable.activities.total - _solvable.activities.left,
    total: _solvable.activities.total,
  })
  solvableData.push({
    title: 'Tutorials',
    done: _solvable.tutorials.total - _solvable.tutorials.left,
    total: _solvable.tutorials.total,
  })
  solvableData.push({
    title: 'Assignments',
    done: _solvable.assignments.total - _solvable.assignments.left,
    total: _solvable.assignments.total
  })

  let solvables = [];

  solvableData.forEach((data) => {
    if (data.total == 0) {
      return;
    }

    const btnUpValid = data.total > data.done;
    const btnDownValid = data.done > 0;

    const commonClasses = {};
    const btnUp = {}
    const btnDown = {};

    if (btnUpValid && btnDownValid) {
      commonClasses['add-margin'] = true;
    }

    Object.assign(btnUp, commonClasses);
    Object.assign(btnDown, commonClasses);

    const inProgress = { 'in-progress': btnUpValid, 'done': (!btnUpValid && btnDownValid) }

    solvables.push(html`
    <div class="act-time w-1/5">
      <h2 class="act-text ${classMap(inProgress)}">${data.title} : ${data.done}/${data.total}</h2>
      <div class="flex justify-around mt-0.5">
        <button ?hidden=${!btnUpValid} class="solvable-btn btn-up ${classMap(btnUp)}" id="${id}-${data.title.toLowerCase()}-plus">+</button>
        <button ?hidden=${!btnDownValid} class="solvable-btn btn-down ${classMap(btnDown)}" id="${id}-${data.title.toLowerCase()}-minus">－</button>
      </div>
    </div>
  `);
  })

  // consider max 12 videos overall
  const max_in_row = 6;
  if (videos.length > max_in_row) {
    // divide into two
    videos.splice(Math.ceil(videos.length/2), 0, html`<div class="w-full"></div>`)
  }

  let progressColor = { [progress[(Math.floor(_percentage / 10))]]: true };

  const animatedBorderClassMap = {
    'gradient-border': (Math.floor(_percentage / 10)) == 10
  }

  return html`
  <div class="container items-center bg-white my-4 better-shadow week-overall ${classMap(animatedBorderClassMap)}">
    <div class="rounded-lg">

      <!-- Heading -->
      <div class="week-heading-draggable pt-2 px-5 mx-auto md:items-center md:flex-row justify-between bg-gray-800">
        <div class="week-heading-draggable w-full border-b-2 border-white justify-between inline-flex">
          <div class="week-heading-draggable inline-flex items-center">
            <h2 class="week-heading-draggable pb-1 text-2xl font-bold text-white lg:text-x lg:mr-8">
              ${week.name}
            </h2>
          </div>
          <div class="week-heading-draggable inline-flex items-center move-up">
            <button class="week-heading-draggable rounded-button bg-white" id="${id}-menu">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="black">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </button>

            <div ?hidden=${!week.menuVisible}>
              <div class="dropdown-menu absolute w-60 shadow-lg bg-white divide-x divide-gray-100 right-10 grid grid-cols-3">
                <a class="text-gray-900 bg-white" id="${id}-lock"> ${week.locked ? 'Unlock' : 'Lock'} </a>
                <a class="text-gray-900 bg-white" id="${id}-hide"> ${week.hidden ? 'Unhide' : 'Hide'} </a>
                <a class="text-white bg-red-800" id="${id}-delete">Delete</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Summary -->
      <div ?hidden=${week.hidden} class="pt-1 px-5 mx-auto md:items-center md:flex-row justify-between">
        <div class="pb-1 px-10 flex justify-between items-center border-b-2 border-gray-600">
          <p class="dispay-container">
            <span class="dispay-label justify-start">Projected:</span>
            <span class="dispay-data">${_projected.toFixed(1)}h</span>
          </p>

          <p class="dispay-container justify-center">
            <span class="dispay-label">Elapsed:</span>
            <span class="dispay-data">${_elasped.toFixed(1)}h</span>
          </p>

          <p class="dispay-container justify-end">
            <span class="dispay-label">Done:</span>
            <span class="dispay-data ${classMap(progressColor)}">${_percentage.toFixed(2)}%</span>
          </p>
        </div>
      </div>

      <!-- Videos -->
      <div ?hidden=${week.hidden} class="pt-2 bt-5 px-5 mx-auto md:items-center md:flex-row justify-between">
        <div class="w-full border-b-2 border-gray-600">
          <h2 class="text-xl font-bold text-black lg:text-x lg:mr-8">
            Videos
          </h2>
          <div class="flex justify-evenly flex-wrap pb-3">
            ${videos}
          </div>
        </div>
      </div>

      <!-- Solvable -->
      <div ?hidden=${week.hidden} class="pt-3 pb-3 bt-5 px-5 mx-auto md:items-center md:flex-row justify-between">
        <div class="w-full">
          <h2 class="pb-1 text-xl font-bold text-black lg:text-x lg:mr-8">
            Solvable
          </h2>

          <div class="flex justify-around px-5">
            ${solvables}
          </div>
        </div>
      </div>
    </div>
  </div>
  `
}
