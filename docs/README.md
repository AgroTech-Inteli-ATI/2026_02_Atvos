# Documentação — AgroTech Inteli + Atvos

Site Docusaurus do estudo de viabilidade de um CD de materiais MRO.

```bash
npm ci
npm start
```

Edite o conteúdo em `docs/`, organizado pelas três sprints do case. Cada pasta contém apenas uma visão geral das entregas, sem templates obrigatórios. Coloque imagens em `static/img/` e use caminhos compatíveis com o `baseUrl` `/2026_02_Atvos/`.

```bash
npm run build
npm run serve
```

O build valida links e MDX. A publicação é feita pelo workflow em `.github/workflows/deploy.yml`, a partir da branch `main`, usando GitHub Actions como origem do Pages.

## Identidade visual

O tema mantém o verde da AgroTech Inteli e incorpora o logo da Atvos e detalhes em laranja. O SVG `static/img/atvos-logo.svg` foi obtido do [site oficial da Atvos](https://atvos.com/), no [arquivo institucional](https://atvos.com/wp-content/uploads/2024/10/onDark.svg), em 03/11/2026. As marcas pertencem às respectivas organizações.
