import VectorImpl from "./vector";

import { getMaxMin, tuz } from "../utils";

export default class MatrixImpl implements Matrix {
  #value: Vector[];
  constructor(...args: Vector[] | number[][]) {
    if (args[0] instanceof Array) {
      this.#value = args.map((nums) => new VectorImpl(nums as number[]));
    } else {
      this.#value = args as Vector[];
    }
  }

  set value(value) {
    this.#value = value;
  }

  get value() {
    return this.#value;
  }

  toString() {
    let maxStrLength = 0;
    let maxStrWidth = this.value.length;
    // 打印基向量
    this.value.forEach((v) => {
      const [max, min] = getMaxMin(v.value);
      maxStrLength = Math.max(
        ("" + max).length,
        ("" + min).length,
        maxStrLength,
      );
    });

    let rowStrs = [];
    for (let i = 0; i < maxStrWidth; i++) {
      rowStrs[i] = `|${this.value.map((v) => tuz(v.value[i])).join(" ")}|\n`;
    }
    return rowStrs.join("");
  }

  multiplication = (matrix: Matrix) => {
    return new MatrixImpl();
  };

  determinant = () => {
    return 0;
  };

  rank = () => {
    return 0;
  };

  nullSpace = () => {};

  columnSpace = () => {};
}
