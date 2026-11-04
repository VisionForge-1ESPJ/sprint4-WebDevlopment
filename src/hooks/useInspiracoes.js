import { useCallback, useEffect, useState } from 'react'

// API pública Lorem Picsum (sem chave): lista fotos de fotógrafos reais
const URL_BASE = 'https://picsum.photos/v2/list'
const POR_PAGINA = 6

// Cada modo da câmera usa uma página diferente, gerando referências distintas
const PAGINA_POR_MODO = { estudo: 3, social: 7, perfil: 12 }

// Busca fotos de referência (inspiração de enquadramento) para o modo escolhido
function useInspiracoes(modoId) {
  const [fotos, setFotos] = useState([])
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState(false)
  const [tentativa, setTentativa] = useState(0)

  useEffect(() => {
    const controle = new AbortController()

    async function buscar() {
      setCarregando(true)
      setErro(false)
      try {
        const pagina = PAGINA_POR_MODO[modoId] ?? 1
        const resposta = await fetch(`${URL_BASE}?page=${pagina}&limit=${POR_PAGINA}`, {
          signal: controle.signal,
        })
        if (!resposta.ok) throw new Error('Falha na API')
        const dados = await resposta.json()
        setFotos(
          dados.map((f) => ({
            id: f.id,
            autor: f.author,
            link: f.url,
            imagem: `https://picsum.photos/id/${f.id}/400/300`,
          })),
        )
      } catch (e) {
        if (e.name !== 'AbortError') setErro(true)
      } finally {
        if (!controle.signal.aborted) setCarregando(false)
      }
    }

    buscar()
    return () => controle.abort()
  }, [modoId, tentativa])

  const recarregar = useCallback(() => setTentativa((n) => n + 1), [])

  return { fotos, carregando, erro, recarregar }
}

export default useInspiracoes
