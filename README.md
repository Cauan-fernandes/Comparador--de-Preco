# Projeto de Busca de Produtos com a API do Mercado Livre

Este projeto é uma aplicação web simples que permite aos usuários buscar produtos da API do Mercado Livre, exibir os resultados e detalhes dos produtos em um layout amigável. Além disso, o projeto faz uso da biblioteca Chart.js para exibir gráficos visuais de dados relacionados às buscas.

## Funcionalidades

- Realizar buscas de produtos usando a API do Mercado Livre.
- Exibir uma lista dos produtos retornados, incluindo imagem, título, preço e informações do vendedor.
- Link direto para os detalhes do produto no site do Mercado Livre.
- Visualização de gráficos com a biblioteca Chart.js para análise dos dados da busca (por exemplo, preços médios, distribuição de categorias).

## Tecnologias Utilizadas

- HTML: Para a estruturação do conteúdo da página.
- CSS: Para o estilo e layout da interface.
- JavaScript (JS): Para manipulação do DOM, integração com a API e exibição dos resultados.
- API do Mercado Livre: Para realizar buscas e obter informações dos produtos.
- Chart.js: Para gerar gráficos dinâmicos e visualizações de dados.

## API do Mercado Livre

A API utilizada neste projeto é a [API Pública do Mercado Livre](https://developers.mercadolivre.com.br/pt_br/itens-e-buscas), que oferece endpoints para realizar pesquisas de produtos e obter dados como preços, imagens, e informações do vendedor.

```javascript
const API = `https://api.mercadolibre.com/sites/MLB/search?q=${inputValue}`;
```

Eu capturei o valor do meu input e armazenei em uma variável, que foi enviada para a API para que ela realize a pesquisa com base no que digitei.
