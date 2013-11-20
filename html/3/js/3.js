var tbox;

var appear = function(){
	tbox = document.querySelector('#text_box');
	tbox.className = "stay";
}

window.onload = function(e) {
    appear();    
};

window.setTimeout(appear, 8000 );

window.onkeydown = function(e) {
    console.log(e.keyCode);
    if(e.keyCode == 39) {
       location.href="../4/4.html";
    }
     if(e.keyCode == 37) {
       location.href="../5/5.html";
    }
    if(e.keyCode == 38) {
       location.href="../6/6.html";
    }
     if(e.keyCode == 40) {
       location.href="../7/7.html";
    }
     if(e.keyCode == 32) {
         location.href="../8/8.html";
     }
};