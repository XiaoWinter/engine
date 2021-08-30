import VectorImpl from "./vector";

import { tuz, getMaxWidth } from "../utils";

export default class MatrixImpl implements Matrix {
  #value: Vector[];
  /**
   * @description: 矩阵构造函数
   * @param {array} args
   * @return {*}
   * @example
   * new MatrixImpl(Vector1,Vector2,Vector3)
   * |v1 v2 v3|
   * @example
   * new MatrixImpl([1,2,3],[1,2,3],[1,2,3])
   * |1 1 1|
   * |2 2 2|
   * |3 3 3|
   * @example
   * new MatrixImpl()
   * |0|
   */
  constructor(...args: Vector[] | number[][]) {
    if (args.length === 0) {
      this.#value = [new VectorImpl()];
    } else if (args[0] instanceof Array) {
      this.#value = args.map((nums) => new VectorImpl(nums as number[]));
    } else {
      this.#value = args as Vector[];
    }
  }

  get value() {
    return this.#value;
  }

  toString() {
    let maxVectorLength = Math.max(...this.value.map((v) => v.value.length));

    const vectorStrs = this.value.map((v) => {
      const maxWidth = getMaxWidth(v.value);
      let vectorStr = [];
      for (let i = 0; i < maxVectorLength; i++) {
        const repeatTime = maxWidth - (tuz(v.value[i]) + "").length;
        vectorStr[i] = `${" ".repeat(repeatTime)}${tuz(v.value[i])}`;
      }
      return vectorStr;
    });

    let rowStrs = [];

    for (let i = 0; i < maxVectorLength; i++) {
      rowStrs[i] = `|${vectorStrs.map((vstr) => vstr[i]).join(" ")}|\n`;
    }

    return rowStrs.join("");
  }

  multiplication(matrix: Matrix) {
    const maxVectorLength = Math.max(matrix.value.length, this.value.length);
    let baseVectors: Vector[] = [];
    for (let i = 0; i < maxVectorLength; i++) {
      const vector = matrix.value[i] || new VectorImpl();
      baseVectors[i] = vector.lineTrans(this);
    }
    return new MatrixImpl(...baseVectors);
  }

  isSquare() {
    const vectorLength = this.value.length;
    return this.value.every((v) => v.value.length === vectorLength);
  }

  trans2Square() {
    if (this.isSquare())
      return new MatrixImpl(...this.value.map((v) => v.value));
    const maxSide = Math.max(
      this.value.length,
      ...this.value.map((v) => v.value.length),
    );
    let nums: number[][] = [];
    for (let i = 0; i < maxSide; i++) {
      const v = this.value[i];
      if (!v) {
        nums[i] = new Array(maxSide).fill(0);
      } else {
        nums[i] = v.value.concat(new Array(maxSide - v.value.length).fill(0));
      }
    }
    return new MatrixImpl(...nums);
  }

  getOriginArray() {
    return this.value.map((v) => v.value);
  }
  determinant() {
    // 对方阵求解
    // 1.n阶方阵通过n-1阶求解
    // 2.n=2时，对角线相乘

    // 取得方阵
    const matrix = this.isSquare() ? this : this.trans2Square();
    const matrixArr = matrix.getOriginArray();
    // 阶数

    const det = (arrs: number[][]): number => {
      const n = arrs.length;
      if (n === 2) {
        return arrs[0][0] * arrs[1][1] - arrs[1][0] * arrs[0][1];
      }
      return arrs
        .map((arr, index) => {
          const childArrs = arrs
            .filter((arr, i) => i !== index)
            .map((arr) => arr.slice(1));
          return (index % 2 === 0 ? 1 : -1) * arr[0] * det(childArrs);
        })
        .reduce((pre, cur) => (pre += cur));
    };

    return det(matrixArr);
  }

  rank() {
    return 0;
  }

  nullSpace() {}

  columnSpace() {}
}
