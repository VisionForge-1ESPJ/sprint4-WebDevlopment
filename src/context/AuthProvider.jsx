import { useCallback, useMemo } from 'react'
import { AuthContext } from './authContext'
import useLocalStorage from '../hooks/useLocalStorage'

// Usuário de demonstração para o professor testar (ver README)
const USUARIO_DEMO = { nome: 'Aluno Demo', email: 'aluno@jovi.com', senha: 'jovi123' }

function AuthProvider({ children }) {
  const [usuarios, setUsuarios] = useLocalStorage('usuarios', [USUARIO_DEMO])
  const [sessao, setSessao] = useLocalStorage('sessao', null)

  const entrar = useCallback(
    (email, senha) => {
      const emailLimpo = email.trim().toLowerCase()
      const usuario = usuarios.find((u) => u.email === emailLimpo && u.senha === senha)
      if (!usuario) return { ok: false, erro: 'E-mail ou senha incorretos.' }
      setSessao({ nome: usuario.nome, email: usuario.email })
      return { ok: true }
    },
    [usuarios, setSessao],
  )

  const cadastrar = useCallback(
    (nome, email, senha) => {
      const emailLimpo = email.trim().toLowerCase()
      if (usuarios.some((u) => u.email === emailLimpo)) {
        return { ok: false, erro: 'Este e-mail já está cadastrado.' }
      }
      setUsuarios((atual) => [...atual, { nome: nome.trim(), email: emailLimpo, senha }])
      setSessao({ nome: nome.trim(), email: emailLimpo })
      return { ok: true }
    },
    [usuarios, setUsuarios, setSessao],
  )

  const sair = useCallback(() => setSessao(null), [setSessao])

  const valor = useMemo(
    () => ({ usuario: sessao, entrar, cadastrar, sair }),
    [sessao, entrar, cadastrar, sair],
  )

  return <AuthContext.Provider value={valor}>{children}</AuthContext.Provider>
}

export default AuthProvider
