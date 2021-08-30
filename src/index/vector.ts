import { getMaxMin, tuz } from "../utils";

import MatrixImpl from "./matrix";

export default class VectorImpl implements Vector {
  #value: number[];
  constructor(...args: number[] | number[][]) {
    this.#value = args.flat(Infinity) as number[];
  }

  get value() {
    return this.#value;
  }
  private set value(value: number[]) {
    this.#value = value;
  }

  toString() {
    const [max, min] = getMaxMin(this.value);

    const maxStrLength = Math.max(("" + max).length, ("" + min).length);

    return this.value.reduce((pre, cur) => {
      const repeatTime = maxStrLength - ("" + cur).length;
      pre += `|${" ".repeat(repeatTime)}${cur}|\n`;
      return pre;
    }, "");
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
    return new VectorImpl();
  }
}
