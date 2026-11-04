import Secao from './Secao'

const passos = [
  {
    titulo: 'O problema',
    texto:
      'Muitos usuários só usam a câmera no modo automático, sem explorar o potencial do aparelho — por confusão na interface ou falta de clareza dos modos.',
  },
  {
    titulo: 'A solução',
    texto:
      'O JOVI Lens sugere automaticamente um modo (Estudo, Social ou Perfil) com um nível de confiança, simulando uma câmera que entende o contexto, e mostra fotos de referência para inspirar o enquadramento.',
  },
  {
    titulo: 'Como funciona',
    texto:
      'Você captura pela câmera real do dispositivo, organiza em álbuns, acompanha o histórico e as estatísticas de uso e recupera itens pela lixeira.',
  },
]

const recursos = [
  'Sugestão inteligente de modo',
  'Inspirações de enquadramento',
  'Central de conteúdo com busca',
  'Álbuns criados pelo usuário',
  'Histórico e estatísticas',
  'Lixeira com restauração',
  'Dados salvos no navegador',
]

function Solucao() {
  return (
    <Secao
      id="solucao"
      titulo="A Solução"
      subtitulo="Repensando a experiência de câmera dos smartphones JOVI para o estudante full-time."
      fundo="bg-white"
    >
      <div className="grid gap-6 md:grid-cols-3">
        {passos.map((p) => (
          <article key={p.titulo} className="rounded-xl border border-slate-200 p-5">
            <h3 className="mb-2 text-lg font-semibold text-jovi-600">{p.titulo}</h3>
            <p className="text-slate-600">{p.texto}</p>
          </article>
        ))}
      </div>

      <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {recursos.map((r) => (
          <li key={r} className="rounded-lg bg-jovi-50 px-4 py-3 text-sm font-semibold text-jovi-700">
            ✓ {r}
          </li>
        ))}
      </ul>
    </Secao>
  )
}

export default Solucao
