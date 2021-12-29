
var texto = document.getElementById("elemTraducir"); 
var boton = document.getElementById("boton");
var resul = document.getElementById("resultado")
var contenedor = document.getElementById("Contenedor");
var limpiar = document.getElementById("botonLimpiar");


texto.addEventListener("keyup",  traducir); 

boton.addEventListener("click", traducir);
limpiar.addEventListener("click", limpiarCajas);





function traducir(){

    var textoTomado = (texto.value);

    function quitarAcentos(textoTomado){
        const acentos = {'á':'a','é':'e','í':'i','ó':'o','ú':'u','Á':'A','É':'E','Í':'I','Ó':'O','Ú':'U'};
        return textoTomado.split('').map( letra => acentos[letra] || letra).join('').toString();	
    }


    // const string = textoTomado

    string = quitarAcentos(textoTomado);


    const a = /a/g;
    const b = /b/g;
    const c = /c/g;
    const d = /d/g;
    const e = /e/g;
    const f = /f/g;
    const g = /g/g;
    const h = /h/g;
    const i = /i/g;
    const j = /j/g;
    const k = /k/g;
    const l = /l/g;
    const m = /m/g;
    const n = /n/g;
    const ñ = /ñ/g;
    const o = /o/g;
    const p = /p/g;
    const q = /q/g;
    const r = /r/g;
    const s = /s/g;
    const t = /t/g;
    const u = /u/g;
    const v = /v/g;
    const w = /w/g;
    const x = /x/g; 
    const y = /y/g; 
    const z = /z/g;

    let nuevaStr = string;
    nuevaStr = nuevaStr.toLowerCase();

    nuevaStr = nuevaStr.replace(a, "Z");
    nuevaStr = nuevaStr.replace(b, "Y");
    nuevaStr = nuevaStr.replace(c, "X");
    nuevaStr = nuevaStr.replace(d, "W");
    nuevaStr = nuevaStr.replace(e, "V");
    nuevaStr = nuevaStr.replace(f, "U");
    nuevaStr = nuevaStr.replace(g, "T");
    nuevaStr = nuevaStr.replace(h, "S");
    nuevaStr = nuevaStr.replace(i, "R");
    nuevaStr = nuevaStr.replace(j, "Q");
    nuevaStr = nuevaStr.replace(k, "P");
    nuevaStr = nuevaStr.replace(l, "O");
    nuevaStr = nuevaStr.replace(m, "Ñ");
    nuevaStr = nuevaStr.replace(n, "N");
    nuevaStr = nuevaStr.replace(ñ, "M");
    nuevaStr = nuevaStr.replace(o, "L");
    nuevaStr = nuevaStr.replace(p, "K");
    nuevaStr = nuevaStr.replace(q, "J");
    nuevaStr = nuevaStr.replace(r, "I");
    nuevaStr = nuevaStr.replace(s, "H");
    nuevaStr = nuevaStr.replace(t, "G");
    nuevaStr = nuevaStr.replace(u, "F");
    nuevaStr = nuevaStr.replace(v, "E");
    nuevaStr = nuevaStr.replace(w, "D");
    nuevaStr = nuevaStr.replace(x, "C");
    nuevaStr = nuevaStr.replace(y, "B");
    nuevaStr = nuevaStr.replace(z, "A");
    
    resul.value = nuevaStr;
    texto.focus();

}


function limpiarCajas(){
    resul.value = "";
    texto.value = "";
    texto.focus();
}