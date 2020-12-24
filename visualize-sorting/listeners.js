$(document).ready(function() {

	$('#resetBtn').click(function() {
		paused = true;
		ready = false;
		values.splice(0, values.length);
	});
	$('#randomizeBtn').click(function() {
		paused = true;
		ready = false;
		values.splice(0, values.length);
		let limit = Math.floor(Math.random() * 31);
		for (let i = 0; i < limit; i++)
		{
			values.push(Math.floor(Math.random() * 31));
		}
	});
	$('#insertBtn').click(function() {
		paused = true;
		ready = false;
		values.push($('#newValue').val());
	});
	$('#startBtn').click(function() {
		paused = false;
		sortType = $('input[name="sortType"]:checked').val();;
	});
	$('#stopBtn').click(function() {
		paused = true;
		ready = false;
	});

	$('input[type="radio"]').click(function() {
		sortType = $(this).val();
		console.log(sortType);
		$('#stopBtn').click();
	});

});
