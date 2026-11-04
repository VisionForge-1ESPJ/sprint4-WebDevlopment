import SugestaoModo from '../components/SugestaoModo'
import Captura from '../components/Captura'
import Inspiracoes from '../components/Inspiracoes'
import Estatisticas from '../components/Estatisticas'
import Galeria from '../components/Galeria'
import Albuns from '../components/Albuns'
import Historico from '../components/Historico'
import Lixeira from '../components/Lixeira'
import useAuth from '../hooks/useAuth'
import useCapturas from '../hooks/useCapturas'

function Painel() {
  const { usuario } = useAuth()
  const {
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
  } = useCapturas()

  return (
    <>
      <section className="bg-linear-to-br from-jovi-600 to-jovi-900 px-4 py-8 text-white sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold sm:text-3xl">Olá, {usuario.nome.split(' ')[0]}!</h1>
            <p className="max-w-prose text-white/85">
              Câmera contextual para estudantes: estudo, vida social e auto-expressão.
            </p>
          </div>
          <div className="flex flex-col">
            <span className="text-sm">Capturas guardadas</span>
            <strong className="text-3xl">{capturas.length}</strong>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-4 sm:p-6 md:grid-cols-[1fr_1.3fr] md:items-start">
        <div className="flex min-w-0 flex-col gap-6">
          <SugestaoModo />
          <Captura onCapturar={adicionarCaptura} />
          <Inspiracoes />
          <Estatisticas capturas={capturas} />
        </div>
        <div className="flex min-w-0 flex-col gap-6">
          <Galeria
            capturas={capturas}
            albuns={albuns}
            onExcluir={excluirCaptura}
            onMoverAlbum={moverParaAlbum}
          />
          <Albuns albuns={albuns} capturas={capturas} onCriar={criarAlbum} />
          <Historico historico={historico} />
          <Lixeira lixeira={lixeira} onRestaurar={restaurarCaptura} onExcluirDefinitivo={excluirDefinitivo} />
        </div>
      </div>
    </>
  )
}

export default Painel
