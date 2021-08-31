/**
 * @description: 矩阵，把矩阵看作向量的基
 * @param {*}
 * @return {*}
 */
interface Matrix {
  // mn矩阵,所有的基
  value: Vector[];
  toString(): string;
  /**
   * 矩阵乘法M1*M2!==M2*M1
   * 矩阵乘法结合率： (AB)C === A(BC) 证明=>变换顺序是一样的，矩阵都是从右向左变换的，不管有没有括号
   * @description: 矩阵乘法,可以看作复合变基,
   * @param {*}
   * @return {*}
   * @example 先进行变换t1，再进行变换t2
   *
   *    t2          t1
   * |a   b|   |e   f|
   * |     |   |     |
   * |c   d|   |g   h|
   * @example 矩阵乘法，可以看作对基向量进行线性变换
   * |a   b|   |e   f|
   * |     | * |     | =
   * |c   d|   |g   h|
   *
   * |a   b|   |e|   |a   b|   |ei|    |ae+bg|
   * |     | * | | = |     | * |  | =  |     |
   * |c   d|   |g|   |c   d|   |gj|    |ce+dg|
   *
   * |a   b|   |f|   |a   b|   |fi|    |af+bh|
   * |     | * | | = |     | * |  | =  |     |
   * |c   d|   |h|   |c   d|   |hj|    |cf+dh|
   *
   * |ae+bg af+bh|
   * |           |
   * |ce+dg cf+dh|
   */
  multiplication(matrix: Matrix): Matrix;

  /**
   * @description: 返回该矩阵是否为方阵
   * @param {*}
   * @return {*}
   */
  isSquare(): boolean;

  /**
   * @description: 获取矩阵原始数组
   * @param {*}
   * @return {*}
   */
  getOriginArray(): number[][];

  /**
   * @description: 获得本矩阵的方阵形式
   * @param {*}
   * @return {*}
   */
  trans2Square(): Matrix;

  /**
   * @description: 矩阵的行列式，二维反映线性变换对单位面积的块的影响，三维则是体积，四维？
   * @description:考虑单位基向量在矩阵变换后状态的改变
   * @param {*}
   * @return {number}
   *
   * @example 1>|d|>0 缩小
   * @example |d|>1 放大
   * @example d<0 翻转
   * @example d=0 降维
   */
  determinant(matrix: Matrix): number;
  /**
   * @description: 秩
   *经过矩阵变换后的空间维数（列空间的维数）称为矩阵的秩
   *列空间最大时，满秩
   * @param {*}
   * @return {*}
   */
  rank(): number;
  /**
   *在变幻后落在原点的向量集合称为矩阵的零空间或者核
   * @description:零空间
   * @param {*}
   * @return {*}
   */
  nullSpace(): unknown;

  /**
   * 向量v（变量）经过矩阵（常量）变换后所构成的可能向量的集合称为列空间
   *
   * @description: 列空间
   * @param {*}
   * @return {*}
   */
  columnSpace(): unknown;
}

/**
 * 线性方程组可以转换为矩阵和向量的关系
 * 2x+5y+3z=-1
 * 4x+0y+8z=0
 * 1x+3y+0z=2
 *
 * |2 5 3| |x|   |-1|
 * |4 0 8| |y| = | 0|
 * |1 3 0| |z|   | 2|
 *
 * 向量[x,y,z]经过矩阵M变换得[-1,0,2],[-1,0,2]经过矩阵N变换的[x,y,z],N矩阵就称为M矩阵的逆;
 * 向量经过MN矩阵的转换，不变矩阵MN就等于恒常矩阵（单位矩阵）二维是坐标中就是单位坐标
 * |1 0|
 * |0 1|
 */

/**
   
   * 
   */
/**
 */
