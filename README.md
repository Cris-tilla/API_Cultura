# Buscador de Editais Culturais - Sistema de Busca LIVRE

Sistema completo para busca LIVRE de editais, licitações e oportunidades culturais. Foca em escultura e artes visuais, mas permite buscar por qualquer termo. Prioriza Santa Catarina e oportunidades nacionais.

## 🎯 Funcionalidades

- **Busca LIVRE** por qualquer termo em múltiplas fontes de editais culturais
- **Foco especial** em escultura e artes visuais (mas não restritivo)
- **Filtros avançados** por localização (SC/Nacional), tipo de oportunidade e data
- **Paginação avançada** com navegação direta para páginas específicas
- **Exportação de resultados** em CSV e JSON
- **Interface moderna e responsiva**
- **Categorização inteligente** dos resultados encontrados
- **Download direto** de PDFs e outros arquivos encontrados

## 🚀 Como usar

### Opção 1: Com servidor local (recomendado)
1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicie o servidor:
   ```bash
   npm start
   ```
3. Acesse: http://localhost:3000
4. Faça suas buscas com melhor performance e sem limitações CORS

### Opção 2: Direto no navegador
1. Abra o arquivo `index.html` em seu navegador
2. O sistema usará **5 proxies CORS diferentes** para maximizar resultados
3. **NOVO**: Sistema de busca alternativa inteligente quando proxies falham
4. Funciona bem mas pode ser mais lento que o servidor local

### Como buscar:
1. **Digite qualquer termo** - o sistema é livre! (ex: "escultura", "edital", "arte visual", "prêmio", "bolsa", "workshop", etc.)
2. Configure os filtros desejados (opcional)
3. Clique em "Buscar" ou pressione Enter
4. Aguarde a busca real nos sites
5. Exporte os resultados em CSV ou JSON se desejar

## 📋 Fontes de busca

O sistema busca em diversas fontes, incluindo:

- Lei Rouanet
- Fundo Nacional de Cultura
- FUNARTE
- IPHAN
- Governo de SC
- SESC SC
- Fundações culturais municipais
- E muito mais!

## 🔍 Sistema de Busca SUPER Aprimorado

### ✨ **Novas Funcionalidades:**
- **Busca SUPER abrangente** em 30+ fontes de editais
- **Múltiplos proxies CORS** (5 proxies diferentes) para contornar bloqueios
- **Parsers específicos** para cada tipo de site (gov.br, FCC, AMFRI, etc.)
- **Busca em imagens** (alt e title) para conteúdo visual
- **APIs alternativas** quando scraping falha
- **Sugestões inteligentes** baseadas no tipo de fonte

### 🎯 **Palavras-chave MUITO Expandidas:**

#### Editais e oportunidades:
- Seleção, processo seletivo, inscrição, chamada
- Prêmio, bolsa, fomento, incentivo, patrocínio
- Licitação, pregão, concorrência, credenciamento
- Programa, projeto, certame, residência, circuito
- Festival, mostra, exposição, bienal, workshop

#### Cultura e artes:
- Cultura, cultural, artes visuais, escultura
- Estátua, monumento, instalação, site-specific
- Arte tridimensional, 3D, contemporânea, moderna
- Museu, galeria, curadoria, artista, criativo
- Tecnologia, digital, multimídia, performance

#### Educação e formação:
- Formação, capacitação, workshop, oficina
- Palestra, debate, seminário, congresso
- Encontro, colóquio, simpósio, conferência
- Apresentação, exposição, mostra

### 📊 **Limites Aumentados:**
- **Servidor**: até 35 resultados por fonte
- **Frontend**: até 25 resultados por fonte  
- **Total**: potencial de centenas de resultados por busca

## 💡 Dicas de uso

1. **Busca LIVRE**: Digite qualquer termo - o sistema não é restritivo!
2. **Exemplos de busca**: "escultura", "edital", "arte visual", "prêmio", "bolsa", "workshop", "oficina", "exposição", "festival"
3. **Combinações**: "escultura edital SC", "arte visual prêmio", "cultura workshop"
4. **Busca histórica**: Use filtros de data para encontrar editais antigos (ex: ano 2000, histórico antes de 2020)
5. **Filtros**: Use para refinar resultados, mas não são obrigatórios
6. **Exportação**: Use CSV para abrir em Excel ou JSON para integrar com outros sistemas

## 🚀 Funcionalidades Avançadas

### 📄 **Paginação Inteligente:**
- **Navegação por números**: Clique diretamente no número da página desejada
- **Navegação direta**: Digite o número da página e pressione Enter
- **Indicadores visuais**: Mostra página atual, total de páginas e resultados
- **Navegação inteligente**: Exibe páginas próximas com "..." para páginas distantes

### 📥 **Download de Arquivos:**
- **Detecção automática** de arquivos baixáveis (PDF, DOC, XLS, imagens, etc.)
- **Botão de download** aparece automaticamente para arquivos
- **Feedback visual** durante o download
- **Suporte a múltiplos formatos**: PDF, DOC, DOCX, XLS, XLSX, PPT, PPTX, ZIP, RAR, imagens, vídeos, áudios

### 🔍 **Filtros Inteligentes e Robustos:**
- **Localização**: Filtra por Santa Catarina (SC) ou oportunidades nacionais
- **Tipo de oportunidade**: Filtro flexível que mapeia tipos relacionados (edital = edital + web + documento)
- **Data Histórica**: Parse robusto de múltiplos formatos (dd/mm/yyyy, yyyy-mm-dd, etc.)
- **Presets de Data**: Anos específicos (2000-2024), histórico (antes de 2020), recente (últimos 5 anos)
- **Aplicação em tempo real**: Filtros funcionam instantaneamente
- **Preservação de resultados**: Resultados originais são mantidos para refiltragem
- **Proteção inteligente**: Alerta quando filtros são muito restritivos
- **Estatísticas detalhadas**: Console mostra distribuição dos resultados por filtro e anos encontrados

### ⭐ **Sistema de Relevância Inteligente:**
- **Pontuação automática**: Cada resultado recebe uma pontuação baseada em múltiplos critérios
- **Filtro de qualidade**: Apenas resultados com pontuação >= 15 são exibidos
- **Ordenação por relevância**: Resultados mais relevantes aparecem primeiro
- **Indicadores visuais**: Cores e bordas indicam o nível de relevância
- **Eliminação de ruído**: Sistema descarta automaticamente resultados irrelevantes

### 📅 **Filtro de Data Histórica Avançado:**
- **Anos específicos**: Selecione qualquer ano de 2000 a 2024 diretamente
- **Presets inteligentes**: Histórico (antes de 2020), recente (últimos 5 anos), todas as datas
- **Range personalizado**: Defina datas de início e fim com inputs de data
- **Parse robusto**: Suporte a múltiplos formatos de data (dd/mm/yyyy, yyyy-mm-dd, etc.)
- **Extração inteligente**: Sistema extrai datas reais do conteúdo, não usa data atual
- **Estatísticas detalhadas**: Console mostra anos encontrados e exemplos de datas parseadas
- **Aplicação automática**: Filtros são aplicados automaticamente ao selecionar presets

## 🔧 Como funciona

### Busca Real de Dados SUPER Aprimorada:
1. **Com servidor (Node.js + Puppeteer)**: 
   - **Puppeteer (Chrome headless)** para renderização completa de páginas
   - **Parsers específicos** para cada tipo de site (gov.br, FCC, AMFRI, etc.)
   - **Busca em múltiplos elementos**: links, textos, títulos, imagens
   - **Limite aumentado**: até 35 resultados por fonte
   - **Fallback automático** para axios quando Puppeteer falha

2. **Sem servidor (navegador)**: 
   - **5 proxies CORS diferentes** para maximizar resultados
   - **Sistema de fallback inteligente** quando proxies falham
   - **Busca alternativa** em APIs conhecidas (Prosas, Cultura em Mercado)
   - **Sugestões inteligentes** baseadas no tipo de fonte

3. **Parser SUPER inteligente**: 
   - Extrai links, textos, títulos, imagens e documentos
   - **80+ palavras-chave culturais** para busca abrangente
   - **Busca em múltiplos seletores** CSS para máxima cobertura
   - **Limite aumentado**: até 25 resultados por fonte

4. **Sistema de Pontuação de Relevância**:
   - **Pontuação base por tipo**: Links (10), Headings (15), Parágrafos (8), Listas (6), Imagens (5)
   - **Bônus por correspondência**: Termo encontrado (20), correspondência exata (50), início (30), fim (25)
   - **Bônus por contexto**: Palavras-chave culturais (8), contexto de edital (25), datas (15)
   - **Bônus por URL**: Editais (20), PDFs/DOCs (15)
   - **Penalizações**: Texto muito curto (-10), muito longo (-5)
   - **Filtro de qualidade**: Apenas resultados com pontuação >= 15 são exibidos

5. **Extração de Datas Inteligente**:
   - **Parse robusto**: Múltiplos formatos (dd/mm/yyyy, yyyy-mm-dd, dd.mm.yyyy, etc.)
   - **Meses por extenso**: Suporte a "janeiro de 2000", "15 de março de 2005"
   - **Anos isolados**: Detecta anos como "2000", "2001", etc.
   - **Contexto inteligente**: Busca datas no texto e elementos próximos
   - **Não usa data atual**: Sistema extrai datas reais do conteúdo

6. **Filtros em tempo real**: Aplica filtros de palavras-chave durante a extração

### Tecnologias utilizadas:
- **Frontend**: HTML5, CSS3, JavaScript vanilla
- **Backend**: Node.js, Express, Puppeteer (Chrome headless), Cheerio, Axios
- **Proxies CORS**: AllOrigins, CORS Anywhere, ThingProxy, CORS Bridged, CodeTabs
- **APIs alternativas**: Prosas, Cultura em Mercado, Google Custom Search (opcional)
- **Sistema híbrido**: Puppeteer + fallback para axios + proxies CORS

## 📝 Melhorias futuras

- [ ] Adicionar mais fontes de busca
- [ ] Implementar busca dentro de PDFs
- [ ] Sistema de notificações para novos editais
- [ ] Salvamento de buscas favoritas
- [ ] Integração com APIs oficiais quando disponíveis
- [ ] Sistema de alertas por email

## 🤝 Contribuições

Este é um projeto de demonstração. Para uso em produção, considere:
- Implementar um backend robusto
- Adicionar testes automatizados
- Melhorar o tratamento de erros
- Implementar rate limiting para APIs

## 📄 Licença

Projeto de demonstração - livre para uso e modificação.
# API_Cultura
