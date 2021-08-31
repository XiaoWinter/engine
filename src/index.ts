import MatrixImpl from "./matrix.js";
import VectorImpl from "./vector.js";
import { create, draw } from "./canvas.js";
type coords = [number, number];

const width = 800;
const height = 800;

const { ctx } = create(document.body, width, height);
// draw

// 坐标沿着x轴变换
ctx?.transform(1, 0, 0, -1, 0, 0);
// ctx?.save();

// 半径
const r = 4;
// 初始位置
const p0: coords = [10, -800];
// 加速度
const a = new VectorImpl(0, -9.8);
//速度
let v = new VectorImpl(40, 80);
// 帧
const step = 0.05;
// 位移量
let move = new VectorImpl(p0);
if (ctx) draw(ctx, r, move.value);

setInterval(() => {
  if (!ctx) return;
  // ctx.restore();
  ctx.clearRect(0, 0, width, -height);
  // Δv = at
  v = v.addition(a.multiplication(step));
  // v = v0 + Δv
  //Δm = V*t
  // m0 + Δm
  move = move.addition(v.multiplication(step));
  const p = move.value;
  draw(ctx, r, p);
}, 16);
