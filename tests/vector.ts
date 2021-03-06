import VectorImpl from "../src/calcu/vector";
import MatrixImpl from "../src/calcu/matrix";
import { test } from "../decorator/index";

class Test {
  @test
  BuildVector() {
    new VectorImpl(1, 2, 3);
    new VectorImpl();
  }

  @test
  toString() {
    const v1 = new VectorImpl(1, 2, 3);
    const v2 = new VectorImpl([1, 2, 3]);
    // const v3 = new VectorImpl([1, 2, 3], [1]);
    console.log(v1.toString());
    console.log(v2.toString());
    // console.log(v3.toString());
  }

  @test
  addition() {
    const v1 = new VectorImpl(1, 2, 3);
    const v2 = new VectorImpl(4, 4, 3);
    console.log(v1.toString());
    console.log(v2.toString());
    console.log(v1.addition(v2).toString());
  }

  @test
  length() {
    const v1 = new VectorImpl(3, 4);
    console.log(v1.toString());
    console.log(v1.length());

    const v2 = new VectorImpl(1, 1, 1);
    console.log(v2.toString());
    console.log(v2.length());
  }

  @test
  subtraction() {
    const v1 = new VectorImpl(5, 4, 3);
    const v2 = new VectorImpl(1, 1, 1);
    console.log(v1.toString());
    console.log(v2.toString());
    console.log(v1.subtraction(v2).toString());
  }

  @test
  multiplication() {
    const v1 = new VectorImpl(1, 3, 2);
    console.log(v1.toString());
    console.log(v1.multiplication(2).toString());
  }

  @test
  dottedLine() {
    const v1 = new VectorImpl(0, 0, 3);
    const v2 = new VectorImpl(0, 1, 0);
    console.log(v1.toString());
    console.log(v2.toString());

    console.log(v1.dotted(v2));
  }
  @test
  dottedSameLine() {
    const v1 = new VectorImpl(0, 0, 2);
    const v2 = new VectorImpl(0, 0, 2);

    console.log(v1.toString());
    console.log(v2.toString());
    console.log(v1.dotted(v2));
  }

  /**
   * @description: 单位叉积测试 ,004
   * @param {*}
   * @return {*}
   */
  @test
  crossProductUnit() {
    const v1 = new VectorImpl(2, 0, 0);
    const v2 = new VectorImpl(0, 2, 0);
    console.log(v1.toString());
    console.log(v2.toString());
    console.log(v1.crossProduct(v2).toString());
  }

  @test
  lineTrans() {
    // 旋转90deg
    const m = new MatrixImpl([0, -1], [1, 0]);
    const v = new VectorImpl([2, 2]);
    console.log(m.toString());
    console.log(v.toString());
    // [2,-2]
    console.log(v.lineTrans(m).toString());
  }
}

new Test();

export {};
