$('#submit-btn').click(function() {
	alert('pressed button');
	$.ajax('/api/open', {
	  type: "POST",
	  data: 'open-door',
	  dataType: 'string',
	  success: function(result) {
		alert('success: ' + result);
	  }
	});
});