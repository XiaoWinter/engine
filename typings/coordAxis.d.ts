/*
 * @Author: XiaoWinter
 * @Date: 2021-09-11 09:54:56
 * @LastEditTime: 2021-09-12 01:41:01
 * @LastEditors: your name
 * @Description:
 * @FilePath: \engine\typings\coordAxis.d.ts
 */
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
