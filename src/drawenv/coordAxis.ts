/**
 * @author: 黄聪<cong.huang02@hand-china.com>
 * @since: 2021-09-09 14:39:41
 * @lastTime: 2021-09-09 14:43:16
 * @description: 坐标线实现
 * @copyright: Copyright (c) 2021, Hand
 */
import LineImpl from "./line.js";

export default class coordAxisImpl extends LineImpl implements CoordAxis {
  constructor(stage: Stage, scale?: number) {
    //   确定两线
    const fx = (x: number) => 0;
    const fy = (y: number) => 0;
    super(fx, fy, stage, scale);
  }
  generateRuling() {
    //   确定刻度
    // 获取舞台
    const stage = this.stage;
    // 获取上下文
    const { ctx } = stage;
    if (!ctx) return this;
    // 获取缩放比例
    const scale = this.scale;
    // 获取坐标范围
    const [width, height] = stage.center();
    const [offsetX, offsetY] = stage.originOffset;
    const [minX, maxX] = [-width + offsetX, width + offsetX];
    const [minY, maxY] = [-height - offsetY, height - offsetY];
    // x [-width,width]
    // 绘制x

    for (let i = 0; i < Math.max(Math.abs(minX), Math.abs(maxX)); i += scale) {
      if (i === 0) continue;
      if (i < maxX) {
        ctx.fillRect(i - 1, 0, 2, 4);
        ctx.fillText(i / scale + "", i, -(3 * scale) / 10);
      }
      if (-i > minX) {
        ctx.fillRect(-i + 1, 0, 2, 4);
        ctx.fillText(-i / scale + "", -i, -(3 * scale) / 10);
      }
    }

    // y [-height,height]
    // 绘制y
    for (let i = 0; i < Math.max(Math.abs(minY), Math.abs(maxY)); i += scale) {
      if (i === 0) continue;
      if (i < maxY) {
        ctx.fillRect(0, i - 1, 4, 2);
        ctx.fillText(i / scale + "", -(3 * scale) / 10, i);
      }
      if (-i > minY) {
        ctx.fillRect(0, -i + 1, 4, 2);
        ctx.fillText(-i / scale + "", -(3 * scale) / 10, -i);
      }
    }
    return this;
  }
  generateGrid() {
    // 获取舞台
    const stage = this.stage;
    const color = "#ddd";
    const supColor = "#eee";
    // 获取上下文
    const { ctx } = stage;
    if (!ctx) return this;
    // 获取缩放比例
    const scale = this.scale;
    // 获取坐标范围
    const [width, height] = stage.center();
    const [offsetX, offsetY] = stage.originOffset;
    const [minX, maxX] = [-width + offsetX, width + offsetX];
    const [minY, maxY] = [-height - offsetY, height - offsetY];
    // x [-width,width]
    // 绘制x

    for (let i = 0; i < Math.max(Math.abs(minX), Math.abs(maxX)); i += scale) {
      if (i === 0) continue;
      if (i < maxX) {
        new LineImpl(null, (y) => i, this.stage)
          .setCtx({ strokeStyle: color })
          .setScale(1)
          .draw();
        for (let j = 1; j < 5; j++) {
          new LineImpl(null, (y) => i - (scale * j) / 5, this.stage)
            .setCtx({ strokeStyle: supColor })
            .setScale(1)
            .draw();
        }
      }
      if (-i > minX) {
        new LineImpl(null, (y) => -i, this.stage)
          .setCtx({ strokeStyle: color })
          .setScale(1)
          .draw();

        for (let j = 1; j < 5; j++) {
          new LineImpl(null, (y) => -i + (scale * j) / 5, this.stage)
            .setCtx({ strokeStyle: supColor })
            .setScale(1)
            .draw();
        }
      }
    }

    // y [-height,height]
    // 绘制y
    for (let i = 0; i < Math.max(Math.abs(minY), Math.abs(maxY)); i += scale) {
      if (i === 0) continue;
      if (i < maxY) {
        new LineImpl((x) => i, null, this.stage)
          .setCtx({ strokeStyle: color })
          .setScale(1)
          .draw();
        for (let j = 1; j < 5; j++) {
          new LineImpl((x) => i - (scale * j) / 5, null, this.stage)
            .setCtx({ strokeStyle: supColor })
            .setScale(1)
            .draw();
        }
      }

      if (-i > minY) {
        new LineImpl((x) => -i, null, this.stage)
          .setCtx({ strokeStyle: color })
          .setScale(1)
          .draw();

        for (let j = 1; j < 5; j++) {
          new LineImpl((x) => -i + (scale * j) / 5, null, this.stage)
            .setCtx({ strokeStyle: supColor })
            .setScale(1)
            .draw();
        }
      }
    }
    return this;
  }

  generateAxis() {
    this.draw();
    return this;
  }
  build() {
    this.setCtx({ strokeStyle: "blue" });
    this.generateAxis().generateGrid().generateRuling();
  }
}
