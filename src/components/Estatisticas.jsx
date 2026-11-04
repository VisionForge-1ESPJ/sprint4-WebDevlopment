import modos from '../data/modos'

function Item({ rotulo, valor }) {
  return (
    <div className="flex flex-col gap-1 rounded-lg bg-gray-50 p-3">
      <span className="text-xs text-gray-500">{rotulo}</span>
      <strong>{valor}</strong>
    </div>
  )
}

function Estatisticas({ capturas }) {
  const total = capturas.length

  const contagemPorModo = modos.map((modo) => ({
    ...modo,
    quantidade: capturas.filter((c) => c.modo === modo.id).length,
  }))

  const modoMaisUsado = contagemPorModo.reduce(
    (maior, atual) => (atual.quantidade > maior.quantidade ? atual : maior),
    contagemPorModo[0],
  )

  const diasDistintos = new Set(capturas.map((c) => new Date(c.data).toLocaleDateString('pt-BR'))).size
  const mediaPorDia = diasDistintos > 0 ? Math.round((total / diasDistintos) * 10) / 10 : 0

  const espacoKb = Math.round(capturas.reduce((soma, c) => soma + c.imagem.length, 0) / 1024)

  return (
    <section className="rounded-xl bg-white p-6 shadow-sm" aria-labelledby="estat-titulo">
      <h2 id="estat-titulo" className="mb-3 text-xl font-bold">
        Estatísticas
      </h2>
      <div className="mb-5 grid grid-cols-2 gap-3">
        <Item rotulo="Total de capturas" valor={total} />
        <Item rotulo="Modo mais usado" valor={total > 0 ? modoMaisUsado.nome : '—'} />
        <Item rotulo="Média por dia" valor={mediaPorDia} />
        <Item rotulo="Espaço usado" valor={`${espacoKb} KB`} />
      </div>

      <div className="flex flex-col gap-2">
        {contagemPorModo.map((modo) => {
          const percentual = total > 0 ? Math.round((modo.quantidade / total) * 100) : 0
          return (
            <div key={modo.id} className="grid grid-cols-[70px_1fr_40px] items-center gap-2.5 text-sm text-gray-600">
              <span>{modo.nome}</span>
              <div className="h-2 overflow-hidden rounded bg-gray-200">
                <div className="h-full" style={{ width: `${percentual}%`, background: modo.cor }} />
              </div>
              <span>{percentual}%</span>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Estatisticas
