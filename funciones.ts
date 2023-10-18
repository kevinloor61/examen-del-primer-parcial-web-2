import { Isoftware} from "./interfaz";

 export function filtrar(price: number) {
    const filteredSoftware = Isoftware.filter((Software: Isoftware) => filteredSoftware.price > price);
  
    if (filteredSoftware.length > 0) {
      console.log("precio del software encontrado:");
      console.log(filteredSoftware);
    } else {
      console.log("precio del software no encontrado.");
    }
  }