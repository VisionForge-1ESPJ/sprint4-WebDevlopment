import { useState } from 'react'
import modos from '../data/modos'

function sugerir() {
  const modo = modos[Math.floor(Math.random() * modos.length)]
  const confianca = Math.round(60 + Math.random() * 35)
  return { modo, confianca }
}

function SugestaoModo() {
  const [sugestao, setSugestao] = useState(sugerir)
  const { modo, confianca } = sugestao

  return (
    <section
      className="rounded-xl border-l-4 bg-white p-6 shadow-sm"
      style={{ borderColor: modo.cor }}
      aria-labelledby="sugestao-titulo"
    >
      <h2 id="sugestao-titulo" className="mb-2 text-xl font-bold">
        Sugestão inteligente
      </h2>
      <p className="text-slate-700">
        A câmera identificou o contexto e sugere o modo <strong>{modo.nome}</strong> — {modo.descricao}
      </p>
      <div className="my-3 flex items-center gap-3 text-sm text-slate-500">
        <div className="h-2 flex-1 overflow-hidden rounded bg-slate-200">
          <div className="h-full" style={{ width: `${confianca}%`, background: modo.cor }} />
        </div>
        <span>{confianca}% de confiança</span>
      </div>
      <button
        type="button"
        onClick={() => setSugestao(sugerir())}
        className="rounded-lg border px-3 py-1.5 text-sm font-semibold"
        style={{ borderColor: modo.cor, color: modo.cor }}
      >
        Nova sugestão
      </button>
    </section>
  )
}

export default SugestaoModo
