/*
 * @Author: XiaoWinter
 * @Date: 2021-09-08 19:41:27
 * @LastEditTime: 2021-09-12 01:08:14
 * @LastEditors: your name
 * @Description: 线对象实现
 * @FilePath: \engine\src\drawenv\line.ts
 */

export default class LineImpl implements Line {
  fx;
  fy;
  stage;
  ctxOptions: CtxOptions = {};
  constructor(fx: Fx | null, fy: Fx | null, stage: Stage) {
    this.fx = fx;
    this.fy = fy;
    this.stage = stage;
    this.stage.addObserver(this);
  }

  setScale(scale: number) {
    this.stage.scale = scale;
    return this;
  }

  setCtx(options: CtxOptions) {
    this.ctxOptions = Object.assign(this.ctxOptions, options);
    return this;
  }

  /**
   * @description: 绘制图片方法使用线自身的画笔配置绘制，绘制完成之后还原画笔
   * @param {*}
   * @return {*}
   */
  draw() {
    const { ctx } = this.stage;
    if (!ctx) return;
    // console.log("line=================================");

    let bucket: any = {};

    for (const key of Object.keys(this.ctxOptions)) {
      bucket[key] = ctx[key as ctxOptionsKeys];
    }

    // console.log("bucket", bucket);
    Object.assign(ctx, this.ctxOptions);

    // console.log("strokeStyle1", ctx.strokeStyle);

    this.drawX();
    this.drawY();
    Object.assign(ctx, bucket);
    // console.log("strokeStyle2", ctx.strokeStyle);
    // console.log("line++++++++++++++++++++++++++++++++++++");
  }

  drawX() {
    const { ctx, scale } = this.stage;
    const [width, height] = this.stage.center();
    const [offsetX, offsetY] = this.stage.originOffset.value;
    const min = -width + offsetX;
    const max = width + offsetX;
    if (!ctx || !this.fx) return;

    ctx.beginPath();
    for (let i = min; i < max; i++) {
      if (i === min) ctx.moveTo(i * scale, this.fx(i / scale));
      const [x, y] = [i + 1, scale * this.fx((i + 1) / scale)];
      ctx.lineTo(x, y);
    }

    ctx.stroke();
  }

  drawY() {
    const { ctx, scale } = this.stage;
    const [width, height] = this.stage.center();
    const [offsetX, offsetY] = this.stage.originOffset.value;
    const min = -height - offsetY;
    const max = height - offsetY;
    if (!ctx || !this.fy) return;

    ctx.beginPath();
    for (let i = min; i < max; i++) {
      if (i === min) ctx.moveTo(this.fy(i / scale), i * scale);
      const [x, y] = [this.fy((i + 1) / scale) * scale, i + 1];
      ctx.lineTo(x, y);
    }

    ctx.stroke();
  }
}
