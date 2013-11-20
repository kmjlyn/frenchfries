var during;

var Loading = function(){
	during = document.querySelector('#loading1');
	during2 = document.querySelector('#loading2');
	
}

window.onload = function(e) {
    Loading(); 

};

var loadOver = function(){
  during.style['opacity'] = 0;  
  during2.style['opacity'] = 0;
}

var soysaucewait = function(){
	var soysaucesound = document.createElement("AUDIO");
	var mother = document.querySelector('head');
	mother.appendChild(soysaucesound);
	var soysauceloc=document.createAttribute("src");
	soysauceloc.nodeValue="../../asset/sound/soysauce.mp3";
	soysaucesound.attributes.setNamedItem(soysauceloc);
	var play=document.createAttribute("autoplay");
	soysaucesound.attributes.setNamedItem(play);
}

window.setTimeout(soysaucewait, 5000 );


window.setTimeout(loadOver, 4000 );


window.onmousedown = function(e){
	location.href="../1/1.html";
}