/*
 * @Author: XiaoWinter
 * @Date: 2021-09-11 09:54:56
 * @LastEditTime: 2021-09-11 12:21:00
 * @LastEditors: your name
 * @Description:
 * @FilePath: \engine\src\drawenv\userEvent.ts
 */
import VectorImpl from "../calcu/vector.js";

export default class UserEventImpl implements UserEvent {
  stage: Stage | null = null;
  constructor(stage: Stage) {
    // console.log(stage)

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
    console.log("notifyAll");
    if (!this.stage) return;
    this.stage.originOffset = this.stage.originOffset.addition(
      new VectorImpl(1, 1)
    );
    this.stage.notifyAll();
  };
}
