import { html, render } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map';


import { v4 as uuid } from "uuid";

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

  constructor(input) {
    this.id = input.id ? input.id : uuid();
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

    this.updateLastChangeTime();
  }

  setUpdateFunction(fn: CallableFunction) {
    this.updateMe = fn;
  }

  updateLastChangeTime() {
    this.lastChangeTime = Date.now();
    if (this.updateMe) {
      this.updateMe();
    }
  }

  markVideoSeen(i): void {
    if (this.videos[i].seen) {
      throw new Error("Already done");
    }
    this.videos[i].seen = true;
    this.updateLastChangeTime();
  }
  markVideoLeft(i): void {
    if (!this.videos[i].seen) {
      throw new Error("Already done");
    }
    this.videos[i].seen = false;
    this.updateLastChangeTime();
  }

  markSolvableDone(type): void {
    if (this.solvable[type].left <= 0) {
      throw new Error("Already done");
    }
    this.solvable[type].left -= 1;
    this.updateLastChangeTime();

  }

  markSolvableNotDone(type): void {
    if (this.solvable[type].left + 1 > this.solvable[type].total) {
      throw new Error("Already done");
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
      let upBtn = document.getElementById(`${this.id}-${type}-plus`);

      if (this.solvable[ttype].total > this.solvable[ttype].done) {
        upBtn.addEventListener('click', (e) => {
          this.markSolvableDone(type);
        });
      }

      let downBtn = document.getElementById(`${this.id}-${type}-minus`);
      downBtn.addEventListener('click', (e) => {
        this.markSolvableNotDone(type);
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
  let _projected = week.getTotalMinutes();
  let _elasped = week.getElapsedMinutes();
  let _percentage = week.getPercentage(_projected, _elasped);


  let videos = [];
  week.videos.forEach((video, i) => {
    const textClass = {
      'bg-red-500': i % 2 == 0,
      'bg-lime-500': i % 2 != 0
    };

    const btnClass = {
      'bg-red-500': video.seen,
      'bg-lime-500': !video.seen
    };

    videos.push(html`
    <div class="video-time px-0">
      <p class="video-text ${classMap(textClass)}">${video.m}:${video.s}</p> <!-- Add color -->
      <button class="video-btn ${classMap(btnClass)}">${video.seen ? '-' : '+'}</button> <!-- Add color -->
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
      { 'bg-white-500': true, 'text-lime-700': true, 'border-lime-500': true } :
      { 'bg-trueGray-200': true, 'text-gray-500': true, 'cursor-not-allowed': true, 'border-black-500': true };

    const btnDown = (data.done > 0) ?
      { 'bg-white-500': true, 'text-red-700': true, 'border-red-500': true } :
      { 'bg-trueGray-200': true, 'text-gray-500': true, 'cursor-not-allowed': true, 'border-black-500': true };

    solvables.push(html`
    <div class="video-time act-time">
      <p class="act-text">${data.title}: ${data.done}/${data.total}</p>
      <div class="flex justify-around border-t-2">
        <button class="solvable-btn mr-0.5 ${classMap(btnUp)}" id="${week.id}-${data.title.toLowerCase()}-plus">+</button>
        <button class="solvable-btn ml-0.5 ${classMap(btnDown)}" id="${week.id}-${data.title.toLowerCase()}-minus">-</button>
      </div>
    </div>
  `);
  })

  return html`
  <div class="container items-center bg-white my-5 better-shadow">
    <div class="text-blueGray-700 rounded-lg">

      <!-- Heading -->
      <div class="pt-3 px-5 mx-auto md:items-center md:flex-row justify-between bg-amber-400">
        <div class="w-full border-b-2">
          <h2 class="pb-2 text-2xl font-bold text-black lg:text-x lg:mr-8">
            ${week.name}
          </h2>
        </div>
      </div>

      <!-- Summary -->
      <div class="pt-1 px-5 mx-auto md:items-center md:flex-row justify-between bg-sky-300">
        <div class="pb-2 flex justify-between items-center border-b-2">
          <p class="dispay-container">
            <span class="dispay-label">Projected:</span>
            <span class="dispay-data template-projected">${_projected.toFixed(1)}h</span>
          </p>

          <p class="dispay-container">
            <span class="dispay-label">Elapsed:</span>
            <span class="dispay-data template-elapsed">${_elasped.toFixed(1)}h</span>
          </p>

          <p class="dispay-container">
            <span class="dispay-label">Done:</span>
            <span class="dispay-data template-done">${_percentage.toFixed(2)}%</span>
          </p>
        </div>
      </div>

      <!-- Videos -->
      <div class="pt-5 bt-5 px-5 mx-auto md:items-center md:flex-row justify-between">
        <div class="w-full border-b-2">
          <h2 class="pb-2 mb-1 text-xl font-bold text-black lg:text-x lg:mr-8">
            Videos
          </h2>
          <div class="flex justify-evenly flex-wrap template-video-container">
            ${videos}
          </div>
        </div>
      </div>

      <!-- Solvable -->
      <div class="pt-5 pb-5 bt-5 px-5 mx-auto md:items-center md:flex-row justify-between">
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
