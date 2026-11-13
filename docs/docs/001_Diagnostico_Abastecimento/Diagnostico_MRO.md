---
sidebar_position: 1
sidebar_label: 1. Necessidades de materiais MRO
slug: /sprint-1/necessidades-materiais-mro
description: "Diagnóstico de materiais MRO na Atvos: importância operacional, grupos definidos, consumo desde 2024, riscos de falta, estoques repetidos, itens sem uso e classificação ABC."
---

# 1. Necessidades de materiais MRO

> **Diagnóstico de materiais MRO na Atvos: consumo, riscos, estoques e classificação (2024–2026)**
> **Período analisado:** jan/2024 a out/2026 (34 meses)
> **Escopo:** 6 grupos MRO · 8 unidades · 3.201 materiais · 8.224 combinações de centro e material
> **Estoque do escopo:** R$ 23,96 milhões (todos os depósitos)

---

## 1.1. Importância dos materiais MRO e visão executiva

### 1.1.1. Sumário executivo

Os seis grupos MRO movimentaram cerca de **R$ 204 milhões** em consumo nas 8 unidades entre jan/2024 e out/2026, e o gasto está acelerando:

| Comparação | Variação |
| --- | --- |
| Safra 25/26 vs. safra 24/25 | **+12,8%** |
| Safra 26/27 (abr–out) vs. mesmo período de 25/26 | **+19,8%** |

**Principais resultados:**

1. **O valor está concentrado em poucos itens.** 119 itens (5,6% dos valorizados) fazem 80% do valor consumido na safra 25/26 (R$ 72,4 mi). Lubrificantes e pneus somam 58% de todo o consumo desde 2024.
2. **O portfólio tem dois perfis de gestão.** Lubrificantes, pneus, filtros e desgaste agrícola são poucos itens de consumo contínuo e alto valor (82% do consumo). Rolamentos e transmissão/mangueiras são muitos itens de consumo esporádico (58% das combinações, 18% do valor).
3. **O estoque está espalhado e parte dele está parada.** 53% dos itens com estoque estão em dois ou mais centros. **R$ 4,7 mi (20% do estoque) estão em centros que não consumiram o item em 12 meses**; desses, **R$ 3,2 mi são de materiais consumidos em outra unidade**, ou seja, transferíveis sem compra nova.
4. **Rolamentos concentram o estoque parado:** 9,9 meses de cobertura (média do escopo: 3,5) e 27% do estoque em depósitos OBSO ou SLOW.
5. **712 combinações de centro e material têm risco alto de falta** (14% das que tiveram consumo no ano). A UMV, hub do Polo Norte, lidera os casos de consumo recorrente sem estoque.
6. **Os parâmetros de reposição pendem para o excesso.** Em 42% dos itens planejados (VB), o máximo supera seis meses de consumo. Lubrificantes são a exceção: 12% têm mínimo abaixo da demanda no lead time, com lead time P90 de 75 dias e um único fornecedor relevante.
7. **A sazonalidade é oposta entre agrícola e industrial.** Desgaste agrícola consome 2,8× mais na safra; rolamentos têm pico na entressafra, nas reformas industriais.

**Três pontos que pedem decisão:**

1. **Pneus é o grupo que mais cresce** (+43% em 25/26 e +33% em 26/27). A causa precisa ser explicada antes de virar parâmetro de reposição.
2. **A dependência de fornecedor é extrema** em lubrificantes (Petronas = 93% do valor) e desgaste agrícola (Bússola = 78%).
3. **Os grupos de cauda longa são os candidatos naturais ao estoque compartilhado.** Os grupos de consumo contínuo devem seguir abastecidos localmente, com parâmetros por safra.

*Valores em R$ são estimativas: quantidade consumida × preço de referência do estoque atual (ver seção 1.2.1).*

---

### 1.1.2. Importância para a manutenção e operação das unidades

**MRO (Manutenção, Reparo e Operação)** é o conjunto de materiais que não entra no produto final, mas mantém de pé o ativo que produz. Na Atvos, isso cobre a frota agrícola (colhedoras, tratores, transbordos), a frota de transporte de cana e os equipamentos industriais das 8 usinas.

O valor do MRO não está no preço do item, e sim no **custo da parada que ele evita**. Um filtro de R$ 110 ou uma faca de picador de R$ 114 que faltam no auge da safra param uma colhedora inteira: a frente de colheita perde ritmo, a cana espera no campo e a moagem cai.

| Exigência | Por que importa | Evidência |
| --- | --- | --- |
| **Disponibilidade** | O item precisa estar na unidade quando a máquina para | Lead time de 21 a 32 dias na mediana; 31% passam de 30 dias |
| **Capital** | Estoque de segurança para tudo, em 8 unidades, imobiliza dinheiro | R$ 4,7 mi em centros que não usaram o item em um ano |
| **Integridade do material** | Borracha, óleo e rolamentos se degradam parados | R$ 3,2 mi já separados pela Atvos nos depósitos OBSO e SLOW |

| Período | Meses | O que concentra |
| --- | --- | --- |
| **Safra** | abril a novembro | Desgaste da frota agrícola |
| **Entressafra** | dezembro a março | Manutenção e reformas industriais |

---

## 1.2. Grupos de materiais definidos pela Atvos

### 1.2.1. Bases de dados, escopo e método

**Bases utilizadas:**

| Base | Uso |
| --- | --- |
| **Base_Planejamento_Materiais** (recebida em 09/11/2026) | Escopo de 3.201 códigos nos 6 grupos, parâmetros MRP (tipo, mínimo, máximo, status) e posição de estoque por centro e depósito |
| **Planejamento_Materiais – Consolidado** (recebida em 11/11/2026) | Consumo mensal jan/2024–nov/2026, nome das unidades, lead time médio e fornecedor por centro e material |
| **Cópia do Consolidado (PDF)** | Mesmos dados (34.004 linhas idênticas), com campos calculados, incluindo a Criticidade de Consumo |
| **Apresentação "Estoque compartilhado"** | Projeto Polo Norte: diagnóstico, cascata de redução e logística |
| **Atvos_S1_Diagnostico_MRO_v2.xlsx** | Planilha de apoio com todos os cálculos em fórmula (≈600 mil), conferida com cálculo independente em Python |

**Escopo e tratamento:**

| Item | Situação |
| --- | --- |
| Materiais | 3.201 códigos nos 6 grupos da Atvos |
| Unidades | 1013 UCP · 1017 USL · 1020 UEL · 1024 URC · 1031 UAE · 1032 UMV (hub) · 1034 UCR · 1035 UAT, mais o centro 1011 (só estoque, R$ 6,5 mil) |
| Período | jan/2024 a out/2026 (34 meses). Nov/2026 parcial fica fora |
| Combinações de centro e material | 8.224: 7.375 da base de 11/11, 46 só da base de 09/11 e 803 só com estoque |
| Estoque | 6.475 linhas, 2.657 códigos, **R$ 23,96 mi**, todos os depósitos (data da posição não informada) |
| Lead time informado | 2.853 combinações (35%) e 1.308 materiais |
| Fornecedor informado | 5.746 combinações (70%), 92 fornecedores |
| Preço de referência | R$ ÷ quantidade do estoque atual de cada código; 544 códigos sem estoque ficaram sem preço |

**Cuidados metodológicos:**

- **Classificação de grupo divergente:** a base de 11/11 tem só 4 grupos e coloca filtros e mangueiras em "Pneus", luvas e botinas em "Filtros". Dos 3.201 códigos, 66% aparecem em grupo diferente. **Mantivemos os 6 grupos da base de 09/11.**
- **Estoque:** a coluna de estoque da base de 11/11 é menor (R$ 21,5 mi) e parece não incluir parte dos depósitos OBSO e SLOW. Mantivemos a posição de 09/11.
- **Outubro/2026 completo:** a base de 11/11 confirma que a extração anterior estava parcial.
- **Consumo consistente:** nos meses em comum, as bases diferem em 1,5% do total.

---

### 1.2.2. Panorama dos seis grupos MRO

Lubrificantes e pneus respondem por **58% do valor consumido**; rolamentos e transmissão/mangueiras têm 58% das combinações, mas só 18% do valor.

| Grupo | Combinações | Consumo jan/24–out/26 (R$ mi) | % valor | Safra 24/25 (R$ mi) | Safra 25/26 (R$ mi) | Δ 25/26 | Δ 26/27 (abr–out) |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Lubrificantes e fluidos | 509 | 69,5 | 34,1% | 22,3 | 24,3 | +9,1% | +17,8% |
| Pneus e acessórios | 616 | 49,6 | 24,3% | 13,4 | 19,1 | +42,6% | +32,7% |
| Filtros e elementos | 1.660 | 24,5 | 12,0% | 8,0 | 8,7 | +8,7% | +9,6% |
| Desgaste agrícola | 269 | 24,5 | 12,0% | 8,0 | 8,2 | +3,4% | +18,9% |
| Rolamentos e vedação | 3.174 | 19,1 | 9,4% | 6,8 | 6,3 | −7,4% | +4,2% |
| Transmissão e mangueiras | 1.193 | 16,7 | 8,2% | 5,7 | 5,7 | −0,1% | +23,6% |
| **Total** | **7.421** | **204,0** | **100%** | **64,2** | **72,4** | **+12,8%** | **+19,8%** |

*Combinações com registro de consumo (as 803 só com estoque ficam de fora desta tabela).*

**Concentração dentro de cada grupo** (materiais que somam 80% do consumo do grupo em 34 meses):

| Grupo | Itens para 80% | Leitura |
| --- | --- | --- |
| Desgaste agrícola | 7 de 85 | Facas de picador, facas de base e lâminas John Deere: gerir esses 7 é gerir o grupo |
| Lubrificantes e fluidos | 13 de 176 | Arbor MTF 10W30, Urania 15W40, Tutela Hidrobak |
| Pneus e acessórios | 13 de 186 | 295/80R22.5 (caminhão) e 560/60R22.5 (transbordo) |
| Transmissão e mangueiras | 33 de 499 | Corrente John Deere CB01433201 sozinha faz R$ 3,7 mi |
| Filtros e elementos | 65 de 535 | Quase todos John Deere |
| Rolamentos e vedação | 174 de 1.174 | Gestão só funciona por regra, não item a item |

*Esta é uma concentração dentro de cada grupo, em 34 meses. A curva ABC da seção 1.5.1 é global e usa só a safra 25/26.*

---

## 1.3. Análise do consumo desde 2024, reposição e armazenagem

### 1.3.1. Sazonalidade, frequência e variabilidade

**Sazonalidade — índice mensal de consumo em R$ (1,00 = média do ano), média jan/2024–set/2026:**

| Grupo | abr | mai | jun | jul | ago | set | out | nov | dez | jan | fev | mar | Safra ÷ entressafra |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Desgaste agrícola | 0,79 | 1,51 | 1,41 | **1,68** | 1,48 | 1,34 | 1,14 | 0,80 | 0,44 | 0,40 | 0,39 | 0,63 | **2,8×** |
| Filtros e elementos | 0,85 | 1,24 | 1,20 | 1,27 | **1,35** | 1,28 | 1,12 | 1,07 | 0,57 | 0,60 | 0,61 | 0,83 | 1,8× |
| Lubrificantes e fluidos | 0,93 | 1,15 | 1,17 | 1,28 | **1,30** | 1,25 | 1,07 | 0,98 | 0,61 | 0,55 | 0,70 | 1,01 | 1,6× |
| Pneus e acessórios | 0,79 | 1,20 | 1,06 | 1,15 | **1,32** | 1,30 | 1,07 | 0,97 | 0,52 | 0,90 | 0,87 | 0,85 | 1,4× |
| Transmissão e mangueiras | 0,83 | 0,93 | 0,91 | 1,16 | **1,24** | 1,22 | 1,21 | 0,97 | 0,65 | 0,94 | 0,97 | 0,95 | 1,2× |
| Rolamentos e vedação | 0,73 | 0,97 | 0,85 | 1,02 | 0,97 | 1,05 | 0,92 | 0,82 | 0,77 | 1,34 | **1,61** | 0,94 | **0,8×** |

Pela classe global, o MRO agrícola consome na entressafra 0,60× a média da safra; o MRO industrial, 1,38×.

**Implicações:**

- Um mínimo/máximo fixo o ano todo é errado para quase todos os grupos.
- Desgaste agrícola, filtros e lubrificantes precisam de estoque reforçado **antes de maio** e reduzido **a partir de novembro**.
- Rolamentos precisam do movimento contrário, com estoque chegando **antes de janeiro**.
- O pico de pneus em jan–fev **não é sazonal**: é o consumo atípico de Santa Luzia em 2026 (ver seção 1.3.3 — Pneus e acessórios).
- Para um centro de distribuição, o pico de demanda de cada grupo cai em épocas diferentes do ano, o que afeta espaço e equipe.

**Frequência — percentual das combinações por número de meses com consumo (jan/2024–out/2026):**

| Grupo | Até 5 meses | 6–17 meses | 18–27 meses | 28–34 meses |
| --- | ---: | ---: | ---: | ---: |
| Rolamentos e vedação | **59%** | 28% | 9% | 3% |
| Transmissão e mangueiras | **56%** | 28% | 9% | 6% |
| Filtros e elementos | 41% | 29% | 13% | 17% |
| Pneus e acessórios | 39% | 34% | 17% | 9% |
| Lubrificantes e fluidos | 38% | 33% | 13% | 16% |
| Desgaste agrícola | 30% | 23% | 20% | **26%** |

**Variabilidade e padrão de demanda:**

| Padrão de demanda | Itens | Leitura |
| --- | ---: | --- |
| Intermitente | 2.275 (71%) | Consumo em poucos meses, com quantidades parecidas |
| Suave | 411 (13%) | Consumo quase todo mês, estável |
| Irregular (lumpy) | 388 (12%) | Poucos meses e quantidades muito diferentes |
| Errática | 114 (4%) | Quase todo mês, mas com quantidades muito variáveis |

Pelo coeficiente de variação mensal, 82% dos itens são Z, 14% Y e 4% X. Mesmo entre os itens A, o CV mediano é 0,65. O consumo de MRO é pouco previsível item a item, o que indica que **compartilhar estoque entre unidades pode reduzir o estoque de segurança total**: a variação de um centro tende a compensar a de outro. O tamanho desse ganho depende de quanto o consumo das unidades sobe e desce junto.

---

### 1.3.2. Consumo por unidade

Consumo jan/2024–out/2026 em R$ milhões:

| Unidade | Polo Norte | Lubrif. | Pneus | Filtros | Desgaste | Rolam. | Transm. | **Total** | Δ 25/26 | Δ 26/27 |
| --- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Santa Luzia (USL) | Não | **11,5** | **10,4** | **4,0** | 3,8 | **4,4** | 2,3 | **36,4 (18%)** | +26% | +23% |
| Conquista do Pontal (UCP) | Não | 10,8 | 7,3 | 3,7 | **4,5** | 2,3 | 2,1 | 30,8 (15%) | +14% | +11% |
| Costa Rica (UCR) | Sim | 10,8 | 6,0 | 3,7 | 3,2 | 2,4 | 2,1 | 28,1 (14%) | +11% | +4% |
| Rio Claro (URC) | Não | 6,6 | 8,5 | 2,5 | 3,8 | 2,6 | 2,7 | 26,6 (13%) | **+48%** | +31% |
| Eldorado (UEL) | Não | 9,7 | 5,3 | 3,2 | 2,9 | 2,6 | 2,2 | 25,8 (13%) | +5% | +35% |
| Morro Vermelho (UMV) — hub | Sim | 8,0 | 6,2 | 2,9 | 2,9 | 2,0 | **2,9** | 24,9 (12%) | +10% | +10% |
| Alto Taquari (UAT) | Sim | 7,5 | 3,6 | 2,6 | 1,8 | 1,6 | 1,2 | 18,2 (9%) | −9% | **+36%** |
| Água Emendada (UAE) | Sim | 4,7 | 2,3 | 1,9 | 1,6 | 1,4 | 1,3 | 13,2 (6%) | −20% | +17% |

*Em negrito, a unidade líder de cada grupo.*

- **USL, UCP e UCR** concentram 47% do consumo e lideram em lubrificantes.
- **Rio Claro** cresce de forma forte e consistente (+48% e +31%). Em 26/27, o avanço vem de filtros (+72%), lubrificantes (+57%) e desgaste agrícola (+51%).
- **Eldorado e Alto Taquari** aceleraram em 26/27 (+35% e +36%), puxadas por pneus (+112% e +79%).
- **No Polo Norte**, Costa Rica ficou quase estável (+4%, com lubrificantes −23%), enquanto Alto Taquari e Água Emendada voltaram a crescer depois de caírem em 25/26.

---

### 1.3.3. Análise por grupo: operação, reposição e armazenagem

Cada ficha cruza importância operacional, consumo, reposição e armazenagem. Os cuidados de armazenagem combinam o que a base mostra com boas práticas técnicas de referência, já que a base não traz atributos de armazenagem.

**1. Lubrificantes e fluidos — o maior gasto, com o maior risco de fornecimento**

| Indicador | Valor |
| --- | --- |
| Consumo (jan/24–out/26) | R$ 69,5 mi (34%) |
| Itens A | 32 (R$ 22,1 mi na safra 25/26) |
| Safra ÷ entressafra | 1,6× |
| Variação 25/26 · 26/27 | +9% · +18% |
| Lead time mediano / P90 | 32 / **75 dias** |
| Concentração de fornecedor | **Petronas 93%** |
| Cobertura · estoque OBSO + SLOW | 2,5 meses · 4,9% |
| Risco alto | 119 combinações |

- **Importância:** consumido por toda a frota todos os dias; óleo errado ou contaminado danifica motor e transmissão.
- **Atenção:** o Arbor MTF 10W30 tem **dois códigos** (2552437 e 2552441), somando R$ 20,3 mi; num deles, o lead time em Santa Luzia é de 136 dias. 12% dos itens planejados têm mínimo abaixo da demanda no lead time.
- **Armazenagem:** área coberta com piso impermeável e bacia de contenção; tambores deitados com bujões na horizontal; separação por tipo de óleo; controle de lote e validade; FIFO.

**2. Pneus e acessórios — o grupo que mais cresce**

| Indicador | Valor |
| --- | --- |
| Consumo (jan/24–out/26) | R$ 49,6 mi (24%) |
| Itens A | 25 (R$ 17,5 mi na safra 25/26) |
| Safra ÷ entressafra | 1,4× |
| Variação 25/26 · 26/27 | **+43%** · +33% |
| Lead time mediano / P90 | 21 / 37 dias (o mais previsível) |
| Concentração de fornecedor | Bridgestone 34%, Titan 22% |
| Cobertura · estoque OBSO + SLOW | 2,8 meses · 6,8% |
| Risco alto | 67 combinações |

- **Importância:** caminhões, transbordos e tratores não rodam sem pneu; pneu fora de especificação afeta segurança e compactação do solo.
- **Outlier:** em jan–fev/2026, Santa Luzia consumiu ~R$ 3,3 mi do 295/80R22.5 direcional (≈1.800 unidades), contra R$ 0,2 mi no mesmo bimestre de 2025. Sem esse evento, o crescimento de 25/26 cairia para ~+19%. Eldorado (+112%) e Alto Taquari (+79%) também dispararam em 26/27.
- **Armazenagem:** local coberto, seco e escuro, longe de motores elétricos (ozônio), calor e combustíveis; pneus na vertical, girados periodicamente; FIFO pela data de fabricação (DOT).

**3. Filtros e elementos — consumo previsível, mas pouco planejado**

| Indicador | Valor |
| --- | --- |
| Consumo (jan/24–out/26) | R$ 24,5 mi (12%) |
| Itens A | 21 (R$ 5,2 mi na safra 25/26) |
| Safra ÷ entressafra | 1,8× |
| Variação 25/26 · 26/27 | +9% · +10% |
| Lead time mediano / P90 | 22 / 48 dias |
| Concentração de fornecedor | Hidrara 27%, Mecanizza 17% |
| Cobertura · estoque OBSO + SLOW | 4,7 meses · 15,8% |
| Risco alto | **179 combinações** (2º maior) |

- **Importância:** protegem os componentes mais caros da máquina; trocados em toda manutenção preventiva.
- **Atenção:** combinam **excesso e falta ao mesmo tempo**: R$ 0,79 mi parados em centros sem consumo e 17 dos 30 casos de consumo recorrente sem estoque na UMV.
- **Armazenagem:** embalagem original fechada; ambiente seco e sem poeira (o elemento de papel absorve umidade); empilhamento limitado; FIFO.

**4. Desgaste agrícola — o grupo mais sazonal e mais concentrado**

| Indicador | Valor |
| --- | --- |
| Consumo (jan/24–out/26) | R$ 24,5 mi (12%) |
| Itens A | 11 (R$ 7,3 mi na safra 25/26) |
| Safra ÷ entressafra | **2,8×** (pico em julho) |
| Variação 25/26 · 26/27 | +3% · +19% |
| Lead time mediano / P90 | 24 / 46 dias |
| Concentração de fornecedor | **Bússola 78%** |
| Cobertura · estoque OBSO + SLOW | 2,4 meses · 3,9% |
| Risco alto | 56 combinações |

- **Importância:** facas, lâminas e discos efetivamente cortam a cana; desgastam por hora de colheita e definem o ritmo da frente.
- **Comportamento:** o grupo mais regular e o mais sazonal; o estoque gira.
- **Armazenagem:** proteção anticorrosiva e local coberto; suportes que preservem o fio; organização por modelo de colhedora; manuseio com EPI.

**5. Rolamentos e vedação — a cauda longa e o estoque parado**

| Indicador | Valor |
| --- | --- |
| Consumo (jan/24–out/26) | R$ 19,1 mi (9%) |
| Materiais · itens A | 1.417 (44% dos códigos) · 13 |
| Safra ÷ entressafra | **0,8× (contra-sazonal, pico em fev)** |
| Variação 25/26 · 26/27 | −7% · +4% |
| Lead time mediano / P90 | 25 / 53 dias (até 77 em itens grandes) |
| Cobertura · estoque OBSO + SLOW | **9,9 meses · 26,7%** |
| Estoque em centro sem consumo | R$ 2,08 mi (R$ 1,31 mi transferível) |
| Risco alto | **204 combinações** (o maior) |

- **Importância:** baixa frequência, alta criticidade. Um rolamento autocompensador de moenda ou redutor custa R$ 20–29 mil e, se faltar, para um equipamento industrial.
- **Paradoxo do grupo:** é o que mais tem estoque parado **e** o que mais tem combinações de risco alto. Há excesso nos itens errados e falta nos certos — exatamente o caso para o hub.
- **Armazenagem:** embalagem original com inibidor de corrosão; local seco e limpo; rolamentos deitados e longe de vibração; retentores seguem as regras de borracha.

**6. Transmissão e mangueiras — esporádico, com muito estoque segregado**

| Indicador | Valor |
| --- | --- |
| Consumo (jan/24–out/26) | R$ 16,7 mi (8%) |
| Itens A | 17 (R$ 4,0 mi na safra 25/26) |
| Safra ÷ entressafra | 1,2× |
| Variação 25/26 · 26/27 | 0% · +24% |
| Lead time mediano / P90 | 22 / 46 dias |
| Concentração de fornecedor | Unimil 24%, JD Comércio 19% |
| Cobertura · estoque OBSO + SLOW | 4,2 meses · 20,2% |
| Risco alto | 87 combinações |

- **Importância:** correntes de colhedora e mangueiras hidráulicas; uma mangueira rompida para a máquina e derrama óleo no campo.
- **Atenção:** a mangueira 1" 6300 PSI está cadastrada em metro e em unidade (dois códigos).
- **Armazenagem:** diretrizes de borracha (ISO 2230): longe de UV, ozônio e calor; rolos sem dobra abaixo do raio mínimo; terminais tampados; FIFO pela data de fabricação. Correntes lubrificadas e protegidas de umidade.

---

## 1.4. Riscos de falta, estoques repetidos e itens sem uso

### 1.4.1. Prazos de reposição e riscos de falta

**Lead time de reposição:**

| Grupo | Mediana (dias) | 90% dos casos até (dias) |
| --- | ---: | ---: |
| Pneus e acessórios | 21 | 37 |
| Filtros e elementos | 22 | 48 |
| Transmissão e mangueiras | 22 | 46 |
| Desgaste agrícola | 24 | 46 |
| Rolamentos e vedação | 25 | 53 |
| Lubrificantes e fluidos | 32 | **75** |

- 31% das combinações com lead time informado passam de 30 dias, e 7% passam de 60 dias.
- Há 64 casos acima de 90 dias, como óleos com 73 a 136 dias. A definição e esses valores precisam ser confirmados com a Atvos.
- **Mesmo material, prazos muito diferentes:** dos 359 materiais com lead time registrado em 3 ou mais unidades, **241 (67%) têm prazo máximo pelo menos o dobro do mínimo**. É sinal de compras descentralizadas; contratos ou compras consolidadas tenderiam a padronizar os prazos.

**Origem dos fornecedores:**

| UF do fornecedor | % do valor consumido | Lead time mediano |
| --- | ---: | ---: |
| SP | 58% | 23 dias |
| MG | 28% | 26 dias |
| GO | 7% | 20 dias |
| MS | 6% | 19 dias |
| MT | 0,5% | 17 dias |
| PR | 0,5% | 33 dias |

86% do valor vem de SP e MG, com prazos 3 a 9 dias maiores que os de fornecedores regionais (GO, MS, MT). Os fornecedores que atendem mais itens são distribuidores de rolamentos (Rolimac, Durão, Abecom), de pneus (Master) e de peças agrícolas (Ciarama, RZK).

**Risco calculado:**

Para cada centro e material com consumo nos últimos 12 meses, risco = probabilidade × impacto:

- **Probabilidade (1 a 3):** 3 se o estoque não cobre a demanda no lead time; 2 se cobre, mas está abaixo do ponto de pedido; 1 nos demais casos.
- **Impacto (1 a 3), provisório:** pela frequência de uso (Alto e Médio Alto = 3, Médio Baixo = 2, Baixo = 1), até o VED ser preenchido.
- **Nível:** alto a partir de 6 pontos; médio a partir de 3.

| Nível | Combinações | Leitura |
| --- | ---: | --- |
| Alto | 712 | 360 com estoque abaixo da demanda no lead time (187 zeradas) e 352 de uso frequente abaixo do ponto de pedido |
| Médio | 1.946 | Abaixo do ponto de pedido ou de uso menos frequente |
| Baixo | 2.605 | Estoque cobre o lead time e a margem de segurança |
| Sem consumo recente | 2.961 | Não entram no cálculo |

| Grupo | Risco alto |
| --- | ---: |
| Rolamentos e vedação | 204 |
| Filtros e elementos | 179 |
| Lubrificantes e fluidos | 119 |
| Transmissão e mangueiras | 87 |
| Pneus e acessórios | 67 |
| Desgaste agrícola | 56 |

- 467 materiais têm risco alto em pelo menos um centro, incluindo 81 dos 119 itens A.
- Os casos mais graves são óleos de alto consumo com estoque abaixo do lead time. Exemplo: Arbor MTF 10W30 na UCP, com lead time de 73 dias e estoque para cerca de 32 dias.
- **Cuidado na leitura:** sem os pedidos em aberto, um item abaixo do ponto de pedido pode já estar com reposição a caminho. O número mostra onde verificar primeiro, não faltas confirmadas.

**Sinais pelos parâmetros MRP:**

| Sinal | Combinações | Leitura |
| --- | ---: | --- |
| Consumo recorrente e sem estoque no centro | 111 (100 itens) | Maior risco imediato de falta |
| Planejado (VB) e abaixo do mínimo | 825 de 3.929 | 21% das combinações planejadas |
| Planejado (VB) e zerado | 131 | Reposição atrasada ou mínimo mal dimensionado |
| Consumo recorrente sem planejamento MRP | 93 (74 itens) | Depende de compra manual |
| Bloqueado ou obsoleto, mas consumido | 124 | 98 bloqueados e 26 obsoletos |
| Acima do máximo do MRP | 858 | R$ 1,92 mi acima do máximo; excesso, não risco |

**Calibragem dos parâmetros** (consumo dos últimos 12 meses, combinações VB):

| Grupo | Máximo > 6 meses de consumo | Sem consumo em 12 meses e máximo > 0 | Mínimo abaixo da demanda no lead time |
| --- | ---: | ---: | ---: |
| Rolamentos e vedação | **47%** | **177** | 3% |
| Transmissão e mangueiras | 42% | 50 | 2% |
| Filtros e elementos | 41% | 60 | 3% |
| Pneus e acessórios | 37% | 23 | 2% |
| Lubrificantes e fluidos | 31% | 9 | **12%** |
| Desgaste agrícola | 22% | 4 | 5% |
| **Total** | **42%** | **323 (R$ 0,84 mi em estoque)** | **3,2%** |

O desvio predominante é de **excesso**. Lubrificantes são a exceção: somando mínimo baixo, P90 de 75 dias e fornecedor único, é o grupo com maior risco de ruptura.

**Por unidade:**

| Unidade | Recorrente sem estoque | Com saldo no hub UMV | Risco alto |
| --- | ---: | ---: | ---: |
| UMV – Morro Vermelho (hub) | **30** | – | 110 |
| URC – Rio Claro | 18 | – | 108 |
| UCR – Costa Rica (satélite) | 13 | 5 | 86 |
| USL – Santa Luzia | 13 | – | 95 |
| UEL – Eldorado | 10 | – | 98 |
| UAT – Alto Taquari (satélite) | 10 | 6 | 71 |
| UAE – Água Emendada (satélite) | 9 | 2 | 57 |
| UCP – Conquista do Pontal | 8 | – | 87 |

- **A UMV, hub do Polo Norte, lidera os casos de consumo recorrente sem estoque** (17 dos 30 são filtros). Pode estar repondo os satélites antes de si mesma, ou parte do consumo lançado na UMV pode ser dos satélites.
- Nos satélites, 13 dos 32 casos têm saldo na UMV e podem estar sendo atendidos pelo hub.

---

### 1.4.2. Estoques repetidos entre unidades

| Indicador | Resultado |
| --- | --- |
| Itens com estoque em 2 ou mais centros | 1.417 de 2.657 (53%), somando R$ 20,07 mi |
| Itens com estoque em 3 ou mais centros | 819 (31%), somando R$ 16,77 mi |
| Dos quais com cobertura somada acima de 12 meses | 340 itens, somando R$ 4,02 mi (rolamentos R$ 1,66 mi) |
| Repetidos e sem giro ou de baixo giro | 280 itens, somando R$ 1,56 mi |
| **Estoque em centro que não consumiu o item em 12 meses** | **1.884 combinações, R$ 4,70 mi** |
| Material consumido em outro centro (transferível) | **1.082 combinações (719 materiais), R$ 3,18 mi** |
| Fora do depósito OBSO | R$ 2,22 mi |
| Centro que consumiu sem ter estoque local | 983 combinações |
| Itens A: média de centros com estoque | 4,9 |

**Estoque transferível por grupo:** rolamentos R$ 1,31 mi · filtros R$ 0,56 mi · lubrificantes R$ 0,56 mi · pneus R$ 0,40 mi · transmissão R$ 0,27 mi · desgaste R$ 0,08 mi.

**Por unidade:**

| Unidade | Estoque (R$ mi) | Sem consumo em 12 meses (R$ mi) | % do estoque |
| --- | ---: | ---: | ---: |
| USL – Santa Luzia | 4,14 | 0,94 | 23% |
| UEL – Eldorado | 3,90 | 0,72 | 19% |
| UCP – Conquista do Pontal | 3,26 | 0,60 | 18% |
| URC – Rio Claro | 3,05 | 0,54 | 18% |
| UCR – Costa Rica | 2,87 | 0,54 | 19% |
| UMV – Morro Vermelho (hub) | 2,81 | 0,50 | 18% |
| UAT – Alto Taquari | 2,11 | 0,40 | 19% |
| UAE – Água Emendada | 1,81 | 0,46 | **25%** |

*O centro 1011 (R$ 6,5 mil, todo sem consumo) entra no total de R$ 4,70 mi, mas não aparece na tabela.*

**Leitura:**

- Repetir estoque não é errado por si só: itens de alto giro e críticos devem estar perto de quem consome.
- O problema está nos **R$ 4,7 mi em centros que não usaram o item em um ano**. Dois terços disso (R$ 3,2 mi) são materiais que outra unidade usa, o que permite começar por **rebalanceamento entre unidades, com custo só de frete**, antes de qualquer investimento em hub.
- O peso do estoque parado é parecido em todas as unidades (18% a 25%). O problema é do **modelo de abastecimento como um todo**, não de uma unidade específica.
- Os maiores valores são rolamentos autocompensadores, como o 23156CCK: R$ 99 mil parados na UAE e R$ 57 mil na UMV.

---

### 1.4.3. Itens sem uso e de baixo giro

| Situação (regra ajustável) | Itens | Estoque (R$) |
| --- | ---: | ---: |
| Giro regular | 1.195 | 16,32 mi |
| Excesso de cobertura (mais de 12 meses de consumo) | 561 | 4,54 mi |
| Baixo giro (consumo em até 3 dos 34 meses) | 340 | 1,58 mi |
| Sem giro (sem consumo há 12 meses ou mais) | 561 | 1,52 mi |
| Sem estoque, mas consumido no período | 533 | – |
| Sem estoque e sem consumo no período | 11 | – |

- **Rolamentos e vedação concentram o problema:** 256 itens sem giro (R$ 773 mil), 175 de baixo giro (R$ 591 mil) e cobertura de 9,9 meses, contra 3,5 meses na média do escopo.
- A parcela do estoque acima de 12 meses de cobertura soma cerca de **R$ 3,6 mi**.
- Os maiores valores sem giro são rolamentos industriais de grande porte (QJ334, NU2240). **Parte disso pode ser reserva estratégica** de equipamento crítico; a criticidade precisa ser validada antes de propor redução.
- A Atvos já separa **R$ 1,57 mi no depósito OBSO** e **R$ 1,59 mi no SLOW**. Esses depósitos não coincidem totalmente com a classificação acima.

**Itens bloqueados ou obsoletos:** 124 combinações seguem sendo consumidas mesmo bloqueadas para compras (98) ou marcadas como obsoletas (26). Isso indica cadastro desatualizado ou item ainda necessário sem fonte de reposição.

---

## 1.5. Curva ABC e importância para a operação

### 1.5.1. Classificação por valor de consumo (curva ABC)

Valor de consumo estimado na **safra 25/26 completa** (abr/2025–mar/2026), para que a sazonalidade não distorça o resultado.

| Classe | Itens | % dos itens | Valor consumido | % do valor | Estoque atual |
| --- | ---: | ---: | ---: | ---: | ---: |
| A | 119 | 5,6% | R$ 57,9 mi | 80,1% | R$ 12,0 mi |
| B | 358 | 16,8% | R$ 10,8 mi | 14,9% | R$ 5,5 mi |
| C | 1.651 | 77,6% | R$ 3,6 mi | 5,0% | R$ 4,5 mi |
| Sem valor (sem preço) | 289 | – | não valorizado | – | – |
| Sem consumo na safra | 784 | – | – | – | R$ 1,9 mi |

**Valor dos itens A por grupo:**

| Grupo | Itens A | Valor |
| --- | ---: | ---: |
| Lubrificantes e fluidos | 32 | R$ 22,1 mi |
| Pneus e acessórios | 25 | R$ 17,5 mi |
| Desgaste agrícola | 11 | R$ 7,3 mi |
| Filtros e elementos | 21 | R$ 5,2 mi |
| Transmissão e mangueiras | 17 | R$ 4,0 mi |
| Rolamentos e vedação | 13 | R$ 1,7 mi |

- A concentração é maior que a referência clássica: 5,6% dos itens fazem 80% do valor, o que permite controlar de perto poucos itens.
- O item de maior valor é o pneu 295/80R22.5 (R$ 5,9 mi na safra), seguido de óleos e facas picadoras.
- Rolamentos e vedação têm 44% dos códigos, mas só 13 itens A.

---

### 1.5.2. Criticidade e importância operacional (VED)

A classificação definitiva (VED) depende da Manutenção/PCM. Com os dados disponíveis, já há três dimensões.

**Frequência de uso (faixas de criticidade de consumo da Atvos):**

A Atvos classifica cada material pelo número de meses com consumo. Aplicamos as mesmas faixas aos **últimos 12 meses completos** (nov/2025–out/2026):

| Faixa | Meses com consumo | Materiais | Dos quais itens A |
| --- | :---: | ---: | ---: |
| Alto | 10 a 12 | 548 | 100 |
| Médio Alto | 7 a 9 | 303 | 11 |
| Médio Baixo | 4 a 6 | 385 | 4 |
| Baixo | 1 a 3 | 1.151 | 4 |
| Sem consumo | 0 | 814 | 0 |

**Por grupo** (combinações de centro e material):

| Grupo | Alto + Médio Alto | Consumo dessas combinações (jan/24–out/26) | Baixo + Sem consumo | Estoque em Baixo + Sem consumo |
| --- | ---: | ---: | ---: | ---: |
| Desgaste agrícola | 42% | 90% | 44% | R$ 0,3 mi (15%) |
| Lubrificantes e fluidos | 30% | 87% | 58% | R$ 1,4 mi (25%) |
| Filtros e elementos | 30% | 84% | 57% | R$ 1,5 mi (41%) |
| Pneus e acessórios | 23% | 77% | 58% | R$ 1,3 mi (26%) |
| Transmissão e mangueiras | 13% | 70% | 76% | R$ 1,1 mi (47%) |
| Rolamentos e vedação | 10% | 38% | 77% | **R$ 4,1 mi (78%)** |
| **Total** | **19%** | **78%** | **68%** | **R$ 9,8 mi (41%)** |

Quase todos os itens A (100 de 119) são consumidos em 10 meses ou mais. Em rolamentos, quase 80% do estoque está em combinações que quase não saíram no último ano.

**Limites do critério — por que não usá-lo sozinho:**

| Limite | Consequência |
| --- | --- |
| **Olha só para 12 meses** | 210 combinações em Baixo ou Sem consumo tiveram consumo em 12 meses ou mais antes disso (R$ 4,6 mi no período), sobretudo rolamentos (56) e filtros (55). Rebaixá-las pode gerar falta. |
| **Ignora a sazonalidade** | Um rolamento usado só nas reformas de jan–fev sempre cai em Baixo, mesmo sendo crítico para a parada industrial. |
| **Mede frequência, não impacto** | Um item que sai todo mês pode ser trivial; um rolamento de moenda que sai uma vez por ano pode parar a usina. |

**Dificuldade de reposição (critério C3 do VED):**

Entre os 2.387 materiais consumidos no último ano: 493 têm C3 = 3 (lead time acima de 30 dias), 1.884 têm C3 = 2 (8 a 30 dias) e 10 têm C3 = 1.

**VED (pendente):**

| Critério | 3 | 2 | 1 | Peso |
| --- | --- | --- | --- | ---: |
| C1 Impacto da falta | Para equipamento crítico (moagem, colheita, CCT) | Reduz desempenho ou tem contorno | Sem impacto relevante | 40% |
| C2 Substituto | Não existe | Com adaptação ou aprovação | Substituto direto | 20% |
| C3 Dificuldade de reposição | Lead time > 30 dias | 8 a 30 dias | Até 7 dias | 20% |
| C4 Segurança e meio ambiente | Risco relevante | Risco moderado | Sem risco relevante | 20% |

Índice = média ponderada: **V** a partir de 2,4; **E** a partir de 1,7; **D** abaixo. Se a Atvos tiver criticidade cadastrada, ela prevalece. **Para priorizar a validação com o PCM:** os 119 itens A, os 100 itens recorrentes sem estoque e os 237 materiais de uso frequente com lead time acima de 30 dias.

---

## 1.6. Piloto Polo Norte, síntese estratégica e referências

### 1.6.1. Resultados do piloto Polo Norte

A **UMV (Morro Vermelho, Mineiros-GO)** passou a abastecer UAE (138 km), UCR (124 km) e UAT (105 km), com entregas semanais em rota fixa.

| Etapa | Valor |
| --- | ---: |
| Estoque analisado (1.374 itens) | R$ 3,90 mi |
| Consumido no período | −R$ 0,63 mi |
| Lista para venda de ativos ou leilão | −R$ 0,47 mi |
| Reparametrização do MRP | −R$ 0,81 mi |
| Estoque após a centralização | R$ 1,98 mi (**−49%**) |

> **Nota — Redução de 49%, não 51%.** A apresentação destaca "−51%", mas pela própria cascata o estoque final é 51% do inicial. A redução atribuível às ações estruturais (venda e reparametrização) é de **cerca de 33%**; o restante veio do consumo normal.

- As quatro unidades do Polo Norte somam R$ 9,6 mi de estoque no escopo (40% do total). A UAE segue com a maior proporção de estoque sem consumo (25%).
- O valor de **R$ 298 mil por mês** é a estimativa das movimentações pelas notas fiscais; falta confirmar se é valor de mercadoria transportada ou custo de frete.
- O diagnóstico da Atvos (49% dos 19.614 itens repetidos em mais de duas unidades) inclui todos os materiais; no escopo MRO, 31% dos itens estão em 3 ou mais centros.

---

### 1.6.2. Síntese estratégica

Os seis grupos não pedem uma política única: **quatro pedem disponibilidade local com parâmetros por safra; dois pedem centralização e limpeza de estoque.**

| Grupo | Perfil | Ritmo | LT mediano / P90 | Risco de fornecimento | Cobertura | OBSO + SLOW | Modelo sugerido |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Lubrificantes e fluidos | Contínuo, alto valor | Safra (1,6×) | 32 / 75 | **Alto** — Petronas 93% | 2,5 m | 4,9% | **Local**, segurança pelo P90 + contrato |
| Pneus e acessórios | Contínuo, em alta | Safra (1,4×) | 21 / 37 | Médio | 2,8 m | 6,8% | **Local**, rever parâmetros após explicar 2026 |
| Filtros e elementos | Contínuo nos itens-chave | Safra (1,8×) | 22 / 48 | Baixo | 4,7 m | 15,8% | **Local** para itens A/recorrentes; **cauda para o hub** |
| Desgaste agrícola | Contínuo, concentrado | Safra forte (2,8×) | 24 / 46 | **Alto** — Bússola 78% | 2,4 m | 3,9% | **Local**, mín./máx. por safra e entressafra |
| Rolamentos e vedação | Esporádico, cauda longa | Entressafra (0,8×) | 25 / 53 | Baixo | 9,9 m | 26,7% | **Hub** + venda/baixa do parado, após validar reservas estratégicas |
| Transmissão e mangueiras | Esporádico, cauda longa | Neutro (1,2×) | 22 / 46 | Baixo | 4,2 m | 20,2% | **Hub** para a cauda; correntes locais |

**Implicações:**

1. **Começar pelo que não exige compra nem obra.** R$ 3,2 mi podem ser rebalanceados entre unidades, e 42% dos máximos do MRP podem ser revistos para baixo.
2. **O alvo do hub é a cauda longa, não o volume:** itens repetidos, intermitentes, de baixo giro e de baixo impacto, com destaque para rolamentos.
3. **Os itens A de consumo contínuo devem ficar na unidade** (óleos, pneus de maior giro, facas e lâminas na safra), assim como os itens vitais depois de validados.
4. **A sazonalidade precisa entrar no parâmetro** e no dimensionamento do hub, que absorveria o pico agrícola na safra e o industrial na entressafra.
5. **Antes de parametrizar, limpar o cadastro:** grupos divergentes entre bases, códigos duplicados, itens bloqueados ainda consumidos e itens recorrentes sem MRP.
6. **Combinar a criticidade de consumo com histórico longo, sazonalidade e VED.** A régua de 12 meses sozinha rebaixaria 210 combinações com consumo regular antes disso.

**Ponto de partida do benefício** (valores que se sobrepõem e **não podem ser somados**): R$ 4,7 mi em centros sem consumo · R$ 3,6 mi acima de 12 meses de cobertura · R$ 1,9 mi acima do máximo do MRP.

---

### 1.6.3. Limitações e dados pendentes

**Premissas e limites:**

- **Valor de consumo** estimado pelo preço do estoque atual; não é o valor contábil. Variações entre safras refletem volume, não inflação.
- **Impacto provisório:** a frequência de uso não mede a consequência de uma falta; o risco de itens raros pode estar subestimado.
- **Pedidos em aberto** não estão na base; o risco pode estar superestimado para itens com reposição a caminho.
- **Lead time estimado** em 27% das combinações com consumo (mediana do grupo).
- **Cortes e pesos** (sem giro, baixo giro, cobertura, recorrência, risco, VED) são premissas a validar com a Atvos.
- **Demanda normal:** para os 71% de itens intermitentes, o ponto de pedido de referência deve ser lido como ordem de grandeza.
- **Escopo:** conclusões válidas só para os seis grupos e os 3.201 códigos.

**Dados a pedir para a Atvos — prioridade alta (mudam os resultados):**

1. **Pedidos de compra em aberto** por centro e material (quantidade, data do pedido, previsão de entrega, fornecedor).
2. **Valor do consumo ou preço de compra**, de preferência o consumo mensal em R$ desde jan/2024, direto do SAP.
3. **Criticidade operacional:** cadastrada no SAP ou validação de C1, C2 e C4 com Manutenção/PCM.
4. **Escopo oficial:** lista de códigos e grupos válida para o estudo.

**Dados a pedir para a Atvos — prioridade média (confirmam premissas):**

5. Lead time: definição, se é cadastro ou histórico, e confirmação dos 64 casos acima de 90 dias. Idealmente, histórico de pedidos com data do pedido e do recebimento.
6. Data da posição de estoque e depósitos incluídos na base de 11/11.
7. Critério dos depósitos OBSO e SLOW.
8. Registro de faltas, paradas por falta de material e compras emergenciais desde 2024.
9. Polo Norte: como o consumo é registrado (UMV ou satélite), o significado dos R$ 298 mil/mês, 49% ou 51%, e se o piloto já está refletido no estoque atual.
10. O que é o centro 1011.
11. Viabilidade logística e fiscal de transferir estoque entre unidades.

**Perguntas pontuais para validação:**

- O que explica os ≈1.800 pneus 295/80R22.5 em Santa Luzia em jan–fev/2026?
- Os dois códigos do Arbor MTF 10W30 (e as demais descrições duplicadas) podem ser unificados?
- Há contrato ou contingência para Petronas e Bússola?
- Por que a UMV, sendo o hub, tem o maior número de itens recorrentes sem estoque?
- Os rolamentos grandes sem giro (QJ334, NU2240, 23156CCK) são reserva estratégica?

---

### 1.6.4. Regras e métodos

| Regra | Definição |
| --- | --- |
| **Valor do consumo** | Quantidade × preço de referência (R$ ÷ quantidade do estoque atual) |
| **Safra** | Abril a março; 26/27 comparada abr–out contra abr–out do ano anterior |
| **Curva ABC** | A até 80% acumulado do valor da safra 25/26, B até 95%, C o restante |
| **XYZ** | CV mensal (desvio-padrão populacional ÷ média): X ≤ 0,5; Y ≤ 1,0; Z > 1,0 |
| **Padrão de demanda** | Syntetos, Boylan e Croston: ADI (corte 1,32) e CV² (corte 0,49) |
| **Frequência** | Meses com consumo em 34 |
| **Sazonalidade** | Consumo médio mensal na safra (abr–nov) ÷ na entressafra (dez–mar) |
| **Sem giro** | Sem consumo há 12 meses ou mais |
| **Baixo giro** | Consumo em até 3 meses do período |
| **Excesso de cobertura** | Estoque acima de 12 meses do consumo médio recente |
| **Cobertura** | Estoque (todos os depósitos) ÷ consumo médio mensal dos últimos 12 meses |
| **Estoque repetido** | Mesmo código com saldo em dois ou mais centros |
| **Transferível** | Estoque em centro sem consumo em 12 meses, de material consumido em outro centro no mesmo período |
| **Lead time usado** | O do centro; senão, mediana do material em outros centros; senão, mediana do grupo |
| **Demanda no lead time** | Consumo médio mensal (12 meses) × lead time ÷ 30,4 |
| **Estoque de segurança** | 1,65 × desvio-padrão mensal × √(lead time ÷ 30,4) |
| **Ponto de pedido** | Demanda no lead time + estoque de segurança |
| **Risco de falta** | Probabilidade × impacto; alto ≥ 6, médio ≥ 3 |
| **Criticidade de consumo** | Faixas da Atvos aplicadas aos últimos 12 meses completos |

---

### 1.6.5. Glossário

| Termo | Significado |
| --- | --- |
| **MRO** | Manutenção, Reparo e Operação |
| **Combinação** | Par centro (unidade) × material |
| **VB** | Planejamento automático por consumo no MRP |
| **ND** | Sem planejamento automático (compra manual) |
| **OBSO / SLOW** | Depósitos de material obsoleto / de baixo giro |
| **Lead time** | Prazo de reposição, do pedido ao recebimento |
| **P90** | 90% dos casos têm prazo igual ou menor |
| **Cobertura** | Meses que o estoque dura no ritmo de consumo recente |
| **CV** | Coeficiente de variação do consumo mensal |
| **VED** | Vital, Essencial, Desejável: classificação por impacto operacional |
| **Hub / Polo Norte** | Estoque centralizado na UMV atendendo UAE, UCR e UAT |

---

### 1.6.6. Referências

ATVOS. **Base_Planejamento_Materiais**: abas Base_Consumo e Base_Estoque_Atual. [*S. l.*]: Atvos, 2026. 1 planilha eletrônica (.xlsx). Documento interno, recebido em 9 nov. 2026.

ATVOS. **Cópia de Planejamento_Materiais.xlsx – Consolidado**. [*S. l.*]: Atvos, 2026. 1 arquivo (2.160 p.), PDF. Documento interno.

ATVOS. **Estoque compartilhado**: projeto Polo Norte. [*S. l.*]: Atvos, 2026. 1 apresentação (8 slides), PowerPoint. Documento interno, recebido em 9 nov. 2026.

ATVOS. **Planejamento_Materiais**: aba Consolidado. [*S. l.*]: Atvos, 2026. 1 planilha eletrônica (.xlsx). Documento interno, recebido em 11 nov. 2026.

AGROTECH INTELI; ATVOS. **Termo de abertura do projeto e documento de entregáveis**. São Paulo, 2026. Documento interno.

ECOSIRE. **Previsão de demanda, análise ABC e estoque de segurança**. [*S. l.*], [2026]. Disponível em: https://ecosire.com/pt/blog/demand-forecasting-abc-analysis-safety-stock. Acesso em: nov. 2026.

INTERNATIONAL ORGANIZATION FOR STANDARDIZATION. **ISO 2230**: rubber products – guidelines for storage. Geneva: ISO, 2002.

REVISTA CULTIVAR. **Com entressafra canavieira maior, usinas poderão programar melhor as manutenções**. Pelotas, [2026]. Disponível em: https://revistacultivar.com.br/noticias/com-entressafra-canavieira-maior-usinas-poderao-programar-melhor-as-manutencoes. Acesso em: nov. 2026.

SAAINGRAM, S.; LILA, B.; KUNADILOK, J.; CHANTRASA, R. Classification and management of spare parts inventory: case study of automotive part industry. **Thai Industrial Engineering Network Journal**, v. 12, n. 1, 2026. Disponível em: https://ph02.tci-thaijo.org/index.php/ienj/article/view/262886. Acesso em: nov. 2026.

SANTOS, A. M.; RODRIGUES, I. A. Controle de estoque de materiais com diferentes padrões de demanda: estudo de caso em uma indústria química. **Gestão & Produção**, São Carlos, v. 13, n. 2, p. 223-231, 2006. Disponível em: https://scielo.br/j/gp/a/5mZRq7mBgCgmCytjmBRB4gq/. Acesso em: nov. 2026.

SENIOR SISTEMAS. **Políticas e curvas de estoque**. Blumenau, [2026]. Disponível em: https://documentacao.senior.com.br/gestaoempresarialerp/5.10.3/manuais_processos/politicas-e-curvas-de-estoque.htm. Acesso em: nov. 2026.

SYNTETOS, A. A.; BOYLAN, J. E.; CROSTON, J. D. On the categorization of demand patterns. **Journal of the Operational Research Society**, 2005.
