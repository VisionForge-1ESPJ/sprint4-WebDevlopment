import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.svg'
import useAuth from '../hooks/useAuth'

const links = [
  { para: '/#solucao', rotulo: 'A Solução' },
  { para: '/#publico', rotulo: 'Público-Alvo' },
  { para: '/#galeria', rotulo: 'Galeria' },
  { para: '/#equipe', rotulo: 'Nossa Equipe' },
  { para: '/#contato', rotulo: 'Contato' },
]

const classeLink = 'rounded-md px-3 py-2 text-sm font-semibold text-white/90 hover:bg-white/10 hover:text-white'

function Header() {
  const [aberto, setAberto] = useState(false)
  const { usuario, sair } = useAuth()
  const navegar = useNavigate()

  function handleSair() {
    sair()
    setAberto(false)
    navegar('/')
  }

  return (
    <header className="sticky top-0 z-20 bg-linear-to-br from-jovi-600 to-jovi-900 text-white shadow-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-2" onClick={() => setAberto(false)}>
          <img src={logo} alt="Logo JOVI Lens: uma câmera" className="h-9 w-9" />
          <span className="text-xl font-bold">JOVI Lens</span>
        </Link>

        <button
          type="button"
          className="rounded-md border border-white/40 px-3 py-1.5 text-sm font-semibold lg:hidden"
          aria-expanded={aberto}
          aria-controls="menu-principal"
          onClick={() => setAberto((a) => !a)}
        >
          {aberto ? 'Fechar' : 'Menu'}
        </button>

        <nav
          id="menu-principal"
          aria-label="Navegação principal"
          className={`${aberto ? 'flex' : 'hidden'} absolute inset-x-0 top-full flex-col gap-1 bg-jovi-900 p-4 lg:static lg:flex lg:flex-row lg:items-center lg:bg-transparent lg:p-0`}
        >
          {links.map((l) => (
            <Link key={l.para} to={l.para} className={classeLink} onClick={() => setAberto(false)}>
              {l.rotulo}
            </Link>
          ))}
          {usuario ? (
            <>
              <NavLink
                to="/app"
                onClick={() => setAberto(false)}
                className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-jovi-700 lg:ml-2"
              >
                Meu painel
              </NavLink>
              <button type="button" onClick={handleSair} className={`${classeLink} text-left`}>
                Sair ({usuario.nome.split(' ')[0]})
              </button>
            </>
          ) : (
            <NavLink
              to="/login"
              onClick={() => setAberto(false)}
              className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-jovi-700 lg:ml-2"
            >
              Entrar
            </NavLink>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Header
