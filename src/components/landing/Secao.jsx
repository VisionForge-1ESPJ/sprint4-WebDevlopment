// Moldura padrão das seções da landing page (section semântica + título)
function Secao({ id, titulo, subtitulo, fundo = 'bg-slate-100', children }) {
  return (
    <section id={id} aria-labelledby={`${id}-titulo`} className={`${fundo} scroll-mt-16 px-4 py-14 sm:px-6`}>
      <div className="mx-auto max-w-6xl">
        <header className="mb-8 max-w-2xl">
          <h2 id={`${id}-titulo`} className="text-2xl font-bold sm:text-3xl">
            {titulo}
          </h2>
          {subtitulo && <p className="mt-2 text-slate-600">{subtitulo}</p>}
        </header>
        {children}
      </div>
    </section>
  )
}

export default Secao
