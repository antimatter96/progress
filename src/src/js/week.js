import { v4 as uuid } from "uuid";

export class Week {
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
    this.id = input.id ? input.id : uuid();
    this.name = input.name;
    this.factor = parseFloat(input.factor, 10);
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
      practice: {
        total: parseInt(input.solvable.practice.total, 10),
        left: parseInt(input.solvable.practice.left, 10),
      },
      graded: {
        total: parseInt(input.solvable.graded.total, 10),
        left: parseInt(input.solvable.graded.left, 10),
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

  validateSelf() {}

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

  static Validate(input) {
    if (!input.id || !input.name) {
      throw new Error( `${input.id} ${input.name}` );
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

    ["activities", "tutorials", "practice", "graded"].forEach((key) => {
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

  static Parse(input) {
    try {
      Week.Validate(input);
      return new Week(input);
    } catch (e) {
      return null;
    }
  }
}
