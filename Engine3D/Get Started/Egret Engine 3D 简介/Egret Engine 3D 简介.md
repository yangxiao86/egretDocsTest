> Egret Engine 3.0 包含了白鹭时代研发的遵循HTML5标准的2D引擎及全新打造的3D引擎，它解决了HTML5性能问题及碎片化问题，灵活地满足开发者开发2D或3D游戏的需求，并有着极强的跨平台运行能力。

## Egret Engine 3D 新特性

#### •	模型系统
Egret3D封装了自己的引擎静态模型及动画模型，并提供了3Dmax 导出插件，也就是说支持任意3D模型格式。

#### •	材质系统
可以根据自己的渲染风格，灵活的通过调整参数或增加材质特效的方式对材质进行编辑。

#### •	灯光系统
支持TBN直接光照系统，未来还会支持间接光照，提高光影效果。

#### •	动画系统
支持了3Dmax中高级骨骼动画及相机动画，满足绝大部分游戏需要。

#### •	shadow系统（阴影系统）
提高渲染效果，增强渲染视觉真实感。

#### •	shader系统
基于OpenGL ES2.0 标准的原生webgl shader，并与引擎功能紧密结合及拓展。为未来的shader编辑器做好了铺垫。

## Egret Engine 3D 使用
---- ------------------------ 

### 3DMax export
支持任何3Dmax能打开的模型，方便Egret开发者保存、输出Egret 3D动态模型、静态模型等内容的插件。
 ![](567b9e15dffc1.png)
### lightmap效果
![](567b9a64e27b5.png)
![](567b9a65123e0.png)
### particle效果
![](567b9a65439fa.png)


### 使用测试用例

在 [Egret Engine 3D](https://github.com/egret-labs/egret-3d) 的 Github 开源地址可以获得 Egret Engine 3D 源码和测试用例。

##### 准备工作

* 下载 [Egret 3D](https://github.com/egret-labs/egret-3d) 项目,确认您拥有以下项目文件夹

```
|--Egret3D
|--Sample
|--script
|--output
|--3Dmax-Export-tool
|--package.json
|--README.md
```

##### 使用 Egret Wing

###### Egret 3D 示例创建

###### 准备文件

* 1.	egret engine 安装 下载：http://www.egret.com/egretengine 最新的引擎
* 2.	egret wing 安装 下载：http://www.egret.com/egretwing 最新工具
* 3.	egret engine 3D sample-wing 下载: https://github.com/egret-labs/egret-3d

###### 使用步骤：

1.	打开安装好的wing 导入 准备文件中的第三步的 egret engine 3D  sample-wing文件夹 例如("E:\git_egret3D\HummingBird\egret-3d\Sample-wing");
 
2.	编译运行，如果遇到编译无反应，可以关闭项目再开一次
3.	继续编译运行。
4.	Main 文件有多个示例的应用，打开注释就可以


##### 使用终端或其他开发工具


* 将项目放置于您的 HTTP 服务器下
* 在终端中打开 Sample 文件夹
* 执行 ``` tsc ```
* 在浏览器中以 localhost 方式打开 ``` index.html ```

### sample

```
var cubeGeometry:egret3d.CubeGeometry = new egret3d.CubeGeometry(50, 50, 50);
var textureMaterial:egret3d.TextureMaterial = new egret3d.TextureMaterial();
var mesh:egret3d.Mesh = new egret3d.Mesh( cubeGeometry,textureMaterial );
````