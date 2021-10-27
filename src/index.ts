/*
 * @Author: XiaoWinter
 * @Date: 2021-09-05 22:43:19
 * @LastEditTime: 2021-09-12 01:48:02
 * @LastEditors: your name
 * @Description:
 * @FilePath: \engine\src\index.ts
 */
// import MatrixImpl from "./calcu/matrix.js";
// import VectorImpl from "./calcu/vector.js";
import StageImpl from "./drawenv/stage.js";
import LineImpl from "./drawenv/line.js";
import CoordAxisImpl from "./drawenv/coordAxis.js";
import UserEventImpl from "./drawenv/userEvent.js";

const stage = new StageImpl();

// const userEvent = new UserEventImpl(stage);

// // 构建坐标系
const coordAxis = new CoordAxisImpl(stage);
coordAxis.build();

// const er1 = new LineImpl((x) => 1, null, stage);
// er1.draw();

// // 二次函数
const er2 = new LineImpl((x) => x * x, null, stage);
er2.setCtx({ strokeStyle: "red" });
er2.draw();

// // sin;
const sin = new LineImpl((x) => Math.sin(x), null, stage);
sin.setCtx({ strokeStyle: "purple" });
sin.draw();

// // // cos
const cos = new LineImpl((y) => Math.cos(y), null, stage);
cos.setCtx({ strokeStyle: "yellow" });
cos.draw();
