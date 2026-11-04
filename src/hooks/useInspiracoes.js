import { useCallback, useEffect, useState } from 'react'

// API pública Wikimedia Commons (sem chave): busca fotos reais por tema
const URL_BASE = 'https://commons.wikimedia.org/w/api.php'
const POR_PAGINA = 6

// Termo de busca de cada modo da câmera
const BUSCA_POR_MODO = {
  estudo: 'students studying',
  social: 'group of students friends campus',
  perfil: 'headshot student portrait',
}

function montarUrl(modoId) {
  const params = new URLSearchParams({
    action: 'query',
    generator: 'search',
    gsrsearch: `${BUSCA_POR_MODO[modoId] ?? 'students'} filetype:bitmap`,
    gsrnamespace: '6',
    gsrlimit: String(POR_PAGINA),
    prop: 'imageinfo',
    iiprop: 'url',
    iiurlwidth: '400',
    format: 'json',
    origin: '*',
  })
  return `${URL_BASE}?${params}`
}

function limparTitulo(titulo) {
  return titulo.replace(/^File:/, '').replace(/\.[a-z]+$/i, '')
}

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
        const resposta = await fetch(montarUrl(modoId), { signal: controle.signal })
        if (!resposta.ok) throw new Error('Falha na API')
        const dados = await resposta.json()
        const paginas = Object.values(dados.query?.pages ?? {})
          .filter((p) => p.imageinfo?.[0]?.thumburl)
          .sort((a, b) => a.index - b.index)
        setFotos(
          paginas.map((p) => ({
            id: String(p.pageid),
            titulo: limparTitulo(p.title),
            link: p.imageinfo[0].descriptionurl,
            imagem: p.imageinfo[0].thumburl,
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
