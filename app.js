// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
/*PASO 1
Inicia declarando una variable de tipo array, que almacenará los nombres de los amigos ingresados */
let amigos=[]

function agregarAmigo(){
    //extraemos el nombre ingresado
    let amigoIngresado=document.getElementById('amigo').value;

    if(amigoIngresado==""){
        alert("Ingrese el Nombre de un Amigo!!, no puede quedar en blanco");
    }else{

        //validamos que no exista un amigo repetido
        if(amigos.includes(amigoIngresado)){
            alert('Este amigo ya existe, no repita nombres!!');
        }else{
            //ingresamos el amigo a nuestro array.
            amigos.push(amigoIngresado);
            console.log(amigos);
            //mostramos la lista de amigos que se agrega cada vez
            mostrarListaAmigo();
            
        }
    }
    limpiarCaja();
    return;
}

/*funcion para limpiar caja de texto INPUT*/
function limpiarCaja(){
    document.querySelector('#amigo').value='';
    return;
}



//listamos todos los amigos ingresados, mediante con la ayuda del ciclo for
function mostrarListaAmigo() {

    let listaAmigos = document.querySelector("#listaAmigos");
    listaAmigos.innerHTML = "";
  
    for (let index = 0; index < amigos.length; index++) {
      const elemento = amigos[index];
  
      let listaHTML = document.createElement("li");
      listaHTML.textContent = elemento;
      listaAmigos.appendChild(listaHTML);
    }

}

function sortearAmigo(){
    //validamos si existen más de 1 amigo ingresado.
    if(amigos.length>1){
        let sorteo = Math.floor(Math.random() * amigos.length);
        let amigoSecreto = amigos[sorteo];
     resultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
        return;
    }
}

//reiniciamos el sorteo
function ReiniciaJuego(){
    location.reload();
    amigos.splice(0,amigos.length);
    console.log(amigos);
}