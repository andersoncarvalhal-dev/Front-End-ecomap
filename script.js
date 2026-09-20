/* ==========================================================================
   1. DADOS DOS ECOPONTOS
   ========================================================================== */
const ecopontos = [
    { 
        nome: "Ecoponto Vila Isabel", lat: -2.562056, lng: -44.317597, 
        materiais: ["entulho", "poda", "reciclaveis"], horario: "Seg a Sáb - 07h às 19h", 
        endereco: "Rua Dom Luis, 0, Vila Isabel",
        avaliacoes: [
            { autor: "João Pereira", nota: 5, texto: "Lugar organizado e os funcionários ajudam na separação.", data: "08/09/2026" },
            { autor: "Maria Silva", nota: 4, texto: "Bom, mas a caçamba de entulho estava cheia ontem.", data: "02/09/2026" }
        ] 
    },
    { nome: "Ecoponto Centro", lat: -2.538522, lng: -44.303649, materiais: ["entulho", "poda", "reciclaveis"], horario: "Seg a Sáb - 07h às 19h", endereco: "Anel Viário, Centro" },
    { nome: "Ecoponto Parque Amazonas", lat: -2.550087, lng: -44.283697, materiais: ["entulho", "poda", "reciclaveis"], horario: "Seg a Sáb - 07h às 19h", endereco: "Rua A8, S/N, Parque Amazonas" },
    { nome: "Ecoponto Sacavém", lat: -2.544458, lng: -44.276332, materiais: ["entulho", "poda", "reciclaveis"], horario: "Seg a Sáb - 07h às 19h", endereco: "Avenida dos Africanos S/N" },
    { nome: "Ecoponto Parque dos Nobres", lat: -2.558026, lng: -44.276895, materiais: ["entulho", "poda", "reciclaveis", "eletronicos"], horario: "Seg a Sáb - 07h às 19h", endereco: "Rua dos Imperadores" },
    { nome: "Ecoponto Barreto", lat: -2.544544, lng: -44.265465, materiais: ["entulho", "poda", "reciclaveis"], horario: "Seg a Sáb - 07h às 19h", endereco: "Rua Cinco de Janeiro, Vila Ivar Saldanha" },
    { nome: "Ecoponto Anil", lat: -2.551205, lng: -44.235970, materiais: ["entulho", "poda", "reciclaveis"], horario: "Seg a Sáb - 07h às 19h", endereco: "Rua 02, Conjunto Rancho Dom Luiz, Anil" },
    { nome: "Ecoponto São Cristóvão", lat: -2.570882, lng: -44.223548, materiais: ["entulho", "poda", "reciclaveis", "eletronicos"], horario: "Seg a Sáb - 07h às 19h", endereco: "R. Haroldo Paiva, 17, São Cristóvão" },
    { nome: "Ecoponto Cidade Operária", lat: -2.564524, lng: -44.199934, materiais: ["entulho", "poda", "reciclaveis"], horario: "Seg a Sáb - 07h às 19h", endereco: "Avenida Esteban 203, Cidade Operária" },
    { nome: "Ecoponto Jardim América", lat: -2.581850, lng: -44.192744, materiais: ["entulho", "poda", "reciclaveis"], horario: "Seg a Sáb - 07h às 19h", endereco: "Av. Três, Jardim América" },
    { nome: "Ecoponto Mata Roma", lat: -2.583517, lng: -44.198661, materiais: ["entulho", "poda", "reciclaveis", "eletronicos"], horario: "Seg a Sáb - 07h às 19h", endereco: "Avenida Leste 103" },
    { nome: "Ecoponto São Raimundo", lat: -2.593877, lng: -44.231921, materiais: ["entulho", "poda", "reciclaveis"], horario: "Seg a Sáb - 07h às 19h", endereco: "Rua 03, Quadra 50, São Raimundo" },
    { nome: "Ecoponto Primavera", lat: -2.540161, lng: -44.195727, materiais: ["entulho", "poda", "reciclaveis"], horario: "Seg a Sáb - 07h às 19h", endereco: "Av. Contorno Sul, Residencial Primavera" },
    { nome: "Ecoponto Itapiracó", lat: -2.532324, lng: -44.202870, materiais: ["entulho", "poda", "reciclaveis"], horario: "Seg a Sáb - 07h às 19h", endereco: "Avenida Joaquim Mochel, Cohatrac IV" },
    { nome: "Ecoponto Angelim", lat: -2.531504, lng: -44.233297, materiais: ["entulho", "poda", "reciclaveis"], horario: "Seg a Sáb - 07h às 19h", endereco: "Rua 27, S/N, Angelim" },
    { nome: "Ecoponto Res. Esperança", lat: -2.520644, lng: -44.240738, materiais: ["entulho", "poda", "reciclaveis"], horario: "Seg a Sáb - 07h às 19h", endereco: "Rua Doutor Ribeiro, s/nº" },
    { nome: "Ecoponto Recanto dos Vinhais", lat: -2.520486, lng: -44.260233, materiais: ["entulho", "poda", "reciclaveis"], horario: "Seg a Sáb - 07h às 19h", endereco: "Rua Rio Anil, S/N" },
    { nome: "Ecoponto Cohaserma", lat: -2.507279, lng: -44.248497, materiais: ["entulho", "poda", "reciclaveis"], horario: "Seg a Sáb - 07h às 19h", endereco: "Rua 14, S/N, Cohaserma" },
    { nome: "Ecoponto Turu", lat: -2.502635, lng: -44.227143, materiais: ["entulho", "poda", "reciclaveis", "eletronicos"], horario: "Seg a Sáb - 07h às 19h", endereco: "Travessa G, S/N, Habitacional Turu" },
    { nome: "Ecoponto São Francisco", lat: -2.511520, lng: -44.309319, materiais: ["entulho", "poda", "reciclaveis"], horario: "Seg a Sáb - 07h às 19h", endereco: "Avenida Ferreira Gullar, São Francisco" },
    { nome: "Ecoponto Jardim Renascença", lat: -2.494579, lng: -44.288446, materiais: ["entulho", "poda", "reciclaveis"], horario: "Seg a Sáb - 07h às 19h", endereco: "Rua Netuno, Jardim Renascença" },
    { nome: "Ecoponto Calhau Borborema", lat: -2.489720, lng: -44.269694, materiais: ["entulho", "poda", "reciclaveis"], horario: "Seg a Sáb - 07h às 19h", endereco: "Av. Borborema, S/N, Calhau" },
    { nome: "Ecoponto Av. dos Holandeses", lat: -2.487730, lng: -44.245396, materiais: ["entulho", "poda", "reciclaveis"], horario: "Seg a Sáb - 07h às 19h", endereco: "Avenida dos Holandeses, S/N, Calhau" }
];

/* ==========================================================================
   2. CONFIGURAÇÃO GLOBAL DO MAPA
   ========================================================================== */
let marcadores = [];
let marcadorUsuario = null;

const mapa = L.map('mapa', { zoomControl: false }).setView([-2.53073, -44.30261], 11);
L.control.zoom({ position: 'topright' }).addTo(mapa);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { 
    attribution: '© OpenStreetMap' 
}).addTo(mapa);


/* ==========================================================================
   3. RENDERIZAÇÃO DOS PINOS
   ========================================================================== */
function criarConteudoPopup(ponto, index) {
    // Cria a URL do Google Maps dinamicamente com as coordenadas
    const linkRotaDinamico = `https://www.google.com/maps/dir/?api=1&destination=${ponto.lat},${ponto.lng}`;

    return `
        <div class="popup-moderno">
            <h3>${ponto.nome}</h3>
            <div class="info-linha"><span class="material-symbols-rounded">location_on</span> <span>${ponto.endereco}</span></div>
            <div class="info-linha"><span class="material-symbols-rounded">schedule</span> <span>${ponto.horario}</span></div>
            
            <div class="botoes-popup">
                <a href="${linkRotaDinamico}" target="_blank" class="btn-rota">
                    <span class="material-symbols-rounded">directions_car</span> Traçar Rota
                </a>
                <button class="btn-secundario" style="height: 44px;" onclick="abrirAvaliacoes(${index})">
                    <span class="material-symbols-rounded">star</span> Ver Avaliações
                </button>
            </div>
        </div>
    `;
}

function carregarEcopontos(filtro = 'todos') {
    marcadores.forEach(marcador => mapa.removeLayer(marcador));
    marcadores = [];

    // O forEach agora recebe o "index" (posição no array) para vincularmos ao botão de avaliação
    ecopontos.forEach((ponto, index) => {
        if (!ponto.avaliacoes) ponto.avaliacoes = []; // Garante que todos tenham a lista de avaliações

        if (filtro === 'todos' || ponto.materiais.includes(filtro)) {
            const marcador = L.marker([ponto.lat, ponto.lng]).addTo(mapa);
            ponto.marcador = marcador; 
            marcador.bindPopup(criarConteudoPopup(ponto, index));
            marcadores.push(marcador);
        }
    });
}


/* ==========================================================================
   4. INTERFACE E CONTROLES DE NAVEGAÇÃO
   ========================================================================== */
const elementosPainel = {
    painel: document.getElementById('painel'),
    cabecalho: document.getElementById('cabecalho-painel'),
    selectFiltro: document.getElementById('filtro-material'),
    btnLocalizacao: document.getElementById('btn-localizacao')
};

// Alternância de Abas (Tabs)
function mudarAba(abaId) {
    document.querySelectorAll('.aba-btn').forEach(btn => btn.classList.remove('ativo'));
    document.querySelectorAll('.conteudo-aba').forEach(aba => aba.classList.remove('ativa'));

    document.querySelector(`.aba-btn[onclick="mudarAba('${abaId}')"]`).classList.add('ativo');
    document.getElementById(`aba-${abaId}`).classList.add('ativa');

    if (window.innerWidth <= 600 && elementosPainel.painel.classList.contains('painel-recolhido')) {
        alternarGaveta();
    }
}

// Interações do Filtro
elementosPainel.selectFiltro.addEventListener('change', (e) => {
    carregarEcopontos(e.target.value);
    
    if (window.innerWidth <= 600 && !elementosPainel.painel.classList.contains('painel-recolhido')) {
        alternarGaveta();
    }
});

// Alternância entre telas de Login e Cadastro
function alternarFormulario(tela) {
    const telaLogin = document.getElementById('tela-login');
    const telaCadastro = document.getElementById('tela-cadastro');

    if (tela === 'cadastro') {
        telaLogin.style.display = 'none';
        telaCadastro.style.display = 'block';
    } else {
        telaCadastro.style.display = 'none';
        telaLogin.style.display = 'block';
    }
}
/* ==========================================================================
   5. LÓGICA DE GEOLOCALIZAÇÃO E ROTAS
   ========================================================================== */
function centralizarRotaMaisProxima(posicaoUsuario) {
    let menorDistancia = Infinity;
    let ecopontoMaisProximo = null;

    // Busca matemática do Ecoponto ativo mais próximo
    ecopontos.forEach(ponto => {
        if (ponto.marcador && mapa.hasLayer(ponto.marcador)) {
            const posicaoEcoponto = L.latLng(ponto.lat, ponto.lng);
            const distancia = posicaoUsuario.distanceTo(posicaoEcoponto);

            if (distancia < menorDistancia) {
                menorDistancia = distancia;
                ecopontoMaisProximo = ponto;
            }
        }
    });

    if (ecopontoMaisProximo) {
        const areaVisivel = L.latLngBounds([posicaoUsuario, [ecopontoMaisProximo.lat, ecopontoMaisProximo.lng]]);
        
        const compensacaoTela = window.innerWidth > 600 
            ? { paddingTopLeft: [420, 250], paddingBottomRight: [50, 50] }
            : { paddingTopLeft: [50, 250], paddingBottomRight: [50, 350] };

        mapa.fitBounds(areaVisivel, compensacaoTela);

        setTimeout(() => ecopontoMaisProximo.marcador.openPopup(), 500);
    } else {
        mapa.setView(posicaoUsuario, 14);
        marcadorUsuario.openPopup();
    }
}

elementosPainel.btnLocalizacao.addEventListener('click', function() {
    const btn = this;
    const estadoOriginal = btn.innerHTML;
    btn.innerHTML = '<span class="material-symbols-rounded">hourglass_empty</span> Buscando...';

    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
            (posicao) => {
                const posicaoUsuario = L.latLng(posicao.coords.latitude, posicao.coords.longitude);

                // Gerenciamento do Marcador do Usuário
                if (marcadorUsuario) mapa.removeLayer(marcadorUsuario);
                marcadorUsuario = L.circleMarker(posicaoUsuario, {
                    radius: 8, fillColor: "#2563eb", color: "#ffffff", weight: 2, opacity: 1, fillOpacity: 1
                }).addTo(mapa).bindPopup("<b>Você está aqui!</b>");

                centralizarRotaMaisProxima(posicaoUsuario);

                // Restauração da Interface
                btn.innerHTML = estadoOriginal;
                if (window.innerWidth <= 600) alternarGaveta();
            },
            (erro) => {
                alert("Não foi possível acessar seu GPS. Verifique as permissões de localização do navegador.");
                btn.innerHTML = estadoOriginal;
            }
        );
    } else {
        alert("Seu navegador não suporta geolocalização.");
        btn.innerHTML = estadoOriginal;
    }
});


/* ==========================================================================
   6. RESPONSIVIDADE MOBILE (Gaveta Deslizante)
   ========================================================================== */
function alternarGaveta() {
    if (window.innerWidth <= 600) {
        elementosPainel.painel.classList.toggle('painel-recolhido');
        document.body.classList.toggle('is-recolhido');
    }
}

function checarTamanhoTela() {
    const mobile = window.innerWidth <= 600;
    elementosPainel.painel.classList.toggle('painel-recolhido', mobile);
    document.body.classList.toggle('is-recolhido', mobile);
}

elementosPainel.cabecalho.addEventListener('click', (e) => {
    e.stopPropagation(); 
    alternarGaveta();
});

window.addEventListener('load', checarTamanhoTela);
window.addEventListener('resize', checarTamanhoTela);

// Execução Inicial
carregarEcopontos();
/* ==========================================================================
   7. LÓGICA DE AVALIAÇÕES E COMENTÁRIOS
   ========================================================================== */
let ecopontoEmAvaliacao = null;
let notaSelecionada = 0;

function abrirAvaliacoes(indexEcoponto) {
    const ponto = ecopontos[indexEcoponto];
    ecopontoEmAvaliacao = indexEcoponto;
    
    // Atualiza o título e limpa o formulário
    document.getElementById('titulo-avaliacoes').innerText = ponto.nome;
    document.getElementById('texto-avaliacao').value = '';
    selecionarEstrela(0); 

    // Renderiza os comentários existentes
    const container = document.getElementById('container-comentarios');
    container.innerHTML = '';

    if (ponto.avaliacoes.length === 0) {
        container.innerHTML = '<p style="font-size: 13px; color: #6b7280; text-align: center;">Nenhuma avaliação ainda. Seja o primeiro!</p>';
    } else {
        // Inverte a lista para mostrar o mais recente primeiro
        [...ponto.avaliacoes].reverse().forEach(aval => {
            // Desenha as estrelinhas de cada comentário
            let estrelasHtml = '';
            for(let i = 1; i <= 5; i++) {
                estrelasHtml += `<span class="material-symbols-rounded ${i <= aval.nota ? '' : 'vazia'}">star</span>`;
            }

            container.innerHTML += `
                <div class="comentario-card">
                    <div class="comentario-header">
                        <span class="comentario-autor">${aval.autor}</span>
                        <span class="comentario-data">${aval.data}</span>
                    </div>
                    <div class="estrelas-exibicao">${estrelasHtml}</div>
                    <p class="comentario-texto">${aval.texto}</p>
                </div>
            `;
        });
    }

    // Navega para a aba oculta de avaliações e sobe a gaveta no mobile
    document.querySelectorAll('.aba-btn').forEach(btn => btn.classList.remove('ativo')); // Tira a barra verde do menu base
    document.querySelectorAll('.conteudo-aba').forEach(aba => aba.classList.remove('ativa'));
    document.getElementById('aba-avaliacoes').classList.add('ativa');

    if (window.innerWidth <= 600 && elementosPainel.painel.classList.contains('painel-recolhido')) {
        alternarGaveta();
    }
}

// Interatividade visual das estrelas no formulário
function selecionarEstrela(nota) {
    notaSelecionada = nota;
    const estrelas = document.querySelectorAll('#seletor-estrelas .estrela');
    
    estrelas.forEach((estrela, index) => {
        if (index < nota) {
            estrela.classList.add('ativa');
        } else {
            estrela.classList.remove('ativa');
        }
    });
}

// Simulando o envio para o banco de dados
document.getElementById('btn-enviar-avaliacao').addEventListener('click', () => {
    const texto = document.getElementById('texto-avaliacao').value;

    if (notaSelecionada === 0) {
        alert("Por favor, selecione uma nota de 1 a 5 estrelas antes de enviar.");
        return;
    }

    if (ecopontoEmAvaliacao !== null) {
        const ponto = ecopontos[ecopontoEmAvaliacao];
        
        // Simula a adição da avaliação no "banco"
        ponto.avaliacoes.push({
            autor: "Você (Usuário Logado)", // Quando tiver login, isso virá da conta do usuário
            nota: notaSelecionada,
            texto: texto || "Sem comentários adicionais.",
            data: new Date().toLocaleDateString('pt-BR') // Pega a data de hoje formatada
        });

        // Recarrega a tela para mostrar o novo comentário
        abrirAvaliacoes(ecopontoEmAvaliacao);
    }
});