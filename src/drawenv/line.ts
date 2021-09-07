export default class LineImpl implements Line {
  fx;
  fy;
  stage;
  scale;
  constructor(fx: Fx | null, fy: Fx | null, stage: Stage, scale?: number) {
    this.fx = fx;
    this.fy = fy;
    this.stage = stage;
    this.scale = stage.scale || scale || 10;
  }

  setScale(scale: number) {
    this.scale = scale;
  }

  draw() {
    this.drawX();
    this.drawY();
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
      if (i === min) ctx.moveTo(i, this.fx(i / scale));
      ctx.lineTo(i + 1, this.fx((i + 1) / scale));
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
      if (i === min) ctx.moveTo(this.fy(i / scale), i);
      ctx.lineTo(this.fy((i + 1) / scale), i + 1);
    }
    ctx.stroke();
  }
}
