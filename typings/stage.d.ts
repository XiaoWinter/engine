type Center = [number, number];
/**
 * @description: canvas舞台,规定了canvas的创建,构造出一个居中的，笛卡尔的坐标系
 * @param {*}
 * @return {*}
 */
interface Stage {
  /**
   * @member 画布宽度取整数偶数
   */
  width: number;
  /**
   * @member 画布宽度取整数
   */
  height: number;

  value: HTMLCanvasElement | null;
  ctx: CanvasRenderingContext2D | null;
  // 缩放尺度
  scale: number;
  /**
   * @description: 中心点
   * @return {d2Point}
   */
  center(): Center;
}
