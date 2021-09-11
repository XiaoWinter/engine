import { evenfy } from "../utils/index.js";
import CoordAxisImpl from "./coordAxis.js";
import VectorImpl from "../calcu/vector.js";
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
  _originOffset: Vector;
  // originOffset = [100, 100]
  // 原点偏移位置，按照标准坐标系
  value: HTMLCanvasElement | null;
  wrapper: HTMLDivElement | null;
  ctx: CanvasRenderingContext2D | null;
  constructor(options?: Options) {
    this.wrapper = null;
    this.value = null;
    this.ctx = null;
    this._originOffset = new VectorImpl([0, 0]);
    options = {
      parent: document.body,
      id: "myCanvas",
      ...(options || {})
    };
    if (options.scale) this.scale = options.scale;
    // this.scale = options.scale || 100;
    this.build(options);
  }

  get originOffset() {
    return this._originOffset;
  }
  set originOffset(vector: Vector) {
    const [x, y] = vector.subtraction(this._originOffset).value;
    this.ctx?.translate(x * this.scale, y * this.scale);
    this._originOffset = vector;
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
    // console.log("width", this.width)
    // console.log("height", this.height)

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
  clear() {
    // 获得初始画布尺寸
    const [width, height] = this.center();
    // 构造初始左下指向向量 原点->左下
    const Lt = new VectorImpl(-width, -height);
    // 获取坐标系偏移，去除缩放
    const offset = this.originOffset.multiplication(this.scale);
    // 获得当前左下指向向量,坐标
    const [x, y] = Lt.subtraction(offset).value;
    // console.log(x, ":", y)
    // console.log(offset.toString())

    // 清除
    this.ctx?.clearRect(x, y, 2 * width, 2 * height);
    // this.ctx?.fillRect(x, y, 2 * width, 2 * height)
  }

  notifyAll() {
    this.clear();
    this.observers.forEach((l) => {
      if (l instanceof CoordAxisImpl) {
        l.build();
      } else {
        l.draw();
      }
    });
  }
}
