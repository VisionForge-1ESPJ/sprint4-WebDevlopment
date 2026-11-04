import equipe from '../data/equipe'

function Footer() {
  const ano = new Date().getFullYear()

  return (
    <footer className="p-6 text-center text-sm text-slate-500">
      <p>JOVI Lens &copy; {ano} — Challenge JOVI · Web Development e Front-End Design</p>
      <ul className="mt-2 flex flex-wrap justify-center gap-x-4 gap-y-1">
        {equipe.map((integrante) => (
          <li key={integrante.rm}>
            {integrante.nome} — {integrante.rm}
          </li>
        ))}
      </ul>
    </footer>
  )
}

export default Footer
