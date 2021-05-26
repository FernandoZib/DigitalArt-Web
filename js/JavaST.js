function Cambiar(){
    var Reemplazar = document.getElementById("Remplazar").value;
    var Nueva = document.getElementById("Nueva").value;
    var str = document.getElementById("demo").value;
    var txt = str.replace(Reemplazar, Nueva);
    document.getElementById("demo").value = txt;
}