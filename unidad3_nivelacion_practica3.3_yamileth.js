let edad2 = 20; 
let tieneCredencial = true;

// AND (&&) 
if (edad2 >= 18 && tieneCredencial) { 
  console.log("Puede votar"); 
}

// OR (||)
let esFinDeSemana = false; 
let esVacaciones = true; 
if (esFinDeSemana || esVacaciones) { 
  console.log("¡No hay clases!"); 
}

// NOT (!)
let lloviendo = false; 
if (!lloviendo) { 
  console.log("Podemos salir al patio"); 
}