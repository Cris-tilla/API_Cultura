# 🚀 Instalação do Sistema de Busca com Puppeteer

## 📋 Pré-requisitos

- **Node.js** versão 16 ou superior
- **npm** ou **yarn**
- **Chrome/Chromium** instalado no sistema (para Puppeteer)

## 🔧 Instalação

### 1. Instalar dependências

```bash
cd /home/augusto/Projetos/extractor_licitacao
npm install
```

### 2. Verificar instalação do Puppeteer

O Puppeteer será baixado automaticamente, mas pode demorar na primeira vez:

```bash
# Verificar se Puppeteer foi instalado
npm list puppeteer
```

### 3. Iniciar o servidor

```bash
npm start
```

### 4. Acessar a aplicação

Abra o navegador e acesse: `http://localhost:3000`

## 🐛 Solução de Problemas

### Erro de dependências do Puppeteer

Se houver erro com dependências do Chrome:

```bash
# Reinstalar Puppeteer
npm uninstall puppeteer
npm install puppeteer

# Ou usar Puppeteer com Chrome existente
npm install puppeteer-core
```

### Erro de permissões no Linux

```bash
# Dar permissões para executar Chrome
sudo chmod +x /usr/bin/google-chrome

# Ou usar argumentos de segurança
# (já configurados no código)
```

### Erro de memória

Se o sistema ficar lento:

```bash
# Aumentar memória disponível para Node.js
NODE_OPTIONS="--max-old-space-size=4096" npm start
```

## 🔍 Como Funciona

1. **Puppeteer** inicia um Chrome headless
2. **Navega** para cada site de busca
3. **Renderiza** a página completamente (JavaScript, CSS)
4. **Extrai** conteúdo usando Cheerio
5. **Fallback** para axios se Puppeteer falhar
6. **Cache** dos resultados para melhor performance

## 📊 Performance

- **Primeira busca**: 10-30 segundos (depende do site)
- **Busca em cache**: 1-3 segundos
- **Múltiplas fontes**: Processamento paralelo
- **Fallback automático**: Garantia de resultados

## 🚨 Importante

- **Mantenha o servidor rodando** durante o uso
- **Primeira execução** pode demorar para baixar Chrome
- **Sites com proteção anti-bot** podem falhar
- **Sistema de fallback** garante resultados mesmo com falhas
