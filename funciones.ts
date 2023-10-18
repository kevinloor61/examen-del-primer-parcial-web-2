import { Isoftware} from "./interfaz";

// Función que filtra los software por precio
export function filtrar(filteredSoftware: Isoftware[], price: Number): Isoftware[] {
  return filteredSoftware.filter((Software) => Software.price <= price);
}

// Llamada a la función con un precio referencial de 12
const filteredSoftware = filtrar(Isoftware, 12);
console.log(filteredSoftware);


// Función de callback para mostrar los elementos encontrados por consola
function mostrar(filteredItems: Isoftware[]): void {
  console.log("Elementos encontrados:");
  console.log(filteredItems);
}

// Llamada a la función de callback para mostrar los elementos encontrados por consola
mostrar(filteredSoftware);
