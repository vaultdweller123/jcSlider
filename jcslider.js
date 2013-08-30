// Slider
/*
HTML mark up
	<div id="myid">
		<div class="current"><img src="image1.jpg"></div>
		<div><img src="image2.jpg"></div>
		<div><img src="image3.jpg"></div>
		<div><img src="image4.jpg"></div>
		<div><img src="image5.jpg"></div>
	</div>

CSS styling
	<style type="text/css">
		#myid img{
			width: 500px;
			height: 200px;
		}
		#myid div{
			z-index: 0;
			position: absolute;
		}
		#myid div.prev{
			z-index: 1;
		}
		#myid div.current{
			z-index: 2;
		}
	</style>
	
functio call:
	jQuery.jcSlider({
		'id': 'myid',
		'speed': 4000
	});
*/

// rotate script
function rotate(id){

	var a=jQuery("#"+id+" div.current");
	var b=a.next();
		
	if(b.length==0)
	b=jQuery("#"+id+" div:first");
	
	a.removeClass("current").addClass("prev");
	b.css({opacity:0.0}).addClass("current").animate({opacity:1.0},1000,
	function(){
		a.removeClass("prev");
	});
	
}

var jcSlider = function(option){	
	// set value
	var id = option.id;
	// default 
	// optional
	var speed = (option.speed!=null)?option.speed:4000;
	
	// call the the rotating task
	setInterval("rotate('"+id+"')",speed);
	
};
