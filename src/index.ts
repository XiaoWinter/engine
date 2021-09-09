// import MatrixImpl from "./calcu/matrix.js";
// import VectorImpl from "./calcu/vector.js";
import StageImpl from "./drawenv/stage.js";
import LineImpl from "./drawenv/line.js";
import CoordAxisImpl from "./drawenv/coordAxis.js";

const stage = new StageImpl();

stage.setScale(100);

const coordAxis = new CoordAxisImpl(stage);
coordAxis.build();

const er = new LineImpl((x) => x * x, null, stage);
er.draw();

const sin = new LineImpl((x) => Math.sin(x), null, stage);
sin.setCtx({ strokeStyle: "red" });
sin.draw();

const cos = new LineImpl((y) => Math.cos(y), null, stage);
cos.draw();
