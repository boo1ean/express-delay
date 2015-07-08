var timers = require('timers');

var get_random_int = function(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

var create_delayer = function(min, max) {
    var useRandomDelay = (arguments.length === 2);

	return function(req, res, next) {
		var send = res.send;
		var time = useRandomDelay ? get_random_int(min, max) : min;

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
