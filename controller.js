// functions that use the functionality built into the Edison
// microcontroller and other auxiliary hardware.

module.exports = {
	open_door: function () {
		try {
			var spawn = require("child_process").spawn;
			var process = spawn('python', ["scripts/open-door.py"]);
		} catch (e) {
			return e;
		}
	}
};