$('#submit-btn').click(function() {
	console.log('pressed button');
	
	$.ajax('/api/open-attempt', {
	  type: "POST",
	  data: 'open-door',
	  dataType: 'string',
	  success: function(result) {
		alert('success: ' + result.message);
	  },
	  failure: function(result) {
		alert('failed: ' + result);
	  }
	});
	
	console.log('after ajax request');
});