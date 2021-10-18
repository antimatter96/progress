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

  getPercentage(total, left) {
    return 100 * ((total - left) / total);
  }


  getHTML() {
    let template = document.getElementById("week-details");
    let videoTemplate = document.getElementById('video-details');


    let weekDetails = template.content.firstElementChild.cloneNode(true);

    console.log(weekDetails);
    console.log(weekDetails.getElementsByClassName);
    let title = weekDetails.getElementsByClassName('template-title')[0];
    title.textContent = this.name;

    let _projected = this.getTotalMinutes();
    let _elasped = this.getLeftMinutes();
    let _percentage = this.getPercentage(_projected, _elasped).toFixed(2);

    let projected = weekDetails.getElementsByClassName('template-projected')[0];
    projected.textContent = `${_projected.toFixed(1)}h`;
    let elasped = weekDetails.getElementsByClassName('template-elapsed')[0];
    elasped.textContent = `${_elasped.toFixed(1)}h`;
    let percentage = weekDetails.getElementsByClassName('template-done')[0];
    percentage.textContent = `${_percentage}%`;


    let videoContainers =  weekDetails.getElementsByClassName('template-video-container')[0];
    this.videos.forEach((video, i) => {
      let videoDetails = videoTemplate.content.firstElementChild.cloneNode(true);

      let videoTime = videoDetails.getElementsByClassName('template-video-time')[0];
      videoTime.textContent = `${video.m}:${video.s}`;
      videoTime.classList.add( i%2 == 0 ? 'bg-lime-500' : 'bg-red-500');

      let videoBtn = videoDetails.getElementsByClassName('template-video-btn')[0];
      if (video.seen) {
        videoBtn.textContent = '-';
        videoBtn.classList.add('bg-red-500');
      } else {
        videoBtn.textContent = '+';
        videoBtn.classList.add( 'bg-lime-500' );
      }

      videoContainers.appendChild(videoDetails);
    });

    let solvable = this.solvable;

    let activitiesText = weekDetails.getElementsByClassName('template-activities')[0];
    activitiesText.textContent = `Activites : ${solvable.activities.total - solvable.activities.left} / ${solvable.activities.total}`;

    // TODO : Arpit
    // if (solvable.activities.left > 0) {
    //   activitiesText.getElementsByClassName('btn-activities-plus')[0].classList.add('');
    //   activitiesText.getElementsByClassName('btn-activities-minus')[0].classList.add('');
    // }

    let tutorialsText = weekDetails.getElementsByClassName('template-tutorials')[0];
    tutorialsText.textContent = `Tutorials : ${solvable.tutorials.total - solvable.tutorials.left} / ${solvable.tutorials.total}`;

    let gradedText = weekDetails.getElementsByClassName('template-graded')[0];
    gradedText.textContent = `Graded : ${solvable.practice.total + solvable.graded.total - solvable.practice.left - solvable.graded.left} / ${solvable.practice.total + solvable.graded.total}`;

    return weekDetails;
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
