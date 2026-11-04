import { useEffect, useRef, useState } from 'react'

// Liga a câmera real do dispositivo e expõe o ref do <video>
function useCamera() {
  const videoRef = useRef(null)
  const [disponivel, setDisponivel] = useState(false)
  const [erro, setErro] = useState(false)

  useEffect(() => {
    let stream = null
    let cancelado = false

    async function iniciar() {
      try {
        stream = await navigator.mediaDevices.getUserMedia({ video: true })
        if (cancelado) {
          stream.getTracks().forEach((faixa) => faixa.stop())
          return
        }
        if (videoRef.current) {
          videoRef.current.srcObject = stream
          setDisponivel(true)
        }
      } catch {
        setErro(true)
      }
    }

    iniciar()

    return () => {
      cancelado = true
      stream?.getTracks().forEach((faixa) => faixa.stop())
    }
  }, [])

  return { videoRef, disponivel, erro }
}

export default useCamera
