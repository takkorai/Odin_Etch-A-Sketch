



$(document).ready(function(){
	var $square = '<div class="square"></div>'
	var $grid = 16;


	drawSquares();



    $(document).on('click','.button',function(){
    	$grid = prompt("Enter the the number of columns/rows",16);
    	while(isNaN($grid)){
    		$grid = prompt("Plese Enter a valid column/row number",16);
    	};
		drawSquares();

    });
	function drawSquares(){
		$('.square').remove('.square');
		for(var i = 1; i<=$grid*$grid; i++){
			$('.square').css("width",100/$grid+"%");
			$('.square').css("height",100/$grid+"%");
			$('.wrapper').append($square);
		};
		$('.square').mouseenter(function(){
			$(this).addClass("highlighted");
		});
	}
});


