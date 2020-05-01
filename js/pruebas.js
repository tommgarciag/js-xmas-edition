function probarValidarNombre() {
    console.assert(
        validarNombre('') === 'Este campo debe tener al menos 1 caracter',
        'Validar nombre no validó que el nombre no sea vacío',
    );
  
    console.assert(
        validarNombre(
            '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
        'Este campo debe tener menos de 50 caracteres',
        'Validar nombre no validó que el nombre sea menor a 50 caracteres',
    );
  
    console.assert(
        validarNombre('sdfs3312') === 'Este campo debe contener solo letras',
        'validarNombre no valido que el campo contenga solo letras',
    );
  
    console.assert(validarNombre('tomas') === '', 'validarNombre fallo con un nombre valido',);
  }
  
  probarValidarNombre();