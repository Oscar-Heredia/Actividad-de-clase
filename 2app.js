let grupo = new Set()

grupo.p1=({Nombre:"Bernardo", Celular:111, Edad:20})
grupo.p2=({Nombre:"Juan", Celular:222, Edad:29})
grupo.p3=({Nombre:"German", Celular:333, Edad:30})
grupo.p4=({Nombre:"Mario", Celular:444, Edad:15})
grupo.p5=({Nombre:"Pablo", Celular:555, Edad:50})



function limpiar(){
    document.getElementById("resultado").innerHTML=""
    document.getElementById("lista").innerHTML=""
    document.getElementById("textoabuscar").value=""

  }

function Buscar(){
let tex = document.getElementById("textoabuscar").value
if(grupo.p1.Celular==tex){
  document.getElementById("resultado").innerHTML=("Nombre: " + grupo.p1.Nombre + "<br>" + "Celular: "+ grupo.p1.Celular + "<br>" + "Edad: " + grupo.p1.Edad + "<br>"+"<br>")

}
if(grupo.p2.Celular==tex){
  document.getElementById("resultado").innerHTML=("Nombre: " + grupo.p2.Nombre + "<br>" + "Celular: "+ grupo.p2.Celular + "<br>" + "Edad: " + grupo.p2.Edad + "<br>"+"<br>")

}
if(grupo.p3.Celular==tex){
  document.getElementById("resultado").innerHTML=("Nombre: " + grupo.p3.Nombre + "<br>" + "Celular: "+ grupo.p3.Celular + "<br>" + "Edad: " + grupo.p3.Edad + "<br>"+"<br>")

}
if(grupo.p4.Celular==tex){
  document.getElementById("resultado").innerHTML=("Nombre: " + grupo.p4.Nombre + "<br>" + "Celular: "+ grupo.p4.Celular + "<br>" + "Edad: " + grupo.p4.Edad + "<br>"+"<br>")

}
if(grupo.p5.Celular==tex){
  document.getElementById("resultado").innerHTML=("Nombre: " + grupo.p5.Nombre + "<br>" + "Celular: "+ grupo.p5.Celular + "<br>" + "Edad: " + grupo.p5.Edad + "<br>"+"<br>")

}
}
function lista(){
    document.getElementById("lista").value=""
    let res=("Nombre: " + grupo.p1.Nombre + "<br>" + "Celular: "+ grupo.p1.Celular + "<br>" + "Edad: " + grupo.p1.Edad + "<br>"+"<br>")
    res=(res + "Nombre: " + grupo.p2.Nombre + "<br>" + "Celular: "+ grupo.p2.Celular + "<br>" + "Edad: " + grupo.p2.Edad + "<br>"+"<br>" +"Nombre: " + grupo.p3.Nombre + "<br>" + "Celular: "+ grupo.p3.Celular + "<br>" + "Edad: " + grupo.p3.Edad + "<br>"+"<br>" + "Nombre: " + grupo.p4.Nombre + "<br>" + "Celular: "+ grupo.p4.Celular + "<br>" + "Edad: " + grupo.p4.Edad + "<br>"+"<br>" + "Nombre: " + grupo.p5.Nombre + "<br>" + "Celular: "+ grupo.p5.Celular + "<br>" + "Edad: " + grupo.p5.Edad + "<br>")
    document.getElementById("lista").innerHTML=res

}