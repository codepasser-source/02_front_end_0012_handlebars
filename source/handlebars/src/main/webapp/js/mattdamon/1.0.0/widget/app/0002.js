console.log("main init");
/**
 * @author MATTDAMON
 */
(function(window, undefined) {
	define("mattdamon/widget/app/0002", [ "text!./templates/0002.html" ],
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
							people : [ {
								firstName : "Yehuda",
								lastName : "Katz"
							}, {
								firstName : "Carl",
								lastName : "Lerche"
							}, {
								firstName : "Alan",
								lastName : "Johnson"

							} ]
						}

						Handlebars.registerHelper('list', function(items,
								options) {
							var out = "<ul>";
							for (var i = 0, l = items.length; i < l; i++) {
								out = out + "<li>" + options.fn(items[i])
										+ "</li>";
							}
							return out + "</ul>";
						});

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
