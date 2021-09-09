import { evenfy } from "../utils/index.js";
import LineImpl from "./line.js";
import CoordAxisImpl from "./coordAxis.js";
type Options = {
  size?: [number, number];
  parent?: string | Element;
  id?: string;
  scale?: number;
};

export default class StageImpl implements Stage {
  scale = 100;
  width = 0;
  observers: Observer[] = [];
  height = 0;
  _originOffset = [0, 0];
  value: HTMLCanvasElement | null;
  wrapper: HTMLDivElement | null;
  ctx: CanvasRenderingContext2D | null;
  constructor(options?: Options) {
    this.wrapper = null;
    this.value = null;
    this.ctx = null;
    options = {
      parent: document.body,
      id: "myCanvas",
      ...(options || {}),
    };
    if (options.scale) this.scale = options.scale;
    // this.scale = options.scale || 100;
    this.build(options);
  }

  get originOffset() {
    return this._originOffset;
  }
  set originOffset(value: number[]) {
    this._originOffset = value;
    const [offsetX, offsetY] = value;
    const [oldOffsetX, oldOffsetY] = this._originOffset;

    this.ctx?.translate(offsetX, offsetY);
  }
  build(options: Options) {
    const { size, parent, id } = options;

    /**
     * @description: 确定尺寸
     */
    if (size) {
      const [width, height] = size;
      this.width = evenfy(width);
      this.height = evenfy(height);
    } else {
      // 构造屏幕画布
      this.width = evenfy(window.screen.availWidth - 100);
      this.height = evenfy(window.screen.availHeight - 100);
    }

    // 父元素;
    let parentEle;

    if (typeof parent === "string") {
      parentEle = document.querySelector(parent);
    } else {
      parentEle = parent;
    }
    // 嵌入画布
    if (parentEle && id) {
      let divWrapper = document.createElement("div");
      let canvasElem = document.createElement("canvas");

      parentEle.appendChild(divWrapper);
      divWrapper.appendChild(canvasElem);
      divWrapper.id = id;
      canvasElem.width = this.width;
      canvasElem.height = this.height;

      this.wrapper = divWrapper;
      this.value = canvasElem;

      this.ctx = canvasElem.getContext("2d");

      if (!this.ctx) return;
      // 调整坐标系，从原点左上角移到中间
      this.ctx.translate(...this.center());
      // 翻转坐标系
      this.ctx.transform(1, 0, 0, -1, 0, 0);
    }
  }
  center(): Center {
    return [this.width / 2, this.height / 2];
  }

  setScale(scale: number) {
    this.scale = scale;
  }
  addObserver(line: Line | CoordAxis) {
    if (this.observers.find((l) => l === line)) return this;
    this.observers.push(line);
  }

  notifyAll() {
    // const [width, height] = this.center();
    // const [offsetX, offsetY] = this.originOffset;
    // this.ctx?.clearRect(-width, -height, this.width, this.height);
    // this.ctx?.clearRect(
    //   -(width - offsetX) - 20,
    //   -(height + offsetY) - 20,
    //   this.width + 40,
    //   this.height + 40,
    // );

    this.observers.forEach((l) => {
      if (l instanceof CoordAxisImpl) {
        l.build();
      } else {
        // l.draw();
      }
    });
  }
}
