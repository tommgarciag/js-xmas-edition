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
}

probarValidarNombre();

function probarValidarCiudad(){
    console.assert(
        validarCiudad('') === 'Este campo no puede estar vacio', 'Validar ciudad no validó que la ciudad no sea vacío',
    );

    console.assert(validarCiudad('Chubut') === '', 'validarCiudad fallo con un nombre de ciudad valida',);
}

probarValidarCiudad();


function probarValidarDescripcionRegalo(){
    console.assert(
        validarDescripcionRegalo('') === 'Este campo debe tener al menos 1 caracter', 'Validar descripcion regalo no valido que el campo sea vacío',
    );
    console.assert(
        validarDescripcionRegalo('111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') === 'Este campo debe tener menos de 100 caracteres', 'Validar descripcion regalo no valido que la descripcion sea menor a 100 caracteres',
    );

    console.assert(validarDescripcionRegalo('*@_+[}{') === "Este campo solo puede contener numeros y letras" , "validarDescripcionRegalo no valido que el campo solo contenga numeros y letras",
    );

    console.assert(validarDescripcionRegalo('Me gustaria una bicicleta nueva') === '', 'validarDescripcionRegalo fallo con una descripcion valida',);
}

probarValidarDescripcionRegalo();
