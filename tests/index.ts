import VectorImpl from "../src/index/vector";
import { test } from "../decorator/index";

class Test {
  @test
  BuildVector() {
    new VectorImpl(1, 2, 3);
    new VectorImpl();
  }
}

new Test();

export {};
