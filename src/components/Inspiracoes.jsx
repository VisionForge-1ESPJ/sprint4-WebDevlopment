import { useState } from 'react'
import modos from '../data/modos'
import useInspiracoes from '../hooks/useInspiracoes'
import useLocalStorage from '../hooks/useLocalStorage'

function Inspiracoes() {
  const [modoId, setModoId] = useState(modos[0].id)
  const [favoritos, setFavoritos] = useLocalStorage('favoritos_inspiracao', [])
  const { fotos, carregando, erro, recarregar } = useInspiracoes(modoId)

  const modo = modos.find((m) => m.id === modoId)

  function alternarFavorito(id) {
    setFavoritos((atual) => (atual.includes(id) ? atual.filter((f) => f !== id) : [...atual, id]))
  }

  return (
    <section className="rounded-xl bg-white p-6 shadow-sm" aria-labelledby="inspiracoes-titulo">
      <h2 id="inspiracoes-titulo" className="mb-1 text-xl font-bold">
        Inspirações de enquadramento
      </h2>
      <p className="mb-3 text-sm text-slate-500">
        Fotos de referência de fotógrafos reais (API Lorem Picsum) para você se inspirar antes de capturar no modo{' '}
        <strong style={{ color: modo.cor }}>{modo.nome}</strong>.
      </p>

      <div className="mb-4 flex flex-wrap gap-2">
        {modos.map((m) => {
          const ativo = modoId === m.id
          return (
            <button
              key={m.id}
              type="button"
              aria-pressed={ativo}
              onClick={() => setModoId(m.id)}
              className="rounded-full border-2 px-3 py-1 text-xs font-semibold"
              style={{ borderColor: m.cor, color: ativo ? '#fff' : m.cor, background: ativo ? m.cor : '#fff' }}
            >
              {m.nome}
            </button>
          )
        })}
      </div>

      {carregando && <p className="text-sm text-slate-500">Carregando referências...</p>}

      {erro && !carregando && (
        <p role="alert" className="text-sm text-red-700">
          Não foi possível carregar as inspirações.{' '}
          <button type="button" onClick={recarregar} className="font-semibold underline">
            Tentar de novo
          </button>
        </p>
      )}

      {!carregando && !erro && (
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {fotos.map((foto) => {
            const favorito = favoritos.includes(foto.id)
            return (
              <li key={foto.id} className="overflow-hidden rounded-lg bg-gray-50">
                <img
                  src={foto.imagem}
                  alt={`Foto de referência de ${foto.autor}`}
                  loading="lazy"
                  className="aspect-4/3 w-full object-cover"
                />
                <div className="flex items-center justify-between gap-1 p-2">
                  <span className="truncate text-xs text-slate-600">{foto.autor}</span>
                  <button
                    type="button"
                    onClick={() => alternarFavorito(foto.id)}
                    aria-pressed={favorito}
                    aria-label={favorito ? 'Remover dos favoritos' : 'Salvar nos favoritos'}
                    className={`text-lg leading-none ${favorito ? 'text-pink-600' : 'text-gray-400'}`}
                  >
                    {favorito ? '♥' : '♡'}
                  </button>
                </div>
              </li>
            )
          })}
        </ul>
      )}

      <p className="mt-3 text-xs text-slate-500">Favoritas salvas: {favoritos.length}</p>
    </section>
  )
}

export default Inspiracoes
