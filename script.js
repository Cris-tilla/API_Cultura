// Configuração das fontes de busca
const SOURCES = [
    // Fontes Federais
    { id: 'rouanet', name: "Lei Rouanet", url: "https://www.gov.br/rouanet", active: true, category: "federal" },
    { id: 'fnc', name: "Fundo Nacional de Cultura", url: "https://www.gov.br/cultura/pt-br/assuntos/fnc", active: true, category: "federal" },
    { id: 'funarte', name: "FUNARTE - Artes Visuais", url: "https://www.gov.br/funarte/editais-arte-visual", active: true, category: "federal" },
    { id: 'funarte-editais', name: "FUNARTE - Editais", url: "https://www.gov.br/funarte/pt-br/editais-1", active: true, category: "federal" },
    { id: 'cultura-viva', name: "Cultura Viva", url: "https://www.gov.br/cultura/pt-br/cultura-viva", active: true, category: "federal" },
    { id: 'iphan', name: "IPHAN", url: "https://www.gov.br/iphan", active: true, category: "federal" },
    { id: 'iphan-editais', name: "IPHAN - Editais", url: "https://www.gov.br/iphan/editais", active: true, category: "federal" },
    { id: 'iphan-portal', name: "Portal IPHAN", url: "http://portal.iphan.gov.br/", active: true, category: "federal" },
    { id: 'iphan-monumenta', name: "IPHAN - Programa Monumenta", url: "https://www.gov.br/iphan/programa-monumenta", active: true, category: "federal" },
    { id: 'minc', name: "Ministério da Cultura", url: "https://www.gov.br/cultura", active: true, category: "federal" },
    { id: 'minc-portal', name: "Portal MinC", url: "https://www.gov.br/cultura/pt-br", active: true, category: "federal" },
    { id: 'salic', name: "SALIC", url: "https://www.gov.br/cultura/pt-br/assuntos/salic", active: true, category: "federal" },
    { id: 'snc', name: "Sistema Nacional de Cultura", url: "https://www.gov.br/cultura/pt-br/assuntos/snc", active: true, category: "federal" },
    { id: 'diario-oficial', name: "Diário Oficial da União", url: "https://www.in.gov.br", active: true, category: "federal" },
    { id: 'bndes', name: "BNDES Cultural", url: "https://www.bndes.gov.br", active: true, category: "federal" },
    
    // Fontes Estaduais SC
    { id: 'gov-sc', name: "Governo SC", url: "https://estado.sc.gov.br", active: true, category: "estadual" },
    { id: 'cultura-sc', name: "Cultura SC", url: "https://www.cultura.sc.gov.br/", active: true, category: "estadual" },
    { id: 'cultura-sc-2', name: "Portal Cultura SC", url: "https://cultura.sc.gov.br/", active: true, category: "estadual" },
    { id: 'fcc-sc', name: "FCC SC", url: "https://www.fcc.sc.gov.br", active: true, category: "estadual" },
    { id: 'doe-sc', name: "DOE SC", url: "https://portal.doe.sea.sc.gov.br/v2.24.00/#/portal", active: true, category: "estadual" },
    { id: 'doe-sc-busca', name: "DOE SC - Buscar", url: "https://portal.doe.sea.sc.gov.br/v2.24.00/#/portal/edicao/buscar-publicacao", active: true, category: "estadual" },
    { id: 'transparencia-sc', name: "Transparência SC", url: "https://www.transparencia.sc.gov.br/", active: true, category: "estadual" },
    
    // Plataformas de Editais
    { id: 'cultura-presente', name: "Cultura Presente", url: "https://culturapresente.com.br/editais-culturais/", active: true, category: "plataforma" },
    { id: 'mapa-cultura', name: "Mapa da Cultura", url: "https://mapa.cultura.gov.br/", active: true, category: "plataforma" },
    { id: 'cultura-mercado', name: "Cultura em Mercado", url: "https://culturaemercado.com.br/editais/", active: true, category: "plataforma" },
    { id: 'cultura-mercado-2', name: "Cultura em Mercado Portal", url: "https://culturaemercado.com.br/", active: true, category: "plataforma" },
    { id: 'prosas', name: "Prosas", url: "https://prosas.com.br/editais", active: true, category: "plataforma" },
    { id: 'premio-pipa', name: "Prêmio PIPA", url: "https://www.premiopipa.com/", active: true, category: "plataforma" },
    { id: 'licitar-digital', name: "Licitar Digital", url: "https://app2.licitardigital.com.br/pesquisa", active: true, category: "plataforma" },
    { id: 'cultura-catarina', name: "Cultura Catarina", url: "https://culturacatarina.com.br", active: true, category: "plataforma" },
    
    // Associações Regionais
    { id: 'amfri', name: "AMFRI", url: "https://amfri.org.br", active: true, category: "regional" },
    { id: 'amfri-cultura', name: "AMFRI - Cultura", url: "https://amfri.org.br/pagina-47428/", active: true, category: "regional" },
    { id: 'mapa-amfri', name: "Mapa Cultural AMFRI", url: "https://mapacultural.cim-amfri.sc.gov.br", active: true, category: "regional" },
    { id: 'amplanorte', name: "AMPLANORTE", url: "https://amplanorte.org.br/", active: true, category: "regional" },
    { id: 'amavi', name: "AMAVI", url: "https://www.amavi.org.br", active: true, category: "regional" },
    { id: 'ammvi', name: "AMMVI", url: "https://www.ammvi.org.br", active: true, category: "regional" },
    { id: 'amosc', name: "AMOSC", url: "https://www.amosc.org.br", active: true, category: "regional" },
    { id: 'amurel', name: "AMUREL", url: "https://www.amurel.org.br", active: true, category: "regional" },
    { id: 'cisama', name: "CISAMA", url: "https://www.cisama.sc.gov.br", active: true, category: "regional" },
    
    // Municípios - Fundações Culturais
    { id: 'itajai', name: "Fundação Cultural Itajaí", url: "https://fundacaocultural.itajai.sc.gov.br/", active: true, category: "municipal" },
    { id: 'itajai-prefeitura', name: "Prefeitura Itajaí", url: "https://itajai.sc.gov.br/", active: true, category: "municipal" },
    { id: 'camboriu', name: "Camboriú", url: "https://camboriu.sc.gov.br/", active: true, category: "municipal" },
    { id: 'camboriu-cultura', name: "Camboriú - Editais Cultura", url: "https://camboriu.sc.gov.br/edital-fundacao-cultural/", active: true, category: "municipal" },
    { id: 'bombinhas', name: "Bombinhas", url: "https://bombinhas.sc.gov.br", active: true, category: "municipal" },
    { id: 'bombinhas-2', name: "Portal Bombinhas", url: "https://bombinhas.sc.gov.br/", active: true, category: "municipal" },
    { id: 'bombinhas-cultura', name: "Bombinhas - Cultura", url: "https://bombinhas.sc.gov.br/estrutura/pagina-1056/", active: true, category: "municipal" },
    { id: 'itapema', name: "Itapema", url: "https://itapema.sc.gov.br", active: true, category: "municipal" },
    { id: 'itapema-2', name: "Portal Itapema", url: "https://www.itapema.sc.gov.br/", active: true, category: "municipal" },
    { id: 'navegantes', name: "Navegantes", url: "https://navegantes.sc.gov.br/", active: true, category: "municipal" },
    { id: 'navegantes-cultura', name: "Fundação Cultural Navegantes", url: "https://navegantes.sc.gov.br/fundacao-cultural-de-navegantes/", active: true, category: "municipal" },
    { id: 'ilhota', name: "Ilhota", url: "https://ilhota.sc.gov.br/", active: true, category: "municipal" },
    { id: 'ilhota-cultura', name: "Ilhota - Cultura", url: "https://ilhota.sc.gov.br/pagina-2782/", active: true, category: "municipal" },
    { id: 'porto-belo', name: "Porto Belo", url: "https://portobelo.sc.gov.br/", active: true, category: "municipal" },
    
    // Portais Atende.net
    { id: 'picarras', name: "Balneário Piçarras", url: "https://balneariopicarras.atende.net/cidadao", active: true, category: "municipal" },
    { id: 'picarras-cultura', name: "Balneário Piçarras - FMC", url: "https://balneariopicarras.atende.net/subportal/fundacao-municipal-de-cultura-fmc", active: true, category: "municipal" },
    { id: 'barra-velha', name: "Barra Velha", url: "https://barravelha.atende.net/cidadao", active: true, category: "municipal" },
    { id: 'luiz-alves', name: "Luiz Alves", url: "https://luizalves.atende.net/cidadao", active: true, category: "municipal" },
    { id: 'penha', name: "Penha", url: "https://penha.atende.net/cidadao", active: true, category: "municipal" },
    { id: 'sao-joao', name: "São João do Itaperiu", url: "https://saojoaodoitaperiu.atende.net/cidadao", active: true, category: "municipal" },
    
    // SESC
    { id: 'sesc-sc', name: "SESC SC - Licitações", url: "https://sesc-sc.com.br/sobre-o-sesc/licitacoes", active: true, category: "sesc" },
    { id: 'sesc-portal', name: "SESC SC - Portal", url: "https://sesc-sc.com.br/portal/", active: true, category: "sesc" }
];

// Palavras-chave para busca
const KEYWORDS_EDITAL = [
    "seleção", "processo seletivo", "inscrição", "prêmio", "premio", 
    "bolsa", "fomento", "incentivo", "patrocínio", "licitação",
    "pregão", "concorrência", "credenciamento", "oportunidade",
    "programa", "projeto", "certame", "edital", "chamada",
    "residência", "circuito", "festival", "mostra"
];

const KEYWORDS_CULTURA = [
    "cultura", "cultural", "artes visuais", "escultura", "estatua",
    "estatueta", "relevo", "trofeu", "monumental", "monumento",
    "site-specific", "modelagem", "busto", "torso", "tridimensional",
    "exposição", "acervo", "mostra", "bienal", "3D", "arte",
    "artista", "curadoria", "galeria", "museu", "instalação"
];

const CIDADES_SC = [
    "balneário piçarras", "barra velha", "bombinhas", "camboriú",
    "ilhota", "itajaí", "itapema", "luiz alves", "navegantes",
    "penha", "porto belo", "são joão do itaperiu", "florianópolis",
    "blumenau", "joinville", "chapecó", "criciúma", "lages"
];

const TERMOS_NACIONAIS = [
    "brasil", "nacional", "todo o país", "qualquer estado", 
    "todas as regiões", "âmbito nacional", "território nacional"
];

// Estado da aplicação
let searchResults = [];
let isSearching = false;
let currentPage = 1;
const resultsPerPage = 10;

// Elementos do DOM
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const filterSC = document.getElementById('filterSC');
const filterNacional = document.getElementById('filterNacional');
const filterType = document.getElementById('filterType');
const dateFrom = document.getElementById('dateFrom');
const dateTo = document.getElementById('dateTo');
const datePreset = document.getElementById('datePreset');
const sourcesList = document.getElementById('sourcesList');
const resultsContainer = document.getElementById('resultsContainer');
const resultsCount = document.getElementById('resultsCount');
const loadingIndicator = document.getElementById('loadingIndicator');
const exportCSV = document.getElementById('exportCSV');
const exportJSON = document.getElementById('exportJSON');
const pagination = document.getElementById('pagination');
const selectAllSources = document.getElementById('selectAllSources');
const deselectAllSources = document.getElementById('deselectAllSources');

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    renderSources();
    setupEventListeners();
});

// Renderizar lista de fontes com checkboxes
function renderSources() {
    // Agrupar fontes por categoria
    const categories = {
        federal: { name: '🏛️ Federal', sources: [] },
        estadual: { name: '🏢 Estadual SC', sources: [] },
        municipal: { name: '🏘️ Municipal', sources: [] },
        regional: { name: '🤝 Regional', sources: [] },
        sesc: { name: '🎭 SESC', sources: [] },
        plataforma: { name: '💻 Plataformas', sources: [] },
        privado: { name: '🏪 Privado', sources: [] }
    };
    
    // Organizar fontes por categoria
    SOURCES.forEach(source => {
        const cat = source.category || 'plataforma';
        if (categories[cat]) {
            categories[cat].sources.push(source);
        }
    });
    
    // Renderizar fontes agrupadas
    let html = '';
    Object.entries(categories).forEach(([key, category]) => {
        if (category.sources.length > 0) {
            html += `<div class="source-category">
                <h4 class="category-title">${category.name}</h4>
                ${category.sources.map(source => `
                    <label class="source-item ${source.active ? 'active' : ''}">
                        <input type="checkbox" 
                               id="source-${source.id}" 
                               value="${source.id}" 
                               ${source.active ? 'checked' : ''}>
                        ${source.name}
                    </label>
                `).join('')}
            </div>`;
        }
    });
    
    sourcesList.innerHTML = html;
}

// Configurar event listeners
function setupEventListeners() {
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') performSearch();
    });
    exportCSV.addEventListener('click', () => exportResults('csv'));
    exportJSON.addEventListener('click', () => exportResults('json'));
    
    // Controles de seleção de fontes
    selectAllSources.addEventListener('click', () => {
        document.querySelectorAll('#sourcesList input[type="checkbox"]').forEach(cb => {
            cb.checked = true;
            cb.parentElement.classList.add('active');
        });
    });
    
    deselectAllSources.addEventListener('click', () => {
        document.querySelectorAll('#sourcesList input[type="checkbox"]').forEach(cb => {
            cb.checked = false;
            cb.parentElement.classList.remove('active');
        });
    });
    
    // Listener para checkboxes individuais
    sourcesList.addEventListener('change', (e) => {
        if (e.target.type === 'checkbox') {
            if (e.target.checked) {
                e.target.parentElement.classList.add('active');
            } else {
                e.target.parentElement.classList.remove('active');
            }
        }
    });
    
    // Listener para seletor de período
    datePreset.addEventListener('change', (e) => {
        const value = e.target.value;
        const today = new Date();
        let fromDate = new Date();
        
        switch(value) {
            case 'today':
                fromDate = new Date(today);
                break;
            case 'week':
                fromDate.setDate(today.getDate() - 7);
                break;
            case 'month':
                fromDate.setDate(today.getDate() - 30);
                break;
            case 'quarter':
                fromDate.setMonth(today.getMonth() - 3);
                break;
            case 'year':
                fromDate.setFullYear(today.getFullYear() - 1);
                break;
            default:
                dateFrom.value = '';
                dateTo.value = '';
                return;
        }
        
        // Formatar datas para input
        dateFrom.value = fromDate.toISOString().split('T')[0];
        dateTo.value = today.toISOString().split('T')[0];
    });
    
    // Trigger inicial para definir últimos 30 dias
    datePreset.dispatchEvent(new Event('change'));
}

// Normalizar texto para comparação
function normalizeText(text) {
    if (!text) return '';
    return text.toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .trim();
}

// Verificar se o texto menciona SC
function mentionsSC(text) {
    const normalized = normalizeText(text);
    if (normalized.includes('santa catarina') || / sc /.test(` ${normalized} `)) {
        return true;
    }
    return CIDADES_SC.some(cidade => normalized.includes(normalizeText(cidade)));
}

// Verificar se é nacional
function isNational(text) {
    const normalized = normalizeText(text);
    return TERMOS_NACIONAIS.some(termo => normalized.includes(normalizeText(termo)));
}

// Extrair trecho relevante
function extractRelevantExcerpt(text, keywords) {
    const normalized = normalizeText(text);
    for (const keyword of keywords) {
        const index = normalized.indexOf(normalizeText(keyword));
        if (index !== -1) {
            const start = Math.max(0, index - 150);
            const end = Math.min(text.length, index + 150);
            return {
                excerpt: text.substring(start, end).trim(),
                keyword: keyword
            };
        }
    }
    return { excerpt: '', keyword: '' };
}

// Extrair data do texto
function extractDate(text) {
    const datePattern = /\d{1,2}\/\d{1,2}\/\d{4}/g;
    const matches = text.match(datePattern);
    return matches ? matches[0] : '';
}

// Converter data DD/MM/AAAA para Date object
function parseDate(dateStr) {
    if (!dateStr) return null;
    const [day, month, year] = dateStr.split('/').map(Number);
    return new Date(year, month - 1, day);
}

// Gerar links mais específicos baseados no contexto
function generateSpecificLink(baseUrl, titulo, keywords, editalId, tipo) {
    // Limpar título para uso em URL
    const tituloLimpo = titulo.toLowerCase()
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .substring(0, 50);
    
    // Gerar ID único baseado no título e data
    const uniqueId = editalId || Math.random().toString(36).substring(7);
    
    // Mapeamento completo de URLs para diferentes tipos de sites
    const urlMappings = {
        // Sites governamentais federais
        'www.gov.br/cultura': {
            edital: `/pt-br/assuntos/editais-e-chamadas-publicas/${uniqueId}`,
            premio: `/pt-br/assuntos/premios-e-concursos/${uniqueId}`,
            bolsa: `/pt-br/assuntos/bolsas-e-auxilios/${uniqueId}`,
            default: `/pt-br/editais/${uniqueId}/${tituloLimpo}`
        },
        'www.gov.br/funarte': {
            edital: `/pt-br/editais-1/2024/${tituloLimpo}`,
            premio: `/pt-br/premios/2024/${tituloLimpo}`,
            residencia: `/pt-br/residencias-artisticas/2024/${tituloLimpo}`,
            default: `/pt-br/editais-1/${uniqueId}`
        },
        'www.gov.br/iphan': {
            edital: `/pt-br/editais/${new Date().getFullYear()}/${uniqueId}`,
            default: `/pt-br/editais-e-premios/${tituloLimpo}`
        },
        'portal.iphan.gov.br': {
            default: `/pagina/detalhes/${uniqueId}`
        },
        
        // Sites estaduais SC
        'www.cultura.sc.gov.br': {
            edital: `/editais/${new Date().getFullYear()}/${uniqueId}/${tituloLimpo}`,
            premio: `/premios-e-concursos/${uniqueId}`,
            default: `/noticias/editais/${uniqueId}`
        },
        'www.fcc.sc.gov.br': {
            edital: `/edital/${uniqueId}/${tituloLimpo}`,
            default: `/editais-abertos/${uniqueId}`
        },
        'estado.sc.gov.br': {
            default: `/noticias/${tituloLimpo}-${uniqueId}`
        },
        'portal.doe.sea.sc.gov.br': {
            default: `/v2.24.00/#/portal/edicao/${uniqueId}/publicacao/${Math.floor(Math.random() * 9000) + 1000}`
        },
        
        // Plataformas de editais
        'culturapresente.com.br': {
            default: `/editais-culturais/${tituloLimpo}-${uniqueId}/`
        },
        'culturaemercado.com.br': {
            edital: `/editais/${tituloLimpo}/`,
            premio: `/premios/${tituloLimpo}/`,
            default: `/oportunidades/${uniqueId}/${tituloLimpo}/`
        },
        'prosas.com.br': {
            default: `/editais/${uniqueId}/${tituloLimpo}`
        },
        'app2.licitardigital.com.br': {
            licitacao: `/pesquisa/detalhes/${uniqueId}`,
            default: `/entidade/detalhes-oportunidade/${uniqueId}`
        },
        'mapa.cultura.gov.br': {
            default: `/oportunidade/${uniqueId}`
        },
        'mapacultural.cim-amfri.sc.gov.br': {
            default: `/oportunidade/${uniqueId}`
        },
        
        // Sites municipais
        'fundacaocultural.itajai.sc.gov.br': {
            edital: `/editais/2024/${uniqueId}/${tituloLimpo}`,
            default: `/oportunidades/${uniqueId}`
        },
        'sesc-sc.com.br': {
            licitacao: `/sobre-o-sesc/licitacoes/detalhes/${uniqueId}`,
            exposicao: `/programacao/artes-visuais/${uniqueId}`,
            default: `/editais/${uniqueId}/${tituloLimpo}`
        },
        
        // Portais atende.net
        'atende.net': {
            default: `/cidadao/servico/detalhes/${uniqueId}`
        },
        
        // Sites de associações
        'amfri.org.br': {
            default: `/pagina-${Math.floor(Math.random() * 50000) + 40000}/`
        },
        
        // BNDES
        'www.bndes.gov.br': {
            default: `/pt/financiamento/programas-fundos/edital-${uniqueId}`
        },
        
        // Diário Oficial
        'www.in.gov.br': {
            default: `/web/dou/-/edital-${uniqueId}-${Math.floor(Math.random() * 900000000) + 100000000}`
        }
    };
    
    // Encontrar o mapeamento correto
    const url = new URL(baseUrl);
    const hostname = url.hostname;
    
    // Procurar mapeamento específico
    for (const [pattern, mappings] of Object.entries(urlMappings)) {
        if (hostname.includes(pattern) || (pattern === 'atende.net' && hostname.includes('atende.net'))) {
            const mapping = mappings[tipo] || mappings.default;
            if (mapping) {
                // Construir URL final
                const protocol = url.protocol;
                const finalPath = mapping.startsWith('/') ? mapping : '/' + mapping;
                return `${protocol}//${hostname}${finalPath}`;
            }
        }
    }
    
    // Fallback: gerar URL com estrutura padrão
    const year = new Date().getFullYear();
    const month = String(new Date().getMonth() + 1).padStart(2, '0');
    
    // Tentar identificar estrutura comum do site
    if (hostname.includes('gov.br')) {
        return `${baseUrl}/editais/${year}/${month}/${uniqueId}/${tituloLimpo}`;
    } else if (hostname.includes('.sc.gov.br')) {
        return `${baseUrl}/edital/${uniqueId}`;
    } else {
        // URL genérica mas mais específica
        return `${baseUrl}/${tipo}/${year}/${uniqueId}/${tituloLimpo}`;
    }
}

// Verificar se está rodando com servidor ou não
const IS_SERVER_MODE = window.location.protocol !== 'file:';
const API_BASE = IS_SERVER_MODE ? '' : 'http://localhost:3000';

// Buscar em uma fonte específica
async function searchSource(source, searchTerm) {
    try {
        // Se tiver servidor rodando, usar busca real
        if (IS_SERVER_MODE || window.location.hostname === 'localhost') {
            try {
                const response = await fetch(`${API_BASE}/api/search`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        sources: [source],
                        searchTerm: searchTerm
                    })
                });
                
                if (response.ok) {
                    const data = await response.json();
                    return data.results || [];
                }
            } catch (error) {
                console.log('Servidor não disponível, usando busca alternativa');
            }
        }
        
        // Fallback: Busca usando proxy CORS público
        return await searchWithCORSProxy(source, searchTerm);
    } catch (error) {
        console.error(`Erro ao buscar em ${source.name}:`, error);
        return [];
    }
}

// Busca usando proxy CORS público
async function searchWithCORSProxy(source, searchTerm) {
    const results = [];
    const proxyUrl = 'https://api.allorigins.win/get?url=';
    
    try {
        // Usar proxy para contornar CORS
        const response = await fetch(proxyUrl + encodeURIComponent(source.url));
        const data = await response.json();
        
        if (data.contents) {
            // Parse HTML
            const parser = new DOMParser();
            const doc = parser.parseFromString(data.contents, 'text/html');
            
            // Buscar links e conteúdo relevante
            const links = doc.querySelectorAll('a');
            const keywords = ['edital', 'cultura', 'arte', 'seleção', 'chamada', 'inscrição'];
            
            links.forEach(link => {
                const text = link.textContent.trim();
                const href = link.getAttribute('href');
                
                if (text && href) {
                    const textLower = text.toLowerCase();
                    const hasKeyword = keywords.some(k => textLower.includes(k));
                    const matchesSearch = searchTerm.toLowerCase().split(' ').some(term => 
                        textLower.includes(term)
                    );
                    
                    if (hasKeyword && matchesSearch) {
                        const fullUrl = href.startsWith('http') ? href : 
                                       href.startsWith('/') ? `${new URL(source.url).origin}${href}` : 
                                       `${source.url}/${href}`;
                        
                        results.push({
                            titulo: text,
                            link: fullUrl,
                            fonte: new URL(source.url).hostname,
                            trecho: `Encontrado: ${text}`,
                            data: new Date().toLocaleDateString('pt-BR'),
                            tipo: href.endsWith('.pdf') ? 'pdf' : 'web',
                            palavraChave: keywords.find(k => textLower.includes(k)) || searchTerm,
                            termosBusca: text
                        });
                    }
                }
            });
            
            // Buscar em textos também
            const textos = doc.querySelectorAll('p, div, article, section');
            textos.forEach(elemento => {
                const texto = elemento.textContent.trim();
                if (texto.length > 50 && texto.length < 1000) {
                    const textoLower = texto.toLowerCase();
                    const hasEditalkeyword = keywords.some(k => textoLower.includes(k));
                    const matchesSearch = searchTerm.toLowerCase().split(' ').some(term => 
                        textoLower.includes(term)
                    );
                    
                    if (hasEditalkeyword && matchesSearch && results.length < 5) {
                        results.push({
                            titulo: texto.substring(0, 100) + '...',
                            link: source.url,
                            fonte: new URL(source.url).hostname,
                            trecho: texto.substring(0, 300) + '...',
                            data: new Date().toLocaleDateString('pt-BR'),
                            tipo: 'web',
                            palavraChave: keywords.find(k => textoLower.includes(k)) || searchTerm,
                            termosBusca: searchTerm
                        });
                    }
                }
            });
        }
        
    } catch (error) {
        console.error('Erro ao buscar com proxy:', error);
    }
    
    return results.slice(0, 10); // Limitar a 10 resultados por fonte
}
            // Editais Federais
            {
                titulo: "Edital Lei Rouanet nº 01/2024 - Exposições de Arte Contemporânea",
                texto: "O Ministério da Cultura torna público o Edital de Seleção para projetos de exposições de arte contemporânea, incluindo escultura, instalações e artes visuais. Valor máximo por projeto: R$ 300.000,00. Inscrições até 30/03/2024. Podem participar artistas e produtores culturais de todo o território nacional. Projetos devem contemplar ações de formação e democratização do acesso.",
                data: "15/01/2024",
                tipo: "edital",
                origem: "federal"
            },
            {
                titulo: "FUNARTE - Prêmio de Artes Visuais 2024",
                texto: "A FUNARTE lança o Prêmio de Artes Visuais 2024 com categoria especial para escultura contemporânea. Premiação total de R$ 200.000,00 divididos em 10 prêmios. Inscrições de 01/02 a 31/03/2024. Artistas brasileiros ou estrangeiros residentes no Brasil há mais de 2 anos. Obras selecionadas participarão de exposição itinerante.",
                data: "20/01/2024",
                tipo: "premio",
                origem: "federal"
            },
            {
                titulo: "Programa Nacional de Apoio à Cultura - Artes Integradas",
                texto: "Programa Nacional de Apoio à Cultura abre seleção para projetos de artes integradas com foco em escultura e instalações urbanas. Apoio de até R$ 150.000,00 por projeto. Prazo: 15/04/2024. Projetos devem incluir contrapartida social e ações educativas. Prioridade para propostas que dialoguem com o espaço público.",
                data: "25/01/2024",
                tipo: "bolsa",
                origem: "federal"
            },
            {
                titulo: "IPHAN - Edital de Preservação do Patrimônio Escultórico",
                texto: "O IPHAN abre edital para projetos de preservação e restauro de esculturas e monumentos históricos. Valores entre R$ 50.000,00 e R$ 500.000,00. Inscrições até 30/04/2024. Podem participar instituições públicas e privadas sem fins lucrativos. Projetos devem incluir plano de salvaguarda e ações educativas.",
                data: "10/02/2024",
                tipo: "edital",
                origem: "federal"
            },
            
            // Editais Estaduais SC
            {
                titulo: "FCC/SC - Edital Elisabete Anderle de Estímulo à Cultura",
                texto: "A Fundação Catarinense de Cultura lança o Edital Elisabete Anderle 2024 com linha específica para artes visuais e escultura. Apoio de R$ 30.000,00 a R$ 80.000,00 por projeto. Inscrições de 01/03 a 30/04/2024. Exclusivo para artistas residentes em Santa Catarina há pelo menos 2 anos. Projetos devem prever circulação em pelo menos 3 municípios.",
                data: "28/01/2024",
                tipo: "edital",
                origem: "estadual"
            },
            {
                titulo: "Prêmio Catarinense de Artes Visuais",
                texto: "Governo de SC através da Secretaria de Cultura lança Prêmio Catarinense de Artes Visuais. Categoria escultura com premiação de R$ 25.000,00. Inscrições abertas até 15/03/2024. Artistas catarinenses ou residentes em SC. Obras premiadas integrarão acervo do Museu de Arte de Santa Catarina.",
                data: "05/02/2024",
                tipo: "premio",
                origem: "estadual"
            },
            {
                titulo: "Programa Estadual de Incentivo à Arte Contemporânea",
                texto: "Programa de fomento à produção em arte contemporânea de Santa Catarina. Bolsas de R$ 3.000,00 mensais por 12 meses para desenvolvimento de pesquisa em escultura e instalação. Inscrições até 31/03/2024. Seleção por portfólio e projeto de pesquisa. Contemplados devem realizar exposição ao final.",
                data: "12/02/2024",
                tipo: "bolsa",
                origem: "estadual"
            },
            
            // Editais Municipais
            {
                titulo: "Fundação Cultural de Florianópolis - Ocupação de Galerias 2024",
                texto: "Edital para ocupação das galerias municipais com exposições de arte contemporânea, escultura e instalações. Apoio de R$ 15.000,00 para montagem. Inscrições até 28/02/2024. Artistas de Florianópolis e região metropolitana. Período de ocupação: 30 dias. Inclui mediação cultural e catálogo.",
                data: "18/01/2024",
                tipo: "exposicao",
                origem: "municipal"
            },
            {
                titulo: "Prefeitura de Joinville - Arte nos Espaços Públicos",
                texto: "Chamamento público para instalação de esculturas em espaços públicos de Joinville. Valor de até R$ 100.000,00 por obra incluindo produção e instalação. Prazo: 30/03/2024. Obras devem ser inéditas e resistentes a intempéries. Seleção por comissão especializada.",
                data: "22/01/2024",
                tipo: "edital",
                origem: "municipal"
            },
            {
                titulo: "Blumenau - Residência Artística Internacional",
                texto: "Programa de residência artística com foco em escultura e artes tridimensionais. Bolsa de R$ 5.000,00 mensais por 3 meses, hospedagem e ateliê. Inscrições até 15/04/2024. Aberto para artistas nacionais e internacionais. Resultado em exposição coletiva.",
                data: "30/01/2024",
                tipo: "residencia",
                origem: "municipal"
            },
            {
                titulo: "Itajaí - Salão de Arte Contemporânea",
                texto: "23º Salão de Arte Contemporânea de Itajaí abre inscrições. Categoria escultura com prêmio aquisição de R$ 20.000,00. Inscrições de 01/02 a 31/03/2024. Artistas brasileiros maiores de 18 anos. Obras selecionadas participam de exposição no Centro Cultural.",
                data: "01/02/2024",
                tipo: "premio",
                origem: "municipal"
            },
            {
                titulo: "Balneário Camboriú - Esculturas na Orla",
                texto: "Concurso para instalação de esculturas permanentes na orla de Balneário Camboriú. Prêmios de R$ 50.000,00 a R$ 150.000,00 incluindo execução. Inscrições até 30/04/2024. Temática: relação entre arte e natureza. Materiais resistentes ao ambiente marinho.",
                data: "08/02/2024",
                tipo: "edital",
                origem: "municipal"
            },
            
            // Editais SESC
            {
                titulo: "SESC/SC - Mostra de Artes Visuais 2024",
                texto: "O SESC Santa Catarina abre inscrições para Mostra de Artes Visuais com ênfase em produção escultórica contemporânea. Cachê de R$ 8.000,00 por artista selecionado. Inscrições até 31/03/2024. Circulação por 5 unidades do SESC no estado. Inclui transporte e montagem.",
                data: "15/02/2024",
                tipo: "exposicao",
                origem: "sesc"
            },
            
            // Editais de Plataformas e Institutos
            {
                titulo: "Instituto Cultural Vale - Edital de Patrocínio",
                texto: "Instituto Cultural Vale abre seleção para patrocínio de projetos culturais. Linha especial para artes visuais e escultura. Valores de R$ 100.000,00 a R$ 500.000,00. Prazo: 30/03/2024. Projetos devem ter impacto social e educativo. Nacional com prioridade para regiões de atuação da Vale.",
                data: "10/01/2024",
                tipo: "edital",
                origem: "privado"
            },
            {
                titulo: "Fundação Bienal de São Paulo - Programa de Residências",
                texto: "Programa de residências artísticas da Bienal com linha para escultores e artistas tridimensionais. Bolsa de R$ 6.000,00 mensais por 6 meses. Inscrições até 28/02/2024. Artistas de todo Brasil. Inclui mentoria, ateliê e participação em exposição coletiva.",
                data: "20/01/2024",
                tipo: "residencia",
                origem: "privado"
            },
            {
                titulo: "Prêmio PIPA 2024 - Arte Contemporânea",
                texto: "Prêmio PIPA abre inscrições para artistas contemporâneos brasileiros. Categoria especial para escultura e instalação. Prêmio de R$ 30.000,00 e residência internacional. Inscrições até 15/03/2024. Seleção por júri especializado. Exposição no MAM Rio.",
                data: "01/02/2024",
                tipo: "premio",
                origem: "privado"
            },
            
            // Licitações e Pregões
            {
                titulo: "Pregão Eletrônico nº 023/2024 - Aquisição de Esculturas",
                texto: "Prefeitura Municipal de Florianópolis realiza pregão para aquisição de esculturas decorativas para espaços públicos. Valor estimado: R$ 250.000,00. Data da sessão: 28/02/2024. Podem participar artistas e galerias com CNPJ. Obras devem ser em bronze ou materiais duráveis.",
                data: "05/02/2024",
                tipo: "licitacao",
                origem: "municipal"
            },
            {
                titulo: "Concorrência Pública nº 001/2024 - Restauro de Monumentos",
                texto: "Estado de SC abre concorrência para restauro de monumentos históricos e esculturas públicas. Valor global: R$ 2.000.000,00. Prazo para propostas: 30/03/2024. Empresas especializadas em restauro com acervo técnico comprovado. Lotes divididos por região.",
                data: "10/02/2024",
                tipo: "licitacao",
                origem: "estadual"
            },
            {
                titulo: "Chamamento Público BNDES - Patrimônio Cultural",
                texto: "BNDES abre chamamento para projetos de preservação do patrimônio cultural brasileiro. Linha específica para restauro de esculturas e monumentos. Financiamento de R$ 500 mil a R$ 10 milhões. Inscrições até 30/04/2024. Instituições públicas e privadas sem fins lucrativos.",
                data: "15/01/2024",
                tipo: "edital",
                origem: "federal"
            },
            {
                titulo: "Credenciamento Artístico - Circuito Cultural SC",
                texto: "Secretaria de Cultura de SC abre credenciamento para artistas visuais e escultores. Formação de banco de artistas para exposições itinerantes. Cachê de R$ 5.000,00 por exposição. Inscrições permanentes. Artistas residentes em SC com produção nos últimos 3 anos.",
                data: "08/01/2024",
                tipo: "credenciamento",
                origem: "estadual"
            }
        ];
        
        // Filtrar editais relevantes baseados na fonte e termo de busca
        const sourceCategory = source.category;
        const sourceName = source.name.toLowerCase();
        
        // Determinar quantos resultados retornar (entre 1 e 5 por fonte)
        const numResults = Math.floor(Math.random() * 5) + 1;
        
        // Selecionar editais relevantes
        let relevantEditais = mockEditais.filter(edital => {
            // Filtrar por categoria da fonte
            if (sourceCategory === 'federal' && edital.origem !== 'federal') return false;
            if (sourceCategory === 'estadual' && edital.origem !== 'estadual') return false;
            if (sourceCategory === 'municipal' && edital.origem !== 'municipal') return false;
            if (sourceCategory === 'sesc' && edital.origem !== 'sesc') return false;
            
            // Verificar relevância com termo de busca
            const textoCompleto = `${edital.titulo} ${edital.texto}`.toLowerCase();
            return textoCompleto.includes(searchTerm.toLowerCase()) || 
                   KEYWORDS_CULTURA.some(k => textoCompleto.includes(k.toLowerCase()));
        });
        
        // Se não houver editais relevantes, pegar aleatórios
        if (relevantEditais.length === 0) {
            relevantEditais = mockEditais;
        }
        
        // Embaralhar e selecionar editais
        const shuffled = relevantEditais.sort(() => 0.5 - Math.random());
        const selectedEditais = shuffled.slice(0, Math.min(numResults, shuffled.length));
        
        // Processar cada edital selecionado
        for (const edital of selectedEditais) {
            const { excerpt, keyword } = extractRelevantExcerpt(edital.texto, [...KEYWORDS_EDITAL, ...KEYWORDS_CULTURA]);
            
            if (excerpt) {
                // Gerar ID único para o edital
                const editalId = `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
                
                // Gerar link específico baseado no tipo e fonte
                const specificLink = generateSpecificLink(source.url, edital.titulo, [keyword], editalId, edital.tipo);
                
                // Adicionar variação na data (últimos 60 dias)
                const daysAgo = Math.floor(Math.random() * 60);
                const date = new Date();
                date.setDate(date.getDate() - daysAgo);
                const formattedDate = `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;
                
                // Determinar se é PDF baseado no tipo e fonte
                const isPDF = (edital.tipo === 'licitacao' && Math.random() > 0.5) || 
                             (source.category === 'federal' && Math.random() > 0.7) ||
                             (Math.random() > 0.85);
                
                results.push({
                    fonte: new URL(source.url).hostname,
                    link: source.url, // Link para a página principal da fonte
                    linkDireto: isPDF ? `${specificLink}.pdf` : specificLink, // Link simulado específico
                    data: formattedDate,
                    pagina: edital.tipo === 'licitacao' ? 'Licitações e Pregões' : 'Editais e Oportunidades',
                    trecho: excerpt,
                    palavraChave: keyword,
                    tipo: isPDF ? 'pdf' : 'web',
                    titulo: edital.titulo,
                    tipoOportunidade: edital.tipo,
                    editalId: editalId,
                    termosBusca: `${edital.titulo} ${keyword}` // Termos para buscar manualmente
                });
            }
        }
        
        return results;
    } catch (error) {
        console.error(`Erro ao buscar em ${source.name}:`, error);
        return [];
    }
}

// Obter fontes selecionadas
function getSelectedSources() {
    return Array.from(document.querySelectorAll('#sourcesList input[type="checkbox"]:checked'))
        .map(cb => SOURCES.find(s => s.id === cb.value))
        .filter(Boolean);
}

// Realizar busca
async function performSearch() {
    if (isSearching) return;
    
    const searchTerm = searchInput.value.trim();
    if (!searchTerm) {
        alert('Por favor, digite um termo de busca');
        return;
    }
    
    const selectedSources = getSelectedSources();
    if (selectedSources.length === 0) {
        alert('Por favor, selecione pelo menos uma fonte de busca');
        return;
    }
    
    isSearching = true;
    searchBtn.disabled = true;
    loadingIndicator.style.display = 'block';
    resultsContainer.innerHTML = '';
    searchResults = [];
    currentPage = 1;
    
    // Elementos de progresso
    const loadingText = document.getElementById('loadingText');
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    
    try {
        let completedSources = 0;
        const totalSources = selectedSources.length;
        
        // Atualizar texto inicial
        loadingText.textContent = `Buscando em ${totalSources} fontes...`;
        progressText.textContent = `0 de ${totalSources} fontes pesquisadas`;
        
        // Processar fontes em lotes para mostrar progresso
        const batchSize = 5;
        const batches = [];
        
        for (let i = 0; i < selectedSources.length; i += batchSize) {
            batches.push(selectedSources.slice(i, i + batchSize));
        }
        
        // Processar cada lote
        for (const batch of batches) {
            const batchPromises = batch.map(async (source) => {
                const results = await searchSource(source, searchTerm);
                
                // Atualizar progresso
                completedSources++;
                const progress = (completedSources / totalSources) * 100;
                progressFill.style.width = `${progress}%`;
                progressText.textContent = `${completedSources} de ${totalSources} fontes pesquisadas`;
                
                // Atualizar texto de loading com nome da fonte
                if (completedSources < totalSources) {
                    loadingText.textContent = `Pesquisando em ${source.name}...`;
                } else {
                    loadingText.textContent = 'Processando resultados...';
                }
                
                return results;
            });
            
            const batchResults = await Promise.all(batchPromises);
            searchResults.push(...batchResults.flat());
            
            // Renderizar resultados parciais se já houver alguns
            if (searchResults.length > 0 && completedSources < totalSources) {
                const tempResults = filterResults([...searchResults]);
                updateResultsCount(tempResults.length, true);
            }
        }
        
        // Filtrar resultados finais
        searchResults = filterResults(searchResults);
        
        // Ordenar por data (mais recentes primeiro)
        searchResults.sort((a, b) => {
            const dateA = parseDate(a.data);
            const dateB = parseDate(b.data);
            if (dateA && dateB) return dateB - dateA;
            if (dateA) return -1;
            if (dateB) return 1;
            return 0;
        });
        
        // Aguardar um pouco antes de mostrar resultados finais
        loadingText.textContent = 'Organizando resultados...';
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Renderizar resultados finais
        renderResults();
        renderPagination();
        
    } catch (error) {
        console.error('Erro na busca:', error);
        alert('Erro ao realizar busca. Tente novamente.');
    } finally {
        isSearching = false;
        searchBtn.disabled = false;
        loadingIndicator.style.display = 'none';
        
        // Resetar progresso
        progressFill.style.width = '0%';
        
        // Habilitar botões de exportação se houver resultados
        exportCSV.disabled = searchResults.length === 0;
        exportJSON.disabled = searchResults.length === 0;
    }
}

// Atualizar contador de resultados
function updateResultsCount(count, isPartial = false) {
    const prefix = isPartial ? 'Encontrados até agora: ' : '';
    resultsCount.textContent = `${prefix}${count} resultados`;
}

// Filtrar resultados
function filterResults(results) {
    return results.filter(result => {
        const text = normalizeText(result.trecho);
        
        // Aplicar filtro de localização
        if (!filterSC.checked && mentionsSC(text)) return false;
        if (!filterNacional.checked && isNational(text)) return false;
        
        // Aplicar filtro de tipo
        const typeFilter = filterType.value;
        if (typeFilter && result.tipoOportunidade !== typeFilter) {
            return false;
        }
        
        // Aplicar filtro de data
        if (dateFrom.value || dateTo.value) {
            const resultDate = parseDate(result.data);
            if (resultDate) {
                if (dateFrom.value) {
                    const fromDate = new Date(dateFrom.value);
                    if (resultDate < fromDate) return false;
                }
                if (dateTo.value) {
                    const toDate = new Date(dateTo.value);
                    if (resultDate > toDate) return false;
                }
            }
        }
        
        return true;
    });
}

// Renderizar resultados com paginação
function renderResults() {
    const startIndex = (currentPage - 1) * resultsPerPage;
    const endIndex = startIndex + resultsPerPage;
    const pageResults = searchResults.slice(startIndex, endIndex);
    
    resultsCount.textContent = `${searchResults.length} resultados encontrados`;
    
    if (pageResults.length === 0) {
        resultsContainer.innerHTML = `
            <div style="text-align: center; padding: 40px; color: #718096;">
                <p>Nenhum resultado encontrado.</p>
                <p style="margin-top: 10px;">Tente usar outras palavras-chave ou ajustar os filtros.</p>
            </div>
        `;
        return;
    }
    
    resultsContainer.innerHTML = pageResults.map(result => {
        // Criar link de busca no Google com os termos específicos
        const googleSearchUrl = `https://www.google.com/search?q=site:${result.fonte}+${encodeURIComponent(result.termosBusca)}`;
        
        // Criar link de busca direta no site
        const siteSearchUrl = result.link.includes('?') 
            ? `${result.link}&q=${encodeURIComponent(result.titulo)}`
            : `${result.link}?q=${encodeURIComponent(result.titulo)}`;
        
        return `
        <div class="result-card">
            <div class="result-header">
                <div>
                    <h3 class="result-title">${result.titulo}</h3>
                    <p class="result-source">${result.fonte}</p>
                    <p class="result-notice">⚠️ Resultado simulado - Use as opções abaixo para buscar o edital real</p>
                </div>
                <span class="result-type ${result.tipo}">${result.tipo.toUpperCase()}</span>
            </div>
            
            <div class="result-content">
                <div class="result-excerpt">
                    ${highlightKeywords(result.trecho)}
                </div>
                <div style="margin-top: 10px;">
                    <span class="result-keyword">${result.palavraChave}</span>
                    ${result.tipoOportunidade ? `<span class="result-keyword">${result.tipoOportunidade}</span>` : ''}
                </div>
            </div>
            
            <div class="result-meta">
                ${result.data ? `<span class="result-date">📅 ${result.data}</span>` : ''}
                <span>📄 ${result.pagina}</span>
            </div>
            
            <div class="result-actions">
                <a href="${result.link}" target="_blank" class="result-link" title="Visitar site oficial">
                    🏠 Ir para ${result.fonte}
                </a>
                <a href="${googleSearchUrl}" target="_blank" class="result-link google-search" title="Buscar no Google">
                    🔍 Buscar no Google
                </a>
                <button class="result-link copy-btn" onclick="copyToClipboard('${result.titulo.replace(/'/g, "\\'")}', this)" title="Copiar título para buscar">
                    📋 Copiar título
                </button>
            </div>
            
            <div class="search-tip">
                💡 Dica: Copie o título e busque diretamente no site oficial ou use a busca do Google
            </div>
        </div>
    `}).join('');
}

// Renderizar controles de paginação
function renderPagination() {
    if (searchResults.length <= resultsPerPage) {
        pagination.innerHTML = '';
        return;
    }
    
    const totalPages = Math.ceil(searchResults.length / resultsPerPage);
    const showingFrom = ((currentPage - 1) * resultsPerPage) + 1;
    const showingTo = Math.min(currentPage * resultsPerPage, searchResults.length);
    
    let paginationHTML = `
        <button onclick="changePage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''}>
            ← Anterior
        </button>
        
        <div class="page-numbers">
    `;
    
    // Mostrar números de página
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage < maxVisiblePages - 1) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    if (startPage > 1) {
        paginationHTML += `
            <span class="page-number" onclick="changePage(1)">1</span>
            ${startPage > 2 ? '<span>...</span>' : ''}
        `;
    }
    
    for (let i = startPage; i <= endPage; i++) {
        paginationHTML += `
            <span class="page-number ${i === currentPage ? 'active' : ''}" 
                  onclick="changePage(${i})">${i}</span>
        `;
    }
    
    if (endPage < totalPages) {
        paginationHTML += `
            ${endPage < totalPages - 1 ? '<span>...</span>' : ''}
            <span class="page-number" onclick="changePage(${totalPages})">${totalPages}</span>
        `;
    }
    
    paginationHTML += `
        </div>
        
        <span class="page-info">
            Mostrando ${showingFrom}-${showingTo} de ${searchResults.length}
        </span>
        
        <button onclick="changePage(${currentPage + 1})" ${currentPage === totalPages ? 'disabled' : ''}>
            Próxima →
        </button>
    `;
    
    pagination.innerHTML = paginationHTML;
}

// Mudar página
window.changePage = function(page) {
    const totalPages = Math.ceil(searchResults.length / resultsPerPage);
    if (page < 1 || page > totalPages) return;
    
    currentPage = page;
    renderResults();
    renderPagination();
    
    // Scroll para o topo dos resultados
    resultsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

// Destacar palavras-chave no texto
function highlightKeywords(text) {
    let highlighted = text;
    const allKeywords = [...KEYWORDS_EDITAL, ...KEYWORDS_CULTURA];
    
    allKeywords.forEach(keyword => {
        const regex = new RegExp(`(${keyword})`, 'gi');
        highlighted = highlighted.replace(regex, '<strong>$1</strong>');
    });
    
    return highlighted;
}

// Exportar resultados
function exportResults(format) {
    if (searchResults.length === 0) return;
    
    if (format === 'csv') {
        exportToCSV();
    } else if (format === 'json') {
        exportToJSON();
    }
}

// Exportar para CSV
function exportToCSV() {
    const headers = ['Título', 'Fonte', 'Link', 'Data', 'Página', 'Trecho', 'Palavra-chave', 'Tipo'];
    const csvContent = [
        headers.join(','),
        ...searchResults.map(result => [
            `"${result.titulo.replace(/"/g, '""')}"`,
            `"${result.fonte}"`,
            `"${result.link}"`,
            `"${result.data}"`,
            `"${result.pagina}"`,
            `"${result.trecho.replace(/"/g, '""')}"`,
            `"${result.palavraChave}"`,
            `"${result.tipo}"`
        ].join(','))
    ].join('\n');
    
    downloadFile(csvContent, 'editais_culturais.csv', 'text/csv;charset=utf-8;');
}

// Exportar para JSON
function exportToJSON() {
    const jsonContent = JSON.stringify(searchResults, null, 2);
    downloadFile(jsonContent, 'editais_culturais.json', 'application/json');
}

// Download de arquivo
function downloadFile(content, filename, mimeType) {
    const BOM = '\uFEFF';
    const blob = new Blob([BOM + content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Função para copiar texto para clipboard
window.copyToClipboard = function(text, button) {
    navigator.clipboard.writeText(text).then(() => {
        const originalText = button.textContent;
        button.textContent = '✅ Copiado!';
        button.style.background = '#48bb78';
        button.style.color = 'white';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = '';
            button.style.color = '';
        }, 2000);
    }).catch(err => {
        console.error('Erro ao copiar:', err);
        button.textContent = '❌ Erro ao copiar';
        setTimeout(() => {
            button.textContent = '📋 Copiar título';
        }, 2000);
    });
};

// Adicionar funcionalidade de busca em APIs reais (exemplo com API pública)
async function searchGovAPI(searchTerm) {
    try {
        // Exemplo de busca na API do Portal da Transparência
        // Em produção, você precisaria de chaves de API e endpoints específicos
        const response = await fetch(`https://api.exemplo.gov.br/editais?q=${encodeURIComponent(searchTerm)}`);
        if (!response.ok) throw new Error('Erro na API');
        
        const data = await response.json();
        return data.results || [];
    } catch (error) {
        console.error('Erro ao buscar na API governamental:', error);
        return [];
    }
}