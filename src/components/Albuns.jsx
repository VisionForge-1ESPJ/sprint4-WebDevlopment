import { useState } from 'react'
import modos from '../data/modos'

function Albuns({ albuns, capturas, onCriar, onMoverAlbum }) {
  const [nome, setNome] = useState('')
  const [selecionadoId, setSelecionadoId] = useState(null)

  // se o álbum selecionado não existir mais, cai no primeiro da lista
  const selecionado = albuns.find((a) => a.id === selecionadoId) ?? albuns[0]
  const doAlbum = selecionado ? capturas.filter((c) => c.albumId === selecionado.id) : []

  function handleSubmit(evento) {
    evento.preventDefault()
    if (!nome.trim()) return
    onCriar(nome.trim())
    setNome('')
  }

  return (
    <section className="rounded-xl bg-white p-6 shadow-sm" aria-labelledby="albuns-titulo">
      <h2 id="albuns-titulo" className="mb-3 text-xl font-bold">
        Álbuns
      </h2>

      <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
        <input
          type="text"
          aria-label="Nome do novo álbum"
          placeholder="Nome do novo álbum (ex: Trabalho de Bio)"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="min-w-0 flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm"
        />
        <button type="submit" className="rounded-lg bg-jovi-600 px-4 py-2 font-semibold text-white hover:bg-jovi-700">
          Criar
        </button>
      </form>

      {albuns.length === 0 ? (
        <p className="text-gray-500">Nenhum álbum criado ainda. Organize suas capturas em álbuns.</p>
      ) : (
        <>
          <ul className="flex flex-wrap gap-2">
            {albuns.map((album) => {
              const quantidade = capturas.filter((c) => c.albumId === album.id).length
              const ativo = album.id === selecionado.id
              return (
                <li key={album.id}>
                  <button
                    type="button"
                    aria-pressed={ativo}
                    onClick={() => setSelecionadoId(album.id)}
                    className={`rounded-full border-2 px-3 py-1 text-sm font-semibold ${ativo ? 'text-white' : 'bg-white'}`}
                    style={{ borderColor: album.cor, background: ativo ? album.cor : undefined, color: ativo ? undefined : album.cor }}
                  >
                    {album.nome} <span className="font-normal opacity-85">({quantidade})</span>
                  </button>
                </li>
              )
            })}
          </ul>

          <div className="mt-4 border-t border-gray-200 pt-4" aria-live="polite">
            <h3 className="mb-3 font-semibold" style={{ color: selecionado.cor }}>
              Conteúdo do álbum "{selecionado.nome}" ({doAlbum.length})
            </h3>
            {doAlbum.length === 0 ? (
              <p className="text-sm text-gray-500">
                Este álbum está vazio. Use o seletor "Mover para álbum" em uma captura da central de conteúdo.
              </p>
            ) : (
              <ul className="grid grid-cols-[repeat(auto-fill,minmax(110px,1fr))] gap-3">
                {doAlbum.map((captura) => {
                  const modoInfo = modos.find((m) => m.id === captura.modo)
                  return (
                    <li key={captura.id} className="overflow-hidden rounded-lg bg-gray-50">
                      <img
                        src={captura.imagem}
                        alt={`Captura no modo ${modoInfo?.nome ?? captura.modo}`}
                        className="aspect-4/3 w-full object-cover"
                      />
                      <div className="flex flex-col gap-1 p-1.5">
                        <span className="text-[0.7rem] text-gray-500">
                          {modoInfo?.nome ?? captura.modo} · {new Date(captura.data).toLocaleDateString('pt-BR')}
                        </span>
                        <button
                          type="button"
                          onClick={() => onMoverAlbum(captura.id, null)}
                          className="rounded-md border border-gray-300 py-0.5 text-xs"
                        >
                          Tirar do álbum
                        </button>
                      </div>
                    </li>
                  )
                })}
              </ul>
            )}
          </div>
        </>
      )}
    </section>
  )
}

export default Albuns
