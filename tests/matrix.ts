import MatrixImpl from "../src/index/matrix";
import { test } from "../decorator/index";

class Test {
  @test
  buildMatrix() {
    new MatrixImpl([1], [0, 1], [0, 0, 1]);
  }

  @test
  toString() {
    console.log(new MatrixImpl([1, 0], [0, 1], [0, 0, 1]).toString());
  }
}

new Test();

export {};
