[ABOUT]
a javascript slider using jquery
	
[HOW-TO]
include external javascript files:
jcPagination is powered by jquery so we need to load jquery first before we can use it
<script type="text/javascript" src="/javascript/jquery/jquery-1.10.2.min.js"></script>
<script type="text/javascript" src="/javascript/jcpagination/jcslider.js"></script>

html mark up:
HTML mark up
<div id="myid">
	<div class="current"><img src="image1.jpg"></div>
	<div><img src="image2.jpg"></div>
	<div><img src="image3.jpg"></div>
	<div><img src="image4.jpg"></div>
	<div><img src="image5.jpg"></div>
</div>
	
CSS styling:
<style>
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
	
function call:
jcSlider({
	'id': 'myid',
	'speed': 4000
});
			
[EXAMPLE]
<html>
<head>
<title>jcPagination</title>
<script type="text/javascript" src="/javascript/jquery/jquery-1.10.2.min.js"></script>
<script type="text/javascript" src="/javascript/jcpagination/jcslider.js"></script>
<style>
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
<script>
jQuery(document).ready(function(){
	jcSlider({
		'id': 'myid',
		'speed': 4000
	});
});
</script>
</head>
<body>
<h1>jcSlider</h1>
<div id="myid">
		<div class="current"><img src="image1.jpg"></div>
		<div><img src="image2.jpg"></div>
		<div><img src="image3.jpg"></div>
		<div><img src="image4.jpg"></div>
		<div><img src="image5.jpg"></div>
	</div>
<body>
</html>
