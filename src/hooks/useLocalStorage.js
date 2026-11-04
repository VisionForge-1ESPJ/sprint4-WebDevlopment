import { useEffect, useState } from 'react'

const PREFIXO = 'jovilens_'

function ler(chave, valorPadrao) {
  try {
    const dados = localStorage.getItem(PREFIXO + chave)
    return dados ? JSON.parse(dados) : valorPadrao
  } catch {
    return valorPadrao
  }
}

// useState que persiste automaticamente no localStorage
function useLocalStorage(chave, valorPadrao) {
  const [valor, setValor] = useState(() => ler(chave, valorPadrao))

  useEffect(() => {
    try {
      localStorage.setItem(PREFIXO + chave, JSON.stringify(valor))
    } catch {
      // armazenamento cheio ou indisponível: segue só em memória
    }
  }, [chave, valor])

  return [valor, setValor]
}

export default useLocalStorage
