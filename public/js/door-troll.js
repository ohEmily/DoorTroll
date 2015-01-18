$('#submit-btn').click(function() {
	console.log('pressed button');
	
	alert('password: ' + $('#pass-field').text);
	
	$.ajax('/api/open-attempt', {
	  type: 'post',
	  data: 'test',
	  contentType: 'string',
	  success: function(result) {
		alert('success: ' + result.message);
	  },
	  failure: function(result) {
		alert('failed: ' + result);
	  }
	});
	
	console.log('after ajax request');
});