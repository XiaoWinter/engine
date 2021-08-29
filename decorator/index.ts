function run(target: any, name: string, descriptor: object) {
  target?.[name]?.();
}

function start(name: string) {
  console.log(`=====================测试方法:${name}======================`);
}

function end(name: string) {
  console.log(`=====================完成方法：${name}=====================`);
}

/**
 * @description: 方法装饰器，作用执行装饰的方法
 * @param {any} target
 * @param {string} name
 * @param {object} descriptor
 * @return {*}
 */
function test(target: any, name: string, descriptor: object) {
  start(name);
  run(target, name, descriptor);
  end(name);
}

export { test };
