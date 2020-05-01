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

function validarFormulario(event){
    const $form = document.querySelector("#carta-a-santa");

    const nombre = $form.nombre.value;
    const errorNombre = validarNombre(nombre);

    const errores = {
        nombre: errorNombre,
    }

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
            
            

            $errores.appendChild($error);

        }else {
            $form[key].className = '';
            
        }

    });
}

const $form = document.querySelector("#carta-a-santa"); 
$form.onsubmit = validarFormulario;
