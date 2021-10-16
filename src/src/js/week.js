import { v4 as uuid } from 'uuid';

export class Week {
  _id = "";
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

  constructor(input, existingUUID) {
    this.id = existingUUID ? existingUUID : uuid();
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
        total: parseInt(input.activiyCount.total, 10),
        left: parseInt(input.activiyCount.left, 10),
      },
      tutorials: {
        total: parseInt(input.tutorialCount.total, 10),
        left: parseInt(input.tutorialCount.left, 10),
      },
      practice: {
        total: parseInt(input.practiceCount.total, 10),
        left: parseInt(input.practiceCount.left, 10),
      },
      graded: {
        total: parseInt(input.gradedCount.total, 10),
        left: parseInt(input.gradedCount.left, 10),
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

  validateSelf()

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
    if ( !input.id  || this.name ) {
      throw new Error();
    }

    if ( !Number.isFinite(this.factor)  || !Number.isInteger(this.solvableTime)) {
      throw new Error();
    }

    input.videos.map((video) => {
      if ( !Number.isInteger(video.m)  || !Number.isInteger(video.s)) {
        throw new Error();
      }

      if(video.s < 0 || video.s >= 60) {

      }

      if(video.m < 0) {

      }
    });

    ['activiyCount', 'tutorialCount', 'practiceCount', 'gradedCount'].forEach((key) => {
      let total = input[key].total;
      let left = input[key].left;

      if ( !Number.isInteger(total)  || !Number.isInteger(left)) {
        throw new Error();
      }

      if (total < 0 || left < 0 || left > total) {
        throw new Error();
      }
    })
  }

  static Parse(input) {
    try {
      Week.Validate(input);
      return new Week(input)
    } catch(e) {
      return null;
    }
  }
}
