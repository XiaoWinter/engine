interface CoordAxis extends Line {
  /**
   * @description: 生成刻度
   * @param {*}
   * @return {*}
   */
  generateRuling(): void;

  /**
   * @description: 生成网格
   * @param {*}
   * @return {*}
   */
  generateGrid(): void;

  /**
   * @description: 生成坐标
   * @param {*}
   * @return {*}
   */
  generateAxis(): void;

  /**
   * @description: 构建出整个标准坐标系
   * @param {*}
   * @return {*}
   */
  build(): void;
}
