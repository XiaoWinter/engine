import { tuz, getMaxWidth } from "./utils/index.js";

import MatrixImpl from "./matrix.js";

export default class VectorImpl implements Vector {
  #value: number[];
  /**
   * @description:  向量构造函数
   * @param {array} args
   * @return {*}
   * @example
   * new VectorImpl([1,2,3])
   * |1|
   * |2|
   * |3|
   * @example
   * new VectorImpl(1,2,3)
   * |1|
   * |2|
   * |3|
   * @example
   * new VectorImpl()
   * |0|
   */
  constructor(...args: number[] | number[][]) {
    if (args.length === 0) {
      this.#value = [0];
    } else if (args[0] instanceof Array) {
      this.#value = args[0] as number[];
    } else {
      this.#value = args as number[];
    }
  }

  get value() {
    return this.#value;
  }

  toString() {
    const maxWidth = getMaxWidth(this.value);

    return this.value.reduce((pre, cur) => {
      const repeatTime = maxWidth - ("" + cur).length;
      pre += `|${" ".repeat(repeatTime)}${cur}|\n`;
      return pre;
    }, "");
  }

  length() {
    // 两点距离
    return Math.sqrt(
      this.value.reduce((pre, cur) => {
        return (pre += cur ** 2);
      }, 0),
    );
  }

  addition(vector: Vector) {
    const length = Math.max(this.value.length, vector.value.length);
    let result: number[] = [];
    for (let i = 0; i < length; i++) {
      result[i] = tuz(this.value[i]) + tuz(vector.value[i]);
    }
    return new VectorImpl(result);
  }

  subtraction(vector: Vector) {
    const length = Math.max(this.value.length, vector.value.length);
    let result: number[] = [];

    for (let i = 0; i < length; i++) {
      result[i] = tuz(this.value[i]) - tuz(vector.value[i]);
    }
    return new VectorImpl(result);
  }

  multiplication(scalar: number) {
    let result: number[] = this.value.map((i) => scalar * i);
    return new VectorImpl(result);
  }

  dotted(vector: Vector) {
    const length = Math.min(this.value.length, vector.value.length);
    let result = 0;
    for (let i = 0; i < length; i++) {
      result += this.value[i] * vector.value[i];
    }
    return result;
  }

  toMatrix() {
    return new MatrixImpl();
  }

  /**
   * @description:
   * @param {Vector} vector
   * @return {*}
   * @example 计算三维空间的叉积
   * cx = aybz − azby
   * cy = azbx − axbz
   * cz = axby − aybx
   *
   */
  crossProduct(vector: Vector) {
    let result: number[] = [];
    result[0] =
      this.value[1] * vector.value[2] - this.value[2] * vector.value[1];
    result[1] =
      this.value[2] * vector.value[0] - this.value[0] * vector.value[2];
    result[2] =
      this.value[0] * vector.value[1] - this.value[1] * vector.value[0];
    return new VectorImpl(result);
  }

  lineTrans(matrix: Matrix) {
    const changes = matrix.value.map((baseVector, index) => {
      return baseVector.value.map((coord) => coord * tuz(this.value[index]));
    });

    let result = [];

    for (let i = 0; i < this.value.length; i++) {
      result[i] = changes.reduce((pre, cur) => (pre += tuz(cur[i])), 0);
    }

    return new VectorImpl(result);
  }
}
