import { useState } from 'react'

function Albuns({ albuns, capturas, onCriar }) {
  const [nome, setNome] = useState('')

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
        <ul className="flex flex-wrap gap-2">
          {albuns.map((album) => {
            const quantidade = capturas.filter((c) => c.albumId === album.id).length
            return (
              <li
                key={album.id}
                className="rounded-full px-3 py-1 text-sm font-semibold text-white"
                style={{ background: album.cor }}
              >
                {album.nome} <span className="font-normal opacity-85">({quantidade})</span>
              </li>
            )
          })}
        </ul>
      )}
    </section>
  )
}

export default Albuns
