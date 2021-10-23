import { html, render } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map';


import { v4 as uuid } from "uuid";

const progress = [
  "bg-red-500",
  "bg-red-400", "bg-red-300", "bg-red-200",
  "bg-amber-400", "bg-amber-300", "bg-amber-200",
  "bg-lime-200", "bg-lime-300", "bg-lime-400",
  "bg-lime-500"
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

    this.menuVisible = false;
    this.deleted = false;

    this.updateLastChangeTime();

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

  updateLastChangeTime() {
    this.lastChangeTime = Date.now();
    if (this.updateMe) {
      this.updateMe();
    }
  }

  flipVideo(i) : void {
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
    this.updateLastChangeTime();
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
    this.updateLastChangeTime();
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
    this.updateLastChangeTime();

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
    this.updateLastChangeTime();
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
    return (100 * (left) / total);
  }

  _increment(e) {
    console.log(e);
  }

  _decrement(e) {
    console.log(e);
  }

  addEventListeners() {
    let titles = ['Activities', 'Tutorials', 'Assignments'];

    titles.forEach((type) => {
      let ttype = type.toLowerCase();

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
      this.menuVisible = !this.menuVisible;
      this.updateLastChangeTime()
    });

    document.getElementById(`${this.id}-hide`).addEventListener('click', () => {
      this.menuVisible = !this.menuVisible;
      this.hidden = !this.hidden;
      this.updateLastChangeTime()
    });

    document.getElementById(`${this.id}-lock`).addEventListener('click', () => {
      this.menuVisible = !this.menuVisible;
      this.locked = !this.locked;
      this.updateLastChangeTime()
    });

    document.getElementById(`${this.id}-delete`).addEventListener('click', async () => {
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

  let _projected = week.getTotalMinutes();
  let _elasped = week.getElapsedMinutes();
  let _percentage = week.getPercentage(_projected, _elasped);

  let videos = [];
  week.videos.forEach((video, i) => {
    const textClass = {
      'bg-red-500': !video.seen,
      'bg-lime-500': video.seen
    };

    const btnClass = {
      'btnDown-valid': video.seen,
      'btnUp-valid': !video.seen
    };

    videos.push(html`
    <div class="video-time px-0">
      <p class="video-text better-shadow ${classMap(textClass)}">${video.m}:${video.s}</p>
      <button class="video-btn ${classMap(btnClass)}" id="${week.id}-video-${i}">${video.seen ? '-' : '+'}</button>
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
    const btnUp = (data.total > data.done) ?
      { 'btnUp-valid': true } :
      { 'btnUp-invalid': true };

    const btnDown = (data.done > 0) ?
      { 'btnDown-valid': true } :
      { 'btnDown-invalid': true };

    const inProgress = { 'in-progress': data.total > data.done, 'done': data.total == data.done }

    solvables.push(html`
    <div class="video-time act-time">
      <h2 class="act-text ${classMap(inProgress)}">${data.title} <br>${data.done}/${data.total}</h2>
      <div class="flex justify-around mt-0.5">
        <button class="solvable-btn mr-0.5 ${classMap(btnUp)}" id="${week.id}-${data.title.toLowerCase()}-plus">+</button>
        <button class="solvable-btn ml-0.5 ${classMap(btnDown)}" id="${week.id}-${data.title.toLowerCase()}-minus">-</button>
      </div>
    </div>
  `);
  })

  let progressColor = { [progress[(Math.floor(_percentage / 10))]]: true };

  return html`
  <div class="container items-center bg-white my-5 better-shadow week-overall">
    <div class="text-blueGray-700 rounded-lg">

      <!-- Heading -->
      <div class="pt-3 px-5 mx-auto md:items-center md:flex-row justify-between bg-blueGray-900">
        <div class="w-full border-b-2 border-white justify-between inline-flex">
          <div class="inline-flex items-center">
            <h2 class="pb-2 text-2xl font-bold text-white lg:text-x lg:mr-8">
              ${week.name}
            </h2>
          </div>
          <div class="inline-flex items-center move-up">
            <button class="w-auto p-2 my-2 text-base font-medium bg-white rounded-full" id="${week.id}-menu">
              <svg xmlns="http://www.w3.org/2000/svg" class="4-6 w-4" fill="none" viewBox="0 0 24 24" stroke="black">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </button>

            <div ?hidden=${!week.menuVisible} class="origin-top-right absolute top-0 right-10 mt-2 w-24 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
              <a class="rounded-t-md text-gray-900 block px-4 py-2 text-sm hover:opacity-50" role="menuitem" tabindex="-1" id="${week.id}-lock"> ${ week.locked ? 'Unlock' : 'Lock' }  </a>
              <a class="text-gray-900 block px-4 py-2 text-sm hover:opacity-50" role="menuitem" tabindex="-1" id="${week.id}-hide"> ${ week.hidden ? 'Unhide' : 'Hide' } </a>
              <a class="rounded-b-md text-white bg-red-800 block px-4 py-2 text-sm hover:opacity-50" role="menuitem" tabindex="-1" id="${week.id}-delete">Delete</a>
            </div>
          </div>
        </div>
      </div>

      <!-- Summary -->
      <div ?hidden=${week.hidden} class="pt-1 px-5 mx-auto md:items-center md:flex-row justify-between ${classMap(progressColor)}">
        <div class="pb-2 flex justify-between items-center border-b-2 border-gray-600">
          <p class="dispay-container">
            <span class="dispay-label">Projected:</span>
            <span class="dispay-data">${_projected.toFixed(1)}h</span>
          </p>

          <p class="dispay-container">
            <span class="dispay-label">Elapsed:</span>
            <span class="dispay-data">${_elasped.toFixed(1)}h</span>
          </p>

          <p class="dispay-container">
            <span class="dispay-label">Done:</span>
            <span class="dispay-data">${_percentage.toFixed(2)}%</span>
          </p>
        </div>
      </div>

      <!-- Videos -->
      <div ?hidden=${week.hidden} class="pt-5 bt-5 px-5 mx-auto md:items-center md:flex-row justify-between">
        <div class="w-full border-b-2 border-gray-600">
          <h2 class="pb-1 mb-1 text-xl font-bold text-black lg:text-x lg:mr-8">
            Videos
          </h2>
          <div class="flex justify-evenly flex-wrap">
            ${videos}
          </div>
        </div>
      </div>

      <!-- Solvable -->
      <div ?hidden=${week.hidden} class="pt-5 pb-5 bt-5 px-5 mx-auto md:items-center md:flex-row justify-between">
        <div class="w-full">
          <h2 class="pb-2 mb-1 text-xl font-bold text-black lg:text-x lg:mr-8">
            Solvable
          </h2>

          <div class="flex justify-around">
            ${solvables}
          </div>
        </div>
      </div>
    </div>
  </div>
  `
}
