/****Ajout des cercles a la sideNav******/

var i = 0;
var canvas = new Array();;
var ctx = new Array();



	$('canvas').each(function() {
	   i++;
	  canvas[i]= document.getElementById("canvas"+i );
	  ctx[i]=canvas[i].getContext("2d");
	  ctx[i].fillStyle = "red";
	  ctx[i].strokeStyle = "red";
	  ctx[i].lineWidth = 2;
	  ctx[i].beginPath();
	  ctx[i].arc(8,8.5,6,0,Math.PI*2,true);
	  ctx[i].closePath();
	  ctx[i].stroke();
	});	


	