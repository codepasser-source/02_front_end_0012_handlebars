console.log("main init");
/**
 * @author MATTDAMON
 */
(function(window, undefined) {
	define("mattdamon/widget/app/0004", [ "text!./templates/0004.html" ],
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
							author : {
								firstName : "Alan",
								lastName : "Johnson"
							},
							body : "I Love Handlebars",
							comments : [ {
								author : {
									firstName : "Yehuda",
									lastName : "Katz"
								},
								body : "Me too!"
							} ]
						}

						Handlebars.registerHelper('fullName', function(person) {
							return person.firstName + " " + person.lastName;
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
