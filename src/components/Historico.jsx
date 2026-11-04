const rotulos = {
  adicionado: 'Adicionado',
  editado: 'Editado',
  removido: 'Removido',
  restaurado: 'Restaurado',
}

const cores = {
  adicionado: 'bg-green-100 text-green-700',
  removido: 'bg-red-100 text-red-700',
  restaurado: 'bg-blue-100 text-blue-700',
}

function Historico({ historico }) {
  return (
    <section className="rounded-xl bg-white p-6 shadow-sm" aria-labelledby="historico-titulo">
      <h2 id="historico-titulo" className="mb-3 text-xl font-bold">
        Histórico de ações
      </h2>
      {historico.length === 0 ? (
        <p className="text-gray-500">Nenhuma ação registrada ainda.</p>
      ) : (
        <ul className="flex flex-col gap-2">
          {historico.slice(0, 10).map((item) => (
            <li
              key={item.id}
              className="grid grid-cols-[auto_1fr] items-center gap-x-2.5 gap-y-1 rounded-lg bg-gray-50 px-2.5 py-2 text-sm sm:grid-cols-[auto_1fr_auto]"
            >
              <span
                className={`rounded-full px-2 py-0.5 text-[0.7rem] font-bold uppercase ${cores[item.acao] ?? 'bg-gray-200 text-gray-700'}`}
              >
                {rotulos[item.acao] ?? item.acao}
              </span>
              <span>{item.descricao}</span>
              <span className="col-span-2 text-xs whitespace-nowrap text-gray-400 sm:col-span-1">
                {new Date(item.data).toLocaleString('pt-BR')}
              </span>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default Historico
