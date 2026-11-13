---
sidebar_position: 4
sidebar_label: 4. Organização dos dados e alternativas
slug: /sprint-1/organizacao-dados-alternativas
description: "Organização dos dados e alternativas do estudo: planilha de dados com fontes e datas, alternativas a comparar e lista de dados e suposições para estimar investimento, custos de funcionamento e benefícios."
---
# 4. Organização dos dados e alternativas do estudo

Este entregável reúne os dados da Sprint 1 em uma única planilha, define as alternativas de abastecimento que serão comparadas e lista os dados e as suposições necessários para estimar investimento, custos de funcionamento e benefícios na Sprint 2.

Os valores em reais são estimativas, salvo indicação em contrário: quantidade consumida multiplicada pelo custo unitário do estoque atual de cada material. Nenhuma alternativa foi calculada nesta sprint; a comparação apresenta a situação atual com números e, para as demais alternativas, a direção esperada de cada efeito.

## 4.1. Planilha de dados com fontes e datas

A planilha `Organizacao_Dados_Alternativas.xlsx` organiza os dados de unidades, materiais, consumo, estoques, fornecedores e custos. O arquivo contém dados internos da Atvos e é compartilhado pelos canais do projeto; esta página apresenta apenas resultados agregados.

**Recorte adotado.** A planilha usa os 3.201 códigos classificados pela Atvos nos seis grupos da aba `Base_Consumo`, nas oito unidades, mesmo recorte dos itens 1 e 3. O [item 2](./Mapeamento_Fornecedores.md) usa um recorte diferente, obtido pela reclassificação das descrições. O recorte é provisório: a lista oficial de códigos e grupos precisa ser confirmada com a Atvos na Sprint 2. A aba `Escopo_Reconciliacao` mostra os dois recortes lado a lado.

**Período.** Consumo de janeiro de 2024 a outubro de 2026 (34 meses). Os indicadores recentes usam os últimos 12 meses completos, de novembro de 2025 a outubro de 2026.

**Construção.** Os dados das bases da Atvos entram como valores, sem alteração. Todo o restante é calculado por fórmula, a partir desses dados e de uma aba de premissas com valores editáveis, de modo que a planilha recalcula quando uma premissa ou uma base é atualizada.

**Tabela 1 – Estrutura da planilha**


| Aba | Tipo | Conteúdo |
| -------------------------------------- | -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Leiame` | Texto | Objetivo, recorte, período, legenda de cores e instruções de atualização. |
| `Fontes` | Texto | Fontes utilizadas, origem, data de recebimento e uso na planilha. |
| `Premissas` | Valores editáveis | Limites da curva ABC, fator rodoviário, taxa de custo de manter estoque, piso de frete, salário e encargos, com a fonte de cada valor. |
| `Escopo_Reconciliacao` | Fórmulas e texto | Comparação entre o recorte desta planilha e os valores publicados nos itens 1 e 2. |
| `Unidades` | Fórmulas | Unidade, município, grupo de CNPJ a confirmar, papel no piloto do Polo Norte, totais por unidade e distâncias estimadas entre unidades e até os polos de fornecedores. |
| `Materiais` | Fórmulas | Uma linha por código: estoque, preço de referência, consumo e classe ABC. |
| `Centro_Material` | Fórmulas | Uma linha por combinação de centro e material: consumo por período, estoque, cobertura, estoque sem consumo, estoque transferível, lead time, fornecedor e parâmetros de reposição. |
| `Fornecedores` | Fórmulas | Uma linha por fornecedor: unidades atendidas, consumo estimado por grupo e lead time médio. |
| `Indicadores` | Fórmulas | Situação atual por grupo de material e por unidade. |
| `Custos_Atuais` | Fórmulas | Estimativas de custo para cenários, com a situação de cada valor (estimado ou pendente). |
| `Alternativas` | Fórmulas e texto | Definição das alternativas e matriz de comparação. |
| `Dados_Suposicoes` | Texto | Dados e suposições iniciais para investimento, custos de funcionamento e benefícios. |
| `Solicitacoes` | Texto | Dados a pedir à Atvos na Sprint 2. |
| `Conferencia` | Fórmulas | Controles que comparam os totais calculados com os dados brutos e com o item 1. |
| `D_Base`, `D_Estoque`, `D_Materiais` | Dados brutos | Dados das bases da Atvos, limitados ao recorte. |

**Tabela 2 – Fontes e datas**


| Fonte | Origem | Uso |
| --------------------------------------------------------- | ------------------- | ---------------------------------------------------------------------------------------- |
| `Base_Planejamento_Materiais`, aba `Base_Consumo` | Atvos | Recorte de códigos e grupos; status, tipo de planejamento, mínimo e máximo. |
| `Base_Planejamento_Materiais`, aba `Base_Estoque_Atual` | Atvos | Estoque por material, centro e depósito. |
| `Planejamento_Materiais`, aba `Consolidado` | Atvos | Consumo mensal, fornecedor, localização e lead time; nome e município das unidades. |
| Apresentação Estoque Compartilhado | Atvos | Distâncias e rota do piloto do Polo Norte; valor das mercadorias movimentadas. |
| Reunião de alinhamento com a Atvos | Atvos | Grupos de CNPJ e orientações sobre itens a manter nas unidades. |
| Itens 1, 2 e 3 da Sprint 1 | Equipe do projeto | Regras de análise, pendências e referências de custo. |

**Conferência.** Todas as fórmulas foram recalculadas de forma independente antes da entrega, sem erros. Os totais da planilha coincidem com os dados brutos e com os valores publicados no [item 1](./Diagnostico_MRO.md), conforme a Tabela 3.

**Tabela 3 – Conferência com o item 1**


| Indicador | Planilha | Item 1 |
| ------------------------------------------- | --------------------------: | -----------------: |
| Materiais | 3.201 | 3.201 |
| Combinações de centro e material | 8.224 | 8.224 |
| Estoque do recorte | R$ 23,96 mi | R$ 23,96 mi |
| Consumo de jan/2024 a out/2026 | R$ 204,0 mi | R$ 204,0 mi |
| Consumo da safra 25/26 | R$ 72,4 mi | R$ 72,4 mi |
| Estoque em centro sem consumo em 12 meses | R$ 4,70 mi | R$ 4,70 mi |
| Estoque transferível | R$ 3,18 mi | R$ 3,18 mi |
| Itens de classe A, B e C | 119, 358 e 1.651 | 119, 358 e 1.651 |

**Tabela 4 – Situação atual por grupo de material**

| Grupo | Materiais | Consumo safra 25/26 (R$ mi) | Estoque (R$ mi) | Cobertura (meses) | Estoque sem consumo em 12 meses (R$ mi) | Estoque transferível (R$ mi) | Lead time médio (dias) | Consumo recorrente sem estoque |
| --------------------------- | ----------: | ----------------------------------------------: | ------------------: | ------------------------------------------------------------------------: | ------------------------: | -------------------------------: | ---------: | --------: |
| Pneus e acessórios | 220 | 19,1 | 5,21 | 2,8 | 0,50 | 0,40 | 24,6 | 10 |
| Filtros e elementos | 596 | 8,7 | 3,61 | 4,7 | 0,79 | 0,56 | 27,8 | 32 |
| Lubrificantes e fluidos | 242 | 24,3 | 5,64 | 2,5 | 0,71 | 0,56 | 40,4 | 22 |
| Rolamentos e vedação | 1.417 | 6,3 | 5,33 | 9,9 | 2,08 | 1,31 | 29,9 | 25 |
| Transmissão e mangueiras | 617 | 5,7 | 2,28 | 4,2 | 0,50 | 0,27 | 27,2 | 13 |
| Desgaste agrícola | 109 | 8,2 | 1,87 | 2,4 | 0,12 | 0,08 | 28,3 | 9 |
| **Total** | **3.201** | **72,4** | **23,96** | **3,5** | **4,70** | **3,18** | **29,1** | **111** |

*Notas: o lead time é a média simples das combinações com prazo informado (35% do total); os itens 1 e 2 usam a mediana, por isso os valores diferem. "Consumo recorrente sem estoque" conta as combinações com consumo em seis ou mais dos últimos 12 meses e saldo zero. O estoque sem consumo e o estoque transferível se sobrepõem e não devem ser somados.*

**Tabela 5 – Situação atual por unidade**


| Unidade | Grupo de CNPJ (a confirmar) | Consumo 12 meses (R$ mi) | Estoque (R$ mi) | Cobertura (meses) | Estoque sem consumo em 12 meses (R$ mi) |
| --------------------------- | ----------------------------- | -------------------------------------------: | ------------------: | ----------------------------------------: | -----: |
| Conquista do Pontal (UCP) | Próprio | 12,0 | 3,26 | 3,3 | 0,60 |
| Santa Luzia (USL) | Próprio | 15,6 | 4,14 | 3,2 | 0,94 |
| Eldorado (UEL) | Próprio | 10,4 | 3,90 | 4,5 | 0,72 |
| Rio Claro (URC) | Próprio | 12,0 | 3,05 | 3,0 | 0,54 |
| Água Emendada (UAE) | Compartilhado (Polo Norte) | 4,6 | 1,81 | 4,8 | 0,46 |
| Morro Vermelho (UMV) | Compartilhado (Polo Norte) | 9,5 | 2,81 | 3,6 | 0,50 |
| Costa Rica (UCR) | Compartilhado (Polo Norte) | 10,3 | 2,87 | 3,3 | 0,54 |
| Alto Taquari (UAT) | Compartilhado (Polo Norte) | 7,0 | 2,11 | 3,6 | 0,40 |

*Nota: o grupo de CNPJ segue o que foi informado pela Atvos em reunião (quatro unidades no mesmo CNPJ e quatro com CNPJ próprio) e ainda não foi confirmado por documento.*

**Custos atuais.** As fontes da Atvos não trazem o custo de armazenagem, transporte e equipe. A planilha calcula apenas cenários a partir das referências levantadas no [item 3](./Diagnostico_Atual_MRO.md): o custo de manter o estoque do recorte ficaria entre R$ 4,8 milhões e R$ 7,2 milhões por ano (20% a 30% do estoque), e a rota semanal do piloto do Polo Norte custaria entre R$ 0,37 milhão e R$ 0,82 milhão por ano pelo piso da ANTT. O custo de equipe depende do número de pessoas, não informado. Esses valores são cenários, não custos reais da Atvos.

## 4.2. Alternativas a comparar

O documento de entregáveis define três alternativas: situação atual, CD centralizado e modelo híbrido. Para a comparação, o modelo híbrido foi aberto em três variantes, e foi incluída uma situação atual otimizada como referência, para que ganhos que não dependem de um CD não sejam atribuídos a ele.

**Tabela 6 – Alternativas do estudo**


| Código | Alternativa | Descrição |
| --------- | --------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| A0 | **Situação atual** | Oito almoxarifados, um por unidade. Cada unidade mantém o próprio estoque. O piloto do Polo Norte faz parte da situação atual se estiver ativo. |
| A0+ | **Situação atual otimizada (referência)** | Mesma estrutura, com rebalanceamento do estoque parado entre unidades e revisão dos máximos de reposição. Sem CD. Serve para não atribuir ao CD ganhos que não dependem dele. |
| A1 | **CD centralizado** | Um CD atende as 8 unidades nos 6 grupos. As unidades mantêm apenas estoque mínimo de uso imediato. |
| A2a | **Híbrido por tipo de item** | CD para itens de consumo esporádico e estoque repetido (rolamentos e vedação; transmissão e mangueiras; itens de baixo giro dos demais grupos). Itens de consumo contínuo e alto valor ficam nas unidades. |
| A2b | **Híbrido por região e CNPJ** | Estoque compartilhado por grupo de unidades próximas e do mesmo CNPJ (expansão do Polo Norte), evitando transferências entre CNPJs. |
| A2c | **Híbrido com estoque do fornecedor na unidade** | Para grupos com fornecedor concentrado, o fornecedor mantém estoque dentro da unidade e fatura no consumo, como no modelo de filtros citado pela Atvos. |

A variante A2a decorre do diagnóstico do item 1, que separa grupos de consumo contínuo e grupos de consumo esporádico. As variantes A2b e A2c decorrem de pontos levantados pela Atvos em reunião: a transferência de materiais entre unidades de CNPJs diferentes é tratada como venda, e já existe um modelo de estoque do fornecedor dentro da unidade para filtros.

**Tabela 7 – Matriz de comparação: custos, prazos e disponibilidade dos materiais essenciais**


| Dimensão | Critério | A0 – Situação atual | A0+ – Atual otimizada | A1 – CD centralizado | A2a – Híbrido por tipo de item | A2b – Híbrido por região e CNPJ | A2c – Estoque do fornecedor |
| ----------------- | ---------------------------------------------------- | ------------------------------------------ | ------------------------------------------- | --------------------------------------------------------------------- | ---------------------------------- | ---------------------------------------- | ---------------------------------------------- |
| Custos | Capital em estoque | R$ 23,96 mi | Reduz (estoque parado e acima do máximo) | Reduz mais (um estoque de segurança para 8 unidades) | Reduz nos itens esporádicos | Reduz dentro de cada grupo de unidades | Reduz (estoque passa a ser do fornecedor) |
| Custos | Custo de manter estoque (anual) | R$ 4,8 mi a R$ 7,2 mi por ano (cenário) | Reduz na proporção do estoque | Reduz na proporção do estoque | Reduz em parte | Reduz em parte | Reduz; pode ser embutido no preço |
| Custos | Estoque parado (sem consumo em 12 meses no centro) | R$ 4,70 mi | Reduz (alvo direto) | Reduz | Reduz (alvo direto) | Reduz em parte | Sem efeito direto |
| Custos | Transporte | Não informado | Aumenta pouco (transferências pontuais) | Aumenta (trecho CD–unidades) | Aumenta em parte | Aumenta pouco (distâncias curtas) | Sem alteração relevante |
| Custos | Equipe | Não informado | Sem alteração | Equipe do CD; possível redução nas unidades | Equipe do CD menor | Sem alteração relevante | Sem alteração relevante |
| Custos | Impostos nas transferências | Não quantificado | Incide nas transferências entre CNPJs | Incide em todas as saídas para outro CNPJ | Incide nos itens centralizados | Evitado dentro do mesmo CNPJ | Evitado (venda direta do fornecedor) |
| Custos | Investimento inicial | Nenhum | Nenhum | Maior | Intermediário | Baixo (usa estrutura existente) | Baixo |
| Prazos | Lead time do fornecedor (média, dias) | 29,1 dias | Sem alteração | Sem alteração na compra; reposição da unidade passa a vir do CD | Reduz para itens no CD | Reduz para itens compartilhados | Imediato para itens em estoque do fornecedor |
| Prazos | Distância média entre unidades (km, estimada) | 405 km | Sem alteração | Depende da região do CD | Depende da região do CD | Curta dentro de cada grupo | Não se aplica |
| Disponibilidade | Itens de classe A (quantidade) | 119 | Sem alteração | Risco se o CD ficar longe da unidade | Mantidos na unidade | Mantidos na unidade | Mantidos na unidade |
| Disponibilidade | Combinações com consumo recorrente e sem estoque | 111 | Reduz em parte (rebalanceamento) | Reduz (estoque único visível) | Reduz nos itens esporádicos | Reduz em parte | Reduz nos grupos cobertos |
| Disponibilidade | Combinações planejadas abaixo do mínimo | 825 | Sem alteração | Reduz se a reposição do CD for confiável | Reduz em parte | Reduz em parte | Reduz nos grupos cobertos |

*Notas: a coluna A0 traz valores calculados na planilha; as demais indicam a direção esperada, a ser calculada na Sprint 2. A distância média entre unidades é uma estimativa a partir do centro dos municípios e serve apenas como ordem de grandeza. Os materiais essenciais estão aproximados pela classe A e pela frequência de consumo, até que a criticidade operacional seja informada.*

**Tabela 8 – Dimensão do que cada alternativa alcança na situação atual**


| Alternativa | Indicador | Valor | Leitura |
| ------------- | ------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------: | ---------------------------------------------------------------------------------- |
| A0+ | Estoque transferível entre unidades | R$ 3,18 mi | Parado em um centro e consumido em outro; pode ser rebalanceado sem compra nova. |
| A0+ | Estoque acima do máximo de reposição | R$ 1,92 mi | Sobrepõe-se ao valor anterior; os dois não devem ser somados. |
| A1 | Estoque total do recorte | R$ 23,96 mi | Todo o estoque do recorte passaria pelo CD. |
| A2a | Estoque de rolamentos e vedação e de transmissão e mangueiras | R$ 7,62 mi | Estoque que passaria a ser gerido no CD nesta variante; R$ 2,58 mi estão sem consumo em 12 meses no centro onde se encontram. |
| A2b | Estoque das quatro unidades do Polo Norte | R$ 9,60 mi | Unidades que, segundo a reunião, compartilham CNPJ. |
| A2c | Consumo de 12 meses de lubrificantes, pneus e desgaste agrícola | R$ 59,1 mi | Grupos com fornecedor concentrado, conforme o item 2. |

Esses valores mostram o tamanho da parcela do estoque ou do consumo que cada alternativa alcança. Não são estimativas de economia.

## 4.3. Dados e suposições iniciais para estimar investimento, custos de funcionamento e benefícios

A Tabela 9 lista o que é necessário para calcular cada alternativa na Sprint 2, a situação de cada dado e a suposição adotada enquanto o dado não está disponível. Dos 22 itens, 13 estão pendentes, sem suposição utilizável nesta sprint. O bloco de investimento está inteiramente pendente.

**Tabela 9 – Dados e suposições iniciais**


| ID | Bloco | Dado necessário | Alternativas | Situação | Suposição inicial |
| ------- | ------------------------- | ------------------------------------------------------------------------------------ | -------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DS-01 | Investimento | Área necessária do CD (m²) e capacidade de armazenagem | A1, A2 | Pendente | Sem suposição nesta sprint. A dimensionar na Sprint 2 a partir do volume dos itens candidatos. |
| DS-02 | Investimento | Preparação do espaço: obras, piso, estantes e porta-paletes | A1, A2 | Pendente | Sem suposição nesta sprint. Levantar referências de mercado na Sprint 2. |
| DS-03 | Investimento | Equipamentos de movimentação (empilhadeira, paleteira) | A1, A2 | Pendente | Sem suposição nesta sprint. |
| DS-04 | Investimento | Sistema de gestão do armazém (WMS) ou extensão do sistema atual | A1, A2 | Pendente | Verificar se o sistema atual da Atvos pode ser estendido ao CD. |
| DS-05 | Investimento | Regiões candidatas e disponibilidade de imóvel | A1, A2 | Pendente | Unidades e polos de fornecedores já mapeados servem de ponto de partida (aba Unidades). |
| DS-06 | Custos de funcionamento | Custo de ocupação: aluguel por m² na região ou custo de imóvel próprio | A1, A2 | Pendente | Sem suposição nesta sprint. Levantar referência por região na Sprint 2. |
| DS-07 | Custos de funcionamento | Equipe do CD e dos almoxarifados (pessoas e custo) | A0, A1, A2 | Estimado em parte | Salário médio de almoxarife de R$ 2.139 por mês, mais encargos de 60% a 80%. Número de pessoas pendente. |
| DS-08 | Custos de funcionamento | Custo de armazenagem atual por unidade | A0 | Pendente | Sem dado. Enquanto não houver, usar a taxa de custo de manter estoque (DS-13). |
| DS-09 | Custos de funcionamento | Frete entre fornecedor, CD e unidades | A0, A1, A2 | Estimado | Piso ANTT de R$ 4,00 a R$ 9,25 por km, mais R$ 436 a R$ 872 de carga e descarga por viagem. É um piso; o frete real tende a ser maior. |
| DS-10 | Custos de funcionamento | Distâncias rodoviárias entre unidades e polos de fornecedores | A0, A1, A2 | Estimado | Distância em linha reta multiplicada por fator rodoviário de 1,25 (faixa de 1,2 a 1,3). Três trechos do Polo Norte documentados pela Atvos. |
| DS-11 | Custos de funcionamento | Impostos nas transferências entre unidades | A1, A2 | Pendente | Suposição: 4 unidades no mesmo CNPJ (UMV, UAE, UCR e UAT) transferem sem imposto; nas demais, a transferência é tratada como venda. Alíquotas a confirmar com a área fiscal. |
| DS-12 | Custos de funcionamento | Condições comerciais dos fornecedores (frete CIF/FOB, pedido mínimo, contratos) | A0, A1, A2 | Pendente | Sem suposição nesta sprint. |
| DS-13 | Benefícios | Taxa anual de custo de manter estoque (capital, armazenagem e risco) | A0, A1, A2 | Estimado | 20% a 30% ao ano sobre o estoque médio. |
| DS-14 | Benefícios | Estoque que pode ser reduzido (capital liberado, efeito único) | A0+, A1, A2 | Estimado | Pontos de partida calculados na planilha: estoque em centro sem consumo em 12 meses, parcela transferível e estoque acima do máximo. Os valores se sobrepõem e não devem ser somados. |
| DS-15 | Benefícios | Redução do estoque de segurança por compartilhamento entre unidades | A1, A2 | Pendente | Sem percentual nesta sprint. O piloto do Polo Norte reporta redução de cerca de 49%, dos quais cerca de 33% por ações estruturais; resultado a confirmar. |
| DS-16 | Benefícios | Valor do consumo e preço de compra | A0, A1, A2 | Estimado | Quantidade consumida multiplicada pelo custo unitário do estoque atual de cada material. |
| DS-17 | Benefícios | Ganho de negociação por compras consolidadas | A1, A2 | Pendente | Sem suposição nesta sprint. Depende de saber se as compras já são centralizadas. |
| DS-18 | Benefícios | Efeito em prazos de atendimento | A1, A2 | Estimado em parte | Lead time médio dos fornecedores por grupo (aba Indicadores). Prazo CD–unidade a estimar pelas distâncias. |
| DS-19 | Benefícios | Efeito na disponibilidade dos materiais essenciais | A0, A1, A2 | Estimado em parte | Essenciais aproximados por classe A e frequência de consumo, até haver criticidade operacional. |
| DS-20 | Benefícios | Custo de paradas e compras emergenciais evitadas | A1, A2 | Pendente | Sem suposição nesta sprint. |
| DS-21 | Escopo | Itens candidatos ao CD e itens que ficam na unidade | A1, A2 | Estimado em parte | Suposição inicial: grupos de consumo esporádico (rolamentos e vedação; transmissão e mangueiras) são candidatos ao CD; itens de classe A e consumo contínuo ficam na unidade. |
| DS-22 | Escopo | Situação atual a considerar (com ou sem piloto do Polo Norte) | A0 | Pendente | Suposição: a posição de estoque de 09/11 já reflete o que o piloto alterou. |

**Tabela 10 – Premissas numéricas da planilha**


| Premissa | Valor | Tipo | Fonte |
| -------------------------------------- | ----------------------------------------------- | ----------------------------- | ----------------------------------------------- |
| Custo de manter estoque | 20% a 30% ao ano | Referência externa | Item 3, seção 3.6 |
| Frete: piso ANTT | R$ 4,00 a R$ 9,25 por km | Referência externa | Item 3, seção 3.6 |
| Frete: carga e descarga | R$ 436 a R$ 872 por viagem | Referência externa | Item 3, seção 3.6 |
| Salário médio de almoxarife | R$ 2.139 por mês | Referência externa | Item 3, seção 3.6 |
| Encargos sobre o salário | 60% a 80% | Suposição | Item 3, seção 3.6 |
| Fator rodoviário sobre a linha reta | 1,25 | Suposição | Item 3, seção 3.2 |
| Curva ABC | A até 80% e B até 95% do valor acumulado | Regra de análise | Item 1, seção 1.6.4 |
| Consumo recorrente | Consumo em 6 ou mais dos últimos 12 meses | Regra de análise | Suposição deste entregável |
| Rota do piloto do Polo Norte | 5 viagens por semana, ida e volta, 52 semanas | Dado da Atvos e suposição | Apresentação Estoque Compartilhado, slide 8 |

## 4.4. Limitações e dados a solicitar

- **Recorte provisório.** Os resultados valem para os 3.201 códigos do recorte e podem mudar quando a Atvos confirmar a lista oficial.
- **Valores estimados.** O consumo em reais usa o custo unitário do estoque atual; materiais sem estoque ficam sem preço. Custos operacionais são cenários construídos com referências de mercado.
- **Questão fiscal não quantificada.** O efeito dos impostos nas transferências entre unidades de CNPJs diferentes ainda não foi calculado e pode mudar a ordem das alternativas.
- **Situação do piloto do Polo Norte.** Não está confirmado se o piloto segue ativo; isso define a situação atual contra a qual o CD será comparado.
- **Investimento.** Não há dado nem suposição utilizável sobre área, obras, equipamentos e sistemas.
- **Distâncias.** As distâncias entre unidades foram estimadas pelo centro dos municípios e subestimam trechos curtos; as rotas precisam ser conferidas.

 As lacunas identificadas neste entregável e nos itens 1, 2 e 3 foram reunidas em 22 solicitações numeradas, registradas na aba `Solicitacoes` da planilha e em documento interno do projeto. Cada valor ou conclusão da planilha que depende de um dado pendente indica o código da solicitação correspondente.

## 4.5. Referências

AGROTECH INTELI; ATVOS. **Termo de abertura do projeto e documento de entregáveis**. São Paulo, 2026. Documento interno.

ATVOS. **Base_Planejamento_Materiais**: abas Base_Consumo e Base_Estoque_Atual. [*S. l.*]: Atvos, 2026. 1 planilha eletrônica (.xlsx). Documento interno, recebido em 9 nov. 2026.

ATVOS. **Estoque compartilhado**: projeto Polo Norte. [*S. l.*]: Atvos, 2026. 1 apresentação (8 slides), PowerPoint. Documento interno, recebido em 9 nov. 2026.

ATVOS. **Planejamento_Materiais**: aba Consolidado. [*S. l.*]: Atvos, 2026. 1 planilha eletrônica (.xlsx). Documento interno, recebido em 11 nov. 2026.

ATVOS. **Reunião de alinhamento do projeto**. [*S. l.*], nov. 2026. Registro interno da equipe.
