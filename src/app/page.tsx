import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">Página Principal</h1>
      <Link href="/page">
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">
          Ir a Página de Prueba
        </button>
      </Link>

      <Link href="/otra-prueba">
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">
          Ir a Página de Prueba
        </button>
      </Link>
    </div>
  );
}
