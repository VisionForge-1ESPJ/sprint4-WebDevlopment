import { useState } from 'react'
import modos from '../data/modos'
import CapturaItem from './CapturaItem'

function Galeria({ capturas, albuns, onExcluir, onMoverAlbum }) {
  const [busca, setBusca] = useState('')

  const recentesIds = new Set(capturas.slice(0, 3).map((c) => c.id))

  const termo = busca.trim().toLowerCase()
  const filtradas = termo
    ? capturas.filter((c) => {
        const nomeModo = modos.find((m) => m.id === c.modo)?.nome ?? c.modo
        const nomeAlbum = albuns.find((a) => a.id === c.albumId)?.nome ?? ''
        return (
          nomeModo.toLowerCase().includes(termo) ||
          nomeAlbum.toLowerCase().includes(termo) ||
          c.origem.toLowerCase().includes(termo)
        )
      })
    : capturas

  return (
    <section className="rounded-xl bg-white p-6 shadow-sm" aria-labelledby="galeria-app-titulo">
      <h2 id="galeria-app-titulo" className="mb-3 text-xl font-bold">
        Central de conteúdo ({capturas.length})
      </h2>

      <input
        type="search"
        aria-label="Buscar capturas"
        placeholder="Buscar por modo, álbum ou origem..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        className="mb-4 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
      />

      {capturas.length === 0 ? (
        <p className="text-gray-500">Nenhuma captura ainda. Tire a primeira foto ao lado.</p>
      ) : filtradas.length === 0 ? (
        <p className="text-gray-500">Nenhuma captura encontrada para "{busca}".</p>
      ) : (
        <ul className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-4">
          {filtradas.map((captura) => (
            <CapturaItem
              key={captura.id}
              captura={captura}
              albuns={albuns}
              onExcluir={onExcluir}
              onMoverAlbum={onMoverAlbum}
              destaque={recentesIds.has(captura.id)}
            />
          ))}
        </ul>
      )}
    </section>
  )
}

export default Galeria
