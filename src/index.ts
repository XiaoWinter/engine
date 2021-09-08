// import MatrixImpl from "./calcu/matrix.js";
// import VectorImpl from "./calcu/vector.js";
import StageImpl from "./drawenv/stage.js";
import LineImpl from "./drawenv/line.js";

const stage = new StageImpl();

// xy轴
const xy = new LineImpl(
  (x) => 0,
  (y) => 0,
  stage,
);
xy.setCtx({ fillStyle: "blue" });
xy.draw();

// const er = new LineImpl((x) => x * x, null, stage);
// er.draw();

const sin = new LineImpl((x) => Math.sin(x), null, stage);
sin.setScale(100);
sin.draw();

// const cos = new LineImpl(null, (y) => Math.cos(y), stage);
// cos.setScale(50);
// cos.draw();
