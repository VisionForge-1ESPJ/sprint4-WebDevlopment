import Secao from './Secao'
import equipe from '../../data/equipe'

function iniciais(nome) {
  return nome
    .split(' ')
    .map((p) => p[0])
    .slice(0, 2)
    .join('')
}

function Equipe() {
  return (
    <Secao id="equipe" titulo="Nossa Equipe" subtitulo="Quem desenvolveu o JOVI Lens.">
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {equipe.map((p) => (
          <li key={p.rm}>
            <article className="h-full rounded-xl bg-white p-5 shadow-sm">
              <div
                className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-jovi-600 font-bold text-white"
                aria-hidden="true"
              >
                {iniciais(p.nome)}
              </div>
              <h3 className="font-semibold">{p.nome}</h3>
              <p className="text-xs text-slate-500">{p.rm}</p>
              <p className="mt-1 text-sm font-semibold text-jovi-600">{p.funcao}</p>
              <p className="mt-1 text-sm text-slate-600">{p.descricao}</p>
            </article>
          </li>
        ))}
      </ul>
    </Secao>
  )
}

export default Equipe
