console.log("main init");
/**
 * @author MATTDAMON
 */
(function(window, undefined) {
	define("mattdamon/widget/app/0005", [ "text!./templates/0005.html" ],
			function(template) {

				var _self = undefined;

				var Main = function(opts) {
					return new Main.prototype.constructor(opts);
				};

				Main.prototype = {

					// Main dom 节点
					placeholder : "div[name='main-container']",
					// 效果fadeIn，slideDown,show
					animation : 'fadeIn',

					constructor : function(opts) {
						$.extend(this, opts);
						_self = this;

						var data = {
							// info : [ 'HTML5', 'CSS3', "WebGL" ],
							list : [ 'HTML5', 'CSS3', "WebGL" ],
							"error" : "数据取出错误"
						};

						// 显示
						var ct = Handlebars.compile(template);
						var compiled = ct(data);

						$(_self.placeholder).replaceWith(compiled);

					},

					show : function(speed) {
						if (this.animation == 'fadeIn') {
							$("div[name='main-widget']").fadeIn(
									speed == undefined ? 0 : speed);
						} else if (this.animation == 'slideDown') {
							$("div[name='main-widget']").slideDown(
									speed == undefined ? 0 : speed);
						} else {
							$("div[name='main-widget']").show(
									speed == undefined ? 0 : speed);
						}
					}

				};
				Main.prototype.constructor.prototype = Main.prototype;
				return Main;
			});
})(window);
