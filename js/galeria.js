var num=1;

function adelante() {
	num++;
	if(num>8)
		num=1;
	var foto=document.getElementById("foto1");
	foto.src="img/foto"+num+".webp"
}

function atras(){
	num--;
	if (num<1)
		num=8;
	var foto=document.getElementById("foto1");
	foto.src="img/foto"+num+".webp"
}

function eventos(){
	var eventos = ["XV Años", "Bautizos", "Presentaciones", "Cumpleaños", "Bodas", "Primeras Comuniones", "Fiestas"];
	document.getElementById("eventos").innerHTML = "★★★★★ " + eventos.join(" --- ") + " ★★★★★";
}