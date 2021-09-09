# 物理引擎实现的尝试

```
yarn
```

```
yarn build
```

使用插件[Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)<img src="https://ritwickdey.gallerycdn.vsassets.io/extensions/ritwickdey/liveserver/5.6.1/1555497731217/Microsoft.VisualStudio.Services.Icons.Default" width="40" height="40"/>打开 static/index.html 查看效果

## 主要对象

### Stage

舞台：canva 的生成函数，所返回对象维护了 canvas 的基本信息

```
const stage = new StageImpl();
stage.setScale(100);
```

### Line

线：通过点的描绘练成线段，以函数作为主要参数

```
// 二次函数
const er = new LineImpl((x) => x * x, null, stage);
er.draw();
// sin
const sin = new LineImpl((x) => Math.sin(x), null, stage);
sin.setCtx({ strokeStyle: "red" });
sin.draw();

// cos
const cos = new LineImpl((y) => Math.cos(y), null, stage);
cos.draw();

```

### coordAxis

标准网格坐标系:继承于 Line,增加绘制网格，绘制尺度，绘制坐标轴方法

```
const coordAxis = new CoordAxisImpl(stage);
// 直接构建
coordAxis.build();

// 或者

coordAxis.generateAxis().generateGrid().generateRuling()

```

### vector

向量：一种抽象的数据结构，将于标准坐标系联动

```
let v = new VectorImpl(-15, -20);
```

### matrix

矩阵：一种抽象的数据结构，与向量联动

```
const m1 = new MatrixImpl([1, 4], [2, 5], [3, 6]);
```
