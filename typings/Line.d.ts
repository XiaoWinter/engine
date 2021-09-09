type Fx = (x: number) => number;

type T = keyof CanvasRenderingContext2D;

/**
 * @description: 绘图上下文的属性
 * @param {*}
 * @return {*}
 */
type CtxOptions = {
  [K in T]?: CanvasRenderingContext2D[K];
};

/**
 * @description: 将要绘制为线的函数，通过描点绘制线
 * @param {*}
 * @return {*}
 */
interface Line {
  /**
   * @description: x到y的映射
   * @param {*}
   * @return {*}
   */
  fx: Fx | null;
  /**
   * @description: y到x的映射
   * @param {*}
   * @return {*}
   */
  fy: Fx | null;
  stage: Stage | null;

  /**
   * @description: 绘制
   * @param {*}
   * @return {*}
   */
  draw(): void;
  /**
   * @description: 设置接下来绘制的缩放比例
   * @param {*}
   * @return {*}
   */
  setScale(scale: number);
  /**
   * @description: 设置绘图上下文
   * @param {*}
   * @return {*}
   */
  setCtx(options: CtxOptions);
}
