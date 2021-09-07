type CanvasInfo = {
  ctx: CanvasRenderingContext2D | null;
  id: string;
};

/**
 * @description: 某个元素下创建canvas
 * @param {string} id
 * @param {Element} parent
 * @param {number} width
 * @param {number} height
 * @return {CanvasInfo} {ctx,id}
 */
function create(
  parent: Element,
  width = 400,
  height = 400,
  id = "myCanvas",
): CanvasInfo {
  let divWrapper = document.createElement("div");
  let canvasElem = document.createElement("canvas");
  parent.appendChild(divWrapper);
  divWrapper.appendChild(canvasElem);

  divWrapper.id = id;
  canvasElem.width = width;
  canvasElem.height = height;

  let ctx = canvasElem.getContext("2d");

  return {
    ctx: ctx,
    id: id,
  };
}

/**
 * @description: 花园
 * @param {*}
 * @return {*}
 */
function draw(ctx: CanvasRenderingContext2D, redius = 5, position = [0, 0]) {
  ctx.beginPath();
  ctx.arc(position[0], position[1], redius, 0, Math.PI * 2, false);
  ctx.fill();
  ctx.closePath();
}

export { create, draw };
