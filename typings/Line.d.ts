type Fx = (x: number) => number;

type T = keyof CanvasRenderingContext2D;

type CtxOptions = {
  [K in T]?: CanvasRenderingContext2D[K];
};

/**
 * @description: 将要绘制为线的函数，通过描点绘制线
 * @param {*}
 * @return {*}
 */
interface Line {
  fx: Fx | null;
  fy: Fx | null;
  stage: Stage | null;
  /**
   * @description: 缩放
   * @param {*}
   * @return {*}
   */
  scale: number | null;
  draw(): void;
  setScale(scale: number);
  setCtx(options: CtxOptions);
}
