// alert('hi')


function listItem(){
	var i = 0;
	var colors = ['color1', 'color2'];
	var text = $('input').val();
	$('ul').append('<li> ' + text + ' </li>').addClass(colors[i]);
	i++;
	if(i > 1){
		i = 0;
	}
}

$('button').on('click', listItem);