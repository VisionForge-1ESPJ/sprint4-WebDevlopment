import modos from '../data/modos'

function CapturaItem({ captura, albuns, onExcluir, onMoverAlbum, destaque }) {
  const modoInfo = modos.find((m) => m.id === captura.modo)
  const dataFormatada = new Date(captura.data).toLocaleString('pt-BR')

  return (
    <li
      className={`flex flex-col overflow-hidden rounded-lg bg-gray-50 ${destaque ? 'outline-2 -outline-offset-2 outline-jovi-600' : ''}`}
    >
      <img
        src={captura.imagem}
        alt={`Captura no modo ${modoInfo?.nome ?? captura.modo}`}
        className="aspect-4/3 w-full object-cover"
      />
      <div className="flex items-center justify-between gap-1.5 px-2.5 pt-2 pb-1">
        <span
          className="rounded-full px-2 py-0.5 text-[0.7rem] font-bold text-white"
          style={{ background: modoInfo?.cor ?? '#6b7280' }}
        >
          {modoInfo?.nome ?? captura.modo}
        </span>
        <span className="text-[0.7rem] text-gray-500">{dataFormatada}</span>
      </div>
      <div className="flex items-center gap-1.5 px-2.5 pb-2.5">
        <select
          aria-label="Mover para álbum"
          className="min-w-0 flex-1 rounded-md border border-gray-300 p-1 text-xs"
          value={captura.albumId ?? ''}
          onChange={(e) => onMoverAlbum(captura.id, e.target.value ? Number(e.target.value) : null)}
        >
          <option value="">Sem álbum</option>
          {albuns.map((a) => (
            <option key={a.id} value={a.id}>
              {a.nome}
            </option>
          ))}
        </select>
        <button
          type="button"
          onClick={() => onExcluir(captura.id)}
          title="Excluir"
          aria-label="Excluir captura"
          className="rounded-md border border-gray-300 px-2 py-0.5"
        >
          ✕
        </button>
      </div>
    </li>
  )
}

export default CapturaItem
