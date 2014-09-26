var timers = require('timers');

var create_delayer = function(time) {
	return function(req, res, next) {
		var send = res.send;

		res.send = function() {
			var args = arguments;

			timers.setTimeout(function() {
				send.apply(res, args);
			}, time);
		};

		next();
	};
};

module.exports = create_delayer;
