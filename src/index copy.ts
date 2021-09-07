import MatrixImpl from "./calcu/matrix.js";
import VectorImpl from "./calcu/vector.js";
import { create, draw } from "./drawenv/canvas.js";
type coords = [number, number];

const width = 800;
const height = 800;

const { ctx } = create(document.body, width, height);
// draw

// 坐标沿着x轴变换
ctx?.transform(1, 0, 0, -1, 0, 0);
// ctx?.save();

// 半径
const r = 2;
// 初始位置
const p0: coords = [400, -700];
// 加速度
// const a = new VectorImpl(0, -9.8);
// const a = new VectorImpl(0, -9.8);
//速度
let v = new VectorImpl(-15, -20);
// 帧
const step = 0.04;
// 位移量
let move = new VectorImpl(p0);

// 受引力方程
let af = (origin: number[]) => {
  const originV = new VectorImpl(origin);

  return (p: VectorImpl) => {
    const rv = p.subtraction(originV);
    const r = rv.length();
    const G = 10 ** 6;
    return rv.multiplication(-G / r ** 3);
  };
};
let a = af([400, -400])(move);

if (ctx) draw(ctx, r, move.value);

setInterval(() => {
  if (!ctx) return;
  // ctx.restore();
  // ctx.clearRect(0, 0, width, -height);
  // Δv = at
  v = v.addition(a.multiplication(step));
  // v = v0 + Δv
  //Δm = V*t
  // m0 + Δm
  move = move.addition(v.multiplication(step));
  a = af([400, -400])(move);
  const p = move.value;
  draw(ctx, r, p);
}, 16);
