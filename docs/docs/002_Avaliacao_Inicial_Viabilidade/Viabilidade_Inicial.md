---
sidebar_position: 5
sidebar_label: 5. Planilha e conclusão inicial de viabilidade
slug: /sprint-2/viabilidade-inicial
description: "Consolidação inicial de investimento, funcionamento, benefícios e critérios de escolha de regiões, com condições de viabilidade e pendências."
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# 5. Planilha e conclusão inicial de viabilidade

**Responsável:** Laís · **Atualização:** 26/11/2026 · **Etapa:** avaliação inicial, Sprint 2.

A otimização dos estoques sem um novo CD continua sendo a referência financeira mais favorável nos cálculos disponíveis. Esta atualização incorpora a [Comparação dos modelos](./Comparacao_Modelos.md), que reduziu o escopo para **pneus, filtros, lubrificantes e rolamentos**, e a [Estimativa de investimento e custos](./Investimento_Custos.md), que detalhou a implantação, a anualização e as despesas ainda excluídas. O híbrido segmentado permanece a configuração operacional a aprofundar, mas ainda precisa demonstrar ganho adicional frente à otimização sem CD.

## 5.1. Planilha, escopo e forma de uso

<a href={useBaseUrl('/planilhas/Viabilidade_Inicial_Lais.xlsx')}>Baixar a planilha inicial de viabilidade (.xlsx)</a>

A planilha reúne três abas: **Viabilidade**, com resultados e diferenças entre alternativas; **Premissas**, com entradas ajustáveis e fontes; e **Regioes**, com os indicadores disponíveis e os campos necessários para a comparação ponderada. Entradas numéricas ajustáveis aparecem em azul. Campos sem informação permanecem pendentes. Um zero só deve ser informado quando representar ausência efetiva de custo ou benefício.

O modelo calcula variações em relação à situação atual. **Zero na situação atual não significa operação gratuita:** o custo absoluto dos oito almoxarifados e da rede atual não foi disponibilizado. O piloto de Morro Vermelho integra essa referência e precisa ser confirmado antes de atribuir novos ganhos ao CD.

| Base utilizada | Recorte e período | Uso nesta entrega |
| --- | --- | --- |
| [Comparação dos modelos](./Comparacao_Modelos.md), Tabelas 1, 5 e 7 | Quatro grupos pela classificação da Sprint 1, 2.475 materiais; estoque de R$ 19,79 mi; consumo da Safra 25/26 de aproximadamente R$ 58,4 mi e R$ 65,4 mi nos 12 meses nov/2025–out/2026. | **Base ativa** de capital liberado, compras, transporte líquido e risco. |
| [Investimento e custos](./Investimento_Custos.md), Tabelas 3.1 e 3.4 e seção 3.4.2 | Estimativas de implantação e porte originalmente para seis grupos; anualização em cinco anos a 13,5% a.a. | Componentes de investimento, custos e regra de anualização, ainda sujeitos a redimensionamento para quatro grupos. |
| [Estimativa de benefícios e impactos](./Beneficios_Impactos.md), seções 4.1–4.5 | Seis grupos, 3.201 materiais; estoque de R$ 23,96 mi; consumo da Safra 25/26 de R$ 72,35 mi. | Referência anterior e metodologia; seus resultados não são o saldo ativo desta versão. |
| [Comparação de regiões](./Comparacao_Regioes_CD.md), Tabelas 2.6 e 2.11 | Quatro grupos, 2.244 materiais; estoque de R$ 17,99 mi; consumo estimado de 2025 de R$ 56,46 mi. | Localizações, configurações C1–C5 e indicadores logísticos. |
| [Diagnóstico atual](../001_Diagnostico_Abastecimento/Diagnostico_Atual_MRO.md) | Oito unidades e piloto de estoque compartilhado. | Linha de base e lacunas de custo. |

**Os recortes são diferentes.** Mesmo com quatro grupos, a comparação dos modelos usa a classificação da aba `Base_Consumo`, enquanto a comparação de regiões usa a descrição dos materiais: daí os 2.475 contra 2.244 materiais e os estoques de R$ 19,79 mi contra R$ 17,99 mi. Não foram somados esses totais. A configuração C5 também não recebe automaticamente os benefícios calculados para as oito unidades. A lista oficial de códigos precisa conciliar os recortes antes da recomendação final.

**O que já existe e o que continua pendente na main consultada:**

| Tema | Informação agora disponível | Limite para esta atualização |
| --- | --- | --- |
| Implantação | Componentes de R$ 57,5 mil, R$ 1,15 mi e R$ 506 mil, detalhados na Tabela 3.1. | As cifras continuam hipóteses da equipe, não cotações novas. |
| Funcionamento | Fórmulas por área, pessoas, encargos e viagens, além da lista de despesas excluídas. | Ainda faltam custos reais das usinas e propostas por região. |
| Comparação anual do investimento | Horizonte de cinco anos e taxa de 13,5%, com regra de custo anual equivalente. | São premissas de análise a validar com Finanças. |
| Fiscal | Perguntas F1–F9 e exemplos ilustrativos na seção 3.3. | Não há parecer da Atvos nem tributo incremental confirmado; o campo fica pendente. |
| Pedidos em aberto | A comparação dos modelos informa dados para 448 combinações na versão de 17/11. | A versão é citada na página, mas o arquivo de 17/11 não está entre os arquivos versionados da main consultada. Não foi recalculado o risco com esses pedidos. |
| C1/C5 e retorno | Desenho preferencial e limites de implantação sobre o piloto. | Ainda sem dimensionamento, benefício próprio, giro de transição ou fluxo de caixa confirmado. |

## 5.2. Investimento e custos de funcionamento

Os valores de implantação foram conferidos com a **Tabela 3.1 de Investimento e custos**, agora disponível na main. Ela detalha as mesmas hipóteses da primeira versão desta planilha: não representa uma cotação nova. O modelo pressupõe adaptação de estrutura existente ou imóvel locado, sem compra de terreno ou construção de galpão.

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

Os custos de equipe, ocupação e distribuição vêm das parcelas arredondadas da Tabela 3.4 de Investimento e custos. **O porte de 1.500 m²/10 pessoas no CD e 700 m²/5 pessoas no híbrido foi herdado do estudo de seis grupos** e continua como aproximação até o redimensionamento. O transporte líquido foi atualizado para quatro grupos com a Tabela 5 de Comparação dos modelos. Os almoxarifados locais continuam operando, sem redução automática de equipe ou espaço nas usinas.

| Variação de custo (R$ mil/ano) | Atual | Otimizada sem CD | CD centralizado | Híbrido |
| --- | ---: | ---: | ---: | ---: |
| Equipe adicional | 0 | 0 | 440 | 220 |
| Ocupação, utilidades e sistemas | 0 | 0 | 500 | 240 |
| Distribuição e transferências | 0 | 100 | 1.930 | 720 |
| Alívio implícito no frete de entrada, quatro grupos | 0 | 0 | −290 | −30 |
| **Custo líquido adicional antes de tributos e despesas pendentes** | **0** | **100** | **2.580** | **1.150** |

O alívio de entrada é uma **conciliação entre parcelas publicadas**, não um frete medido: R$ 1,93 mi de distribuição menos R$ 1,64 mi de transporte líquido no CD = R$ 290 mil; R$ 720 mil menos R$ 690 mil no híbrido = R$ 30 mil. Isso preserva a redução do fluxo de seis para quatro grupos sem aplicar o antigo ganho de R$ 360 mil/R$ 60 mil a outro escopo.

Investimento e custos identifica como **não incluídos** o seguro do estoque/imóvel, a manutenção de equipamentos e as viagens de urgência. Licenças adicionais também precisam ser verificadas. Esses itens agora têm campos separados na planilha; não foram preenchidos com zero. IPTU, utilidades e suporte de sistema já estão na faixa de ocupação e não devem ser somados novamente sem abrir o orçamento. O frete permanece paramétrico, reproduzido das páginas do projeto, sem atualização de tabela regulatória nesta entrega.

## 5.3. Benefícios e comparação financeira inicial

O capital liberado é um efeito único. A economia econômica de estoque é calculada por `capital liberado × 17,5% ao ano`, composta por 13,5% de custo de oportunidade e 4% de risco/obsolescência, conforme a seção 4.1.3. **Esse resultado não representa integralmente caixa recebido ou despesa eliminada.** A realização das perdas evitadas também precisa ser comprovada.

| Indicador | Atual | Otimizada sem CD | CD centralizado | Híbrido |
| --- | ---: | ---: | ---: | ---: |
| Capital liberado uma vez (R$ mi) | 0 | 3,02 | 4,64 | 3,64 |
| Economia econômica de estoque (R$ mil/ano) | 0 | 528,50 | 812,00 | 637,00 |
| Ganho potencial em compras (R$ mil/ano) | 0 | 0 | 590 | 470 |
| Custo líquido adicional (R$ mil/ano) | 0 | 100 | 2.580 | 1.150 |
| **Saldo antes de implantação, tributos e despesas pendentes (R$ mil/ano)** | **0** | **428,50** | **−1.178,00** | **−43,00** |

**Conciliação:** a Tabela 5 de Comparação dos modelos publica +R$ 0,43 mi, −R$ 1,17 mi e −R$ 0,03 mi/ano. O recálculo das parcelas arredondadas resulta em +R$ 428,5 mil, −R$ 1.178 mil e −R$ 43 mil. As diferenças são de −R$ 1,5 mil, −R$ 8 mil e −R$ 13 mil, respectivamente. No híbrido, R$ 220 mil de equipe + R$ 240 mil de ocupação = R$ 460 mil, enquanto o subtotal publicado é R$ 450 mil; os R$ 3 mil restantes decorrem de recalcular 17,5% sobre o capital arredondado. Esses desvios ficam expostos na planilha, sem ajuste artificial para forçar coincidência.

A seção 3.4.2 de Investimento e custos acrescenta o **custo anual equivalente da implantação**. Foi aplicada a mesma regra, agora aos saldos do escopo de quatro grupos:

```text
Fator de recuperação = i × (1 + i)^n ÷ ((1 + i)^n − 1)
i = 13,5% a.a.; n = 5 anos; sem valor residual
Fator calculado = 0,2877910955 por ano
Custo anual da implantação = desembolso de implantação × fator
Saldo com implantação = saldo anterior − custo anual da implantação
```

| Indicador (R$ mil/ano, salvo indicação) | Atual | Otimizada sem CD | CD centralizado | Híbrido |
| --- | ---: | ---: | ---: | ---: |
| Implantação e transição (R$ mil, uma vez) | 0 | 57,5 | 1.150 | 506 |
| Implantação anualizada | 0 | 16,55 | 330,96 | 145,62 |
| **Saldo com implantação, antes das pendências** | **0** | **411,95** | **−1.508,96** | **−188,62** |
| **Diferença frente à otimizada, com implantação** | — | **0** | **−1.920,91** | **−600,57** |
| Tributos, seguro, manutenção, urgências e licenças adicionais | Não incrementais | A confirmar | A confirmar | A confirmar |

O híbrido precisaria melhorar o resultado econômico em aproximadamente **R$ 601 mil/ano** para empatar com a otimização sem CD; o CD integral, em **R$ 1,921 mi/ano**. São limites calculados com as despesas conhecidas e o porte herdado. Não incluem as despesas ainda não cotadas nem redimensionam C1/C5. O campo de saldo após todas essas pendências permanece **Pendente** na planilha.

**Por que o resultado difere da seção de custos:** a Tabela 3.8 de Investimento e custos ainda usa os **seis grupos** e publica +R$ 487,2 mil, −R$ 1.110,71 mil e +R$ 110,38 mil após anualização. Essa tabela e a primeira versão desta entrega não podem ser usadas como resultado do novo escopo. A atualização combina os benefícios e transporte dos quatro grupos com os componentes de custo ainda herdados, deixando explícita essa limitação.

O capital adicional frente à otimizada passa a **R$ 1,62 mi no CD integral e R$ 0,62 mi no híbrido**, nos quatro grupos. Ele permanece separado do saldo anual. O alerta sobre possível superestimação de cerca de R$ 0,6 mi por prazo CD–usina refere-se ao estudo de **seis grupos**; não foi descontado integralmente dos quatro grupos sem recálculo por material.

**Payback não calculado:** faltam fluxo de caixa incremental, cronograma de implantação, tributos e giro adicional. Dividir investimento por saldo econômico, que inclui custo de oportunidade, produziria um prazo de retorno inadequado. Na etapa final, usar desembolsos e economias efetivas de caixa por período, separando a liberação de estoque e comparando com a otimização sem CD.

## 5.4. Regiões por custo, acesso e atendimento

A localização deve ser comparada dentro de uma configuração comum. A Tabela 2.11 permite comparar Mineiros, Alto Taquari e Costa Rica para o **C1: quatro unidades BRM**. Chapadão do Sul aparece no **C2: oito unidades** e Ribeirão Preto no **C4: consolidação na origem**, com papéis diferentes.

| Região e papel | Custo disponível | Acesso e atendimento | Leitura inicial |
| --- | --- | --- | --- |
| Mineiros/GO — C1 BRM | Saída paramétrica de R$ 297 mil/ano | Maior trecho de 172 km entre sedes municipais; piloto existente em Morro Vermelho. | Primeira opção a orçar por aproveitar a operação existente; validar transporte dedicado e endereços reais. |
| Alto Taquari/MT — C1 BRM | Saída de R$ 306 mil/ano | Maior trecho de 207 km; alternativa próxima das unidades BRM. | Diferença pequena de frete pode ser superada por ocupação, equipe e transporte contratado. |
| Costa Rica/MS — C1 BRM | Saída de R$ 344 mil/ano | Maior trecho de 238 km. | Mantém-se candidata; exige avaliar o custo total e o prazo por unidade. |
| Chapadão do Sul/MS — C2 integral | Saída de R$ 1,340 mi/ano | Média ponderada de 307 km e pior trecho de 574 km; oito unidades. | Melhor posição do CD único no estudo de distâncias, com maior exposição operacional e fiscal a validar. |
| Ribeirão Preto/SP — C4 entrada | Tarifa do operador e manuseio pendentes | Consolida origens de SP; não substitui o atendimento local nem comprova redução de estoques. | Complemento a avaliar junto ao C1, formando C5. |

*Fonte: Comparação de regiões, Tabelas 2.6 e 2.11. Custos de saída calculados naquele estudo com frequência e parâmetros próprios. Não substituem os custos do modelo de oito unidades nem comprovam o custo total do C1/C5.*

**Importância proposta dos critérios:** custo total **50%**, atendimento **30%** e acesso **20%**. O custo recebe maior peso porque o novo arranjo precisa justificar implantação e operação. Atendimento pesa 30% pelo risco de parada de máquinas; acesso pesa 20% por sustentar regularidade de entrega e disponibilidade de transportadores. São pesos propostos pela equipe, sujeitos à validação com Suprimentos e Manutenção.

Antes da pontuação, aplicar dois filtros: **estrutura fiscal formalmente validada** e **prazo compatível com os itens críticos**. Uma opção que não passa nesses filtros fica fora da seleção, mesmo com baixo custo. A interpretação fiscal da reunião e da comparação de regiões é uma premissa de projeto a confirmar com a área responsável, não um parecer desta entrega.

Na planilha, o custo recebe nota `5 × menor custo total comparável ÷ custo total da opção`. Acesso e atendimento recebem notas de 1 a 5 após validação: 1 indica acesso insuficiente ou prazo abaixo do SLA; 3 indica operação possível com restrições; 5 indica acesso robusto ou atendimento com folga. Registrar evidências e SLA por unidade antes de preencher. A nota final é a soma das notas vezes seus pesos.

**Não há ranking numérico final:** faltam custos totais e SLAs. As notas permanecem pendentes, evitando transformar ausência de cotação em vantagem. A planilha solicita revisão quando os custos são nulos ou negativos, as notas saem da escala de 1 a 5 ou os pesos não somam 100%. Comparar apenas os três locais C1 e testar também pesos 40%/40%/20% e 60%/20%/20%, na ordem custo/atendimento/acesso. Se a liderança mudar, a escolha é sensível e requer validação adicional.

## 5.5. Conclusão inicial: quando o CD pode valer a pena

**O CD integral ainda não se sustenta no cenário esperado disponível.** No escopo atualizado de quatro grupos, o híbrido também não apresenta saldo econômico positivo com os custos herdados: fica próximo do equilíbrio antes da implantação e em aproximadamente −R$ 189 mil/ano após anualizá-la. A otimização sem CD conserva o melhor saldo financeiro, aproximadamente +R$ 412 mil/ano antes das despesas pendentes.

A prioridade inicial é confirmar e executar o que cabe na estrutura atual: rebalancear materiais transferíveis, revisar limites de reposição e preservar os estoques críticos locais. Isso permite medir uma linha de base real antes de aprovar nova estrutura física.

**O CD pode valer a pena** se a consolidação adicional gerar economia e melhoria de atendimento que superem a otimização sem CD, sustentem os custos de operação e recuperem implantação e giro em um prazo aceito pela Atvos. Deve haver estoque efetivamente compartilhável, transporte confiável e estrutura fiscal validada. Ganhos de compra já existentes em contratos corporativos não podem reaparecer como novos benefícios.

A hipótese preferencial para aprofundamento é o **C5: CD BRM no Polo Norte, inicialmente Mineiros, mais consolidação em Ribeirão Preto**, mantendo Alto Taquari e Costa Rica como alternativas de localização. A comparação dos modelos acrescenta a segmentação: **rolamentos e outros itens esporádicos no ponto central; pneus, filtros e lubrificantes de uso contínuo nas usinas**, com abastecimento direto ou estoque do fornecedor. O estudo identifica R$ 5,25 mi em estoque de uso esporádico, apenas 5,9% do consumo de 12 meses, e R$ 1,25 mi sem consumo destinado a saneamento. **Esses estoques não são benefícios financeiros adicionais** e não foram somados ao capital liberado.

**Ainda não é uma recomendação de investimento:** o benefício e o custo incremental do C1/C5 precisam ser recalculados para as quatro unidades BRM e os materiais elegíveis, sobre a estrutura e as rotas do piloto. O porte herdado de 700 m²/cinco pessoas não demonstra o custo dessa configuração. Estoque do fornecedor para os demais CNPJs depende de contrato e pode voltar embutido no preço.

No atendimento, a Tabela 7 de Comparação dos modelos atualiza o total dos quatro grupos: **569 combinações com risco alto na situação atual, 499 na otimizada, 289 no CD integral e 398 no híbrido**. O híbrido simulado centraliza apenas rolamentos; ampliar a itens esporádicos dos outros grupos exige nova simulação. Pedidos em aberto e criticidade operacional ainda precisam entrar na validação. Os resultados não são níveis de serviço medidos, não foram monetizados e não foram transferidos ao C5. Estoques vitais permanecem nas usinas até comprovar o prazo de reposição.

## 5.6. Confirmações necessárias para fechar a viabilidade

| Pendência | Responsável a consultar | O que resolve |
| --- | --- | --- |
| Situação, abrangência e custos reais do piloto; consolidação atual dos pneus | Logística e equipe do Polo Norte | Define a referência e evita contar ganhos já existentes. |
| Lista oficial dos quatro grupos, unidades elegíveis para C1/C5 e base de 17/11 com pedidos em aberto | Planejamento de Materiais | Concilia classificação versus descrição, recalcula riscos e benefícios sem itens fora do escopo. |
| CNPJs, inscrições estaduais e estrutura de movimentação/armazenagem | Fiscal da Atvos | Confirma permissões, custos e forma de operação de cada caso. |
| Propostas de imóvel/adaptação, equipamentos, sistema e partida | Suprimentos e operadores | Substitui as hipóteses de investimento por orçamento comparável. |
| Seguro, manutenção de equipamentos, urgências, licenças adicionais e estrutura mantida nas usinas | Operações e Controladoria | Preenche as despesas agora identificadas como excluídas; evita zeros presumidos e dupla contagem. |
| Frete CIF/FOB atual, tarifa do operador, peso, cubagem e frequência | Compras e Logística | Mede o custo incremental de entrada, manuseio e saída. |
| Endereço das usinas, rotas de caminhão, sazonalidade e SLAs críticos | Logística e Manutenção | Valida acesso e atendimento; as sedes municipais têm diferenças de até 67 km frente ao piloto. |
| Preços contratados, perdas evitadas e eventual benefício de disponibilidade | Compras, Manutenção e Controladoria | Separa ganho hipotético de economia realizável e evita dupla contagem. |
| Giro de transição, cronograma e confirmação de cinco anos/13,5% a.a. | Finanças | Valida as premissas de anualização já disponíveis e permite montar o fluxo de caixa e o retorno. |

A conclusão final depende desses dados. Até lá, manter o cenário otimizado sem CD como referência, cotar C1/C5 e revisar as hipóteses com a equipe, sem somar benefícios de escopos diferentes.
