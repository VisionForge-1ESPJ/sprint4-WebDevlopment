import { useState } from 'react'
import modos from '../data/modos'
import useCamera from '../hooks/useCamera'

function redimensionarDeVideo(video, largura = 480) {
  const proporcao = video.videoHeight / video.videoWidth || 0.75
  const altura = Math.round(largura * proporcao)
  const canvas = document.createElement('canvas')
  canvas.width = largura
  canvas.height = altura
  const contexto = canvas.getContext('2d')
  contexto.drawImage(video, 0, 0, largura, altura)
  return canvas.toDataURL('image/jpeg', 0.7)
}

function gerarPlaceholder(nomeModo) {
  const largura = 480
  const altura = 320
  const canvas = document.createElement('canvas')
  canvas.width = largura
  canvas.height = altura
  const contexto = canvas.getContext('2d')
  const matiz = Math.floor(Math.random() * 360)
  contexto.fillStyle = `hsl(${matiz}, 70%, 55%)`
  contexto.fillRect(0, 0, largura, altura)
  contexto.fillStyle = 'rgba(255, 255, 255, 0.9)'
  contexto.font = 'bold 22px sans-serif'
  contexto.fillText('Captura simulada', 24, altura / 2 - 16)
  contexto.font = '16px sans-serif'
  contexto.fillText(`Modo: ${nomeModo}`, 24, altura / 2 + 14)
  return canvas.toDataURL('image/jpeg', 0.75)
}

function Captura({ onCapturar }) {
  const { videoRef, disponivel, erro } = useCamera()
  const [modo, setModo] = useState(modos[0].id)

  function capturarDaCamera() {
    if (!videoRef.current) return
    onCapturar({ imagem: redimensionarDeVideo(videoRef.current), modo, origem: 'camera' })
  }

  function capturarSimulada() {
    const nomeModo = modos.find((m) => m.id === modo)?.nome ?? modo
    onCapturar({ imagem: gerarPlaceholder(nomeModo), modo, origem: 'simulado' })
  }

  return (
    <section className="rounded-xl bg-white p-6 shadow-sm" aria-labelledby="captura-titulo">
      <h2 id="captura-titulo" className="mb-3 text-xl font-bold">
        Nova captura
      </h2>

      <div className="mb-4 flex flex-wrap gap-2">
        {modos.map((m) => {
          const ativo = modo === m.id
          return (
            <button
              key={m.id}
              type="button"
              aria-pressed={ativo}
              onClick={() => setModo(m.id)}
              className="rounded-full border-2 px-4 py-1.5 text-sm font-semibold"
              style={{ borderColor: m.cor, color: ativo ? '#fff' : m.cor, background: ativo ? m.cor : '#fff' }}
            >
              {m.nome}
            </button>
          )
        })}
      </div>

      <div className="relative mb-4 aspect-4/3 overflow-hidden rounded-lg bg-gray-900">
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className={disponivel ? 'h-full w-full object-cover' : 'hidden'}
        />
        {!disponivel && (
          <div className="absolute inset-0 flex items-center justify-center p-4 text-center text-sm text-gray-300">
            {erro
              ? 'Câmera não disponível ou permissão negada. Use "Simular captura".'
              : 'Iniciando câmera...'}
          </div>
        )}
      </div>

      <div className="flex gap-3">
        <button
          type="button"
          onClick={capturarDaCamera}
          disabled={!disponivel}
          className="flex-1 rounded-lg bg-jovi-600 py-2.5 font-semibold text-white hover:bg-jovi-700 disabled:opacity-50"
        >
          Tirar foto
        </button>
        <button
          type="button"
          onClick={capturarSimulada}
          className="flex-1 rounded-lg border border-jovi-600 py-2.5 font-semibold text-jovi-600"
        >
          Simular captura
        </button>
      </div>
    </section>
  )
}

export default Captura
