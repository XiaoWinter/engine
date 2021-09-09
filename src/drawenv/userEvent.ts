export default class UserEventImpl implements UserEvent {
  stage: Stage | null = null;
  constructor(stage: Stage) {
    // stage.addObserver(this)
    console.log(stage);

    this.stage = stage;
    const { wrapper } = this.stage;
    wrapper?.addEventListener("click", this.click);
  }

  mouseWheel(e: WheelEvent) {
    console.log(e);
    e.preventDefault();
    e.stopPropagation();
  }
  drag() {}
  click = (e: MouseEvent) => {
    console.log(this.stage);

    console.log("notifyAll");
    if (!this.stage) return;
    this.stage.originOffset = this.stage?.originOffset.map((i) => (i += 10));
    this.stage.notifyAll();
  };
}
