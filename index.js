
function gatoperro(){
    var perro = document.getElementById("labeldog");
    var gato = document.getElementById("labelcat");

    perro.addEventListener("click",seleccionar_perro);
    gato.addEventListener("click",seleccionar_gato);
}
function seleccionar_gato(){
    var txt = document.getElementById("reference");
    var perro = document.getElementById("labeldog");
    var gato = document.getElementById("labelcat");
    txt.innerHTML = "Cats";
    gato.style.setProperty("background","rgb(43, 43, 43)");
    txt.style.setProperty("animation-duration", "3s");
    perro.style.setProperty("background","white");
}
function seleccionar_perro(){
    var txt = document.getElementById("reference");
    var perro = document.getElementById("labeldog");
    var gato = document.getElementById("labelcat");
    gato.style.setProperty("background","white");
    txt.innerHTML = "Dogs";
    perro.style.setProperty("background","rgb(43, 43, 43)");
    perro.style.setProperty("transition",".4s");
}


function cargar(){
    var animaciones = ["bounceIn","bounceInDown","bounceInLeft","fadeInDown","fadeIn","flip","flipX","flipY","lightSpeedInRight","zoomIn"];
    return animaciones[Math.floor(Math.random() * 11)];

}


function animation(animacion){
    var txt = document.getElementById("facts");
    txt.style.setProperty("animation", animacion);
    txt.style.setProperty("animation-duration", "5s");
}
function quitar(){
    var txt = document.getElementById("facts");
    txt.style.setProperty("animation-duration", "none");
}

function cambio(dato){
    var txt = document.getElementById("facts");
    var txtfacts = document.getElementById("info");
    txtfacts.style.setProperty("display","none");
        animation(cargar());
        setTimeout(quitar,3000);
    txt.innerHTML = dato;
    
}
var boton = document.getElementById("btn");

const url = "https://cat-fact.herokuapp.com";
var fact = "/facts/random?animal_type=cat&amount=:id";
var seleccion = document.getElementById("labeldog");

const option = {crossDomain:true};
    function facts(){
        console.log("ok");
        if(seleccion.style.getPropertyValue("background") == "white"){
            fact ="/facts/random?animal_type=cat&amount=:id";
        }
        else{
            fact ="/facts/random?animal_type=dog&amount=:id";
        }
        $.get(`${url}${fact.replace(":id",1)}`,option,function(datos){
                cambio(datos.text);
        });
    }
    boton.addEventListener("click",facts);
    gatoperro();

