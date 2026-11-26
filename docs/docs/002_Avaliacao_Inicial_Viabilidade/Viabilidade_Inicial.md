---
sidebar_position: 6
sidebar_label: 5. Planilha e conclusão inicial de viabilidade
slug: /sprint-2/viabilidade-inicial
description: "Consolidação inicial de investimento, funcionamento, benefícios e critérios de escolha de regiões, com condições de viabilidade e pendências."
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# 5. Planilha e conclusão inicial de viabilidade

**Referência:** 25/11/2026 · **Etapa:** avaliação inicial, Sprint 2.

A otimização dos estoques sem um novo CD é a referência inicial mais favorável nos cálculos disponíveis. Um CD precisa demonstrar ganho adicional sobre essa alternativa, além de melhorar o atendimento. A configuração a aprofundar é um estoque compartilhado restrito às unidades BRM no Polo Norte, associado à consolidação de cargas na origem, conforme a comparação de regiões. Ainda faltam cotações e validações para afirmar que essa configuração é viável.

## 5.1. Planilha, escopo e forma de uso

<a href={useBaseUrl('/planilhas/Viabilidade_Inicial.xlsx')}>Baixar a planilha inicial de viabilidade (.xlsx)</a>

A planilha reúne três abas: **Viabilidade**, com resultados e diferenças entre alternativas; **Premissas**, com entradas ajustáveis e fontes; e **Regioes**, com os indicadores disponíveis e os campos necessários para a comparação ponderada. Entradas numéricas ajustáveis aparecem em azul. Campos sem informação permanecem pendentes. Um zero só deve ser informado quando representar ausência efetiva de custo ou benefício.

O modelo calcula variações em relação à situação atual. **Zero na situação atual não significa operação gratuita:** o custo absoluto dos oito almoxarifados e da rede atual não foi disponibilizado. O piloto de Morro Vermelho integra essa referência e precisa ser confirmado antes de atribuir novos ganhos ao CD.

| Base utilizada | Recorte e período | Uso nesta entrega |
| --- | --- | --- |
| [Comparação dos modelos de abastecimento](./Comparacao_Modelos.md), seções 1.1–1.6 | Quatro grupos, 2.475 materiais (`Base_Consumo`); estoque de R$ 19,79 mi; consumo da Safra 25/26 de R$ 58,4 mi. | Direcionamento qualitativo por perfil de grupo, referências de MRO e alinhamento ao modelo híbrido/C5. |
| [Comparação de regiões](./Comparacao_Regioes_CD.md), Tabelas 2.6 e 2.11 | Quatro grupos, 2.244 materiais (`Consolidado`); estoque de R$ 17,99 mi; consumo estimado de 2025 de R$ 56,46 mi. | Localizações, configurações C1–C5 e indicadores logísticos (piso ANTT ida e volta). |
| [Investimento e custos de funcionamento](./Investimento_Custos.md), seções 3.1–3.4 | Seis grupos, 3.201 materiais; moeda corrente de 2026. | Memória de cálculo do investimento inicial, custo anual equivalente e análise exploratória de impostos. |
| [Estimativa de benefícios e impactos](./Beneficios_Impactos.md), seções 4.1–4.5 | Seis grupos, 3.201 materiais; estoque de R$ 23,96 mi; consumo da Safra 25/26 de R$ 72,35 mi. O risco usa nov/2025–out/2026. | Capital liberado, ganhos potenciais, custos adicionais e atendimento das alternativas amplas. |
| [Diagnóstico atual](../001_Diagnostico_Abastecimento/Diagnostico_Atual_MRO.md) | Oito unidades e piloto de estoque compartilhado. | Linha de base e lacunas de custo. |

**Os recortes são diferentes.** Os benefícios dos seis grupos para as oito unidades não são os benefícios do CD BRM de quatro unidades. A configuração C5 não recebe automaticamente os ganhos do modelo híbrido da seção 4. Não foram somados os estoques nem os consumos dessas bases. As planilhas e a apresentação fornecidas no material de apoio são fontes de dados; os critérios de decisão desta entrega são os explicitados aqui.

## 5.2. Investimento e custos de funcionamento

Como ainda não há orçamento de implantação, foi montada uma **hipótese de teste da equipe**, ajustável, para revelar a ordem de grandeza que precisará ser financiada. Os números abaixo não são cotações nem valores observados da Atvos. O modelo pressupõe adaptação de estrutura existente ou imóvel locado, sem compra de terreno ou construção de galpão.

| Desembolso inicial (R$ mil) | Atual | Otimizada sem CD | CD centralizado | Híbrido |
| --- | ---: | ---: | ---: | ---: |
| Adequação do imóvel | 0 | 0 | 300 | 120 |
| Estruturas e movimentação | 0 | 0 | 400 | 160 |
| Implantação de sistema e integração | 0 | 0 | 180 | 90 |
| Mudança, treinamento e partida | 0 | 50 | 120 | 70 |
| Contingência de 15% | 0 | 7,5 | 150 | 66 |
| **Implantação e transição** | **0** | **57,5** | **1.150** | **506** |
| Capital de giro adicional | Não incremental | A confirmar | A confirmar | A confirmar |

O total combina ativos e despesas de implantação, sem pretender classificá-los contabilmente como CAPEX. A contingência incide sobre as quatro parcelas anteriores. O giro adicional deve considerar estoque de transição, prazos de pagamento e recebimento e possíveis saldos simultâneos na partida. Não foi compensado pelo capital potencialmente liberado.

Os custos anuais de funcionamento vêm das parcelas arredondadas das Tabelas 7 e 8 de Benefícios e impactos. Mantém-se a premissa de que os almoxarifados locais continuam operando, sem redução automática de equipe ou espaço nas usinas.

| Variação de custo (R$ mil/ano) | Atual | Otimizada sem CD | CD centralizado | Híbrido |
| --- | ---: | ---: | ---: | ---: |
| Equipe adicional | 0 | 0 | 440 | 220 |
| Ocupação, utilidades e sistemas | 0 | 0 | 500 | 240 |
| Distribuição e transferências | 0 | 100 | 1.930 | 720 |
| Alívio potencial no frete de entrada | 0 | 0 | −360 | −60 |
| **Custo líquido adicional antes de tributos** | **0** | **100** | **2.510** | **1.120** |

Licenças, seguros e adequações especiais devem ser conferidos nas propostas para evitar omissão ou sobreposição. A armazenagem de lubrificantes exige dimensionamento próprio. O frete é paramétrico e não constitui uma tarifa contratada. Nesta entrega, essas referências são reproduzidas do trabalho da equipe, sem atualização de tabela regulatória ou afirmação sobre o piso vigente.

## 5.3. Benefícios e comparação financeira inicial

O capital liberado é um efeito único. A economia econômica de estoque é calculada por `capital liberado × 17,5% ao ano`, composta por 13,5% de custo de oportunidade e 4% de risco/obsolescência, conforme a seção 4.1.3. **Esse resultado não representa integralmente caixa recebido ou despesa eliminada.** A realização das perdas evitadas também precisa ser comprovada.

| Indicador | Atual | Otimizada sem CD | CD centralizado | Híbrido |
| --- | ---: | ---: | ---: | ---: |
| Capital liberado uma vez (R$ mi) | 0 | 3,45 | 5,43 | 4,32 |
| Economia econômica de estoque (R$ mil/ano) | 0 | 603,75 | 950,25 | 756,00 |
| Ganho potencial em compras (R$ mil/ano) | 0 | 0 | 780 | 620 |
| Custo líquido adicional (R$ mil/ano) | 0 | 100 | 2.510 | 1.120 |
| **Saldo econômico antes de tributos (R$ mil/ano)** | **0** | **503,75** | **−779,75** | **256,00** |
| **Saldo adicional frente à otimizada (R$ mil/ano)** | — | **0** | **−1.283,50** | **−247,75** |

**Conciliação:** a Tabela 15 do trabalho de benefícios publica aproximadamente +R$ 0,50 mi, −R$ 0,78 mi e +R$ 0,26 mi por ano. A planilha desta entrega recalcula as parcelas publicadas, arredondadas, sem inventar precisão para os dados originais. No híbrido, equipe de R$ 220 mil mais ocupação de R$ 240 mil resulta em R$ 460 mil, enquanto o subtotal publicado é R$ 450 mil. Por isso, pequenas diferenças são esperadas e devem ser substituídas pelos números não arredondados quando disponibilizados.

O híbrido tem saldo econômico positivo frente à situação atual, mas **fica R$ 247,75 mil/ano abaixo da otimização sem CD**, antes de tributos e implantação. Para empatar com essa referência, precisaria reduzir custos ou acrescentar benefícios comprovados nesse montante. O CD integral precisaria melhorar o saldo em R$ 1,2835 mi/ano. Esses são limites de equilíbrio, não metas de economia já demonstradas.

O capital adicional frente à otimizada é de R$ 1,98 mi no CD integral e R$ 0,87 mi no híbrido. Ele não é somado como receita anual e não foi usado para afirmar recuperação imediata do investimento. O potencial de consolidação do estoque ainda requer a revisão indicada em Benefícios e impactos, seção 4.3.2, que aponta possível superestimação de cerca de R$ 0,6 mi ao considerar o prazo CD–usina.

**Payback não calculado:** faltam fluxo de caixa incremental, cronograma de implantação, tributos e giro adicional. Dividir investimento por saldo econômico, que inclui custo de oportunidade, produziria um prazo de retorno inadequado. Na etapa final, usar desembolsos e economias efetivas de caixa por período, separando a liberação de estoque e comparando com a otimização sem CD.

## 5.4. Regiões por custo, acesso e atendimento

A localização deve ser comparada dentro de uma configuração comum. A Tabela 2.11 permite comparar Mineiros, Alto Taquari e Costa Rica para o **C1: quatro unidades BRM**. Chapadão do Sul aparece no **C2: oito unidades** e Ribeirão Preto no **C4: consolidação na origem**, com papéis diferentes.

| Região e papel | Custo disponível | Acesso e atendimento | Leitura inicial |
| --- | --- | --- | --- |
| Mineiros/GO — C1 BRM | Saída paramétrica de R$ 445 mil/ano (ida e volta) | Maior trecho de 172 km entre sedes municipais; piloto existente em Morro Vermelho. | Primeira opção a orçar por aproveitar a operação existente; validar transporte dedicado e endereços reais. |
| Alto Taquari/MT — C1 BRM | Saída de R$ 488 mil/ano (ida e volta) | Maior trecho de 207 km; alternativa próxima das unidades BRM. | Diferença pequena de frete pode ser superada por ocupação, equipe e transporte contratado. |
| Costa Rica/MS — C1 BRM | Saída de R$ 551 mil/ano (ida e volta) | Maior trecho de 238 km. | Mantém-se candidata; exige avaliar o custo total e o prazo por unidade. |
| Chapadão do Sul/MS — C2 integral | Saída de R$ 2,317 mi/ano (ida e volta) | Média ponderada de 307 km e pior trecho de 574 km; oito unidades. | Melhor posição do CD único no estudo de distâncias, com maior exposição operacional e fiscal a validar. |
| Ribeirão Preto/SP — C4 entrada | Tarifa do operador e manuseio pendentes | Consolida origens de SP; não substitui o atendimento local nem comprova redução de estoques. | Complemento a avaliar junto ao C1, formando C5. |

*Fonte: Comparação de regiões, Tabelas 2.6 e 2.11. Custos de saída calculados naquele estudo com frequência e parâmetros próprios. Não substituem os custos do modelo financeiro de seis grupos.*

**Importância proposta dos critérios:** custo total **50%**, atendimento **30%** e acesso **20%**. O custo recebe maior peso porque o novo arranjo precisa justificar implantação e operação. Atendimento pesa 30% pelo risco de parada de máquinas; acesso pesa 20% por sustentar regularidade de entrega e disponibilidade de transportadores. São pesos propostos pela equipe, sujeitos à validação com Suprimentos e Manutenção.

Antes da pontuação, aplicar dois filtros: **estrutura fiscal formalmente validada** e **prazo compatível com os itens críticos**. Uma opção que não passa nesses filtros fica fora da seleção, mesmo com baixo custo. A interpretação fiscal da reunião e da comparação de regiões é uma premissa de projeto a confirmar com a área responsável, não um parecer desta entrega.

Na planilha, o custo recebe nota `5 × menor custo total comparável ÷ custo total da opção`. Acesso e atendimento recebem notas de 1 a 5 após validação: 1 indica acesso insuficiente ou prazo abaixo do SLA; 3 indica operação possível com restrições; 5 indica acesso robusto ou atendimento com folga. Registrar evidências e SLA por unidade antes de preencher. A nota final é a soma das notas vezes seus pesos.

**Não há ranking numérico final:** faltam custos totais e SLAs. As notas permanecem pendentes, evitando transformar ausência de cotação em vantagem. A planilha solicita revisão quando os custos são nulos ou negativos, as notas saem da escala de 1 a 5 ou os pesos não somam 100%. Comparar apenas os três locais C1 e testar também pesos 40%/40%/20% e 60%/20%/20%, na ordem custo/atendimento/acesso. Se a liderança mudar, a escolha é sensível e requer validação adicional.

## 5.5. Conclusão inicial: quando o CD pode valer a pena

**O CD integral ainda não se sustenta no cenário esperado disponível.** Apresenta saldo econômico negativo antes de tributos e implantação, além de exigir atendimento a unidades distantes. O híbrido reduz o risco operacional, mas seu saldo positivo frente à situação atual ainda é inferior ao ganho da otimização sem CD.

A prioridade inicial é confirmar e executar o que cabe na estrutura atual: rebalancear materiais transferíveis, revisar limites de reposição e preservar os estoques críticos locais. Isso permite medir uma linha de base real antes de aprovar nova estrutura física.

**O CD pode valer a pena** se a consolidação adicional gerar economia e melhoria de atendimento que superem a otimização sem CD, sustentem os custos de operação e recuperem implantação e giro em um prazo aceito pela Atvos. Deve haver estoque efetivamente compartilhável, transporte confiável e estrutura fiscal validada. Ganhos de compra já existentes em contratos corporativos não podem reaparecer como novos benefícios.

A hipótese preferencial para aprofundamento é o **C5: CD BRM no Polo Norte, inicialmente Mineiros, mais consolidação em Ribeirão Preto**, mantendo Alto Taquari e Costa Rica como alternativas de localização. Isso segue o estudo de regiões e aproveita o piloto. **Ainda não é uma recomendação de investimento:** o benefício incremental do C1/C5 precisa ser recalculado para as quatro unidades e materiais elegíveis, e a consolidação de pneus já existente precisa entrar na referência atual.

No atendimento, os cenários da seção 4 estimam redução de combinações com risco alto de 712 para 637 na otimizada, 366 no CD integral e 486 no híbrido. São simulações, não níveis de serviço medidos; não foram monetizadas nem transferidas ao C5. Estoques vitais devem permanecer nas usinas até comprovar que o prazo de reposição atende à Manutenção.

## 5.6. Confirmações necessárias para fechar a viabilidade

| Pendência | Responsável a consultar | O que resolve |
| --- | --- | --- |
| Situação, abrangência e custos reais do piloto; consolidação atual dos pneus | Logística e equipe do Polo Norte | Define a referência e evita contar ganhos já existentes. |
| Materiais e unidades elegíveis para C1/C5; mesma classificação e período nas bases | Planejamento de Materiais | Recalcula os benefícios no escopo escolhido e concilia quatro/seis grupos. |
| CNPJs, inscrições estaduais e estrutura de movimentação/armazenagem | Fiscal da Atvos | Confirma permissões, custos e forma de operação de cada caso. |
| Propostas de imóvel/adaptação, equipamentos, sistema e partida | Suprimentos e operadores | Substitui as hipóteses de investimento por orçamento comparável. |
| Equipe, ocupação, seguros, utilidades e estrutura mantida nas usinas | Operações e Controladoria | Completa o custo total sem economias fixas presumidas. |
| Frete CIF/FOB atual, tarifa do operador, peso, cubagem e frequência | Compras e Logística | Mede o custo incremental de entrada, manuseio e saída. |
| Endereço das usinas, rotas de caminhão, sazonalidade e SLAs críticos | Logística e Manutenção | Valida acesso e atendimento; as sedes municipais têm diferenças de até 67 km frente ao piloto. |
| Preços contratados, perdas evitadas e eventual benefício de disponibilidade | Compras, Manutenção e Controladoria | Separa ganho hipotético de economia realizável e evita dupla contagem. |
| Giro de transição, cronograma, horizonte e prazo de retorno aceito | Finanças | Permite calcular caixa incremental e retorno do investimento. |

A conclusão final depende desses dados. Até lá, manter o cenário otimizado sem CD como referência, cotar C1/C5 e revisar as hipóteses com a equipe, sem somar benefícios de escopos diferentes.
