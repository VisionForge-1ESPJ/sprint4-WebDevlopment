function Lixeira({ lixeira, onRestaurar, onExcluirDefinitivo }) {
  if (lixeira.length === 0) return null

  return (
    <section className="rounded-xl bg-white p-6 shadow-sm" aria-labelledby="lixeira-titulo">
      <h2 id="lixeira-titulo" className="mb-3 text-xl font-bold">
        Lixeira ({lixeira.length})
      </h2>
      <ul className="grid grid-cols-[repeat(auto-fill,minmax(130px,1fr))] gap-4">
        {lixeira.map((item) => (
          <li key={item.id} className="overflow-hidden rounded-lg bg-gray-50">
            <img src={item.imagem} alt="Captura excluída" className="aspect-4/3 w-full object-cover opacity-60" />
            <div className="flex flex-col gap-1 p-2">
              <button
                type="button"
                onClick={() => onRestaurar(item.id)}
                className="rounded-md border border-gray-300 py-1 text-xs"
              >
                Restaurar
              </button>
              <button
                type="button"
                onClick={() => onExcluirDefinitivo(item.id)}
                className="rounded-md border border-gray-300 py-1 text-xs"
              >
                Excluir definitivo
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Lixeira
