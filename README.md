<h1 align="center">
  ♻️ EcoMap São Luís
</h1>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Leaflet-199900?style=for-the-badge&logo=Leaflet&logoColor=white" alt="Leaflet">
</p>

<p align="center">
  Uma aplicação web interativa desenvolvida com HTML, CSS e JavaScript puro (Vanilla) para promover o descarte consciente de resíduos na cidade de São Luís. A ferramenta permite aos utilizadores localizar Ecopontos, consultar regras de descarte e avaliar os locais.
</p>

## 🚀 Funcionalidades

- **🗺️ Mapa Interativo Dinâmico:** Visualização dos Ecopontos da cidade através de marcadores no mapa gerado pelo Leaflet.js.
- **📍 Geolocalização em Tempo Real:** Funcionalidade "Buscar perto de mim", que acede ao GPS do dispositivo para calcular e focar no Ecoponto mais próximo.
- **🚗 Geração de Rotas:** Botões embutidos nos pop-ups do mapa que criam hiperligações dinâmicas e abrem o Google Maps com o trajeto já traçado.
- **🔍 Filtros por Material:** Barra de seleção para filtrar o mapa e apresentar apenas os locais que aceitam categorias específicas (Entulho, Restos de Poda, Recicláveis ou Eletrónicos).
- **⭐ Sistema de Avaliações (UI):** Interface que permite visualizar os comentários existentes no formato de cartões e submeter novas avaliações com nota de 1 a 5 estrelas.
- **📖 Guia Informativo e Regras:** Aba dedicada a informar os utilizadores sobre o que pode ser descartado, os limites de volume (ex: até 2m³ de entulho, 300 litros de recicláveis) e materiais estritamente proibidos.
- **📱 Design Mobile-First responsivo:** Painel de controlo concebido como uma gaveta deslizante (*bottom sheet*), que se ajusta automaticamente para facilitar a utilização com apenas uma mão em telemóveis.

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído privilegiando a simplicidade, a velocidade e a ausência de dependências pesadas, utilizando tecnologias web padrão:

*   **HTML5:** Estruturação semântica, abas de navegação e formulários.
*   **CSS3 (Vanilla):** Estilização com variáveis globais, flexbox, e media queries para responsividade, sem recorrer a frameworks externas.
*   **JavaScript (ES6):** Lógica da aplicação, manipulação do DOM, cálculo matemático de distâncias e gestão de eventos.
*   **Leaflet.js & OpenStreetMap:** Biblioteca open-source ligeira para a renderização do mapa e dos marcadores.
*   **Google Material Symbols:** Iconografia com peso reduzido, utilizada em botões e alertas.

## ⚙️ Como Executar Localmente

Sendo um projeto estático em Vanilla JS, não é necessário instalar Node.js, gestores de pacotes (npm) ou configurar servidores locais complexos.

1. **Clonar o repositório:**
   ```bash
   git clone https://github.com/andersoncarvalhal-dev/Front-End-ecomap.git


## 🔮 Roadmap (Próximos Passos)
- **Backend e Base de Dados:** Ligar o sistema de comentários (atualmente guardado em memória) a uma base de dados real (ex: Firebase).

- **Autenticação de Utilizadores:** Desenvolver as funções dos botões da aba "Entrar" e "Registar", para que apenas utilizadores logados possam deixar avaliações.


## 📝 Licença

Este projeto encontra-se sob a licença MIT. Para mais pormenores, consulte o ficheiro [LICENSE](https://mit-license.org/).

Desenvolvido com 💚 para promover um futuro sustentável em São Luís.