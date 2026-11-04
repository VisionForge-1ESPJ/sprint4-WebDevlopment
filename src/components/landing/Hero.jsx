import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

function Hero() {
  const { usuario } = useAuth()

  return (
    <section className="bg-linear-to-br from-jovi-600 to-jovi-900 px-4 py-16 text-white sm:px-6 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-2">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-white/70">Challenge JOVI 2026</p>
          <h1 className="text-3xl font-bold leading-tight sm:text-5xl">
            A câmera que entende o seu dia de estudante
          </h1>
          <p className="mt-4 max-w-prose text-white/85">
            O JOVI Lens sugere o modo certo para cada momento — estudo, vida social ou auto-expressão — e organiza
            tudo que você captura em um só lugar.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to={usuario ? '/app' : '/login'}
              className="rounded-lg bg-white px-5 py-3 font-semibold text-jovi-700 hover:bg-jovi-50"
            >
              {usuario ? 'Abrir meu painel' : 'Experimentar o protótipo'}
            </Link>
            <Link to="/#solucao" className="rounded-lg border border-white/50 px-5 py-3 font-semibold">
              Conhecer a solução
            </Link>
          </div>
        </div>

        <div className="mx-auto w-48 rounded-4xl border-4 border-white/80 bg-slate-900 p-2 shadow-2xl sm:w-56" aria-hidden="true">
          <div className="flex aspect-9/16 flex-col justify-between rounded-3xl bg-linear-to-b from-violet-500 to-pink-500 p-3">
            <span className="self-start rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-violet-700">
              Modo Social
            </span>
            <div className="mx-auto h-12 w-12 rounded-full border-4 border-white" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
