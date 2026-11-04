import { Link } from 'react-router-dom'

function NaoEncontrada() {
  return (
    <section className="mx-auto max-w-xl px-4 py-20 text-center">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="mt-2 text-slate-600">Página não encontrada.</p>
      <Link to="/" className="mt-6 inline-block rounded-lg bg-jovi-600 px-5 py-2 font-semibold text-white">
        Voltar ao início
      </Link>
    </section>
  )
}

export default NaoEncontrada
