// functions that deal with user interface and security, including
// vision.

module.exports = {
	is_user_pic : function (file) {
		
		// todo -- for Jaykar
		
		return true;
	},
	
	// temporary. we'll hook it up to a database.
	is_user_pass : function (pass) {
		if (pass == 'password')
			return true;
		return false;
	},
	
	is_user : function (file, pass) {
		
		if (module.exports.is_user_pass(pass) && module.exports.is_user_pic(file))
			return true;
		return false;
	}
};