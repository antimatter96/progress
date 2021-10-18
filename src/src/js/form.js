const minuteSeconds = /^\d+:[0-5]\d$/;

class FormHandler {
  constructor() {
    this.titleInput = document.getElementById("input-title");

    this.activities = document.getElementById("input-activities");
    this.tutorials = document.getElementById("input-tutorials");
    this.assignments = document.getElementById("input-assignments");

    this.factor = document.getElementById("input-factor");
    this.assignmentTime = document.getElementById("input-assignment-time");

    this.videos = document.getElementById("input-videos");

    console.log(this.titleInput);

    console.log(
      this.titleInput,
      this.activities,
      this.tutorials,
      this.assignments,
      this.videos
    );
    console.log(this.factor);
    console.log(this.videos);
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
      let val = parseFloat(ele.value, 10);
      if (Number.isFinite(val) && val >= 0.0) {
      } else {
        errors.push(`- '${ele.dataset.name}' should be a non-negative number`);
      }
    });

    let value = this.videos.value;
    let arr = value.trim().split(/\s/ig);

    for(let i = 0; i < arr.length; i++) {
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
      factor: parseFloat(this.factor.value, 10),
      solvableTime: parseInt(this.assignmentTime.value, 10),

      solvable: {
        activities: { total: parseInt(this.activities.value, 10), left: 3 },
        tutorials: { total: parseInt(this.tutorials.value, 10), left: 2 },
        practice: { total: 0, left: 0 },
        graded: { total: parseInt(this.assignments.value, 10), left: 1 },
      },

      videos : [],
    }

    if (parseInt(this.assignments.value, 10) > 1) {
      input.solvable.practice.total = parseInt(this.assignments.value, 10) - 1;
    }

    Object.keys(input.solvable).forEach((key) => {
      input.solvable[key].left = input.solvable[key].total;
    })

    let value = this.videos.value;
    let arr = value.trim().split(/\s/ig);

    for(let i = 0; i < arr.length; i++) {
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
