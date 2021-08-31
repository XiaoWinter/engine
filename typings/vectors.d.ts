/**
 * @description: 向量
 * @param {*}
 * @return {*}
 * 基本运算：加法，减法，乘法
 */
interface Vector {
  // 数组代表向量
  value: number[];
  /**
   * @description: 打印
   * @example
   * |x|
   * |y|
   */
  toString(): string;
  /**
   * @description: 加法：加另一个向量
   * @param {*}
   * @return {*}
   */
  addition(vector: Vector): Vector;
  /**
   * @description: 减法：减去另一个向量
   * @param {*}
   * @return {*}
   */
  subtraction(vector: Vector): Vector;

  /**
   * @description: 向量乘法，缩放
   * @param {*}
   * @return {*}
   */
  multiplication(scale: number): Vector;

  /**
   * @description: 点积；可以看作一种特殊（降维 ）的线性变换，这个线性变换和一个向量有关
   * @param {*}
   * @return {*}
   * @eexample 一个向量到另一向量的投影，乘以另一向量
   * |a|        |c|
   * | | dotted | | = ac+bd
   * |b|        |d|
   * 可看做
   * | c   d|    |a|   |ac+bd |
   * |      | *  | | = |      |
   * | 0   0|    |b|   | 0  0 |
   *
   *
   */
  dotted(vector: Vector): number;

  /**
   * @description: 计算向量的模长
   * @param {*}
   * @return {*}
   */
  length(): number;

  /**
   * @description: 将此向量转化成等价矩阵,转置
   * @param {*}
   * @return {*}
   */
  toMatrix(): Matrix;

  /**
   * @description: 两个向量的叉积,
   * @param {*}
   * @return {*}
   * @example
   * 叉积是一个向量P,两个向量为V，W，
   * 叉积代表的意义是向量X与向量P的点积，即X到P的投影（平行六面体的高）乘以P等于，X，V，W构成的六面体
   * 的体积，根据体积公式V=Sh,P向量的值就等于VW的面积，方向垂直于VW平面
   */
  crossProduct(vector: Vector): Vector;

  /**
   * @description: 线性变换（变基）：变换为新的基
   * 线性变换 旋转(rotate)，缩放，翻转，剪切（shear)
   * 矩阵代表的是向量的基
   * @param {*}
   * @return {*}
   * @example
   *   |a     b|    |x|     |a|            |b|       |ax+by|
   *   |       | *  | |  =  | | |x|  comb  | | |y| = |     |
   *   |c     d|    |y|     |c|            |d|       |cx+dy|
   * @example
   *  |0 -1| 旋转90
   *  |1  0|
   * @example
   *  |1  1| 剪切90
   *  |0  1|
   */
  lineTrans(matrix: Matrix): Vector;
}
