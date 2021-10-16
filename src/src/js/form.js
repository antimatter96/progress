export class FormHandler {
  constructor() {
    this.titleInput = document.getElementById("input-title");

    this.activities = document.getElementById("input-activities");
    this.tutorials = document.getElementById("input-tutorials");
    this.assignments = document.getElementById("input-assignments");

    this.factor = document.getElementById("input-factor");
    this.assignmentTime = document.getElementById("input-assignment-time");

    this.videoLength = document.getElementById("input-videos");

    console.log(this.titleInput);

    console.log(
      this.titleInput,
      this.activities,
      this.tutorials,
      this.assignments,
      this.videoLength
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

  submit() {
    let input = {
      
    }

  }
}
