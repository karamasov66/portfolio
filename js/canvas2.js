var i = 0;
var canvas = new Array();;
var ctx = new Array();



	$('canvas').each(function() {
	   i++;
	  canvas[i]= document.getElementById("canvas"+i );
	  ctx[i]=canvas[i].getContext("2d");
	  ctx[i].fillStyle="black";
	  ctx[i].beginPath();
	  ctx[i].arc(8,9.5,5,0,Math.PI*2,true);
	  ctx[i].closePath();
	  ctx[i].fill();
	});	

