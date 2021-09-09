// import MatrixImpl from "./calcu/matrix.js";
// import VectorImpl from "./calcu/vector.js";
import StageImpl from "./drawenv/stage.js";
import LineImpl from "./drawenv/line.js";
import CoordAxisImpl from "./drawenv/coordAxis.js";
import UserEventImpl from "./drawenv/userEvent.js";

const stage = new StageImpl();

const userEvent = new UserEventImpl(stage);

// 构建坐标系
const coordAxis = new CoordAxisImpl(stage);
coordAxis.build();

// const er = new LineImpl((x) => 1, null, stage);
// er.draw();

// 二次函数
// const er = new LineImpl((x) => x * x, null, stage);
// er.draw();

// sin;
const sin = new LineImpl((x) => Math.sin(x), null, stage);
sin.setCtx({ strokeStyle: "red" });
sin.draw();

// // cos
// const cos = new LineImpl((y) => Math.cos(y), null, stage);
// cos.draw();
