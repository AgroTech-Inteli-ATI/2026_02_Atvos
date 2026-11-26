---
sidebar_position: 2
sidebar_label: 1. Comparação dos modelos de abastecimento
slug: /sprint-2/comparacao-modelos-abastecimento
description: "Comparação da situação atual, do CD centralizado e do modelo híbrido nos quatro grupos do escopo (pneus, filtros, lubrificantes e rolamentos): custos, prazos, atendimento, referências de gestão de MRO em outras empresas, vantagens, dificuldades e necessidades de funcionamento de cada modelo."
---

# 1. Comparação dos modelos de abastecimento

Esta seção compara as três formas de abastecer as unidades da Atvos que o estudo precisa avaliar: a **situação atual**, um **CD centralizado** e um **modelo híbrido**. A pergunta que tentamos responder é prática: *para cada tipo de material, onde o estoque deve ficar para que a usina seja bem atendida sem pagar mais do que precisa?*

A comparação olha para três dimensões ao mesmo tempo (custo, prazo e atendimento) e se apoia em três tipos de evidência: os dados da Atvos tratados na Sprint 1, as estimativas de benefícios e impactos do [item 4](./Beneficios_Impactos.md) e experiências de outras empresas com gestão de MRO.

> **Mudança de escopo (nov/2026).** O escopo foi reduzido a quatro grupos: **pneus, filtros, lubrificantes e rolamentos**. Mangueiras (transmissão) e peças de desgaste agrícola saíram do estudo. Todos os números desta página já estão no recorte de quatro grupos. A [comparação de regiões](./Comparacao_Regioes_CD.md) também já usa quatro grupos; a [estimativa de benefícios](./Beneficios_Impactos.md) ainda usa seis, e por isso os valores dela foram recortados aqui (seção 1.3). Quando ela for atualizada, a seção 1.3 deve ser conferida com a nova versão.

**Principais conclusões**

1. **Não existe um modelo único que sirva para os quatro grupos.** Pneus, filtros e lubrificantes são de uso contínuo: de 62% a 83% do consumo vem de itens usados em 10 ou mais meses do ano na própria unidade. Já rolamentos são de uso esporádico: 45% do consumo vem de itens usados em até 5 meses por ano, e o estoque cobre quase 10 meses.
2. **O CD centralizado é o que mais reduz a falta de material, mas é o mais caro e o mais arriscado.** No recorte de quatro grupos, ele reduz as combinações com risco alto de 569 para 289 (−49%), mas o saldo recorrente estimado fica em cerca de **−R$ 1,2 milhão por ano** antes mesmo do investimento e dos impostos. Ele também tira da prateleira da usina itens que hoje respondem por 87% do consumo.
3. **O modelo híbrido concentra o CD onde ele rende mais.** Os itens de uso esporádico na rede são só 5,9% do consumo anual, mas somam 27% do estoque (R$ 5,25 milhões). Centralizar só essa parte dá cerca de 60% da redução de risco do CD centralizado, com saldo recorrente próximo de zero e frete muito menor.
4. **Boa parte do ganho não depende de CD.** Rebalancear estoques parados e revisar máximos (situação atual otimizada) libera cerca de R$ 3,0 milhões. O CD deve ser avaliado pelo que traz *a mais* sobre isso.
5. **As referências externas e a experiência da própria Atvos apontam na mesma direção.** Centralizar funciona para itens caros, de baixo giro e comuns a várias plantas. Itens de alto giro ficam perto do uso, de preferência com estoque do fornecedor. A tentativa anterior de armazém em Mineiros esbarrou justamente no custo do transporte dedicado.
6. **A comparação de regiões chega ao mesmo desenho.** Pelas regras fiscais atuais, só as quatro usinas do mesmo CNPJ (BRM) podem compartilhar estoque, e o [item 2](./Comparacao_Regioes_CD.md) recomenda um CD da BRM no Polo Norte com consolidação de transporte em Ribeirão Preto (caso C5). É o modelo híbrido desta página aplicado ao mapa.

---

## 1.1. Escopo, fontes e como ler esta comparação

### 1.1.1. Recorte de quatro grupos

Mantivemos a mesma base e as mesmas regras da Sprint 1 (classificação de grupos da aba `Base_Consumo`, oito unidades, estoque de todos os depósitos e consumo valorizado pelo custo unitário do estoque atual) e filtramos os quatro grupos do novo escopo.

**Tabela 1 – Recorte de quatro grupos frente ao recorte da Sprint 1**

| Indicador | Recorte da Sprint 1 (6 grupos) | Recorte atual (4 grupos) | Participação |
| --- | ---: | ---: | ---: |
| Materiais | 3.201 | 2.475 | 77% |
| Combinações de centro e material (incluindo as que só têm estoque) | 8.224 | 6.631 | 81% |
| Combinações com registro de consumo | 7.421 | 5.959 | 80% |
| Combinações com consumo nos últimos 12 meses | 5.263 | 4.262 | 81% |
| Estoque atual (R$ mi) | 23,96 | 19,79 | 83% |
| Consumo da safra 25/26 (R$ mi) | 72,4 | 58,4 | 81% |
| Consumo dos últimos 12 meses, nov/25 a out/26 (R$ mi) | 81,3 | 65,4 | 80% |

*Fonte: elaboração própria a partir das bases da Atvos (Base_Planejamento_Materiais e Planejamento_Materiais), com as mesmas regras da Sprint 1. Refazendo o recorte de seis grupos, todos os valores batem com os publicados nos itens 1, 3 e 4: 3.201 materiais, 8.224 combinações (7.375 da base de 11/11, 46 só da base de 09/11 e 803 só com estoque), R$ 23,96 mi de estoque, R$ 72,4 mi de consumo na safra e 5.263 combinações com consumo em 12 meses.*

> **Atenção à nova base de 17/11.** A Atvos enviou uma versão nova da aba `Consolidado`, já com os quatro grupos, saldo de pedidos em aberto e uma coluna de "criticidade". Dois cuidados: (1) nessa versão, o grupo "Pneus e acessórios" tem 10.950 códigos e inclui itens que não são pneus (parafusos, lâmpadas, peças John Deere), por isso mantivemos a classificação da Sprint 1 até que o recorte oficial seja confirmado; (2) a coluna de criticidade mede **quantos meses o item teve consumo**, e não o impacto da falta na operação, como o [item 1](../001_Diagnostico_Abastecimento/Diagnostico_MRO.md) já havia apontado. A criticidade operacional (VED) continua pendente com a Manutenção.

### 1.1.2. Alternativas comparadas

**Tabela 2 – Alternativas de abastecimento**

| Código | Alternativa | Como funciona | Papel na comparação |
| --- | --- | --- | --- |
| A0 | **Situação atual** | Oito almoxarifados, um por unidade. No Polo Norte, Morro Vermelho (UMV) abastece Água Emendada, Costa Rica e Alto Taquari pelo piloto de estoque compartilhado. | Linha de base. |
| A0+ | **Situação atual otimizada** | Mesma estrutura, com rebalanceamento do estoque parado e revisão dos máximos de reposição. Sem CD. | Referência para não atribuir ao CD ganhos que não dependem dele. |
| A1 | **CD centralizado** | Um CD atende as oito unidades nos quatro grupos. As unidades mantêm só uma reserva mínima de uso imediato. | Potencial máximo de consolidação. |
| A2 | **Modelo híbrido** | O estoque é separado pelo perfil do item. Itens de uso esporádico na rede (sobretudo rolamentos) vão para um ponto central: um CD da BRM no Polo Norte para as quatro usinas do mesmo CNPJ e, para as demais, estoque do fornecedor. Itens de uso contínuo ficam nas unidades, de preferência com estoque do fornecedor dentro da usina, como já acontece com filtros. Itens sem consumo na rede vão para saneamento (venda, troca ou descarte), e não para o CD. | Combina o ganho de juntar estoques onde ele é maior com a disponibilidade local onde ela é indispensável. |

O modelo híbrido junta as variantes A2a (por tipo de item) e A2c (estoque do fornecedor) definidas no [item 4 da Sprint 1](../001_Diagnostico_Abastecimento/Organizacao_Dados_Alternativas.md). A variante A2b (por região e CNPJ) aparece aqui como uma das formas de operar o ponto central (seção 1.5.2) e corresponde aos casos C1 e C5 da [comparação de regiões](./Comparacao_Regioes_CD.md).

### 1.1.3. Como ler os números

| Tipo de informação | Como aparece | Exemplo |
| --- | --- | --- |
| Dado da Atvos | Sem marcação | Estoque, consumo, fornecedor, prazo |
| Cálculo da equipe sobre dados da Atvos | Indicado na fonte da tabela | Segmentação por frequência de uso |
| Estimativa com premissas | Sempre com "estimado" ou "cenário" | Saldo recorrente, frete do CD |
| Referência externa | Seção 1.4, com fonte | Resultados de outras empresas |

---

## 1.2. O que os dados mostram sobre cada grupo

A escolha do modelo depende do comportamento de cada material. A Tabela 3 reúne os indicadores que mais pesam nessa escolha.

**Tabela 3 – Perfil de abastecimento dos quatro grupos**

| Indicador | Pneus | Filtros | Lubrificantes | Rolamentos |
| --- | ---: | ---: | ---: | ---: |
| Materiais no recorte | 220 | 596 | 242 | 1.417 |
| Estoque atual (R$ mi) | 5,21 | 3,61 | 5,64 | 5,33 |
| Consumo 12 meses (R$ mi) | 22,60 | 9,26 | 27,05 | 6,47 |
| Cobertura do estoque (meses) | 2,8 | 4,7 | 2,5 | **9,9** |
| % do consumo em itens usados 10–12 meses na unidade | 62% | 71% | **83%** | 28% |
| % do consumo em itens usados até 5 meses na unidade | 13% | 11% | 7% | **45%** |
| % do consumo em materiais usados em 4 ou mais unidades | 91% | 83% | 79% | 48% |
| Estoque repetido em 2 ou mais unidades | 92,0% | 88,5% | 79,3% | 77,5% |
| Prazo médio do fornecedor (dias) | 29,1 | 26,3 | **40,9** | 32,7 |
| Pedidos com prazo acima de 30 dias | 16% | 22% | **67%** | 23% |
| Principal fornecedor (participação no grupo) | Bridgestone, 33% | Hidrara, 20% | **Petronas, 93%** | Rolimac, 29% |
| Fornecedores e origem | 5, todos em SP | 43, com regionais em GO e MS | 20, quase tudo da Petronas (Contagem/MG) | 51, sobretudo SP e MG |
| Combinações com risco alto de falta hoje | 67 | 179 | 119 | 204 |

*Fontes: elaboração própria a partir das bases da Atvos; materiais e cobertura da Tabela 4 do [item 4 da Sprint 1](../001_Diagnostico_Abastecimento/Organizacao_Dados_Alternativas.md); fornecedores das Tabelas 1 e 2 do [item 2 da Sprint 1](../001_Diagnostico_Abastecimento/Mapeamento_Fornecedores.md) (recorte por descrição do material); estoque repetido, prazos e risco das Tabelas 3, 9 e 12 do [item 4 da Sprint 2](./Beneficios_Impactos.md).*

Os números separam os grupos em dois perfis bem diferentes:

- **Pneus, filtros e lubrificantes são de consumo contínuo.** Saem quase todo mês em quase todas as unidades, giram rápido (cobertura de 2,5 a 4,7 meses) e respondem por 90% do consumo do recorte. Afastar esses itens da usina aumentaria o frete e a espera sem grande ganho de estoque. Eles também têm fornecimento concentrado: pneus vêm quase todos de São Paulo, lubrificantes quase todos da Petronas, e filtros são pulverizados (43 fornecedores), com distribuidores regionais em GO e MS.
- **Rolamentos são de consumo esporádico.** Muitos códigos (1.417), uso irregular, cobertura de quase 10 meses e o maior volume de estoque parado. É o perfil em que juntar estoques mais reduz capital e falta, pelo efeito de agregação de risco (Simchi-Levi, Kaminsky e Simchi-Levi, 2010), como o item 4 já havia mostrado: no CD, o risco alto de rolamentos cai de 204 para 73 combinações (−64%).

A Tabela 4 faz o mesmo corte olhando para a **rede inteira** (meses em que o material foi consumido em qualquer unidade), que é a visão relevante para decidir o que vai para um ponto central.

**Tabela 4 – Materiais por frequência de uso na rede (últimos 12 meses)**

| Faixa de uso na rede | Materiais | Estoque (R$ mi) | % do estoque | Consumo 12 meses (R$ mi) | % do consumo | Destino natural |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| Uso recorrente (6 a 12 meses) | 774 | 13,29 | 67,2% | 61,54 | 94,1% | Unidade |
| Uso esporádico (1 a 5 meses) | 1.105 | 5,25 | 26,5% | 3,84 | 5,9% | Ponto central |
| Sem consumo em 12 meses | 596 | 1,25 | 6,3% | 0,00 | 0,0% | Saneamento |
| **Total** | **2.475** | **19,79** | **100%** | **65,39** | **100%** | |

*Fonte: elaboração própria. O limite de 6 meses é o mesmo de "consumo recorrente" do item 4 da Sprint 1 e da estimativa de benefícios. Uso esporádico por grupo: rolamentos R$ 2,68 mi de estoque; lubrificantes R$ 1,07 mi; filtros R$ 0,77 mi; pneus R$ 0,73 mi.*

Essa tabela é o principal argumento a favor do modelo híbrido. **Os itens esporádicos somam 26,5% do estoque, mas só 5,9% do que sai por ano.** Ou seja, um ponto central que guarde só esses itens movimentaria pouco volume (cerca de R$ 320 mil por mês em mercadoria), o que reduz a necessidade de viagens, espaço e equipe. Dos 1.105 materiais esporádicos, **417 estão estocados em duas ou mais unidades (R$ 3,47 milhões)**, que é justamente onde juntar estoques mais ajuda.

---

## 1.3. Comparação de custos, prazos e atendimento

### 1.3.1. Custos

A Tabela 5 recorta para os quatro grupos as estimativas do [item 4](./Beneficios_Impactos.md), com as mesmas premissas do cenário esperado. As regras de cálculo são as do item 4 (Tabela 17); aplicadas aos seis grupos, elas reproduzem os valores publicados lá (R$ 5,43 mi no CD e R$ 4,32 mi no híbrido), o que confirma o recorte.

**Tabela 5 – Efeitos financeiros por alternativa, recorte de quatro grupos (cenário esperado, estimativa)**

| Alternativa | Capital liberado, efeito único (R$ mi) | Economia de estoque (R$ mi/ano) | Compras (R$ mi/ano) | Armazenagem (R$ mi/ano) | Transporte (R$ mi/ano) | **Saldo recorrente (R$ mi/ano)** | Saldo mensal (R$ mil) |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| A0 Situação atual | 0,00 | 0,00 | 0,00 | 0,00 | 0,00 | **0,00** | 0 |
| A0+ Atual otimizada | 3,02 | +0,53 | 0,00 | 0,00 | −0,10 | **+0,43** | +36 |
| A1 CD centralizado | 4,64 | +0,81 | +0,59 | −0,94 | −1,64 | **−1,17** | −98 |
| A2 Híbrido | 3,64 | +0,64 | +0,47 | −0,45 | −0,69 | **−0,03** | −2 |

*Premissas (item 4): aproveitamento de 70% da otimização sem CD; 80% da redução por consolidação da demanda, com reserva local de 20% nos grupos contínuos; economia recorrente de 17,5% ao ano sobre o capital liberado; ganho em compras de 2,5% nos grupos pulverizados (filtros e rolamentos) e 0,5% nos concentrados (pneus e lubrificantes); porte do CD de 10 pessoas e 1.500 m² (híbrido: 5 pessoas e 700 m²); frete pelo piso da ANTT a 300 km de distância média, com 8 viagens por semana no CD e 3 no híbrido. Sinal negativo indica custo adicional. **Não inclui** investimento inicial, impostos nas transferências entre CNPJs nem o valor das paradas de máquina evitadas.*

Três leituras importam para a decisão:

- **O frete é o que mais pesa contra o CD centralizado.** Sozinho, o transporte CD → unidades consome R$ 1,9 milhão por ano no cenário esperado, mais que toda a economia de estoque e de compras somadas. O motivo é o volume: no CD centralizado passariam R$ 65 milhões por ano em mercadoria, quase tudo item de uso contínuo que hoje vai direto do fornecedor para a usina. A distância média de 300 km usada no frete é compatível com a [comparação de regiões](./Comparacao_Regioes_CD.md), em que o melhor ponto para um CD único (Chapadão do Sul) fica a 307 km em média das usinas e a 574 km da UCP.
- **O híbrido fica perto do equilíbrio e libera R$ 0,6 milhão a mais de capital do que a situação otimizada.** Os valores de armazenagem e transporte do híbrido herdados do item 4 são conservadores para este recorte, porque o volume que passaria pelo ponto central (R$ 3,8 milhões por ano) é bem menor que o de seis grupos. A comparação de regiões estima a saída de um CD da BRM em Mineiros em cerca de R$ 0,30 mi por ano no piso da ANTT (duas viagens por semana para cada usina), menos da metade dos R$ 0,72 mi usados aqui. Se o ponto central usar uma estrutura que já existe (como o almoxarifado da UMV e a rota do piloto) ou for operado pelo fornecedor, o saldo tende a ficar positivo.
- **O ganho em compras é limitado.** Em pneus e lubrificantes, 74% do consumo da safra 25/26 no recorte, o fornecimento já é concentrado em poucos fornecedores nacionais, e ainda falta confirmar se os contratos já são corporativos.

### 1.3.2. Prazos

Existem dois prazos diferentes, e a centralização mexe em cada um de um jeito.

**Tabela 6 – Prazos por alternativa**

| Prazo | A0 Situação atual | A0+ Atual otimizada | A1 CD centralizado | A2 Híbrido |
| --- | --- | --- | --- | --- |
| **Prazo do fornecedor** (pedido até chegada) | Média de 26 a 41 dias conforme o grupo; lubrificantes têm 67% dos pedidos acima de 30 dias | Sem mudança | Pode cair se a compra centralizada conseguir o melhor prazo já praticado; depende de os fornecedores regionais atenderem o CD | Igual ao CD nos itens centrais; nos contínuos, pode cair com estoque do fornecedor na unidade |
| **Espera da unidade quando falta o item** | Cerca de 25 dias (até 50 dias em 9 de cada 10 casos) | Cerca de 3 dias, só quando há estoque parado em outra unidade | Cerca de 5 dias (2 a 8), para todos os itens | Cerca de 5 dias nos itens do ponto central; imediato nos itens com estoque do fornecedor na usina |
| **Espera para itens que hoje estão na prateleira** | Imediato | Imediato | Passa a depender da entrega do CD, salvo a reserva local | Imediato nos itens contínuos, que ficam na unidade |

*Fonte: Tabelas 9 e 10 do [item 4](./Beneficios_Impactos.md). Os tempos de entrega do CD e das transferências são premissas a confirmar com a Atvos e com a região escolhida.*

O último ponto é o custo escondido do CD centralizado: **1.492 combinações de uso recorrente (6 ou mais meses por ano na própria unidade) respondem por 87% do consumo do recorte** e hoje estão, em geral, disponíveis na usina. No CD centralizado, elas passariam a esperar a entrega semanal. Em uma operação que a própria Atvos descreve como "nervosa", com a cana precisando ser processada pouco tempo depois do corte, isso pesa mais do que a média de dias sugere.

### 1.3.3. Atendimento e risco de falta

**Tabela 7 – Combinações com risco alto de falta por grupo e alternativa (cenário esperado)**

| Grupo | A0 Situação atual | A0+ Atual otimizada | A1 CD centralizado | A2 Híbrido (só rolamentos no ponto central) |
| --- | ---: | ---: | ---: | ---: |
| Pneus | 67 | 62 | 44 | 62 |
| Filtros | 179 | 157 | 72 | 157 |
| Lubrificantes | 119 | 106 | 100 | 106 |
| Rolamentos | 204 | 174 | 73 | 73 |
| **Total** | **569** | **499** | **289** | **398** |
| Variação frente à situação atual | – | −12% | −49% | −30% |

*Fonte: Tabela 12 do [item 4](./Beneficios_Impactos.md), somando só os quatro grupos do escopo. A coluna do híbrido é um limite inferior: o modelo proposto aqui também leva ao ponto central os itens esporádicos de pneus, filtros e lubrificantes (R$ 2,57 mi de estoque), o que deve reduzir parte do risco desses grupos.*

O risco mostra que cada modelo resolve um problema diferente:

- **Rolamentos:** o problema é estoque no lugar errado. Juntar o estoque resolve quase tudo (de 204 para 73), e o híbrido já captura esse ganho inteiro.
- **Filtros:** o CD reduziria bastante a falta (de 179 para 72), mas são itens de uso semanal. A alternativa que resolve a falta sem tirar o filtro da usina é ampliar o estoque do fornecedor dentro da unidade, modelo que a Atvos já testou com sucesso.
- **Lubrificantes:** nenhum modelo resolve (de 119 para 100 no melhor caso), porque em 47 dos 187 lubrificantes com consumo o estoque de toda a rede somada já não aguenta até a próxima entrega. O problema é de contrato e de estoque mínimo com a Petronas, e não de onde o estoque fica.
- **Pneus:** risco mais baixo e itens volumosos de giro alto. O ganho de centralizar é pequeno frente ao custo de manusear e transportar duas vezes.

### 1.3.4. Quadro-resumo

**Tabela 8 – Comparação consolidada (recorte de quatro grupos, cenário esperado)**

| Dimensão | A0 Situação atual | A0+ Atual otimizada | A1 CD centralizado | A2 Híbrido |
| --- | --- | --- | --- | --- |
| Capital liberado | – | R$ 3,0 mi | R$ 4,6 mi | R$ 3,6 mi |
| Saldo recorrente estimado | – | +R$ 0,4 mi/ano | −R$ 1,2 mi/ano | ≈ R$ 0/ano |
| Investimento inicial | Nenhum | Nenhum | Maior (imóvel, estrutura, sistema) | Baixo a médio (pode usar estrutura existente) |
| Exposição a impostos nas transferências | Baixa | Média (transferências entre CNPJs) | Alta: 62% do consumo está em unidades de CNPJ próprio (57% no recorte da comparação de regiões) | Média: 58% do estoque esporádico está em unidades de CNPJ próprio; nula se o ponto central atender só a BRM e as demais usarem estoque do fornecedor |
| Espera quando falta o item | 25 dias | 3 dias (parcial) | 5 dias | 5 dias nos itens centrais |
| Itens de uso contínuo na prateleira | Sim | Sim | Só a reserva local | Sim |
| Risco alto de falta | 569 | 499 (−12%) | 289 (−49%) | 398 ou menos (−30% ou mais) |
| Volume que passa por um ponto central | – | – | R$ 65 mi/ano | R$ 3,8 mi/ano |
| Principal risco novo | – | Atraso fiscal nas transferências | Dependência de um único CD e frete alto | Gestão de dois fluxos e transporte em época de chuva |

*Fontes: Tabelas 4, 5, 6 e 7 desta seção; participação por CNPJ calculada sobre o grupo informado pela Atvos em reunião (quatro unidades do Polo Norte no mesmo CNPJ e quatro com CNPJ próprio), ainda não confirmado por documento.*

---

## 1.4. Referências de gestão de MRO em outras empresas

Buscamos casos que ajudem a avaliar as alternativas, começando pelas experiências da própria Atvos. As referências externas servem para entender **em que condições** cada modelo funcionou; os resultados delas não devem ser aplicados diretamente aos números da Atvos.

### 1.4.1. Experiências da própria Atvos

**Tabela 9 – Iniciativas internas da Atvos**

| Iniciativa | O que foi feito | Resultado | O que ensina |
| --- | --- | --- | --- |
| **Piloto de estoque compartilhado do Polo Norte** | UMV passou a abastecer UAE, UCR e UAT sob demanda, com rota semanal fixa (105 a 138 km), entre unidades do mesmo CNPJ. | Estoque analisado de R$ 3,90 mi reduzido para R$ 1,98 mi (−51%), com R$ 473 mil apontados como potencial de venda; R$ 298 mil por mês movimentados. Cerca de 16 dos 51 pontos vêm do consumo normal no período, e não da centralização. No roteiro da Atvos, a fase 2 (lojas in company e Re-man) está em curso e a fase 3 prevê expandir para as oito unidades. | Um hub regional dentro de uma unidade existente, no mesmo CNPJ, é viável e já é o embrião de um modelo híbrido. As "lojas in company" da fase 2 seguem a mesma lógica do estoque do fornecedor na usina. Pelo item 4, a UMV é também a unidade com mais risco alto nos seis grupos, o que sugere que ela abastece as outras antes de si mesma. |
| **Estudo de armazém em Mineiros** | Armazém central em Mineiros (GO) para as quatro unidades do mesmo CNPJ, escolhidas justamente para evitar imposto nas transferências. | Não seguiu: exigiria transporte dedicado, sem sinergia com transportadoras na região, e ficou caro. A lição relatada foi que itens de altíssimo giro devem ficar na usina. | O frete é o fator decisivo. Itens de alto giro não devem ir para um ponto central. |
| **Estoque de filtros do fornecedor dentro da usina** | Fornecedor mantém contêiner com estoque próprio na unidade, com acesso por reconhecimento facial; fatura quando o material é retirado. O fornecedor abriu um CNPJ de armazenagem na unidade. | Considerado um sucesso pela Atvos. Permite atender várias usinas sem a Atvos revender material entre os próprios CNPJs. | Para itens de alto giro, o melhor "CD" pode ser o estoque do fornecedor na usina. A Atvos levantou a ideia de um "condomínio de fornecedores" no interior de SP para itens de alto valor e giro intermediário. |
| **Distribuição de pneus** | Transportador em Ribeirão Preto consolida a carga e distribui por hubs intermediários até as unidades. | Descrito pela Atvos como um modelo que se ramifica; a eficiência depende de onde fica o hub. | Para pneus, a melhoria tende a estar na rota do transportador e no posicionamento do hub, e não em um estoque central da Atvos. |

*Fonte: apresentação Estoque Compartilhado (slides 1 a 8) e reunião de alinhamento com a Atvos (nov/2026).*

### 1.4.2. Referências externas

**Tabela 10 – Casos e estudos de gestão de MRO**

| Caso | Setor | Modelo | Resultado reportado | O que ensina para a Atvos |
| --- | --- | --- | --- | --- |
| **Empresa de petróleo e gás** (MIT CTL, 2023) | Óleo e gás | Redesenho da rede: cada armazém deixa de atender uma única planta e passa a atender várias, com 19.153 itens MRO segmentados pelo perfil de demanda | Sem integrar sistemas: −12% em armazenagem e transporte e −22% no custo do estoque de segurança. Integrando sistemas **e entidades jurídicas**: −27% nas duas frentes | O ganho de juntar estoques depende de resolver a barreira entre empresas do grupo, o mesmo problema dos CNPJs da Atvos. Segmentar os itens antes de escolher onde guardá-los é o passo central. |
| **CSN – Armazéns Avançados** (SEGeT, dados até 2005) | Siderurgia | Saiu de armazéns centrais distantes (até 6 km das áreas) para pontos controlados perto do uso, com itens separados em quatro categorias: consumo geral, programados, urgentes e itens ao lado do equipamento | Locais de estoque não oficiais caíram de 455 (2002) para 95 (2005); cerca de 22 mil itens passaram a ser controlados no sistema | Mesmo com centralização, itens urgentes e de troca imediata ficam perto do equipamento. É um modelo híbrido com regra clara por categoria. |
| **Mineradora com CD único** (UFMG, 2015) | Mineração | Um CD de cerca de 35 mil m² substitui os armazéns de cinco unidades, a 4–52 km, com rotas fixas e transporte terceirizado | Proposta, sem resultado medido. Problemas que motivaram o CD: transferências frequentes, veículos dedicados caros e faltas de itens críticos | Um CD único funciona quando as unidades estão a dezenas de quilômetros. As unidades da Atvos vão de cerca de 40 km (Eldorado–Santa Luzia) a mais de 500 km de distância entre os blocos, o que muda a conta do frete. |
| **Thermo A/S** (Gregersen e Hansen, 2018) | Indústria (16 plantas na Europa) | Modelo de decisão com seis fatores para definir o grau de centralização dos sobressalentes | A empresa estava 0% centralizada; os fatores indicavam 54%. O primeiro passo recomendado foi limpar o cadastro e reduzir estoque obsoleto e repetido | Centralização é uma escala, não um "sim ou não". Usamos os seis fatores na Tabela 11. |
| **Grupo de usinas no interior de SP** (Fatec Jaboticabal, 2023) | Sucroenergético | Estoque centralizado de insumos agrícolas (piloto com um herbicida), operado por operador logístico | Em março, o giro acumulado foi de 2,37 no modelo centralizado, contra 0,91 no armazenamento nas usinas; no giro mensal a diferença é pequena (0,97 contra 0,83), e há só três meses de dados | Há usinas testando centralização com operador logístico, mas o caso é de insumos e não de MRO, cobre um único produto e tem um período curto. |
| **Tereos e BP Bunge – projeto Surplus** (2022) | Sucroenergético | Troca de peças paradas entre duas empresas do setor | Cerca de 6 toneladas e R$ 260 mil em materiais, com peças a até 70% do preço de novas | Uma saída para os R$ 1,25 mi sem consumo no recorte, sem precisar levá-los a um CD. |
| **Integrated supply** (Reliabilityweb) | Indústria em geral | Distribuidor opera o almoxarifado de MRO dentro da planta | Metas típicas desses contratos: redução de 25% ou mais no estoque e 98% de atendimento, com 100% dos itens críticos disponíveis | Reforça o caminho do estoque do fornecedor na usina para itens contínuos. Os números são metas contratuais, não resultados garantidos. |
| **Michelin – pagamento por km** (2014 e 2024) | Mineração e transporte | O fabricante gere os pneus da frota e cobra pelo uso (km rodado), e não por pneu vendido | Modelo testado em mineradoras no Brasil e no Chile e usado em contratos de gestão integral de frota | Para pneus de caminhão canavieiro, a alternativa ao CD pode ser contratual: transferir ao fabricante a gestão do estoque e da troca. |
| **BCG – MRO** (2016) | Vários | Diagnóstico de compras e estoques de MRO | Sem gestão central, plantas diferentes compram a mesma peça de fornecedores diferentes, ou do mesmo fornecedor sem juntar os pedidos. Algumas empresas compram itens pequenos de fornecedores próximos para apoiar a comunidade local, o que o BCG considera válido, mas não como critério principal | Ganho em compras vem de padronizar e agregar pedidos dos itens pulverizados (filtros e rolamentos), não necessariamente de um CD. |

*As referências completas estão na seção 1.8.*

### 1.4.3. Aplicando os fatores de decisão aos quatro grupos

Gregersen e Hansen (2018) propõem seis fatores para decidir o quanto centralizar sobressalentes: três operacionais (custo da parada, custo de manter estoque e comunalidade) e três estratégicos (peso da gestão de sobressalentes na estratégia, capacidade dos sistemas e padrões de risco). A Tabela 11 aplica os três operacionais e o de padrões de risco, que conseguimos avaliar com os dados atuais.

**Tabela 11 – Tendência de centralização por grupo**

| Fator | Favorece centralizar quando… | Pneus | Filtros | Lubrificantes | Rolamentos |
| --- | --- | --- | --- | --- | --- |
| Custo da parada | A parada custa pouco | Alto (caminhão canavieiro parado) | Alto (manutenção preventiva da frota) | Alto | Alto em itens de moenda e indústria |
| Custo de manter estoque | O item é caro e fica muito tempo parado | Médio (cobertura 2,8 meses) | Baixo (preço mediano R$ 163) | Baixo (cobertura 2,5 meses) | **Alto (cobertura 9,9 meses, 78% do estoque em combinações com pouco ou nenhum uso)** |
| Comunalidade entre unidades | O mesmo item é usado em várias plantas | Alta (91%) | Alta (83%) | Alta (79%) | Média (48%) |
| Padrões de risco (demanda) | Demanda irregular e difícil de prever | Regular | Regular | Regular | **Irregular** |
| **Tendência** | | **Unidade** | **Unidade, com estoque do fornecedor** | **Unidade, com contrato de reposição** | **Centralizar** |

*O "custo da parada" é qualitativo até a Atvos informar a criticidade operacional. Os outros dois fatores estratégicos (peso da gestão de sobressalentes e capacidade dos sistemas) não foram pontuados. As bases enviadas mostram estoque e consumo de todas as unidades num mesmo cadastro, o que ajuda a centralização em todos os grupos, mas a capacidade do sistema para operar um CD ainda precisa ser confirmada com a Atvos.*

O resultado reforça a Tabela 3. Em rolamentos, os fatores apontam para centralizar, apesar da comunalidade média. Nos outros três grupos, a alta comunalidade puxaria para centralizar, mas a demanda regular e o custo da parada puxam o estoque para perto do uso. Para esses itens, a comunalidade é melhor aproveitada em **contratos e compras corporativas** do que em um estoque físico central.

---

## 1.5. Vantagens, dificuldades e necessidades de funcionamento

### 1.5.1. Quadro por modelo

**Tabela 12 – Vantagens, dificuldades e necessidades de cada modelo**

| Modelo | Vantagens | Dificuldades e riscos | O que precisa para funcionar |
| --- | --- | --- | --- |
| **A0 Situação atual** | Material na prateleira da usina; nenhuma mudança fiscal ou logística; o piloto do Polo Norte já mostrou ganho no seu bloco. | 78% a 92% do estoque repetido em duas ou mais unidades; R$ 1,25 mi sem consumo em 12 meses; 25 dias de espera quando falta; 569 combinações com risco alto. | Nada novo, mas o problema de capital parado e de falta continua. |
| **A0+ Atual otimizada** | Libera cerca de R$ 3,0 mi sem imóvel nem equipe nova; pode começar já; saldo recorrente positivo. | Ajuda pouco na falta (−12%); transferência entre CNPJs diferentes vira venda; depende de disciplina para manter os máximos revisados. | Visão única do estoque das oito unidades; regra de transferência; revisão periódica de mínimos e máximos; política de venda ou troca de itens parados. |
| **A1 CD centralizado** | Maior redução de falta (−49%); um só estoque de segurança; maior poder de compra; maior capital liberado (R$ 4,6 mi). | Saldo recorrente negativo antes do investimento (−R$ 1,2 mi/ano); frete alto pelas distâncias entre unidades (de cerca de 40 km a mais de 500 km entre blocos); 62% do consumo está em unidades de CNPJ próprio; dependência de um único ponto; itens de uso contínuo deixam a prateleira; repete o problema do estudo de Mineiros. | Região com distância média baixa às oito unidades (o melhor ponto único fica a 307 km em média, segundo a comparação de regiões); solução fiscal para os CNPJs; imóvel, equipamentos e sistema de armazém; equipe dimensionada pelo mês de pico; rota diária ou quase diária; reserva local dos itens vitais. |
| **A2 Híbrido** | Leva ao ponto central só o que mais se beneficia (itens esporádicos: 27% do estoque e 5,9% do fluxo); mantém os itens contínuos na usina; frete e estrutura menores; aproveita o piloto do Polo Norte e o modelo de estoque do fornecedor que já funcionam. | Dois fluxos para gerir (central e local), com regra clara de qual item vai para onde; impostos se o estoque central for da Atvos e atender outro CNPJ; transporte em época de chuva no pico de rolamentos (jan–fev, reformas); depende de os fornecedores aceitarem manter estoque na usina. | Segmentação dos itens por frequência e criticidade, revisada a cada safra; ponto central em unidade existente ou operado por terceiro; contratos de estoque do fornecedor para filtros e lubrificantes; envio dos kits de reforma antes de dezembro; indicadores por fluxo. |

### 1.5.2. Duas formas de operar o ponto central do híbrido

A Tabela 13 mostra que o ponto central do híbrido pode ser operado de duas formas. As duas podem conviver: o CD da BRM atende as quatro usinas do mesmo CNPJ, e o estoque do fornecedor atende URC, USL, UEL e UCP. A escolha final depende da análise fiscal, que está em outra entrega desta sprint.

**Tabela 13 – Formas de operar o ponto central**

| Forma | Como funciona | Vantagem | Limitação |
| --- | --- | --- | --- |
| **CD da BRM em unidade existente** (expansão do Polo Norte; casos C1 e C5 da comparação de regiões) | O almoxarifado de uma usina guarda os itens esporádicos e abastece as outras pela rota que já existe. | Investimento baixo; usa equipe, espaço e caminhão que já existem; sem imposto dentro do mesmo CNPJ. | Para as quatro unidades de CNPJ próprio (58% do estoque esporádico), cada envio continuaria sendo uma venda. Exigiria um hub por bloco ou uma solução fiscal. |
| **Estoque central do fornecedor** ("condomínio de fornecedores") | Fornecedores de rolamentos e outros itens de alto valor mantêm o próprio estoque em um armazém de operador logístico, perto das unidades ou do eixo de fornecedores em SP, e faturam direto para cada usina. Pode ser combinado com a consolidação de transporte em Ribeirão Preto (casos C4 e C5). | A Atvos não revende entre os próprios CNPJs; o capital imobilizado sai do balanço; segue a lógica do modelo de filtros. | Depende de fornecedores aceitarem; o custo do estoque pode voltar embutido no preço; precisa de contrato com nível de serviço e regime fiscal do armazém validado com a área fiscal. |

*A legislação paulista prevê regimes próprios para mercadorias guardadas em armazém geral ou operador logístico (por exemplo, a Portaria CAT 31/2019, citada em respostas a consultas da SEFAZ-SP). O enquadramento para o caso da Atvos, inclusive com a transição da reforma tributária, deve ser confirmado com a área fiscal da empresa; esta página não faz análise tributária.*

### 1.5.3. Atendimento aos materiais essenciais

A Atvos ainda não informou a criticidade operacional dos itens. Enquanto isso, usamos três grupos de materiais essenciais, construídos com os dados disponíveis.

**Tabela 14 – Como cada modelo atende os materiais essenciais**

| Materiais essenciais | Tamanho no recorte | A0 Situação atual | A0+ Atual otimizada | A1 CD centralizado | A2 Híbrido |
| --- | --- | --- | --- | --- | --- |
| **De uso recorrente** (uso em 6 ou mais meses por ano na unidade) | 1.492 combinações, 87% do consumo | Atendidos na prateleira; falta quando o estoque está abaixo do ponto de pedido | Igual à atual | Passam a depender da entrega do CD, salvo a reserva local | Ficam na unidade; filtros e lubrificantes podem ganhar estoque do fornecedor na usina |
| **Críticos de baixo giro e alto valor** (preço unitário de R$ 5 mil ou mais e uso em 1 a 5 meses na rede, como o rolamento de cerca de R$ 40 mil citado pela Atvos, com prazo de cerca de 40 dias) | 29 materiais, R$ 1,15 mi; 13 deles em duas ou mais unidades (R$ 0,86 mi) | Cada unidade guarda o seu, por segurança | Transferência possível se houver sobra em outra unidade do mesmo CNPJ | Um só estoque para a rede, a cerca de 5 dias de cada unidade | Mesmo efeito do CD para esses itens, que são o centro do ponto central |
| **Com falta estrutural na rede** (estoque de todas as unidades somadas abaixo do necessário até a próxima entrega) | 47 lubrificantes, entre outros | Falta | Falta (não há sobra para redistribuir) | Falta | Falta; exige contrato de reposição com a Petronas e revisão dos mínimos |

*Fontes: elaboração própria a partir das bases da Atvos; lubrificantes com falta estrutural na seção 4.3.2 do [item 4](./Beneficios_Impactos.md); exemplo do rolamento citado pela Atvos na reunião de alinhamento.*

**Regra prática para não perder atendimento em nenhum modelo:** item que para equipamento crítico e não tem substituto continua com uma unidade de reserva na usina, mesmo que o restante do estoque vá para o ponto central. O ganho de juntar estoques vem do **excesso** espalhado pela rede, não da primeira peça de cada usina.

---

## 1.6. Síntese preliminar: qual modelo faz mais sentido para cada grupo

**Tabela 15 – Modelo indicado por grupo (preliminar)**

| Grupo | Modelo indicado nesta etapa | Por quê | Condição para confirmar na Sprint 3 |
| --- | --- | --- | --- |
| **Rolamentos** | **Ponto central** (CD da BRM no Polo Norte para as quatro usinas do mesmo CNPJ; estoque do fornecedor para as demais) | Uso esporádico, estoque alto e repetido, maior redução de falta (−64%) | Lista de itens críticos com a Manutenção; solução para os CNPJs; envio antecipado dos kits de reforma |
| **Filtros** | **Unidade, com estoque do fornecedor na usina** | Uso semanal e fornecedores regionais; modelo já testado com sucesso pela Atvos | Ampliar o modelo a outros fornecedores; itens esporádicos de filtros podem ir ao ponto central |
| **Lubrificantes** | **Unidade, com contrato de reposição e estoque do fornecedor** | 83% do consumo em itens de uso quase mensal; o problema é prazo e estoque mínimo, não localização | Prazo garantido em contrato com a Petronas; revisão dos estoques mínimos; avaliar tanques do fornecedor nas usinas |
| **Pneus** | **Unidade, com entrega direta e consolidação de transporte em Ribeirão Preto** | Itens volumosos, giro alto, origem concentrada em SP, risco mais baixo | Avaliar contrato de gestão de pneus pelo fabricante; posicionar melhor o hub de distribuição do transportador |
| **Itens sem consumo** (todos os grupos) | **Saneamento**: venda, troca com outras empresas ou descarte | R$ 1,25 mi sem uso em 12 meses não devem ocupar espaço em um CD novo | Política de baixa e venda com a Atvos |

**Conclusão preliminar.** Com os dados de hoje, o **modelo híbrido** é o que melhor equilibra custo, prazo e atendimento no escopo de quatro grupos. Ele reduz a falta onde o problema é estoque espalhado (rolamentos), mantém na usina o que precisa estar à mão (pneus, filtros e lubrificantes) e evita o principal erro do estudo de Mineiros, que é pagar frete dedicado para itens de alto giro.

A [comparação de regiões](./Comparacao_Regioes_CD.md) chegou ao mesmo desenho por outro caminho: o caso recomendado (C5) é um CD da BRM no Polo Norte, que só compartilha estoque entre as quatro usinas do mesmo CNPJ, mais consolidação de transporte em Ribeirão Preto para os fornecedores de SP. As outras quatro usinas mantêm seus almoxarifados e podem ampliar o estoque do fornecedor. Esse é o modelo híbrido desta página com endereço definido.

O **CD centralizado** só passa a fazer sentido se três condições acontecerem juntas: (1) uma distância média bem menor que a do melhor ponto único encontrado (307 km, com a UCP a 574 km), perto do limite otimista de 150 km do item 4; (2) uma solução fiscal que permita atender as unidades de CNPJ próprio sem revenda, como a reforma tributária pode trazer; e (3) frete compartilhado com fluxos que já existem, e não uma frota dedicada. As entregas de investimento e impostos desta sprint devem testar essas condições.

**Informações que ainda faltam para fechar a comparação:**

1. Lista oficial de códigos dos quatro grupos (a base de 17/11 tem um grupo de pneus mais amplo do que o recorte usado).
2. Criticidade operacional dos itens (VED) com a Manutenção, começando pelos 29 itens caros de baixo giro e pelas 1.492 combinações de uso recorrente.
3. Confirmação do grupo de CNPJ de cada unidade e das regras fiscais para transferências e para estoque de fornecedor em armazém de terceiro.
4. Situação atual do piloto do Polo Norte (ativo ou não, e quais itens passam por ele).
5. Interesse dos fornecedores de rolamentos, filtros e lubrificantes em manter estoque próprio nas usinas ou em um armazém compartilhado.
6. Custos reais de armazenagem, equipe e frete das unidades, para substituir as referências de mercado.
7. Pedidos em aberto (agora disponíveis na base de 17/11 para 448 combinações), para recalcular o risco de falta.
8. Conciliação dos recortes dentro do grupo: os itens 1, 3 e 4 da Sprint 1, a estimativa de benefícios e esta página usam a classificação da aba `Base_Consumo`; o mapeamento de fornecedores e a comparação de regiões usam a descrição do material. Os totais são parecidos, mas não iguais (por exemplo, R$ 18,0 mi de estoque no recorte por descrição, contra R$ 19,79 mi aqui).

---

## 1.7. Metodologia e limitações

**Tabela 16 – Regras de cálculo desta seção**

| Indicador | Regra |
| --- | --- |
| Recorte de quatro grupos | Códigos classificados na aba `Base_Consumo` como pneus e acessórios, filtros e elementos, lubrificantes e fluidos ou rolamentos e vedação, nas oito unidades. |
| Valor do consumo | Quantidade consumida × custo unitário do estoque atual do material (valor total ÷ quantidade total). |
| Uso na unidade | Número de meses com consumo da combinação de unidade e material entre nov/2025 e out/2026. "Uso recorrente" é 6 ou mais meses, a mesma regra do item 4 da Sprint 1 e da estimativa de benefícios. A faixa Alto da Atvos (10 a 12 meses) aparece separada na Tabela 3. |
| Uso na rede | Número de meses em que o material teve consumo em pelo menos uma unidade, no mesmo período. Recorrente: 6 a 12 meses; esporádico: 1 a 5; sem consumo: 0. |
| Comunalidade | Parcela do consumo de 12 meses em materiais consumidos em 4 ou mais unidades. |
| Críticos de baixo giro | Preço unitário de R$ 5 mil ou mais e uso na rede entre 1 e 5 meses. |
| Recorte financeiro | Fórmulas da Tabela 17 do [item 4](./Beneficios_Impactos.md), aplicadas aos valores por grupo das Tabelas 3 e 5 do item 4, só para os quatro grupos. |
| Participação por CNPJ | Polo Norte (UMV, UAE, UCR e UAT) no mesmo CNPJ; UCP, USL, UEL e URC com CNPJ próprio, conforme reunião com a Atvos. |

**Limitações**

- **Recorte a confirmar.** O recorte vem da classificação da Sprint 1. A base de 17/11 usa grupos mais amplos, e a comparação de regiões usa a descrição do material; os números podem mudar quando a lista oficial for confirmada.
- **Consolidação possivelmente otimista.** A estimativa de benefícios alerta que, com o tempo de entrega do CD no cálculo, a redução por consolidação pode estar cerca de R$ 0,6 mi acima do real nos seis grupos. O mesmo cuidado vale para o capital liberado da Tabela 5.
- **Custos herdados.** Os custos de armazenagem e transporte usam o porte e as viagens definidos no item 4 para seis grupos. São conservadores para o híbrido deste recorte e serão substituídos pelas estimativas de investimento, custos de funcionamento e regiões desta sprint.
- **Sem investimento e sem impostos.** A comparação financeira ainda não inclui o investimento inicial nem o efeito dos impostos, que podem mudar a ordem das alternativas.
- **Híbrido proposto vs. híbrido calculado.** O risco de falta do híbrido foi calculado no item 4 com só rolamentos no ponto central. O modelo proposto aqui inclui também os itens esporádicos dos outros grupos, então o resultado da Tabela 7 é um limite inferior do ganho.
- **Referências externas.** Os casos externos têm contextos diferentes (distâncias, setores, legislação) e servem para entender condições de sucesso, não para estimar resultados da Atvos. Os números de fornecedores de serviço (integrated supply) são metas comerciais.
- **Criticidade.** Os materiais essenciais foram aproximados por frequência de uso e preço. A classificação VED com a Manutenção pode incluir itens de uso raro que precisam ficar na usina.

---

## 1.8. Referências

AGROTECH INTELI; ATVOS. **Termo de abertura do projeto e documento de entregáveis**. São Paulo, 2026. Documento interno.

ATVOS. **Base de planejamento de materiais**: abas Base_Consumo e Base_Estoque_Atual. [*S. l.*]: Atvos, 2026. Documento interno, recebido em 9 nov. 2026.

ATVOS. **Estoque compartilhado**: projeto Polo Norte. [*S. l.*]: Atvos, 2026. Apresentação interna (8 slides), recebida em 9 nov. 2026.

ATVOS. **Planejamento de materiais**: aba Consolidado. [*S. l.*]: Atvos, 2026. Documento interno, versões recebidas em 11 nov. 2026 e 17 nov. 2026.

ATVOS. **Reunião de alinhamento do projeto**. [*S. l.*], nov. 2026. Transcrição interna da equipe.

CASTILLO, T.; TABORGA, M. **Network design in MRO inventory for oil & gas company**. Cambridge, MA: MIT Center for Transportation & Logistics, 2023. Disponível em: https://ctl.mit.edu/publications/network-design-mro-inventory-oil-gas-company. Acesso em: 23 nov. 2026.

CRISPIM, C. R. **A partir da instalação de um novo centro de distribuição de uma mineradora definir a estratégia de distribuição de itens de manutenção, reparo e operação**: um estudo de caso. Monografia (Especialização em Logística Estratégica e Sistemas de Transportes) – UFMG, Belo Horizonte, 2015.

GANERIWALLA, A.; VALLURU, K. **Capturing the MRO advantage in manufacturing**. Boston: Boston Consulting Group, 23 nov. 2016. Disponível em: https://www.bcg.com/publications/2016/lean-manufacturing-sourcing-procurement-more-spare-change-capturing-mro-advantage. Acesso em: 23 nov. 2026.

GREGERSEN, N.; HANSEN, Z. N. L. Inventory centralization decision framework for spare parts. **Production Engineering**, v. 12, n. 3-4, p. 353-365, 2018. DOI: 10.1007/s11740-018-0814-3.

ISTOÉ DINHEIRO. **A era dos pneus inteligentes chega ao Brasil**. São Paulo, 30 jun. 2014. Disponível em: https://istoedinheiro.com.br/a-era-dos-pneus-inteligentes-chega-ao-brasil. Acesso em: 23 nov. 2026.

MARIA, T. A. M. **Terceirização do estoque em um grupo de usinas no interior do estado de São Paulo**. Trabalho de Graduação (Tecnologia em Biocombustíveis) – Fatec Nilo de Stéfani, Jaboticabal, 2023.

MICHELIN. **Grupo logístico Sertranin confia na Michelin para a gestão integral dos pneus da sua frota**. Comunicado de imprensa, nov. 2024. Disponível em: https://espacioprensa.michelin.es/wp-content/uploads/2024/11/CP_Michelin-Sertranin_POR-.pdf. Acesso em: 23 nov. 2026.

RELIABILITYWEB. **Solving the mystery of integrated supply for MRO**: what is it? What is it not? Disponível em: https://reliabilityweb.com/articles/entry/solving-the-mystery-of-integrated-supply-for-mro-what-is-it-what-is-it-not. Acesso em: 23 nov. 2026.

SÃO PAULO (Estado). Secretaria da Fazenda e Planejamento. **Resposta à Consulta Tributária nº 33633/2026**: ICMS – regras de tributação aplicáveis em operações realizadas com operador logístico. São Paulo, 2026. Disponível em: https://legislacao.fazenda.sp.gov.br/Paginas/RC33633_2026.aspx. Acesso em: 23 nov. 2026.

SIMCHI-LEVI, D.; KAMINSKY, P.; SIMCHI-LEVI, E. **Cadeia de suprimentos**: projeto e gestão. 3. ed. Porto Alegre: Bookman, 2010.

TEREOS. **Tereos e BP Bunge realizam operação inédita que dá nova destinação a materiais da indústria**. São Paulo, 27 abr. 2022. Disponível em: https://tereos.com/app/uploads/sites/7/2022/04/tereos-e-bp-bunge-realizam-operacao-inedita-que-da-nova-destinacao-a-materiais-da-industria.pdf. Acesso em: 23 nov. 2026.

VALENTIM, A.; PINTO JÚNIOR, D.; KUNIOSHI, F.; NOGUEIRA, H. **Evolução da armazenagem de sobressalentes em uma usina siderúrgica**. In: SIMPÓSIO DE EXCELÊNCIA EM GESTÃO E TECNOLOGIA (SEGeT), 3., Resende, 2006.
