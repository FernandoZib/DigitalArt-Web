var num=1;

function adelante() {
	num++;
	if(num>8)
		num=1;
	var foto=document.getElementById("foto");
	foto.src="img/foto"+num+".jpg"
}

function atras(){
	num--;
	if (num<1)
		num=8;
	var foto=document.getElementById("foto");
	foto.src="img/foto"+num+".jpg"
}

function eventos(){
	var eventos = ["XV Años", "Bautizos", "Presentaciones", "Cumpleaños", "Bodas", "Primeras Comuniones", "Fiestas"];
	document.getElementById("eventos").innerHTML = "★★★★★ " + eventos.join(" --- ") + " ★★★★★";
}