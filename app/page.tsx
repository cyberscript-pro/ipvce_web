"use client"
import { useRouter } from "next/navigation";
import Header from "./components/header";
import Item from "./components/item";

export default function Home() {
  
  const router = useRouter();
  
  return (
    <div>
      <Header />
      <main className="p-2">
        <p className="text-lg mt-22 italic text-pretty">📌 Bienvenido al sitio web del IPVCE Carlos Marx de la provincia de Matanzas.</p>
        
        <h2 className="my-3 text-xl italic">Secciones: </h2>

        <nav className="flex flex-col space-x-6 mt-4">
          
          <Item 
            ruta="/informacion-general"
            src="doc.svg"
            alt="informacion"
            title="Información General"
          />
          

          <Item 
            ruta="/orden-interno"
            src="doc.svg"
            alt="orden-interno"
            title="Orden Interno"
          />

          <Item 
            ruta="/ciencia"
            src="doc.svg"
            alt="ciencia"
            title="Ciencia"
          />

          <Item 
            ruta="/deporte"
            src="doc.svg"
            alt="deporte"
            title="Deporte"
          />

          <Item 
            ruta="/cultura"
            src="doc.svg"
            alt="cultura"
            title="Cultura"
          />

          <Item 
            ruta="/concursos"
            src="doc.svg"
            alt="concursos"
            title="Concursos"
          />

          <Item 
            ruta="/rincon-egresados"
            src="doc.svg"
            alt="egresados"
            title="Rincon de los Egresados"
          />

          <Item 
            ruta="/biblioteca-digital"
            src="doc.svg"
            alt="biblioteca"
            title="Biblioteca Digital"
          />

          <Item 
            ruta="/encuestas"
            src="doc.svg"
            alt="encuestas"
            title="Encuestas"
          />

          <Item 
            ruta="/sugerencias"
            src="doc.svg"
            alt="sugerencias"
            title="Sugerencias"
          />
        </nav>
      </main>
    </div>
  );
}
