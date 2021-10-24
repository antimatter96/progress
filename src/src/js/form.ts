const minuteSeconds = /^\d+:[0-5]\d$/;

class FormHandler {

  titleInput: HTMLInputElement;

  activities: HTMLInputElement;
  tutorials: HTMLInputElement;
  assignments: HTMLInputElement;

  factor: HTMLInputElement;
  assignmentTime: HTMLInputElement;

  videos: HTMLInputElement;


  constructor() {
    this.titleInput = document.getElementById("input-title") as HTMLInputElement;

    this.activities = document.getElementById("input-activities") as HTMLInputElement;
    this.tutorials = document.getElementById("input-tutorials") as HTMLInputElement;
    this.assignments = document.getElementById("input-assignments") as HTMLInputElement;

    this.factor = document.getElementById("input-factor") as HTMLInputElement;
    this.assignmentTime = document.getElementById("input-assignment-time") as HTMLInputElement;

    this.videos = document.getElementById("input-videos") as HTMLInputElement;

    console.log(
      this.titleInput,
      this.activities,
      this.tutorials,
      this.assignments,
      this.factor,
      this.videos
    );
  }

  validate() {
    let errors = [];

    console.log("titleInput", this.titleInput.value);
    console.log("activities", this.activities.value);
    console.log("tutorials", this.tutorials.value);
    console.log("assignments", this.assignments.value);
    console.log("factor", this.factor.value);
    console.log("videos", this.videos.value);
    console.log("assignmentTime", this.assignmentTime.value);

    [this.titleInput].forEach((ele) => {
      let title = ele.value;

      if (title.trim().length == 0) {
        errors.push(`- Title is required`);
      }
    });

    [this.activities, this.tutorials, this.assignments, this.assignmentTime].forEach((ele) => {
      let val = parseInt(ele.value, 10);
      if (Number.isInteger(val) && val >= 0) {
      } else {
        errors.push(`- '${ele.dataset.name}' should be a non-negative integer`);
      }
    });

    [this.factor].forEach((ele) => {
      let val = parseFloat(ele.value);
      if (Number.isFinite(val) && val >= 0.0) {
      } else {
        errors.push(`- '${ele.dataset.name}' should be a non-negative number`);
      }
    });

    let value = this.videos.value;
    let arr = value.trim().split(/\s/ig);

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length > 0 && !arr[i].match(minuteSeconds)) {
        errors.push(`- '${arr[i]}' is not a valid video time`)
      }
    }

    return errors;
  }

  /**
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
   */
  submit() {
    let input = {
      name: this.titleInput.value.trim(),
      factor: parseFloat(this.factor.value),
      solvableTime: parseInt(this.assignmentTime.value, 10),

      solvable: {
        activities: { total: parseInt(this.activities.value, 10), left: 3 },
        tutorials: { total: parseInt(this.tutorials.value, 10), left: 2 },
        assignments: { total: parseInt(this.assignments.value, 10), left: 1 },
      },

      videos: [],
    }

    Object.keys(input.solvable).forEach((key) => {
      input.solvable[key].left = input.solvable[key].total;
    })

    let value = this.videos.value;
    let arr = value.trim().split(/\s/ig);

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length === 0) {
        continue;
      }
      let split = arr[i].split(':')
      input.videos.push({
        m: parseInt(split[0], 10),
        s: parseInt(split[1], 10),
        seen: false,
      });
    }

    return input;
  }
}

export { FormHandler }
