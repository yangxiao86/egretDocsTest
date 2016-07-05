module test
{
    class test1
    {
        /**
        * cacheAsBitmap的替代方案，解决QQ浏览器在1G内存的机器上最多能使用20个  
        * Canvas的限制
        */
        private bug_qqBrowser_CanvasNum(): void
        {
            egret.DisplayObject.prototype._makeBitmapCache = function ()
            {
                if (this.stage == null || this.visible == false)
                {
                    return false;
                }

                if (!this.renderTexture) {
                    this.renderTexture = test.test2.Ins.pop();
                }

                if (!this.renderTexture) {
                    return false;
                }

                var result = this.renderTexture.drawToTexture(this);
                if (result)
                {
                    this._texture_to_render = this.renderTexture;
                }
                else
                {
                    App.RenderTextureManager.push(this.renderTexture);
                    this._texture_to_render = null;
                    this.renderTexture = null;
                }
                return result;
            };

            egret.DisplayObject.prototype._onRemoveFromStage = function ()
            {
                egret.DisplayObjectContainer.__EVENT__REMOVE_FROM_STAGE_LIST.push(this);

                if (this.renderTexture)
                {
                    App.RenderTextureManager.push(this.renderTexture);
                    this._texture_to_render = null;
                    this.renderTexture = null;
                }
            };

            Object.defineProperty(egret.DisplayObject.prototype, "cacheAsBitmap",
                {
                    /**
                    * 如果设置为 true，则 egret 运行时将缓存显示对象的内部位图
                        表示形式。此缓存可以提高包含复杂矢量内容的显示对象的性能。
                        具有已缓存位图的显示对象的所有矢量数据都将被绘制到位图
                        而不是主显示。像素按一对一与父对象进行映射。如果位图的边
                        界发生更改，则将重新创建位图而不会拉伸它。
                    * 除非将 cacheAsBitmap 属性设置为 true，否则不会创建内部位图。
                    * @member {number} egret.DisplayObject#cacheAsBitmap
                    */
                    get: function () {
                        return this._cacheAsBitmap;
                    },
                    set: function (bool) {
                        this._cacheAsBitmap = bool;
                        if (bool) {
                            egret.callLater(this._makeBitmapCache, this);
                        }
                        else {
                            if (this.renderTexture) {
                                App.RenderTextureManager.push(this.renderTexture);
                                this._texture_to_render = null;
                                this.renderTexture = null;
                            }
                        }
                    },
                    enumerable: true,
                    configurable: true
                });

        }
    }

}
 

