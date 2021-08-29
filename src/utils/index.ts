type max = number;
type min = number;
/**
 * @description: 获取数组中的最大值和最小值
 * @param {number} arr
 * @return {[max,min]} 元组返回
 */
function getMaxMin(arr: number[]): [max, min] {
  let max = arr[0];
  let min = arr[0];

  arr.forEach((i) => {
    if (i > max) max = i;
    if (i < min) min = i;
  });

  return [max, min];
}

/**
 * @description tuz:translate undefiend to zero;转化undefined为0
 * @description: 安全获取向量中的值，即使超出的数组范围也可以以0替代
 * @param {any} coords
 * @return {*}
 */
function tuz(coords: undefined | number): number {
  if (typeof coords === "number") return coords;
  return 0;
}

export { getMaxMin, tuz };
