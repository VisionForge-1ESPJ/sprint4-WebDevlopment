import { useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const campo = 'w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-jovi-600 focus:outline-none'

function Login() {
  const { usuario, entrar, cadastrar } = useAuth()
  const navegar = useNavigate()
  const local = useLocation()
  const destino = local.state?.de ?? '/app'

  const [modoCadastro, setModoCadastro] = useState(false)
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState('')

  if (usuario) return <Navigate to={destino} replace />

  function handleSubmit(evento) {
    evento.preventDefault()
    setErro('')

    if (modoCadastro && nome.trim().length < 2) return setErro('Informe seu nome.')
    if (!/^\S+@\S+\.\S+$/.test(email)) return setErro('Informe um e-mail válido.')
    if (senha.length < 6) return setErro('A senha deve ter ao menos 6 caracteres.')

    const resultado = modoCadastro ? cadastrar(nome, email, senha) : entrar(email, senha)
    if (!resultado.ok) return setErro(resultado.erro)
    navegar(destino, { replace: true })
  }

  return (
    <section className="mx-auto max-w-md px-4 py-12">
      <div className="rounded-xl bg-white p-6 shadow">
        <h1 className="text-2xl font-bold">{modoCadastro ? 'Criar conta' : 'Entrar'}</h1>
        <p className="mb-4 text-sm text-slate-500">Acesse o painel do JOVI Lens para usar a câmera e a galeria.</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3" noValidate>
          {modoCadastro && (
            <label className="text-sm font-semibold">
              Nome
              <input className={`${campo} mt-1 font-normal`} value={nome} onChange={(e) => setNome(e.target.value)} />
            </label>
          )}
          <label className="text-sm font-semibold">
            E-mail
            <input
              type="email"
              className={`${campo} mt-1 font-normal`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="text-sm font-semibold">
            Senha
            <input
              type="password"
              className={`${campo} mt-1 font-normal`}
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </label>

          {erro && (
            <p role="alert" className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">
              {erro}
            </p>
          )}

          <button type="submit" className="rounded-lg bg-jovi-600 py-2.5 font-semibold text-white hover:bg-jovi-700">
            {modoCadastro ? 'Cadastrar' : 'Entrar'}
          </button>
        </form>

        <button
          type="button"
          className="mt-4 text-sm font-semibold text-jovi-600 underline"
          onClick={() => {
            setModoCadastro((m) => !m)
            setErro('')
          }}
        >
          {modoCadastro ? 'Já tenho conta' : 'Não tenho conta — cadastrar'}
        </button>

        {!modoCadastro && (
          <p className="mt-4 rounded-lg bg-jovi-50 p-3 text-xs text-slate-600">
            Conta de teste: <strong>aluno@jovi.com</strong> / <strong>jovi123</strong>
          </p>
        )}
      </div>
    </section>
  )
}

export default Login
