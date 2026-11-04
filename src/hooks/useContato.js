import { useState } from 'react'

// API mockada JSONPlaceholder: aceita POST e devolve o registro criado (201)
const URL_CONTATO = 'https://jsonplaceholder.typicode.com/posts'

function useContato() {
  const [status, setStatus] = useState('parado') // parado | enviando | sucesso | erro
  const [protocolo, setProtocolo] = useState(null)

  async function enviar({ nome, email, mensagem }) {
    setStatus('enviando')
    try {
      const resposta = await fetch(URL_CONTATO, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: `${nome} <${email}>`, body: mensagem, userId: 1 }),
      })
      if (!resposta.ok) throw new Error('Falha no envio')
      const dados = await resposta.json()
      setProtocolo(dados.id)
      setStatus('sucesso')
      return true
    } catch {
      setStatus('erro')
      return false
    }
  }

  return { status, protocolo, enviar }
}

export default useContato
