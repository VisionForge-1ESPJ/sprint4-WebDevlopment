import Secao from './Secao'
import modos from '../../data/modos'

const motivos = {
  estudo: 'Fotografar quadros, slides e anotações sem perder tempo ajustando a câmera.',
  social: 'Registrar momentos rápidos com os amigos, no calor da hora.',
  perfil: 'Selfies e conteúdo de auto-expressão com realce pensado para isso.',
}

function PublicoAlvo() {
  return (
    <Secao
      id="publico"
      titulo="Público-Alvo"
      subtitulo="Estudantes full-time, focados em estudos, interações sociais e auto-expressão. É um público que usa a câmera o dia inteiro, em contextos muito diferentes."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {modos.map((m) => (
          <article
            key={m.id}
            className="rounded-xl border-t-4 bg-white p-5 shadow-sm"
            style={{ borderColor: m.cor }}
          >
            <h3 className="text-lg font-semibold" style={{ color: m.cor }}>
              {m.nome}
            </h3>
            <p className="mt-2 text-slate-600">{motivos[m.id]}</p>
          </article>
        ))}
      </div>
    </Secao>
  )
}

export default PublicoAlvo
