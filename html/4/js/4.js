var during;
/*var chilisound;
*/
var Loading = function(){
	during1 = document.querySelector('#loading1');
	during2 = document.querySelector('#loading2');
	/*chilisound = document.querySelector('#chilisound');*/
	
}

window.onload = function(e) {
    Loading();    
};

var loadOver = function(){
  during1.style['opacity'] = 0;  
  during2.style['opacity'] = 0;  
  /*chilisound.style['autostart'] = true;*/
}


var chiliwait = function(){
	var chilisound = document.createElement("AUDIO");
	var mother = document.querySelector('head');
	mother.appendChild(chilisound);
	var chililoc=document.createAttribute("src");
	chililoc.nodeValue="../../asset/sound/chili.mp3";
	chilisound.attributes.setNamedItem(chililoc);
	var play=document.createAttribute("autoplay");
	chilisound.attributes.setNamedItem(play);
}

window.setTimeout(chiliwait, 5000 );

window.setTimeout(loadOver, 5000 );



window.onmousedown = function(e){
	location.href="../1/1.html";
}