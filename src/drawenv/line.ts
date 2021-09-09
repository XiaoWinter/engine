export default class LineImpl implements Line {
  fx;
  fy;
  stage;
  scale;
  constructor(fx: Fx | null, fy: Fx | null, stage: Stage, scale?: number) {
    this.fx = fx;
    this.fy = fy;
    this.stage = stage;
    this.scale = scale || stage.scale;
  }

  setScale(scale: number) {
    this.scale = scale;
    return this;
  }

  setCtx(options: CtxOptions) {
    const { ctx } = this.stage;
    if (!ctx) return this;
    Object.assign(ctx, options);

    return this;
  }

  draw() {
    this.drawX();
    this.drawY();
    this.setCtx({ strokeStyle: "#000" });
  }

  drawX() {
    const ctx = this.stage.ctx;

    const scale = this.scale;

    const [width, height] = this.stage.center();
    const min = -width;
    const max = width;
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
    const ctx = this.stage.ctx;
    const scale = this.scale;
    const [width, height] = this.stage.center();
    const min = -height;
    const max = height;
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
