import { useState } from 'react'
import Secao from './Secao'
import useContato from '../../hooks/useContato'

const campo = 'mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 font-normal focus:border-jovi-600 focus:outline-none'

function Contato() {
  const { status, protocolo, enviar } = useContato()
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [mensagem, setMensagem] = useState('')
  const [erro, setErro] = useState('')

  async function handleSubmit(evento) {
    evento.preventDefault()
    if (nome.trim().length < 2) return setErro('Informe seu nome.')
    if (!/^\S+@\S+\.\S+$/.test(email)) return setErro('Informe um e-mail válido.')
    if (mensagem.trim().length < 10) return setErro('A mensagem deve ter ao menos 10 caracteres.')
    setErro('')

    const ok = await enviar({ nome: nome.trim(), email: email.trim(), mensagem: mensagem.trim() })
    if (ok) {
      setNome('')
      setEmail('')
      setMensagem('')
    }
  }

  return (
    <Secao
      id="contato"
      titulo="Contato"
      subtitulo="Dúvidas, ideias ou feedback sobre o JOVI Lens? Fale com a gente."
      fundo="bg-white"
    >
      <div className="grid gap-8 md:grid-cols-2">
        <form onSubmit={handleSubmit} className="flex flex-col gap-3" noValidate>
          <label className="text-sm font-semibold">
            Nome
            <input className={campo} value={nome} onChange={(e) => setNome(e.target.value)} />
          </label>
          <label className="text-sm font-semibold">
            E-mail
            <input type="email" className={campo} value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label className="text-sm font-semibold">
            Mensagem
            <textarea rows={4} className={campo} value={mensagem} onChange={(e) => setMensagem(e.target.value)} />
          </label>

          {erro && (
            <p role="alert" className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">
              {erro}
            </p>
          )}
          {status === 'erro' && (
            <p role="alert" className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">
              Não foi possível enviar agora. Tente novamente.
            </p>
          )}
          {status === 'sucesso' && (
            <p role="status" className="rounded-lg bg-green-50 px-3 py-2 text-sm text-green-700">
              Mensagem enviada! Protocolo #{protocolo}.
            </p>
          )}

          <button
            type="submit"
            disabled={status === 'enviando'}
            className="rounded-lg bg-jovi-600 py-2.5 font-semibold text-white hover:bg-jovi-700 disabled:opacity-60"
          >
            {status === 'enviando' ? 'Enviando...' : 'Enviar mensagem'}
          </button>
        </form>

        <aside className="rounded-xl bg-jovi-50 p-5 text-sm text-slate-700">
          <h3 className="mb-2 text-lg font-semibold text-jovi-700">Outras formas de contato</h3>
          <p>
            E-mail:{' '}
            <a className="font-semibold text-jovi-600 underline" href="mailto:stalogrupo@gmail.com">
              stalogrupo@gmail.com
            </a>
          </p>
          <p className="mt-2">
            Repositório:{' '}
            <a
              className="font-semibold text-jovi-600 underline"
              href="https://github.com/nickbelo2201/sprint3-WebDevlopment"
              target="_blank"
              rel="noreferrer"
            >
              GitHub do projeto
            </a>
          </p>
        </aside>
      </div>
    </Secao>
  )
}

export default Contato
