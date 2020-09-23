// class persona{
//     constructor(nombre,edad,altura,profesion){
//         this.nombre = nombre;
//         this.edad = edad;
//         this.altura = altura;
//         this.profesion = profesion;
//     }
//     saludar(fn){
//         fn(this.nombre,this.profesion);    
//         console.log(`hola mi nombre es ${this.nombre} y tengo ${this.edad}`)
//     }
//     soyalto(){
//         this.altura > 180?console.log(`soy ALTO porque mido ${this.altura}`):console.log(`NO soy alto porque mido ${this.altura}`);
//     }
// }
// class desarrollador extends persona{
//     constructor(nombre,edad,altura,profesion){
//         super(nombre,edad,altura,profesion);
//     }
//     saludar(fn){
//         fn(this.nombre,this.profesion);
//         console.log(`hola mi nombre es ${this.nombre} y tego ${this.edad} SOY DEV`);
//     }
// }
// function mas_datos(nombre,profesion){
//     console.log(`hola soy ${nombre} y soy ${profesion}`);
// }

// var juan = new persona("juan pablo", 18, 190,"profesor");
// var pedro = new desarrollador("pedro",18,175,"front-end");

// juan.saludar(mas_datos);
// pedro.saludar(mas_datos);

// var datos = [1,2,3,4,5,6,7,8,9];
// //transform
// var x10 = (numeros) => numeros*10;
// var por10 = datos.map(x10);
// console.log(por10);

// //reduce
// var suma = (numeros,contador) => contador+=numeros;
// var unn = datos.reduce(suma,0);
// console.log(unn);

// //fiter
//  var mq5 = (numeros) => numeros<5; 
//  var datos_m5 = datos.filter(mq5);
//  console.log(datos_m5);
//-----------------------------------------------------------
// const apiurl = "https://swapi.dev/api/";
// const peopleurl ="people/:id";
// const option = { crossDomain:true }

// function obtener_per(id, callback){
//     var persona = `${apiurl}${peopleurl.replace(":id",id)}`;

//     $.get(persona,option,callback).fail(() => console.log("eroorrr!!! no existe"+id)/*es un metodo fail para errores en el call que recibe otro call(otra funcion)*/);//primer callback
// }


// obtener_per(1,function(persona){
//     console.log(persona.url.replace("http://swapi.dev/api/people","")); 
//     obtener_per(2,function(persona){
//         console.log(persona.url.replace("http://swapi.dev/api/people",""));
//         obtener_per(3,function(persona){
//             console.log(persona.url.replace("http://swapi.dev/api/people",""));
//             obtener_per(4,function(persona){
//                 console.log(persona.url.replace("http://swapi.dev/api/people",""));
//                 obtener_per(5,function(persona){
//                     console.log(persona.url.replace("http://swapi.dev/api/people",""));
//                 });
//             });
//         });
//     });
// });
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

