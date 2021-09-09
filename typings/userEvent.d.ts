interface UserEvent {
  stage: Stage | null;
  /**
   * @description: 鼠标的滚轮事件
   * @param {*}
   * @return {*}
   */
  mouseWheel(e: WheelEvent): void;

  /**
   * @description: 拖拽事件
   * @param {*}
   * @return {*}
   */
  drag(e: MouseEvent): void;

  /**
   * @description: 点击事件
   * @param {*}
   * @return {*}
   */
  click(e: MouseEvent): void;
}
