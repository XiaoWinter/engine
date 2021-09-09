import { evenfy } from "../utils/index.js";
import LineImpl from "./line.js";
type Options = {
  size?: [number, number];
  parent?: string | Element;
  id?: string;
  scale?: number;
};

export default class StageImpl implements Stage {
  scale = 0;
  width = 0;
  height = 0;
  value: HTMLCanvasElement | null;
  ctx: CanvasRenderingContext2D | null;
  constructor(options?: Options) {
    this.value = null;
    this.ctx = null;
    options = {
      parent: document.body,
      id: "myCanvas",
      ...(options || {}),
    };
    this.scale = options.scale || 10;
    this.build(options);
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

      this.value = canvasElem;
      this.ctx = canvasElem.getContext("2d");

      if (!this.ctx) return;
      // 调整坐标系，从原点左上角移到中间
      this.ctx.translate(...this.center());
      // 翻转坐标系
      this.ctx.transform(1, 0, 0, -1, 0, 0);

      // console.log("color", this.ctx?.strokeStyle);
    }
  }
  center(): Center {
    return [this.width / 2, this.height / 2];
  }

  setScale(scale: number) {
    this.scale = scale;
  }
}
