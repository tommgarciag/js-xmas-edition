function validarNombre(nombre){
    if(nombre.length === 0){
        return "Este campo debe tener al menos 1 caracter";
    }
    if(nombre.length >= 50) {
        return "Este campo debe tener menos de 50 caracteres";
    }

    if(!/^[a-z]+$/i.test(nombre)){    // if not RegEx
        return "Este campo debe contener solo letras";
    }
    
    return "";
    
}

function validarCiudad(ciudad){
    if (ciudad.length === 0){
        return "Este campo no puede estar vacio";
    }
    
    return "";
}

function validarDescripcionRegalo(descripcionRegalo){
    if (descripcionRegalo.length === 0){
        return "Este campo debe tener al menos 1 caracter";
    }else if (descripcionRegalo.length >= 100) {
        return "Este campo debe tener menos de 100 caracteres";
    }else if (!/^[A-z0-9,\. ]+$/.test(descripcionRegalo)){         
        return "Este campo solo puede contener numeros y letras";
    }else{ return "" ;}
}


function validarFormulario(event){
    const $form = document.querySelector("#carta-a-santa");

    const nombre = $form.nombre.value;
    const ciudad = $form.ciudad.value;
    const descripcionRegalo = $form["descripcion-regalo"].value;
    const errorNombre = validarNombre(nombre);
    const errorCiudad = validarCiudad(ciudad);
    const errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo);

    const errores = {
        nombre: errorNombre,
        ciudad: errorCiudad,
        "descripcion-regalo": errorDescripcionRegalo,
    }

    borrarErroresAnteriores();

    manejarErrores(errores);

    event.preventDefault();
}

function manejarErrores(errores){
    const keys = Object.keys(errores);
    

    keys.forEach(function(key){
        const error = errores[key];
        const $errores = document.querySelector("#errores");
        if (error){

            $form[key].className = "error";

            const $error = document.createElement('li');
            $error.innerText = error;
            $error.className = 'liError';
            
            

            $errores.appendChild($error);

        }else {
            $form[key].className = '';
            
        }

    });
}


function borrarErroresAnteriores(){
    const $error = document.querySelectorAll(".liError");
    for (let i=0; i< $error.length; i++){
        $error[i].remove();
    }
}

const $form = document.querySelector("#carta-a-santa"); 
$form.onsubmit = validarFormulario;
