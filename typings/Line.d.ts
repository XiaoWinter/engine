/*
 * @Author: XiaoWinter
 * @Date: 2021-09-08 19:41:27
 * @LastEditTime: 2021-09-11 12:21:33
 * @LastEditors: your name
 * @Description:线 的接口定义
 * @FilePath: \engine\typings\Line.d.ts
 */
type Fx = (x: number) => number;

type ctxOptionsKeys = keyof CanvasRenderingContext2D;

/**
 * @description: 绘图上下文的属性
 * @param {*}
 * @return {*}
 */
type CtxOptions = {
  [K in ctxOptionsKeys]?: CanvasRenderingContext2D[K];
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
  ctxOptions: CtxOptions | Object;

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
  drawX(): void;
  drawY(): void;
  setScale(scale: number);
  /**
   * @description: 设置绘图上下文
   * @param {*}
   * @return {*}
   */
  setCtx(options: CtxOptions);
}
