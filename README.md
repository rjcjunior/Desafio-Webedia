## Desafio
Seu desafio será desenvolver um simples site responsivo de notícias internacionais. Neste site existem as páginas com listagem de notícias em destaque, do Brasil, dos EUA, da Argentina, da França e de resultado de pesquisa. Todas as páginas deverão possuir paginação.

As notícias deverão ser carregadas a partir de uma API.

### API -> OK

- Você deverá pegar as notícias da News API(https://newsapi.org/). A News API é uma API gratuita para projetos open source no qual fornece notícias de diversas fontes ao redor do mundo. -> OK

### Página incial -> OK

- A página inicial deverá carregar as notícias em destaque. -> OK

### Header -> OK

- O link da imagem do header deve levar para a home, no qual deverá carregar as notícias em destaque. -> OK

### Menu -> OK

- No mobile o menu deverá abrir por cima do conteúdo da página. -> OK
- O menu mobile e desktop deverão possuir os mesmos itens. -> OK

### Pesquisa -> OK

- No desktop o campo de busca deverá começar aberto. -> OK
- No desktop o campo de busca deverá estar focado, ou seja, pronto para o usuário digitar a pesquisa. -> OK
- No mobile o campo de busca deverá começar escondido e deve aparecer apenas quando o usuário clicar no  ícone de pesquisa. O logo do site deverá esconder quando isto ocorrer. -> OK
- No mobile com o campo aberto, o usuário poderá fechar o campo de pesquisa e voltar com o logo ao clicar no ícone de fechar. -> OK
- O usuário poderá fazer a pesquisa clicando no botão de busca ou apertando enter. -> OK

### Listagem de notícias -> OK

- No desktop a listagem de notícias deve possuir exatamente as mesmas posições como no layout. -> OK
- Caso a imagem da notícia que venha da API seja menor ou maior que o container, faça o mesmo respeitar o container. Caso seja maior, centralize a imagem dentro do container. Caso ele seja menor, faça com que o mesmo esteja centralizado horizontalmente e verticalmente, com background cinza (como em exemplo no layout). -> OK
- O card inteiro do item de notícia deverá ser clicável para o link da matéria. -> OK
- As informações que deverão conter no card são: data de publicação, título, descrição e autor. Você deve omitir a informação caso ela não seja enviada pela API. -> OK
- Cada página deverá ter no máximo 7 notícias. -> OK

### Paginação -> OK

- Deverá conter sempre 5 links de páginas. -> OK
- Deverá mostrar sempre qual é a página ativa atual. -> OK
- Deverá conter sempre link da primeira e última página. -> OK
- No caso da primeira página, mostrar as 4 primeiras páginas e a última página. -> OK
- No caso da última página, mostrar a primeira página e as 4 últimas. -> OK
- No caso de uma página entre a primeira e a última, mostrar sempre as adjacentes. Por exemplo, primeira página, quinta página, sexta página, sétima página e última página (sendo que a ativa é a sexta). -> OK

### Footer -> OK

- O logo da Webedia deverá enviar para o site em uma nova janela/aba: http://www.webedia.com.br/ -> OK

### Reponsividade

- SmartPhones -> OK
- Desktops -> OK
- Telas grandes

## Melhorias e sugestões

 Que tal fazer umas melhorias no projeto? Seja deixando mais bonito, mais funcional ou mais otimizado.

Segue uma lista de sugestões do que você pode fazer:

- Trabalhe em efeitos de hover nos itens e links. -> OK
- Caso não exista resultado na página de busca, mostre uma mensagem de feedback. Deixamos o visual por sua conta. -> OK
- Fique atento na semântica do HTML. 
- Tente criar transições e efeitos de carregamento. 
- Use animações quando onde e como achar melhor. 
- Tente fazer com que seja possível abrir, por exemplo, a página de notícias do Brasil diretamente, sem passar pela página inicial. Assim como as outras páginas. -> OK |  O mesmo pode ser aplicado com a paginação. -> OK


