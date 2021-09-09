type Center = [number, number];
type Observer = CoordAxis | Line;
/**
 * @description: canvas舞台,规定了canvas的创建,构造出一个居中的，笛卡尔的坐标系
 * @param {*}
 * @return {*}
 */
interface Stage {
  // 观察stage的scale变化，而重新渲染
  observers: Observer[];

  /**
   * @member 画布宽度取整数偶数
   */
  width: number;
  /**
   * @member 画布宽度取整数
   */
  height: number;
  /**
   * @member 画布容器，拦截滚轮事件
   */
  wrapper: HTMLDivElement | null;

  value: HTMLCanvasElement | null;
  ctx: CanvasRenderingContext2D | null;
  // 缩放尺度
  scale: number;
  /**
   * @member 原点与画布中新的偏移
   */
  originOffset: number[];
  /**
   * @description: 画布的中心点
   * @return {d2Point}
   */
  center(): Center;

  /**
   * @description: 设置坐标系缩放比例
   * @param {*}
   * @return {*}
   */
  setScale(scale: number): void;

  /**
   * @description: 添加观察者
   * @param {*}
   * @return {*}
   */
  addObserver(line: Line | CoordAxis);

  /**
   * @description: 通知观察者
   * @param {*}
   * @return {*}
   */
  notifyAll();
}
