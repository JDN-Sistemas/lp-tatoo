# Fighting Star — Copy & Identidade Visual

---

## 1. IDENTIDADE DA MARCA

| Campo | Valor |
|---|---|
| Nome | **Fighting Star** |
| Segmento | Estúdio de Tatuagem |
| Tom de voz | Intenso, artístico, provocador, confiante |
| Personalidade | Rebelde com propósito, artesão, autêntico |

---

## 2. PALETA DE CORES

```
--color-bg-primary:    #1A1610   /* Fundo principal — preto envelhecido */
--color-bg-secondary:  #26211A   /* Fundo cards e seções alternadas */
--color-accent:        #C4956A   /* Dourado terracota — CTAs e destaques */
--color-accent-light:  #E8C99A   /* Dourado claro — hover e bordas */
--color-surface:       #F5F0E8   /* Superfície clara — newsletter, cards brancos */
--color-text-primary:  #F0EAD6   /* Texto principal sobre fundo escuro */
--color-text-muted:    #8A7F6E   /* Texto secundário / metadata */
--color-text-dark:     #1A1610   /* Texto sobre fundo claro */
--color-divider:       #3D3529   /* Linhas divisórias */
```

---

## 3. TIPOGRAFIA

### Fontes

| Papel | Fonte | Peso | Uso |
|---|---|---|---|
| Display | **UnifrakturMaguntia** ou **MedievalSharp** | 400 | Títulos grandes, nome do estúdio |
| Heading | **Cinzel** | 600–700 | Subtítulos, itens de menu, labels |
| Body | **Inter** | 400–500 | Parágrafos, descrições |
| Accent Italic | **Playfair Display Italic** | 400 | Palavras de destaque em heading |

### Escala de tipo

```
--text-xs:   0.75rem   / 12px
--text-sm:   0.875rem  / 14px
--text-base: 1rem      / 16px
--text-lg:   1.25rem   / 20px
--text-xl:   1.5rem    / 24px
--text-2xl:  2rem      / 32px
--text-3xl:  3rem      / 48px
--text-hero: 4.5rem    / 72px
```

---

## 4. COPY — SEÇÕES DA LANDING PAGE

---

### 4.1 NAVBAR

```
PÁGINA INICIAL   PORTFÓLIO   SOBRE NÓS   |   ORÇAMENTOS   PREÇOS   DESAFIOS
```

---

### 4.2 HERO

**Headline principal:**
> Pinturas Corporais  
> que **Desafiam**  
> Sua Alma

**Subtexto / tagline:**
> Arte permanente feita para quem não tem medo de sentir.

**CTA primário:**
> AGENDAR VISITA

**Informações de horário:**
```
Seg–Sex:  11h–21h
Sáb–Dom:  14h–20h
```

**Card flutuante (destaque de projeto):**
```
TEMPO       VALOR
2 Semanas   R$ 2.100,00
```

---

### 4.3 MARCAS / PARCEIROS

```
Layers   •   Sisyphus   •   Circooles   •   Catalog   •   Quotient
```

*(logos dos parceiros em baixo contraste sobre o fundo escuro)*

---

### 4.4 GALERIA / PORTFÓLIO

**Título da seção:**
> O Processo Ajustado vai  
> fazer você gritar — e depois,  
> sorrir.

**Card de destaque:**
```
GORILA URBANO
Estilo: Old School / Preto e Cinza
Preço: R$ 2.800,00
```

---

### 4.5 DEPOIMENTOS — "O QUE NOSSOS CLIENTES DIZEM"

**Título da seção:**
> O Que Nossos  
> Clientes Dizem

**Depoimento 1:**
> "Fiquei mais feliz com o resultado do que com minhas expectativas."

**Depoimento 2:**
> "Geralmente custam mais do que preto e cinza. Designs mais intrincados e detalhados exigem mais tempo e habilidade."

**Depoimento 3:**
> "Tatuagens com cor geralmente custam mais do que preto e cinza. Cores vibrantes podem exigir mais..."
> [Ver mais]

---

### 4.6 FAQ — PERGUNTAS FREQUENTES

**Título implícito da seção:**
> Perguntas Frequentes

---

**Pergunta 1:**
> QUAL É O PROCESSO?

*Conteúdo (fechado por padrão)*

---

**Pergunta 2:**
> COMO VOCÊS DEFINEM O PREÇO?

**Resposta:**

1. **Tamanho:** Os preços de tatuagem geralmente são baseados no tamanho do desenho. Tatuagens maiores costumam custar mais do que as menores. Alguns estúdios cobram por centímetro quadrado ou têm preços fixos para diferentes categorias de tamanho.

2. **Complexidade:** A complexidade do design tem um papel importante na precificação. Designs mais intrincados e detalhados exigem mais tempo e habilidade, resultando em um custo mais elevado.

3. **Cor:** Tatuagens coloridas geralmente custam mais do que as de preto e cinza. Cores vibrantes podem exigir mais trabalho e habilidade para atingir o resultado desejado.

---

**Pergunta 3:**
> VOCÊS FAZEM QUALQUER TIPO DE TATUAGEM?

*Conteúdo (fechado por padrão)*

---

**Pergunta 4:**
> QUAL É A LOCALIZAÇÃO DE VOCÊS?

*Conteúdo (fechado por padrão)*

---

### 4.7 NEWSLETTER

**Título:**
> Assine nossa  
> Newsletter

**Placeholder do input:**
> Digite seu e-mail...

**Botão:**
> ASSINAR

---

### 4.8 FOOTER

**Links — coluna 1:**
```
PÁGINA INICIAL
PORTFÓLIO
SOBRE NÓS
```

**Links — coluna 2:**
```
ORÇAMENTOS
PREÇOS
DESAFIOS
```

**Redes sociais:**
```
YouTube   Twitter / X   Instagram
```

**Links legais:**
```
TERMOS & CONDIÇÕES     POLÍTICA DE PRIVACIDADE
```

**Copyright:**
> © 2023 FIGHTING STAR. TODOS OS DIREITOS RESERVADOS.

---

## 5. DESIGN SYSTEM — COMPONENTES

---

### 5.1 BOTÕES

```
[PRIMARY]   fundo: --accent   texto: --text-dark   border-radius: 4px   padding: 14px 32px
            fonte: Cinzel 600   uppercase   letter-spacing: 0.12em

[SECONDARY] fundo: transparent   borda: 1px solid --accent   texto: --accent
            hover → fundo: --accent   texto: --text-dark

[GHOST]     sem fundo, sem borda   texto: --text-primary   underline no hover
```

---

### 5.2 NAVBAR

```
Layout:      flex row   justify-between   align-center   padding: 0 64px   height: 72px
Fundo:       semi-transparente com backdrop-blur ou totalmente dark
Logo:        ícone estrela de 4 pontas (★) centralizado entre os dois grupos de links
Links:       Cinzel 600   uppercase   letter-spacing: 0.1em   --text-muted → hover: --text-primary
Separador:   linha vertical   1px   --divider   entre os dois grupos de links
```

---

### 5.3 CARD DE PROJETO (PORTFÓLIO)

```
Fundo:         --bg-secondary  ou  --surface (versão clara)
Border-radius: 12px
Imagem:        object-cover   aspect-ratio 3/4
Label preço:   badge canto inferior direito   fundo: --surface   texto: --text-dark   Cinzel 700
Hover:         leve scale(1.02) + sombra --accent/20
```

---

### 5.4 CARD DE TEMPO/PREÇO (HERO FLOATING)

```
Fundo:         --surface
Border-radius: 12px
Padding:       20px 28px
Sombra:        0 8px 32px rgba(0,0,0,0.4)
Layout:        duas colunas   TEMPO | VALOR
Labels:        Cinzel 500   --text-muted   uppercase   text-xs
Valores:       Inter 700   --text-dark   text-xl
```

---

### 5.5 ACCORDION FAQ

```
Container:     borda inferior 1px solid --divider   padding: 24px 0
Trigger:       flex row   justify-between   align-center
Título:        Cinzel 600   uppercase   letter-spacing: 0.08em   --text-primary
Ícone:         "+" quando fechado  /  "−" quando aberto   --accent   text-2xl
Conteúdo:      Inter 400   --text-muted   padding-top: 16px   line-height: 1.7
Animação:      height 0 → auto   ease 0.3s
```

---

### 5.6 CARD DE DEPOIMENTO

```
Fundo:         --bg-secondary
Border-radius: 16px
Padding:       28px 24px
Texto:         Inter 400 italic   --text-primary   text-sm
Avatar:        círculo 40px   border 2px solid --accent
Nome:          Cinzel 600   --text-primary   text-sm
Estrelas:      ★★★★★   --accent
```

---

### 5.7 CARD NEWSLETTER

```
Container:     fundo: --surface   border-radius: 24px   padding: 48px 56px
               decoração: losangos dourados nas laterais (◆)
Título:        fonte display (UnifrakturMaguntia)   --text-dark   text-3xl
Input:         fundo: --surface   borda: 1px solid --divider   border-radius: 8px   padding: 14px 20px
Botão:         --accent   texto: --text-dark   border-radius: 8px
Ilustração:    envelope 3D / empilhado à esquerda
```

---

### 5.8 FOOTER

```
Layout:        grid 3 colunas   padding: 64px   fundo: --bg-primary
Logo:          estrela 4 pontas   --accent   48px   coluna esquerda
Links:         duas colunas centrais   Cinzel 500   uppercase   --text-muted
               separador vertical entre colunas
Sociais:       ícones circulares   borda: 1px solid --divider   --text-primary
               hover: borda --accent   texto --accent
Divider:       linha horizontal --divider   acima dos links legais
Legais:        Inter 400   --text-muted   text-xs   justify-between
```

---

## 6. ÍCONES DO DESIGN SYSTEM

### Ícone Marca — Estrela de 4 Pontas

```
Forma:   losango alongado nos 4 eixos (N, S, L, O)   semelhante a uma estrela-ninja
Uso:     logo, separadores decorativos, indicadores de seção
Cor:     --accent (#C4956A)
Tamanhos:
  - sm:  16px  (bullets, indicadores)
  - md:  32px  (separadores de seção)
  - lg:  48px  (logo navbar / footer)
  - xl:  96px  (hero background decorativo)
```

### Losango Decorativo ◆

```
Forma:   losango simples preenchido
Uso:     bordas do card newsletter, separadores horizontais
Cor:     --accent   opacity: 0.6
Tamanho: 12–16px
```

### Ícone Relógio / Horário

```
Estilo:  outline circular   ponteiros simples
Uso:     bloco de horário de funcionamento no hero
Cor:     --accent
Tamanho: 20px
```

### Ícone "+" / "−" (Accordion)

```
Estilo:  sem borda   apenas o símbolo tipográfico   peso bold
Cor:     --accent
Tamanho: 24px
Transição: rotate 45deg ao abrir (alternativa ao ± literal)
```

### Ícones Redes Sociais

```
YouTube:    retângulo arredondado com triângulo play interno
Twitter/X:  logotipo X
Instagram:  câmera com lente circular

Estilo:     outline   stroke 1.5px
Container:  círculo   border 1px solid --divider   32px
Hover:      border-color: --accent   cor ícone: --accent
```

### Seta de Navegação (Depoimentos)

```
Forma:    círculo com seta →
Fundo:    --accent
Cor seta: --text-dark
Tamanho:  40px
Hover:    --accent-light
```

---

## 7. TEXTURAS & EFEITOS VISUAIS

```
Background texture:   ruído granulado (noise) com opacity 0.08 sobreposto ao fundo escuro
                      simula papel velho / pele envelhecida

Efeito de tinta:      manchas escuras (blob shapes) em marrom queimado nos cantos das seções
                      usadas como elementos decorativos orgânicos

Sombras:              sempre coloridas com o accent (box-shadow: 0 4px 24px rgba(196,149,106,0.15))

Blend modes:          imagens do portfólio com mix-blend-mode: multiply ou luminosity
                      sobre fundos escuros para integrar ao tema

Gradiente de fade:    linear-gradient(to bottom, transparent, --bg-primary)
                      usado na borda inferior das imagens hero e portfólio
```

---

## 8. GRID & ESPAÇAMENTO

```
Max-width container:  1200px   centrado
Colunas:              12 colunas   gap: 24px
Padding lateral:      64px desktop   32px tablet   20px mobile

Espaçamento vertical entre seções:   120px desktop   80px tablet   60px mobile

Border-radius padrão:
  - sm:  4px   (botões, inputs)
  - md:  12px  (cards pequenos)
  - lg:  24px  (cards grandes, newsletter)
  - xl:  48px  (elementos hero)
```

---

## 9. ANIMAÇÕES

```
Transição padrão:   ease 0.25s   para hovers e estados interativos
Accordion open:     max-height 0 → auto   ease-in-out 0.3s
Card hover:         transform scale(1.02)   box-shadow intensifica   ease 0.2s
Hero float card:    keyframe float   translateY(0 → -8px → 0)   3s   infinite   ease-in-out
Scroll reveal:      fadeInUp   translateY(24px → 0)   opacity 0 → 1   0.5s   delay escalonado
Noise texture:      estático (sem animação) — apenas sobreposição CSS
```

---

## 10. BREAKPOINTS RESPONSIVOS

```
mobile:   < 640px
tablet:   640px – 1024px
desktop:  > 1024px

Navbar mobile:     hamburger menu   drawer lateral
Hero mobile:       texto centralizado   imagem em bloco abaixo do texto
FAQ mobile:        padding reduzido   fonte menor
Newsletter mobile: layout vertical   ilustração acima do formulário
Footer mobile:     stack vertical   links em uma única coluna
```
