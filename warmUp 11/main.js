// alert('Good Morning :)')
$('#left-btn').on('click', function(){
	$('#create-btn').on('click', function(){
		$('#left-list').append('<li></li>')
	})
});

$('#right-btn').on('click', function(){
	$('#create-btn').on('click', function(){
		$('#right-list').append('<li></li>')
	})
});