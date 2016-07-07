# Egret3DCanvas入门 #
## Egret3DCanvas基础 ##
	该篇教程将讲述Egret3D中的一个基础组件Egret3DCanvas，基本上所有的Egret3D的其他组件都是基于Egret3DCanvas进行显示交互的。但在使用它之前,我们需要简单的了
	解下它在Egret3DCanvas中究竟起到了什么作用：  
	（1）事件管理对象的持有者，详情可以参考Event教程。
	（2）渲染视图列表的管理和维护。
	（3）2d UI的嵌入（正在添加，当前版本尚无处理）。

## Egret3DCanvas主要元素 ##
**Egret3DCanvas.ClientRect:**  
	窗口客户区对象，保存了当前HTMLCanvasElement的相对浏览器视窗的位置。该对象有6个属性：top,left,right,bottom,width,height。其中：    
	（1）top是指元素上边距离页面上边的距离。    
	（2）left元素左边距离页面左边的距离。  
	（3）right是指元素右边界距窗口最左边的距离。  
	（4）bottom是指元素下边界距窗口最上面的距离。		
	（5）width、height是元素自身的宽高。   

**Egret3DCanvas.EventManager:**  
	事件管理对象，负责页面内具体事件类型的定义与事件响应后的分发。  

**Egret3DCanvas.HTMLCanvasElement:**  
	canvas的接口，该接口提供了用来操作一个canvas元素布局和呈现的属性和方法。HTMLCanvasElement接口继承了element接口的属性和方法。  

**Egret3DCanvas.View3DS:**  
	渲染视口列表，一个Egret3DCanvas可以同时拥有多个渲染视口进行渲染。  

## 创建Egret3DCanvas ##
	this._egret3DCanvas = new egret3d.Egret3DCanvas();
	
## 设置起始坐标 ##
	this._egret3DCanvas.x = 0;
    this._egret3DCanvas.y = 0;

**说明：**   
	在Egret3D中的屏幕坐标，包括整个屏幕，屏幕的左上角为（0, 0），这里我们一般设置(0.0)为屏幕起始坐标。

## 设置尺寸 ##
	this._egret3DCanvas.width = window.innerWidth;  
    this._egret3DCanvas.height = window.innerHeight;

**说明：**  
	一般情况下我们会设置Canvas为全屏。 window.innerWidth，window.innerHeight分别为当前屏幕的宽和高。  

## 启动Egret3DCanvas ##
	this._egret3DCanvas.start();  

## 完整示例代码 ##
	/**
	 * @language zh_CN
	 * @classdesc
	 * Canvas使用示例
	 * @version Egret 3.0
	 * @platform Web,Native
	 */
	class SampleEgret3DCanvas {
	
	    /**
	    * 3d画布对象
	    * @version Egret 3.0
	    * @platform Web,Native
	    */
	    protected _egret3DCanvas: egret3d.Egret3DCanvas;
	
	    public constructor() {
	
	        
	        ///创建Canvas对象。
	        this._egret3DCanvas = new egret3d.Egret3DCanvas();
	        ///Canvas的起始坐标，页面左上角为起始坐标(0,0)。
	        this._egret3DCanvas.x = 0;
	        this._egret3DCanvas.y = 0;
	        ///设置Canvas页面尺寸。
	        this._egret3DCanvas.width = window.innerWidth;
	        this._egret3DCanvas.height = window.innerHeight;
	        ///启动Canvas。
	        this._egret3DCanvas.start();
	    }
	}    