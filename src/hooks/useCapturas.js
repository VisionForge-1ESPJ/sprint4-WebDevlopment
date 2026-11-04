import useLocalStorage from './useLocalStorage'

function novoId() {
  return Date.now() + Math.floor(Math.random() * 1000)
}

// Toda a lógica de dados do app (capturas, álbuns, lixeira e histórico)
function useCapturas() {
  const [capturas, setCapturas] = useLocalStorage('capturas', [])
  const [albuns, setAlbuns] = useLocalStorage('albuns', [])
  const [lixeira, setLixeira] = useLocalStorage('lixeira_capturas', [])
  const [historico, setHistorico] = useLocalStorage('historico', [])

  function registrarHistorico(acao, descricao) {
    setHistorico((atual) =>
      [{ id: novoId(), acao, descricao, data: new Date().toISOString() }, ...atual].slice(0, 50),
    )
  }

  function adicionarCaptura({ imagem, modo, origem }) {
    const captura = { id: novoId(), imagem, modo, origem, albumId: null, data: new Date().toISOString() }
    setCapturas((atual) => [captura, ...atual])
    registrarHistorico('adicionado', `Nova captura no modo ${modo} (${origem === 'camera' ? 'câmera' : 'simulada'})`)
  }

  function moverParaAlbum(id, albumId) {
    setCapturas((atual) => atual.map((c) => (c.id === id ? { ...c, albumId } : c)))
    registrarHistorico('editado', 'Captura movida para outro álbum')
  }

  function excluirCaptura(id) {
    const item = capturas.find((c) => c.id === id)
    if (!item) return
    setCapturas((atual) => atual.filter((c) => c.id !== id))
    setLixeira((atual) => [item, ...atual])
    registrarHistorico('removido', 'Captura enviada para a lixeira')
  }

  function restaurarCaptura(id) {
    const item = lixeira.find((c) => c.id === id)
    if (!item) return
    setLixeira((atual) => atual.filter((c) => c.id !== id))
    setCapturas((atual) => [item, ...atual])
    registrarHistorico('restaurado', 'Captura restaurada da lixeira')
  }

  function excluirDefinitivo(id) {
    setLixeira((atual) => atual.filter((c) => c.id !== id))
  }

  function criarAlbum(nome) {
    const cor = `hsl(${Math.floor(Math.random() * 360)}, 65%, 55%)`
    setAlbuns((atual) => [...atual, { id: novoId(), nome, cor }])
    registrarHistorico('adicionado', `Álbum "${nome}" criado`)
  }

  return {
    capturas,
    albuns,
    lixeira,
    historico,
    adicionarCaptura,
    moverParaAlbum,
    excluirCaptura,
    restaurarCaptura,
    excluirDefinitivo,
    criarAlbum,
  }
}

export default useCapturas
