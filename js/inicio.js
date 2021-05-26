window.onload = function(){
	var pos = 0;
	var box = document.getElementById('box');
	var t = setInterval(move, 50)
	function move(){
		if(pos >= 1150){
			clearInterval(t);
		}
		else{
			pos+=1;
			box.style.left = pos+'px'
		}

	}
	
}


