class AlertHandler {

  error : HTMLElement;
  ok : HTMLElement;
  info : HTMLElement;
  warning : HTMLElement;

  all : Array<HTMLElement>

  constructor() {
    this.ok = document.getElementById("alert-ok");
    this.info = document.getElementById("alert-info");
    this.warning = document.getElementById("alert-warning");
    this.error = document.getElementById("alert-error");

    console.log(this.ok, this.info, this.warning, this.error);

    this.all = [this.ok, this.info, this.warning, this.error];
  }

  hideAll() :void {
    this.all.forEach((ele) => {
      ele.style.display = "none";
    });
  }

  show(type: string, message: string, timeout: number) :void {
    let target = this[type];
    console.log(target);

    target.style.display = "flex";
    target.getElementsByClassName("actual-text")[0].innerText = message;

    setTimeout(() => {
      this.hideAll();
    }, timeout);
  }
}

export { AlertHandler };
