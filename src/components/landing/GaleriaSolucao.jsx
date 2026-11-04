import Secao from './Secao'
import modos from '../../data/modos'

const telas = [
  { id: 'estudo', legenda: 'Modo Estudo: foco em quadros e anotações', detalhe: 'Aa' },
  { id: 'social', legenda: 'Modo Social: momentos rápidos com amigos', detalhe: '✦' },
  { id: 'perfil', legenda: 'Modo Perfil: realce para selfies', detalhe: '☺' },
]

function GaleriaSolucao() {
  return (
    <Secao
      id="galeria"
      titulo="Galeria"
      subtitulo="Mockups das telas do protótipo em cada modo de captura."
      fundo="bg-white"
    >
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {telas.map((t) => {
          const modo = modos.find((m) => m.id === t.id)
          return (
            <li key={t.id}>
              <figure className="flex flex-col items-center">
                <div className="w-40 rounded-4xl border-4 border-slate-800 bg-slate-800 p-1.5 shadow-lg">
                  <div
                    className="flex aspect-9/16 flex-col items-center justify-between rounded-3xl p-3 text-white"
                    style={{ background: `linear-gradient(160deg, ${modo.cor}, #111827)` }}
                    role="img"
                    aria-label={t.legenda}
                  >
                    <span className="rounded-full bg-white/90 px-3 py-0.5 text-xs font-bold" style={{ color: modo.cor }}>
                      {modo.nome}
                    </span>
                    <span className="text-5xl font-bold opacity-80">{t.detalhe}</span>
                    <span className="h-10 w-10 rounded-full border-4 border-white" />
                  </div>
                </div>
                <figcaption className="mt-3 text-center text-sm text-slate-600">{t.legenda}</figcaption>
              </figure>
            </li>
          )
        })}
      </ul>
    </Secao>
  )
}

export default GaleriaSolucao
