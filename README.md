# EPK — João Pascolat (BR)

Web EPK / site de portfólio de DJ. Stack: **React + Vite + Tailwind CSS**.

## Como rodar

```bash
npm install
npm run dev       # ambiente de desenvolvimento
npm run build     # build de produção (gera a pasta dist/)
npm run preview   # serve o build de produção localmente
```

## Onde editar seus dados reais

Tudo o que é conteúdo (textos, imagens, sets, agenda, links) está centralizado em:

```
src/data/content.js
```

Edite os campos abaixo conforme necessário:

- `artist` — nome, país, gêneros, bio, link do WhatsApp, e-mail, imagens do Hero e da seção Bio.
- `socials` — links de Instagram, Resident Advisor, SoundCloud e Spotify.
- `sets` — título, descrição e URL de embed (SoundCloud/Mixcloud) de cada player.
- `upcomingGigs` / `pastGigs` — datas, eventos, cidade e status da agenda.
- `gallery` — URLs das fotos da galeria.
- `downloads` — caminhos dos arquivos de Tech Rider e Press Kit.

## Arquivos para download (Tech Rider / Press Kit)

Coloque os PDFs reais em `public/files/`, substituindo os placeholders:

```
public/files/tech-rider-joao-pascolat.pdf
public/files/press-kit-joao-pascolat.pdf
```

Os nomes dos arquivos devem corresponder ao que está em `downloads` em `src/data/content.js`.

## Players de áudio (SoundCloud/Mixcloud)

Cada item em `sets` usa um `embedUrl`. Para usar suas próprias faixas:

1. No SoundCloud, abra a faixa/set → **Compartilhar** → **Incorporar**.
2. Copie a URL que está dentro do atributo `src` do iframe gerado.
3. Cole essa URL no campo `embedUrl` correspondente em `content.js`.

## Estrutura dos componentes

```
src/
  components/
    Navbar.jsx     — menu fixo com efeito de vidro fosco
    Hero.jsx        — abertura em tela cheia
    About.jsx       — bio em duas colunas
    Sets.jsx        — grid de players
    Agenda.jsx       — próximas datas e gigs recentes
    Gallery.jsx      — mosaico de fotos
    Contact.jsx      — contato, downloads e rodapé
    Waveform.jsx     — elemento visual de assinatura (forma de onda),
                       usado como divisor e motivo decorativo
  data/
    content.js       — todos os dados editáveis do site
```

## Paleta e tipografia

- Fundo: preto absoluto / `zinc-950` / `zinc-900`.
- Texto: branco (`#fafafa`) e `zinc-400`/`zinc-500` para textos secundários.
- Bordas: `zinc-800`.
- Tipografia: **Anton** (display, títulos grandes), **Inter** (corpo), **Space Mono** (dados/UI: datas, status, labels).
