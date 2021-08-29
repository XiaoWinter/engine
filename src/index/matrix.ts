import VectorImpl from "./vector";

export default class MatrixImpl implements Matrix {
  value: Vector[];
  constructor() {
    this.value = [new VectorImpl()];
  }

  toString = () => {
    return "";
  };

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
