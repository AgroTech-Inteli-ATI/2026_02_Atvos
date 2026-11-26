---
sidebar_position: 5
sidebar_label: 4. Estimativa de benefícios e impactos
slug: /sprint-2/estimativa-beneficios-impactos
description: "Estimativa de benefícios financeiros e variações operacionais: redução de estoques repetidos, separação entre capital liberado e economia recorrente, ganhos potenciais em compras, mudanças nos custos de armazenagem e transporte e efeitos nos prazos de atendimento, na disponibilidade e no risco de falta de materiais."
---

# 4. Estimativa de benefícios e impactos

Esta seção estima os potenciais benefícios financeiros e as variações de custos operacionais associadas à centralização dos materiais de manutenção, reparo e operação (MRO) da Atvos. A análise concentra-se em três frentes complementares:

1. **Redução de estoques repetidos e do capital aplicado em materiais**, separando o valor liberado uma única vez no caixa da economia recorrente gerada a cada mês e a cada ano.
2. **Potenciais ganhos nas compras e mudanças nos custos de armazenagem e transporte**, comparando quatro alternativas de abastecimento em cenários conservador, esperado e otimista.
3. **Efeitos nos prazos de atendimento, na disponibilidade e no risco de falta de materiais**, calculados com as mesmas regras do diagnóstico da Sprint 1 e apresentados separados do saldo financeiro.

Todos os cálculos derivam do recorte oficial de **3.201 materiais** distribuídos nos **seis grupos MRO** e nas **oito unidades agroindustriais** (estoque atual de **R$ 23,96 milhões** em todos os depósitos e consumo anual estimado de **R$ 72,35 milhões** na Safra 25/26). As fórmulas e premissas editáveis estão consolidadas na planilha de apoio compartilhada nos canais internos do projeto; esta página apresenta os resultados agregados e as regras de cálculo.

> **Escopo e transparência:** para manter consistência com o diagnóstico da Sprint 1 e alimentar diretamente os [itens 3](./Investimento_Custos.md) e [5](./Viabilidade_Inicial.md), esta página modela os custos de armazenagem e transporte por faixas paramétricas de distância e porte no recorte de seis grupos. As regiões candidatas e rotas por sede municipal estão detalhadas no [item 2](./Comparacao_Regioes_CD.md) (no recorte reduzido de quatro grupos), e as hipóteses de investimento inicial e tributos estão no [item 3](./Investimento_Custos.md). Os valores abaixo representam cenários preliminares para apoio à decisão, e não resultados comprovados da operação.

---

## 4.1. Redução de estoques repetidos e do dinheiro aplicado em materiais

### 4.1.1. Alternativas comparadas e premissas contra dupla contagem

A análise compara quatro modelos de abastecimento, mantendo total alinhamento com o [diagnóstico inicial](../001_Diagnostico_Abastecimento/Organizacao_Dados_Alternativas.md):

**Tabela 1 – Alternativas de abastecimento comparadas**

| Alternativa | Descrição do modelo | Papel na comparação |
| --- | --- | --- |
| **Situação atual** | Oito almoxarifados locais, um por unidade, mantendo estoques próprios (R$ 23,96 mi). | Linha de base da operação atual. |
| **Situação atual otimizada (sem CD)** | Mesma estrutura física atual, com rebalanceamento de estoques parados transferíveis e revisão dos limites máximos de reposição. | Referência de controle para não atribuir ao CD ganhos alcançáveis apenas por gestão interna. |
| **CD centralizado** | Um centro de distribuição atende as oito unidades nos seis grupos MRO; as unidades mantêm apenas reserva mínima de uso imediato. | Avalia o potencial máximo de consolidação de estoques e compras. |
| **Modelo híbrido** | O CD centraliza os grupos de consumo esporádico (*Rolamentos e vedação* e *Transmissão e mangueiras*) e parcela de baixo giro; os itens de consumo contínuo permanecem abastecidos localmente. | Combina redução de duplicidades na cauda longa com menor exigência de frete e estrutura. |

Para garantir rigor financeiro e evitar contagem duplicada de benefícios, três regras foram aplicadas em todos os cálculos:

- **Isolamento do ganho de gestão:** a redução obtida apenas com rebalanceamento interno e ajuste de excessos é atribuída à **Situação atual otimizada (sem CD)**. O ganho atribuído ao CD corresponde exclusivamente ao benefício adicional gerado pela consolidação.
- **Eliminação de sobreposição nos excessos:** o diagnóstico identificou R$ 3,18 milhões em estoque transferível (parado em uma unidade e consumido em outra) e R$ 1,92 milhão em estoque acima do máximo planejado. Como há R$ 0,17 milhão de sobreposição entre as duas parcelas, o potencial técnico combinado sem dupla contagem é de **R$ 4,93 milhões** (e não R$ 5,10 milhões).
- **Separação entre caixa único, economia recorrente e armazenagem:** o valor liberado pela redução do estoque entra uma única vez no caixa e nunca é somado à economia anual. Além disso, a economia recorrente de estoque considera apenas o **custo de oportunidade do capital** e a **redução de perdas, seguro e obsolescência**, excluindo custos físicos de armazenagem (espaço e equipe), que são tratados separadamente na seção 4.2.

---

### 4.1.2. Estoques repetidos e potencial de consolidação na base

Entre os 2.657 materiais com saldo positivo no recorte, **1.417 itens (53,3%) estão estocados simultaneamente em duas ou mais unidades**, concentrando **R$ 20,07 milhões (83,8% de todo o capital aplicado em estoque)**. Apenas 16,2% do valor (R$ 3,88 milhões) encontra-se em uma única unidade.

**Tabela 2 – Distribuição do estoque pela quantidade de unidades com saldo positivo**

| Presença do material na rede | Materiais | % dos itens com estoque | Estoque atual (R$ mi) | % do estoque total |
| --- | ---: | ---: | ---: | ---: |
| 1 unidade (exclusivo) | 1.240 | 46,7% | 3,88 | 16,2% |
| 2 unidades | 598 | 22,5% | 3,31 | 13,8% |
| 3 unidades | 293 | 11,0% | 2,06 | 8,6% |
| 4 a 5 unidades | 316 | 11,9% | 5,67 | 23,7% |
| 6 a 8 unidades | 210 | 7,9% | 9,03 | 37,7% |
| **Total com estoque** | **2.657** | **100,0%** | **23,96** | **100,0%** |

*Fonte: elaboração própria a partir da posição de estoque da Atvos (todos os depósitos).*

Para estimar quanto estoque de segurança pode ser reduzido exclusivamente pela centralização da demanda (*risk pooling*), comparou-se a soma dos estoques de segurança individuais de cada unidade com o estoque de segurança calculado sobre a **demanda mensal agregada das oito usinas** nos últimos 12 meses completos (nov/2025 a out/2026). Por usar a série real consolidada, o cálculo já incorpora a correlação de consumo entre as unidades.

**Tabela 3 – Duplicidade, potencial de otimização sem CD e consolidação de estoque de segurança por grupo**

| Grupo MRO | Estoque atual (R$ mi) | Estoque repetido em ≥2 unidades (R$ mi) | % repetido | Depósitos obsoletos / baixo giro (R$ mi) | Otimização sem CD sem sobreposição (R$ mi) | Estoque de segurança descentralizado (R$ mi) | Redução por consolidação da demanda (R$ mi) |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Pneus e acessórios | 5,21 | 4,79 | 92,0% | 0,35 | 0,73 | 3,25 | 1,08 |
| Filtros e elementos | 3,61 | 3,20 | 88,5% | 0,57 | 0,93 | 0,93 | 0,33 |
| Lubrificantes e fluidos | 5,64 | 4,48 | 79,3% | 0,28 | 0,75 | 2,79 | 0,68 |
| Rolamentos e vedação | 5,33 | 4,13 | 77,5% | 1,42 | 1,91 | 1,35 | 0,35 |
| Transmissão e mangueiras | 2,28 | 1,69 | 74,0% | 0,46 | 0,43 | 0,81 | 0,28 |
| Desgaste agrícola | 1,87 | 1,78 | 95,1% | 0,07 | 0,19 | 0,96 | 0,21 |
| **Total do recorte** | **23,96** | **20,07** | **83,8%** | **3,16** | **4,93** | **10,10** | **2,93** |

*Notas: a redução por consolidação da demanda está limitada ao saldo existente de cada item e equivale a uma queda média de 29,1% no estoque de segurança teórico (de R$ 10,10 mi para R$ 7,17 mi). Além disso, há R$ 1,52 mi em materiais sem consumo em nenhuma unidade nos últimos 12 meses (em grande parte já nos depósitos OBSO e SLOW), cujo aproveitamento depende de política de descarte ou venda e não é somado automaticamente ao capital liberado.*

Os dados mostram dois comportamentos claros:

- **Rolamentos e vedação** lideram o potencial de otimização sem CD (R$ 1,91 milhão) e concentram 45% de todo o material já classificado como obsoleto ou de baixo giro (R$ 1,42 milhão).
- A **consolidação estatística do estoque de segurança** soma **R$ 2,93 milhões** (R$ 0,63 milhão nos dois grupos esporádicos e R$ 2,30 milhões nos quatro grupos contínuos). Nos grupos contínuos, parte desse ganho permanece retida nas unidades para garantir atendimento imediato à frota e à indústria.

---

### 4.1.3. Valor liberado no caixa vs. economia recorrente mensal e anual

A Tabela 4 apresenta separadamente o **valor liberado uma única vez no caixa** e a **economia recorrente** (anual e mensal) em três cenários de realização:

- **Taxa de economia recorrente sobre o estoque reduzido** (excluindo armazenagem física): **15,0% ao ano** no cenário conservador (12,0% custo de capital + 3,0% risco e obsolescência), **17,5% ao ano** no esperado (13,5% + 4,0%) e **20,0% ao ano** no otimista (15,0% + 5,0%).
- **Aproveitamento da otimização sem CD:** 50% (conservador), 70% (esperado) e 85% (otimista) do teto de R$ 4,93 milhões.
- **Aproveitamento da consolidação no CD:** 60% / 80% / 95% do potencial estatístico, descontando uma reserva local de 25% / 20% / 15% para itens contínuos no CD centralizado e considerando migração de 0% / 20% / 35% dos itens de baixo giro dos grupos contínuos no modelo híbrido.

**Tabela 4 – Capital liberado (efeito único) e economia recorrente mensal e anual por alternativa**

| Alternativa | Caixa Cons. (R$ mi) | Caixa Esp. (R$ mi) | Caixa Otim. (R$ mi) | % estoque (Esp.) | Economia anual (R$ mi) | Economia mensal (R$ mil) | Faixa anual (R$ mi) |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| **Situação atual** | 0,00 | 0,00 | 0,00 | 0,0% | 0,00 | 0,0 | 0,00 – 0,00 |
| **Situação atual otimizada (sem CD)** | 2,47 | **3,45** | 4,19 | 14,4% | **0,60** | **50,3** | 0,37 – 0,84 |
| **CD centralizado** | 3,88 | **5,43** | 6,65 | 22,7% | **0,95** | **79,2** | 0,58 – 1,33 |
| **Modelo híbrido** | 2,84 | **4,32** | 5,56 | 18,1% | **0,76** | **63,1** | 0,43 – 1,11 |

*Notas: no cenário esperado, o estoque total cai de R$ 23,96 mi para R$ 20,50 mi na situação atual otimizada, R$ 18,52 mi no CD centralizado e R$ 19,63 mi no modelo híbrido. O capital liberado ocorre uma única vez durante a transição de saldos; a economia recorrente repete-se a cada mês e ano enquanto o estoque permanecer reduzido.*

**Efeito incremental exclusivo do CD:**

- No cenário esperado, **63,5% do capital liberado pelo CD centralizado** (R$ 3,45 mi de R$ 5,43 mi) e **79,8% do capital liberado pelo modelo híbrido** (R$ 3,45 mi de R$ 4,32 mi) já podem ser obtidos sem construir um CD, apenas com rebalanceamento e revisão de parâmetros.
- O ganho adicional trazido exclusivamente pelo CD, acima da situação atual otimizada, é de **+R$ 1,98 milhão** em caixa único (+R$ 0,35 milhão/ano recorrente) no CD centralizado e **+R$ 0,87 milhão** em caixa único (+R$ 0,15 milhão/ano recorrente) no modelo híbrido.
- Como referência interna, o piloto de estoque compartilhado do Polo Norte reportou redução estrutural próxima de 33% sobre um subconjunto de R$ 3,90 milhões, patamar alinhado ao teto do cenário otimista do CD centralizado (27,8% sobre toda a rede), mas que ainda depende de confirmação documental sobre o escopo exato do piloto.

---

## 4.2. Possíveis ganhos nas compras e mudanças nos custos de armazenagem e transporte

### 4.2.1. Possíveis ganhos nas compras

O consumo anual estimado do recorte na Safra 25/26 é de **R$ 72,35 milhões** (chegando a R$ 81,32 milhões nos 12 meses encerrados em out/2026). Para estimar possíveis ganhos de negociação sem superestimá-los, o volume de compras foi dividido pelo grau real de fragmentação de fornecedores observado na base:

**Tabela 5 – Volume anual de compras (Safra 25/26) e fragmentação de fornecedores por grupo**

| Grupo MRO | Perfil de fornecimento | Fornecedores únicos | Consumo Safra 25/26 (R$ mi) | Gasto em itens com ≥2 fornecedores (R$ mi) | % do gasto em itens multi-fornecedor |
| --- | --- | ---: | ---: | ---: | ---: |
| Filtros e elementos | Pulverizado | 43 | 8,70 | 6,43 | **73,9%** |
| Transmissão e mangueiras | Pulverizado | 47 | 5,74 | 3,61 | **62,9%** |
| Rolamentos e vedação | Pulverizado | 57 | 6,32 | 2,41 | **38,1%** |
| *Subtotal (grupos pulverizados)* | - | - | *20,76* | *12,45* | *60,0%* |
| Pneus e acessórios | Concentrado | 11 | 19,06 | 1,38 | 7,2% |
| Lubrificantes e fluidos | Concentrado | 26 | 24,29 | 0,60 | 2,5% |
| Desgaste agrícola | Concentrado | 32 | 8,24 | 0,07 | 0,9% |
| *Subtotal (grupos concentrados)* | - | - | *51,59* | *2,05* | *4,0%* |
| **Total do recorte** | - | **92** | **72,35** | **14,50** | **20,0%** |

*Fonte: elaboração própria a partir da base consolidada da Atvos (reconciliada com a planilha `Estimativa_Beneficios_Custos_Sprint2.xlsx`). Um mesmo fornecedor pode atender mais de um grupo, por isso o total de fornecedores distintos no recorte (92) é menor que a soma das linhas. Os valores de consumo são estimativas calculadas pelo custo unitário do estoque atual.*

A distribuição evidencia um ponto central: **71,3% do gasto anual (R$ 51,59 milhões)** já está concentrado em poucos fornecedores nacionais (lubrificantes, pneus e desgaste agrícola). Nesses grupos, o potencial de desconto adicional apenas por volume é reduzido, especialmente porque a área de compras da Atvos já atua de forma segregada do planejamento e ainda é necessário confirmar se os contratos já são negociados de forma corporativa. As maiores oportunidades de padronização e consolidação de pedidos concentram-se nos **R$ 20,76 milhões dos grupos pulverizados** (onde 60% do valor envolve o mesmo material comprado de múltiplos fornecedores) e na redução de compras emergenciais.

**Tabela 6 – Estimativa de potenciais ganhos anuais nas compras por alternativa**

| Alternativa | Conservador (R$ mi/ano) | Esperado (R$ mi/ano) | Otimista (R$ mi/ano) | Esperado (R$ mil/mês) | Premissa aplicada |
| --- | ---: | ---: | ---: | ---: | --- |
| **Situação atual** | 0,00 | 0,00 | 0,00 | 0,0 | Sem alteração nos contratos atuais. |
| **Situação atual otimizada (sem CD)** | 0,00 | 0,00 | 0,00 | 0,0 | Atua apenas na gestão interna de estoques. |
| **CD centralizado** | 0,21 | **0,78** | 1,60 | **64,8** | Grupos pulverizados: 1,0% / 2,5% / 4,0%; grupos concentrados: 0,0% / 0,5% / 1,5%. |
| **Modelo híbrido** | 0,15 | **0,62** | 1,44 | **51,8** | Captura 70% / 80% / 90% do ganho do CD centralizado (foco nos grupos pulverizados). |

*Nota: caso a Atvos confirme que as compras dos seis grupos já são integralmente centralizadas em contratos corporativos, o ganho incremental em preço unitário tende ao limite conservador (ou próximo de zero), restando sobretudo a redução de compras emergenciais.*

---

### 4.2.2. Mudanças nos custos de armazenagem

Como o custo operacional atual dos oito almoxarifados não consta nas bases recebidas, avalia-se a **variação incremental** de custos de armazenagem em relação à situação atual:

- **Nas oito unidades:** os seis grupos analisados representam apenas parte do portfólio total de MRO. Mesmo com um CD, as usinas mantêm almoxarifados locais para os demais materiais, recebimento e atendimento diário. Por prudência, assume-se **nenhuma redução de custos fixos nas unidades no curto prazo**, até que a estrutura atual de espaço e equipe seja informada pela Atvos.
- **No centro de distribuição:** surgem despesas recorrentes com **equipe dedicada** (referência salarial de mercado de R$ 2.139/mês acrescida de 60% a 80% de encargos) e **ocupação, utilidades e sistema de gestão** (faixa paramétrica de R$ 22 a R$ 35/m²/mês, pendente de cubagem dos itens e escolha da região).

**Tabela 7 – Variação anual estimada nos custos de armazenagem (sinal negativo indica custo adicional)**

| Alternativa | Porte estimado (Esp.) | Equipe do CD (R$ mi/ano) | Ocupação e sistemas (R$ mi/ano) | Variação anual (R$ mi) | Variação mensal (R$ mil) | Faixa anual (R$ mi) |
| --- | --- | ---: | ---: | ---: | ---: | --- |
| **Situação atual** | 8 almoxarifados locais | 0,00 | 0,00 | 0,00 | 0,0 | 0,00 – 0,00 |
| **Situação atual otimizada (sem CD)** | Mesma estrutura atual | 0,00 | 0,00 | 0,00 | 0,0 | 0,00 – 0,00 |
| **CD centralizado** | 10 pessoas · 1.500 m² | −0,44 | −0,50 | **−0,94** | **−78,4** | −1,31 a −0,65 |
| **Modelo híbrido** | 5 pessoas · 700 m² | −0,22 | −0,24 | **−0,45** | **−37,8** | −0,66 a −0,31 |

*Nota: estimativas preliminares de porte (8 a 12 pessoas e 1.200 a 1.800 m² no CD centralizado; 4 a 6 pessoas e 550 a 900 m² no modelo híbrido), sujeitas à revisão após o dimensionamento físico e a definição do custo imobiliário da região escolhida. Eventuais diferenças de R$ 0,01 mi nas somas decorrem de arredondamento.*

---

### 4.2.3. Mudanças nos custos de transporte

A centralização altera o transporte em dois sentidos opostos:

1. **Abastecimento (fornecedor → CD vs. fornecedor → oito unidades):** **86,1% do gasto anual com origem identificada vem de São Paulo (59,7%, R$ 35,06 milhões) e Minas Gerais (26,4%, R$ 15,51 milhões)**, enquanto fornecedores em GO, MS, MT e PR representam 13,9%. Consolidar entregas em um único destino pode aliviar fretes fracionados, mas o ganho efetivo depende de confirmar se o frete atual é pago pelo fornecedor (CIF) ou pela Atvos (FOB). Nos cenários, considera-se alívio conservador de 0,0% (conservador), 0,5% (esperado) e 1,0% (otimista) sobre o volume que passa pelo CD.
2. **Distribuição interna (CD → oito unidades):** introduz uma nova etapa rodoviária. Para testar a sensibilidade do modelo financeiro de seis grupos de forma independente da escolha final de cidade (e antes de obter os endereços exatos das usinas apontados na [seção 2](./Comparacao_Regioes_CD.md)), o frete foi modelado com base no **piso mínimo da ANTT para carga geral** (R$ 4,00 a R$ 9,25 por km rodado, mais R$ 436 a R$ 872 de carga e descarga por viagem, considerando ida e volta) em **três faixas paramétricas de distância média entre o CD e as unidades**: **150 km** (otimista), **300 km** (esperado, compatível com os 307 km do melhor ponto único na seção 2) e **450 km** (conservador). Como referência real de ordem de grandeza, a rota semanal do piloto do Polo Norte (atendendo três usinas próximas) já representa entre R$ 0,37 milhão e R$ 0,82 milhão/ano pelo mesmo piso.

**Tabela 8 – Variação anual estimada nos custos de transporte (sinal negativo indica custo adicional)**

| Alternativa | Frequência de entregas (Esp.) | Frete de distribuição (R$ mi/ano) | Alívio no abastecimento (R$ mi/ano) | Variação líquida anual (R$ mi) | Variação mensal (R$ mil) | Faixa anual (R$ mi) |
| --- | --- | ---: | ---: | ---: | ---: | --- |
| **Situação atual** | Entregas diretas + Polo Norte | 0,00 | 0,00 | 0,00 | 0,0 | 0,00 – 0,00 |
| **Situação atual otimizada (sem CD)** | Transferências pontuais | −0,10 | 0,00 | **−0,10** | **−8,3** | −0,15 a −0,06 |
| **CD centralizado** | 8 viagens/semana (1 por unidade) | −1,93 | +0,36 | **−1,57** | **−130,5** | −3,83 a +0,21 |
| **Modelo híbrido** | 3 viagens/semana (consolidadas) | −0,72 | +0,06 | **−0,66** | **−55,2** | −1,91 a −0,05 |

*Nota: o custo de distribuição usa o piso mínimo da ANTT como referência; o valor contratado no mercado tende a ser igual ou superior. Assim que as regiões candidatas forem escolhidas, as distâncias paramétricas devem ser substituídas pelas rotas rodoviárias reais.*

---

## 4.3. Efeitos nos prazos de atendimento, na disponibilidade e no risco de falta de materiais

As seções anteriores olharam para o dinheiro: quanto estoque pode ser reduzido e quanto cada alternativa custa ou economiza. Esta seção olha para o atendimento das usinas e tenta responder a uma pergunta simples: **em cada alternativa, a unidade recebe o material mais rápido ou mais devagar, e falta material com mais ou menos frequência?** Como esses efeitos não são valores em reais, eles ficam fora do saldo financeiro da Tabela 15, evitando contar o mesmo estoque duas vezes.

Para manter a comparação justa, usamos a mesma base e as mesmas regras do [diagnóstico de materiais MRO](../001_Diagnostico_Abastecimento/Diagnostico_MRO.md). Foram analisadas as **5.263 combinações de unidade e material** que tiveram consumo nos últimos 12 meses (nov/2025 a out/2026), e o risco de falta foi calculado do mesmo jeito do item 1. O ponto de partida bate com o que foi publicado na Sprint 1: **712 combinações com risco alto, 1.946 com risco médio e 2.605 com risco baixo**.

---

### 4.3.1. Prazos de atendimento

Quando falamos de prazo, existem dois tempos diferentes. O primeiro é o **prazo do fornecedor**, que é o tempo entre a Atvos fazer o pedido e o material chegar. O segundo é o **tempo de espera da unidade**, que é quanto a usina espera quando precisa de uma peça que não tem no próprio almoxarifado. A centralização mexe pouco no primeiro e bastante no segundo.

Começando pelo prazo do fornecedor, hoje o mesmo material pode demorar muito mais para chegar em uma unidade do que em outra. Dos 1.092 materiais com prazo registrado em pelo menos duas unidades, **292 têm o prazo mais longo pelo menos duas vezes maior que o mais curto**. Isso acontece porque cada unidade compra do seu jeito, e uma compra centralizada poderia deixar esses prazos mais parecidos. A Tabela 9 mostra o que aconteceria nesse caso.

**Tabela 9 – Prazo do fornecedor por grupo hoje e com prazos padronizados (dias)**

| Grupo MRO | Prazo médio hoje | Em 9 de cada 10 casos, até | Pedidos acima de 30 dias | Prazo médio se todas as unidades tivessem o prazo mediano | Prazo médio se todas tivessem o melhor prazo já praticado |
| --- | ---: | ---: | ---: | ---: | ---: |
| Pneus e acessórios | 29,1 | 35 | 15,7% | 28,8 | 15,2 |
| Filtros e elementos | 26,3 | 44 | 22,0% | 24,3 | 15,5 |
| Lubrificantes e fluidos | **40,9** | **65** | **66,8%** | 41,2 | 21,4 |
| Rolamentos e vedação | 32,7 | 42 | 22,9% | 31,8 | 26,1 |
| Transmissão e mangueiras | 26,1 | 37 | 16,5% | 24,6 | 19,6 |
| Desgaste agrícola | 25,9 | 41 | 20,6% | 24,4 | 14,9 |
| **Total do recorte** | **32,4** | **43** | **24,1%** | **31,8** | **18,5** |

*Nota: o prazo médio é ponderado pelo valor consumido nos últimos 12 meses. Os valores diferem um pouco do item 1, que considera só as combinações com prazo informado pela Atvos. O "melhor prazo já praticado" é o menor prazo registrado para aquele material em qualquer unidade.*

A tabela mostra que apenas igualar os prazos pela mediana quase não muda nada: a média passa de 32,4 para **31,8 dias**. A diferença só aparece se a compra centralizada conseguir, para cada material, o prazo mais curto que a Atvos já teve em alguma unidade, e aí a média cairia para **18,5 dias**. Esse resultado é otimista, porque muitos desses prazos curtos vêm de fornecedores regionais que ficam perto de uma usina específica ([item 2](../001_Diagnostico_Abastecimento/Mapeamento_Fornecedores.md)) e talvez não atendam um CD em outra região. Por isso, nos cenários consideramos uma redução de **0 dia no conservador, 0,6 dia no esperado e 13,9 dias no otimista**. Os lubrificantes chamam atenção: têm o prazo mais longo e dois terços dos pedidos passam de 30 dias, e isso não melhora com a centralização porque quase tudo vem de um único fornecedor, a Petronas.

O tempo de espera da unidade é onde a centralização faz mais diferença. Hoje, **1.165 combinações (22% das que tiveram consumo) têm estoque menor do que o necessário para aguentar até a próxima entrega do fornecedor**, e elas somam R$ 22,6 milhões do consumo do último ano. Quando o material acaba nesses casos, a usina espera o fornecedor: cerca de **25 dias** na metade dos casos e até **50 dias** em 9 de cada 10. O dado mais interessante é que, em **815 dessas combinações (70%)**, o mesmo material está guardado em outra unidade. Ou seja, muitas vezes a peça existe dentro da Atvos, só está no lugar errado. A Tabela 10 compara quanto tempo a unidade esperaria em cada alternativa.

**Tabela 10 – Tempo de espera da unidade quando falta um material no estoque local**

| Alternativa | Como a unidade é atendida | Conservador | Esperado | Otimista | Quais itens são atendidos assim |
| --- | --- | ---: | ---: | ---: | --- |
| **Situação atual** | Compra direta no fornecedor; no Polo Norte, entregas da UMV de 1 a 2 vezes por semana | 50 dias | 25 dias | 25 dias | Todos |
| **Situação atual otimizada (sem CD)** | Transferência de estoque parado em outra unidade | 5 dias | 3 dias | 2 dias | Só os que têm estoque parado em outra unidade |
| **CD centralizado** | Entrega do CD, uma vez por semana em cada unidade | 8 dias | 5 dias | 2 dias | Todos os que ficam no CD |
| **Modelo híbrido** | Entrega do CD para os grupos esporádicos e compra direta para os demais | 8 dias | 5 dias | 2 dias | Rolamentos e vedação; transmissão e mangueiras |

*Nota: os 5 dias do cenário esperado do CD somam a espera média pela entrega semanal (3,5 dias), 1 dia para separar e despachar o material e cerca de 6 horas de estrada para 300 km. O conservador usa a espera máxima de uma semana e 450 km; o otimista considera duas entregas por semana ou um envio de urgência e 150 km. Uma viagem de urgência de 300 km custaria entre R$ 2,8 mil e R$ 6,4 mil pelo piso da ANTT, então deve ser exceção. Os prazos de transferência entre unidades são suposições e precisam ser confirmados com a Atvos.*

A centralização, porém, tem um custo que não aparece em reais. Ela encurta a espera dos itens que estão faltando, mas também faz a unidade esperar alguns dias por itens que hoje estão na prateleira, prontos para uso. Nos grupos de consumo esporádico, **1.845 das 2.899 combinações com consumo já têm estoque suficiente na própria unidade**, e **322 delas são usadas em 7 meses ou mais por ano**. Esses itens deveriam continuar na usina mesmo no modelo híbrido. Nos grupos de consumo contínuo, outras **617 combinações** bem abastecidas e de uso frequente passariam a depender do CD no modelo centralizado, e é por isso que a seção 4.1.3 já considera uma reserva local de 15% a 25% para esses itens.

---

### 4.3.2. Disponibilidade e risco de falta

Para medir o efeito no risco de falta, simulamos cada alternativa usando o estoque que a Atvos tem hoje. Na **situação atual otimizada**, o estoque parado em uma unidade foi enviado para as unidades que estão com falta do mesmo material, começando pelas de maior risco. No **CD centralizado**, cada material passou a ser tratado como um estoque único, somando todas as unidades, e comparado com a demanda das oito usinas juntas durante o prazo do fornecedor mais o tempo de entrega do CD. No **modelo híbrido**, isso foi feito só para os dois grupos esporádicos, e os demais seguiram como na situação atual otimizada. Os cenários mudam o tempo de entrega do CD até a unidade: 8 dias no conservador, 5 no esperado e 2 no otimista.

**Tabela 11 – Risco de falta por alternativa (Cenário Esperado)**

| Indicador | Situação atual | Atual otimizada (sem CD) | CD centralizado | Modelo híbrido |
| --- | ---: | ---: | ---: | ---: |
| Combinações com **risco alto** | **712** | **637** | **366** | **486** |
| Variação frente à situação atual | – | −10,5% | −48,6% | −31,7% |
| Risco alto do conservador ao otimista | 712 | 637 | 406 a 293 | 502 a 461 |
| Combinações com risco médio | 1.946 | 1.721 | 1.656 | 1.654 |
| Combinações com risco baixo | 2.605 | 2.905 | 3.241 | 3.123 |
| Estoque menor que o necessário até a próxima entrega | 1.165 | 882 | 446 | 640 |
| Materiais com risco alto em pelo menos uma unidade | 467 | 409 | 198 | 302 |
| Itens usados com frequência e sem nenhum estoque | 111 | 93 | 35 | 72 |
| Itens usados quase todo mês (10 a 12 meses) com risco alto | 345 | 323 | 199 | 258 |

*Nota: todas as colunas consideram as mesmas 5.263 combinações com consumo. "Usados com frequência" são os itens consumidos em 6 ou mais dos últimos 12 meses, como no item 4 da Sprint 1.*

O rebalanceamento sem CD ajuda pouco no atendimento. Ele libera bastante capital, como visto na seção 4.1, mas reduz o risco alto em só **10,5%**, porque apenas **R$ 0,43 milhão** dos R$ 3,18 milhões de estoque parado é de materiais que estão faltando em outra usina. Se as transferências ficarem limitadas às quatro unidades do mesmo CNPJ, a queda é ainda menor, de 712 para 689 combinações.

O modelo híbrido, por outro lado, resolve quase todo o problema nos grupos onde atua. A Tabela 12 mostra que, em rolamentos e transmissão, o risco alto cai de **291 para 107 combinações (−63%)**, exatamente o mesmo resultado do CD centralizado. Isso confirma o que o item 1 já indicava: nesses grupos o problema não é falta de estoque, e sim estoque no lugar errado. O ganho a mais do CD centralizado aparece nos grupos de consumo contínuo, principalmente em filtros (de 157 para 72), mas são justamente os itens que a usina deixaria de ter na prateleira.

**Tabela 12 – Combinações com risco alto por grupo (Cenário Esperado)**

| Grupo MRO | Situação atual | Atual otimizada (sem CD) | CD centralizado | Modelo híbrido |
| --- | ---: | ---: | ---: | ---: |
| Pneus e acessórios | 67 | 62 | 44 | 62 |
| Filtros e elementos | 179 | 157 | **72** | 157 |
| Lubrificantes e fluidos | 119 | 106 | 100 | 106 |
| Rolamentos e vedação | 204 | 174 | **73** | **73** |
| Transmissão e mangueiras | 87 | 84 | **34** | **34** |
| Desgaste agrícola | 56 | 54 | 43 | 54 |
| **Total** | **712** | **637** | **366** | **486** |

Os lubrificantes são um caso à parte. O risco quase não muda em nenhuma alternativa (de 119 para 100 no melhor caso), porque em **47 dos 187 lubrificantes com consumo, o estoque de todas as unidades somadas já não aguenta até a próxima entrega**. Não adianta redistribuir o que não existe: a solução passa por contrato com a Petronas e pela revisão dos estoques mínimos, como o item 1 já sugeria.

Olhando por unidade (Tabela 13), todas melhoram, mas a **UMV, hub do Polo Norte, é a que mais ganha com o CD** (de 110 para 43 combinações). Isso reforça a suspeita levantada no item 1 de que hoje ela abastece as outras usinas antes de si mesma.

**Tabela 13 – Combinações com risco alto por unidade (Cenário Esperado)**

| Unidade | Situação atual | Atual otimizada (sem CD) | CD centralizado | Modelo híbrido |
| --- | ---: | ---: | ---: | ---: |
| Morro Vermelho (UMV), hub do Polo Norte | 110 | 98 | 43 | 79 |
| Rio Claro (URC) | 108 | 96 | 61 | 71 |
| Eldorado (UEL) | 98 | 85 | 48 | 61 |
| Santa Luzia (USL) | 95 | 87 | 55 | 60 |
| Conquista do Pontal (UCP) | 87 | 83 | 49 | 66 |
| Costa Rica (UCR) | 86 | 73 | 51 | 57 |
| Alto Taquari (UAT) | 71 | 63 | 34 | 49 |
| Água Emendada (UAE) | 57 | 52 | 25 | 43 |
| **Total** | **712** | **637** | **366** | **486** |

Mesmo no CD centralizado, ainda sobram **622 materiais com estoque total abaixo do ideal**. Para corrigir isso, a Atvos precisaria comprar cerca de **R$ 3,16 milhões**, contra **R$ 5,75 milhões** se cada unidade tivesse que resolver a falta sozinha (R$ 5,32 milhões depois do rebalanceamento). Juntar o estoque, então, diminui o quanto é preciso investir para acabar com as faltas. Esse valor não é dinheiro que entra no caixa e não deve ser somado à Tabela 4, porque vem do mesmo efeito de juntar os estoques de segurança já calculado na seção 4.1.2.

Existe ainda uma escolha a fazer entre capital e disponibilidade. Se o CD mantiver o mesmo estoque de segurança que as unidades têm hoje (R$ 10,10 milhões), o nível de serviço subiria de 95% para cerca de **98%**. A seção 4.1 seguiu o outro caminho, de manter os 95% e liberar capital. **As duas coisas não acontecem ao mesmo tempo com o mesmo estoque**: se a Atvos preferir mais disponibilidade, o capital liberado da Tabela 4 fica menor.

> **Ponto de atenção para a seção 4.1.2:** quando o tempo de entrega do CD até a unidade entra na simulação da seção 4.3, o estoque de segurança consolidado sobe de R$ 7,23 milhões (frente aos R$ 7,17 milhões da Tabela 3) para R$ 7,82 milhões no cenário esperado (R$ 8,16 milhões no conservador e R$ 7,42 milhões no otimista). Com isso, a redução de R$ 2,93 milhões da Tabela 3 pode estar cerca de R$ 0,6 milhão acima do real no cenário esperado, e vale revisar esse valor.

---

### 4.3.3. Novos riscos criados pela centralização

Juntar o estoque reduz as faltas, mas cria riscos que a Atvos não tem hoje. O mais importante é depender de um único lugar: se o CD parar por qualquer motivo, as oito usinas sentem ao mesmo tempo. Também entram nessa conta o transporte em época de chuva, o volume de trabalho do próprio CD e as regras fiscais para mover material entre CNPJs. A Tabela 14 resume esses riscos e como cada um poderia ser reduzido.

**Tabela 14 – Riscos criados por alternativa e como reduzi-los**

| Risco | Atual otimizada | CD centralizado | Modelo híbrido | Por que preocupa | Como reduzir |
| --- | :---: | :---: | :---: | --- | --- |
| **Depender de um único CD** | – | **Alto** | Médio | No CD centralizado passam R$ 81,3 mi de consumo por ano; no híbrido, R$ 13,0 mi | Manter reserva dos itens vitais nas unidades e ter um plano de compra direta para emergências |
| **Perder o atendimento imediato** | – | **Alto** | Baixo | 939 combinações de uso frequente estão bem abastecidas hoje na própria unidade | Classificar a criticidade dos itens com a Manutenção e manter os vitais na usina |
| **Transporte em época de chuva** | Baixo | Alto | **Alto** | Rolamentos têm pico em janeiro e fevereiro, na entressafra chuvosa e nas reformas industriais | Enviar os kits de reforma para as unidades antes de dezembro |
| **Sobrecarga no CD** | – | Alto | Médio | Grupos agrícolas têm pico em julho e agosto; rolamentos, em janeiro e fevereiro | Dimensionar equipe e espaço pelo mês mais cheio, não pela média |
| **Demora fiscal nas transferências** | **Alto** | Médio | Médio | Transferir entre CNPJs diferentes conta como venda; sem isso, o risco alto só cai para 689 | Validar as regras com a área fiscal antes de definir rotas |
| **Fornecedor único** | Alto | Alto | Alto | Petronas tem 93% dos lubrificantes e Bússola, 78% do desgaste agrícola | Contrato com prazo garantido e busca de um segundo fornecedor |
| **Dados incompletos** | Médio | Médio | Médio | Prazo informado em só 35% das combinações e sem os pedidos em aberto | Pedir à Atvos os pedidos em aberto e o histórico de faltas |

*Nota: a classificação é uma avaliação da equipe com base nos dados indicados. O traço indica que o risco não se aplica à alternativa.*

---

## 4.4. Síntese preliminar dos efeitos financeiros e operacionais

A Tabela 15 reúne os resultados do cenário **Esperado**, mantendo estritamente separados o **efeito único no caixa (capital liberado)** e o **saldo recorrente anual e mensal**:

**Tabela 15 – Consolidação preliminar por alternativa (Cenário Esperado)**

| Alternativa | Caixa único (R$ mi) | Estoque (R$ mi/ano) | Compras (R$ mi/ano) | Armazenagem (R$ mi/ano) | Transporte (R$ mi/ano) | Saldo anual (R$ mi) | Saldo mensal (R$ mil) | Faixa anual (R$ mi) |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| **Situação atual** | 0,00 | 0,00 | 0,00 | 0,00 | 0,00 | **0,00** | **0,0** | 0,00 – 0,00 |
| **Situação atual otimizada (sem CD)** | **3,45** | +0,60 | 0,00 | 0,00 | −0,10 | **+0,50** | **+42,0** | +0,22 a +0,78 |
| **CD centralizado** | **5,43** | +0,95 | +0,78 | −0,94 | −1,57 | **−0,78** | **−64,9** | −4,35 a +2,50 |
| **Modelo híbrido** | **4,32** | +0,76 | +0,62 | −0,45 | −0,66 | **+0,26** | **+21,9** | −2,00 a +2,20 |

*Ressalva importante: esta consolidação é preliminar e **não inclui** o investimento inicial de implantação do CD, o impacto tributário das transferências entre unidades de CNPJs diferentes nem o valor econômico de paradas de máquina evitadas por maior disponibilidade de peças. Eventuais diferenças de R$ 0,01 mi nas somas decorrem de arredondamento.*

Os efeitos no atendimento, calculados na seção 4.3, aparecem separados na Tabela 16. Eles não foram convertidos em reais para não serem somados ao saldo acima.

**Tabela 16 – Efeitos operacionais por alternativa (Cenário Esperado)**

| Alternativa | Espera quando falta o item na unidade | Combinações com risco alto | Itens usados com frequência e sem estoque | Principal risco novo |
| --- | --- | ---: | ---: | --- |
| **Situação atual** | 25 dias (até 50 dias em 9 de cada 10 casos) | 712 | 111 | – |
| **Situação atual otimizada (sem CD)** | 3 dias, só onde há estoque parado em outra unidade | 637 (−10,5%) | 93 | Atraso fiscal nas transferências entre CNPJs |
| **CD centralizado** | 5 dias (2 a 8 dias) | 366 (−48,6%) | 35 | Depender de um único CD e perder o atendimento imediato nas unidades |
| **Modelo híbrido** | 5 dias nos grupos esporádicos; demais itens como hoje | 486 (−31,7%) | 72 | Transporte em época de chuva, no pico de rolamentos (jan–fev) |

**Principais pontos de atenção para a decisão:**

1. **A maior parte da redução de estoque independe de um CD:** rebalancear estoques transferíveis e ajustar excessos acima do máximo libera cerca de R$ 3,45 milhões no cenário esperado (com ganho recorrente líquido de +R$ 0,50 milhão/ano) sem exigir novo imóvel, equipe adicional ou rotas frequentes.
2. **O frete de distribuição é o principal fator de sensibilidade:** no CD centralizado, a variação de distância média e de tarifa desloca o saldo recorrente de **−R$ 4,35 milhões/ano** (450 km, tarifa alta) para **+R$ 2,50 milhões/ano** (150 km, tarifa baixa e ganhos plenos em compras). A localização do CD será decisiva.
3. **O modelo híbrido reduz significativamente a exposição a custos fixos e frete:** ao manter os itens de alto giro e volume abastecidos localmente e centralizar a cauda longa, o modelo híbrido reduz em cerca de metade o custo adicional de armazenagem e transporte frente ao CD centralizado, preservando 80% do capital liberado.
4. **Fatores pendentes antes da recomendação final:** a escolha definitiva entre manter a rede otimizada, adotar um modelo híbrido (como o caso C5 da [seção 2](./Comparacao_Regioes_CD.md)) ou centralizar integralmente depende de quatro validações com a Atvos: **(a)** coordenadas reais das usinas e tarifas contratadas de frete; **(b)** orçamentos reais para substituir as hipóteses de investimento e funcionamento da [seção 3](./Investimento_Custos.md); **(c)** validação formal da área fiscal sobre os pontos F1 a F9 da [seção 3.3](./Investimento_Custos.md#33-impostos-que-podem-afetar-os-custos-das-alternativas); e **(d)** confirmação sobre o grau atual de centralização das compras e condições de frete (CIF/FOB).
5. **No atendimento, o modelo híbrido ganha onde mais importa:** nos grupos esporádicos, ele reduz o risco alto tanto quanto o CD centralizado (−63%) e troca uma espera de cerca de 25 dias pelo fornecedor por uns 5 dias. O ganho a mais do CD centralizado vem dos grupos contínuos, mas aí a usina perde os itens que hoje tem na prateleira. Já os lubrificantes precisam de contrato e de revisão dos estoques mínimos em qualquer alternativa, porque falta material na rede inteira.

---

## 4.5. Metodologia e limitações

**Tabela 17 – Regras de cálculo aplicadas**

| Indicador | Regra de cálculo |
| --- | --- |
| **Estoque repetido** | Soma do valor em estoque (todos os depósitos) dos materiais com saldo positivo em duas ou mais unidades. |
| **Otimização sem CD (sem sobreposição)** | Para cada combinação de unidade e material: `máx(Estoque transferível; Excesso acima do máximo planejado)`, eliminando R$ 0,17 milhão de interseção. |
| **Redução por consolidação da demanda** | `Soma dos estoques de segurança individuais − Estoque de segurança da demanda agregada`, calculados por `1,65 × desvio-padrão mensal (12 meses) × √(prazo de entrega ÷ 30,4)`, limitado ao saldo atual de cada item. |
| **Economia recorrente de estoque** | `Capital liberado × (Custo de oportunidade do capital + Taxa de risco e obsolescência)`, sem incluir armazenagem física. |
| **Frete de distribuição paramétrico** | `Viagens por semana × 52 × (2 × Distância de ida × Tarifa por km + Carga e descarga)`. |
| **Tempo de espera da unidade (CD)** | `Espera pela entrega semanal + 1 dia para separar e despachar + tempo de estrada (distância ÷ 55 km/h)`: 8, 5 e 2 dias nos cenários conservador, esperado e otimista. |
| **Risco de falta** | Igual ao item 1 da Sprint 1: `Probabilidade (1 a 3) × Impacto (1 a 3)`, com risco alto a partir de 6. A probabilidade é 3 quando o estoque não aguenta até a próxima entrega e 2 quando está abaixo do ponto de pedido; o impacto vem da frequência de uso nos últimos 12 meses. |
| **Risco com estoque compartilhado** | Mesmo cálculo, comparando o `Estoque somado das unidades` com a `Demanda somada × (Prazo do fornecedor + Tempo de entrega do CD) ÷ 30,4`; o estoque de segurança usa o consumo mensal das oito unidades juntas. |
| **Rebalanceamento sem CD** | O estoque parado de um material é enviado às unidades que estão com falta desse mesmo material, começando pelas de maior risco. |
| **Nível de serviço com o mesmo estoque** | `z = 1,65 × Estoque de segurança atual ÷ Estoque de segurança consolidado`, convertido em nível de serviço pela distribuição normal. |

**Principais limitações e pontos a confirmar com a Atvos:**

- **Localização e rotas:** enquanto as coordenadas exatas das usinas e tarifas contratadas não são confirmadas com a Atvos (pendências da [seção 2](./Comparacao_Regioes_CD.md)), as faixas de 150, 300 e 450 km funcionam como referência paramétrica a ser substituída pelas rotas rodoviárias reais na Sprint 3.
- **Custos internos de operação:** os custos atuais de armazenagem, equipe de almoxarifado e frota/frete das oito unidades não constam nas bases recebidas e precisam ser confirmados para calibrar o modelo.
- **Condições comerciais e compras emergenciais:** os ganhos em compras e no frete de abastecimento dependem de confirmar se os contratos atuais já são corporativos, se o frete é CIF ou FOB e qual é o volume real de compras emergenciais.
- **Impacto tributário:** transferências entre as quatro unidades de CNPJ próprio e o bloco do Polo Norte podem gerar incidência de impostos não contemplada nesta etapa.
- **Valorização do consumo:** os valores de consumo utilizam o custo unitário médio do estoque atual; 544 materiais sem saldo em estoque permanecem sem preço de referência.
- **Risco sem pedidos em aberto e sem criticidade:** como a base não mostra os pedidos já feitos, o risco pode parecer maior do que é para itens que já estão a caminho. Por outro lado, pode parecer menor para itens raros, mas críticos, como já foi apontado no item 1 da Sprint 1.
- **Tempos de entrega são suposições:** a frequência de entregas do CD, o tempo de separação e o prazo das transferências entre unidades precisam ser confirmados com a Atvos e com a região escolhida para o CD.
- **Foto de um único momento:** o risco de cada alternativa foi calculado com o estoque de hoje, sem simular a operação mês a mês nem as mudanças entre safra e entressafra.

---

## 4.6. Referências

AGROTECH INTELI; ATVOS. **Termo de abertura do projeto e documento de entregáveis**. São Paulo, 2026. Documento interno.

ATVOS. **Base de planejamento de materiais**: histórico de consumo e posição de estoque atual. [*S. l.*]: Atvos, 2026. Documento interno de circulação restrita, recebido em 9 nov. 2026.

ATVOS. **Base consolidada de planejamento de materiais**: consumo mensal, fornecedores e prazos de entrega. [*S. l.*]: Atvos, 2026. Documento interno de circulação restrita, recebido em 11 nov. 2026.

ATVOS. **Estoque compartilhado**: projeto Polo Norte. [*S. l.*]: Atvos, 2026. Apresentação interna (8 slides), recebida em 9 nov. 2026.

ATVOS. **Reunião de alinhamento do projeto**. [*S. l.*], nov. 2026. Registro interno da equipe.

BRASIL. Agência Nacional de Transportes Terrestres (ANTT). **Pisos mínimos de frete rodoviário de cargas** (carga geral). Brasília, 2026.

SIMCHI-LEVI, D.; KAMINSKY, P.; SIMCHI-LEVI, E. **Cadeia de suprimentos**: projeto e gestão. 3. ed. Porto Alegre: Bookman, 2010.
