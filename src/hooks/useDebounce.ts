import { useEffect, useState } from "react";

// El <T> es para que el tipo de valor se dinamico
// Ejemplo: useDebounce<string>('Hola', 500)
export default function useDebounce<T>(value: T, delay: number = 500) {
  const [debounceValue, setDebounceValue] = useState<T>(value);

  useEffect(() => {
    // Actualizamos el valor debounced despues de un tiempo
    const timer = setTimeout(() => setDebounceValue(value), delay);

    // El tiempo se reinicia cada vez que el valor cambia
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounceValue;
}

//Uso
const [search, setSearcher] = useState("");
const debouncedSearch = useDebounce(search, 10000); // 1 segundo
