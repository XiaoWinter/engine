import MatrixImpl from "../src/calcu/matrix";
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

  @test
  multiplication() {
    const m1 = new MatrixImpl([1, 4], [2, 5], [3, 6]);
    const m2 = new MatrixImpl([7, 9, 11], [8, 10, 12]);

    const m3 = m1.multiplication(m2);

    console.log(m1.toString());
    console.log(m2.toString());
    console.log(m3.toString());
  }

  @test
  isSquare() {
    const m1 = new MatrixImpl([1, 2], [3, 4]);
    console.log(m1.toString(), "isSquare ", m1.isSquare());
    const m2 = new MatrixImpl([1, 2], [3, 4, 5], [1, 2, 3]);
    console.log(m2.toString(), "isSquare ", m2.isSquare());
  }

  @test
  getOriginArray() {
    const m1 = new MatrixImpl([1, 2, 3], [2, 3]);
    console.log(m1.toString());
    console.log(m1.getOriginArray());
  }

  @test
  trans2Square() {
    const m1 = new MatrixImpl([1, 2, 3], [2, 3]);
    console.log(m1.toString());
    console.log(m1.trans2Square().toString());
  }

  @test
  determinant() {
    const m1 = new MatrixImpl([2, 0, 1], [0, 2]);
    console.log(m1.toString());
    console.log(m1.determinant());
  }
}

new Test();

export {};
