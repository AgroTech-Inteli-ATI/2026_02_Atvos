---
sidebar_position: 3.5
sidebar_label: 3. Investimento e custos de funcionamento
slug: /sprint-2/investimento-custos-funcionamento
description: "Estimativa do investimento inicial e dos custos de funcionamento de cada alternativa, com cálculos, fontes, datas e unidades; análise exploratória dos impostos a confirmar com a área fiscal da Atvos; e comparação do custo total com a situação atual, sem dupla contagem."
---

# 3. Estimativa do investimento e dos custos de funcionamento

**Referência:** 25/11/2026 · **Etapa:** avaliação inicial, Sprint 2 · **Moeda:** reais correntes de 2026, sem correção monetária.

Esta seção reúne, em um só lugar, quanto cada alternativa exige para começar a operar e quanto passa a custar por ano. Ela detalha os cálculos por trás dos valores usados na [planilha inicial de viabilidade](./Viabilidade_Inicial.md) (seção 5.2) e nas Tabelas 7 e 8 de [Benefícios e impactos](./Beneficios_Impactos.md), acrescenta a análise exploratória dos impostos e compara o custo total de cada alternativa com a situação atual.

As alternativas são as mesmas da seção 4, no recorte de **seis grupos MRO, 3.201 materiais e oito unidades**:

| Código | Alternativa | Estrutura física considerada |
| --- | --- | --- |
| A0 | Situação atual | Oito almoxarifados locais e piloto de estoque compartilhado do Polo Norte. Linha de base. |
| A0+ | Atual otimizada (sem CD) | Mesma estrutura; rebalanceamento de estoque parado e revisão dos máximos. |
| A1 | CD centralizado | CD de 1.500 m² e 10 pessoas atendendo as oito unidades nos seis grupos. |
| A2 | Modelo híbrido | CD de 700 m² e 5 pessoas para *Rolamentos e vedação* e *Transmissão e mangueiras*; os demais grupos seguem locais. |

Premissas comuns: imóvel **locado ou adaptado**, sem compra de terreno nem construção de galpão; os almoxarifados locais **continuam operando**, sem redução automática de equipe ou espaço nas usinas; o piloto do Polo Norte faz parte da situação atual.

---

## 3.1. Investimento inicial: preparação do espaço, equipamentos e sistemas

### 3.1.1. Valores por alternativa

**Tabela 3.1 – Investimento inicial e transição (R$ mil, desembolso único)**

| Componente | O que inclui | A0 | A0+ | A1 – CD centralizado | A2 – Híbrido |
| --- | --- | ---: | ---: | ---: | ---: |
| Preparação do espaço | Adequação do imóvel: piso, iluminação, docas, área de conferência e quarentena, bacia de contenção para lubrificantes, adequações para AVCB | 0 | 0 | 300 | 120 |
| Equipamentos | Porta-paletes, estantes com endereçamento, porta-pneus, empilhadeira e paleteiras | 0 | 0 | 400 | 160 |
| Sistemas | Extensão do SAP ao novo centro, endereçamento/WMS, integração fiscal e inventário inicial | 0 | 0 | 180 | 90 |
| Mudança, treinamento e partida | Transferência física dos saldos, treinamento, operação assistida; em A0+, transferências e revisão de parâmetros | 0 | 50 | 120 | 70 |
| Contingência (15% sobre as linhas acima) | Itens não previstos, sem incluir licenças e seguros já citados acima | 0 | 7,5 | 150 | 66 |
| **Total de implantação e transição** | | **0** | **57,5** | **1.150** | **506** |
| Capital de giro adicional | Estoque de transição, saldos simultâneos na partida, prazos de pagamento | Não se aplica | A confirmar | A confirmar | A confirmar |

*Fonte: hipótese de teste da equipe, publicada na [seção 5.2](./Viabilidade_Inicial.md) e na planilha `Viabilidade_Inicial_Lais.xlsx` (aba Premissas), referência 25/11/2026. Contingência: 15% × soma das quatro primeiras linhas (A1: 0,15 × 1.000 = 150; A2: 0,15 × 440 = 66; A0+: 0,15 × 50 = 7,5).*

O total mistura ativos (equipamentos, estruturas) e despesas de implantação (mudança, treinamento). Ele **não** classifica os valores contabilmente como CAPEX ou OPEX; essa separação muda depreciação e créditos de impostos e deve ser feita com a Controladoria.

### 3.1.2. Conferência da ordem de grandeza

Como ainda não há orçamento, a tabela abaixo transforma as hipóteses em custo por unidade física. O objetivo é permitir que a primeira cotação seja comparada rapidamente com a hipótese.

**Tabela 3.2 – Custo unitário implícito nas hipóteses de investimento**

| Indicador | Unidade | A1 – CD centralizado | A2 – Híbrido | Cálculo |
| --- | --- | ---: | ---: | --- |
| Área considerada | m² | 1.500 (faixa 1.200–1.800) | 700 (faixa 550–900) | Porte estimado na Tabela 7 de Benefícios e impactos |
| Preparação do espaço por m² | R$/m² | 200 | 171 | 300.000 ÷ 1.500; 120.000 ÷ 700 |
| Equipamentos por m² | R$/m² | 267 | 229 | 400.000 ÷ 1.500; 160.000 ÷ 700 |
| Implantação total por m² | R$/m² | 767 | 723 | 1.150.000 ÷ 1.500; 506.000 ÷ 700 |
| Estoque que passa a ser gerido no centro | R$ mi | 23,96 | 7,62 | Todo o recorte; em A2, rolamentos e transmissão (Sprint 1, Tabela 8) |
| Implantação por real de estoque gerido | % | 4,8% | 6,6% | Implantação ÷ estoque gerido |

**Leituras e cuidados:**

- **Pneus definem a área.** Pneus agrícolas e de caminhão exigem pé-direito alto, porta-pneus e proteção contra sol e ozônio ([Comparação de regiões, seção 2.8](./Comparacao_Regioes_CD.md)). Se o CD centralizado incluir pneus, a área e os equipamentos tendem ao topo da faixa.
- **Lubrificantes exigem dimensionamento próprio.** Bacia de contenção, piso impermeável e controle de resíduos não têm valor separado na hipótese. Se a Petronas continuar entregando direto nas usinas, essa parcela sai do investimento.
- **Sistemas:** os R$ 180 mil e R$ 90 mil pressupõem que o SAP atual pode ser estendido. Um WMS independente pode mudar esse valor (pendência DS-04 da Sprint 1).
- **Configuração C1/C5 (CD BRM em Mineiros).** O piloto de Morro Vermelho já tem estrutura, rotas e equipe. Para o C1/C5, o investimento deve ser orçado **sobre o que falta** no piloto, e não pelos valores de A1. Não há ainda dimensionamento físico do C1, por isso ele não recebe valor próprio nesta seção.

---

## 3.2. Custos de funcionamento: espaço, equipe, armazenagem, sistemas e transporte

### 3.2.1. Parâmetros, fontes, datas e unidades

**Tabela 3.3 – Parâmetros usados nos custos de funcionamento**

| Parâmetro | Valor (esperado) | Faixa testada | Unidade | Fonte e data |
| --- | ---: | --- | --- | --- |
| Salário de almoxarife | 2.139 | 2.139 – 2.345,64 | R$/mês por pessoa | Portal Salário, média Brasil 2026; vaga em Mineiros (InfoJobs, 2026), em [Diagnóstico atual, 3.6](../001_Diagnostico_Abastecimento/Diagnostico_Atual_MRO.md) |
| Encargos e benefícios sobre o salário | 70% | 60% – 80% | % do salário | Suposição da equipe (Sprint 1, DS-07) |
| Pessoas no CD | A1: 10; A2: 5 | A1: 8–12; A2: 4–6 | pessoas | Hipótese de porte (Benefícios e impactos, Tabela 7) |
| Área do CD | A1: 1.500; A2: 700 | A1: 1.200–1.800; A2: 550–900 | m² | Hipótese de porte (idem) |
| Ocupação, utilidades e sistemas | ≈ 28 | 22 – 35 | R$/m²/mês | Faixa paramétrica da equipe, sem cotação por região (Benefícios e impactos, 4.2.2) |
| Tarifa de frete por km | 6,625 | 4,00 – 9,25 | R$/km | Piso mínimo ANTT, carga geral, 2026 (Sprint 1, DS-09); valor esperado = ponto médio |
| Carga e descarga | 654 | 436 – 872 | R$/viagem | Piso mínimo ANTT, 2026; esperado = ponto médio |
| Distância média CD → unidades | 300 | 150 – 450 | km (ida) | Faixas paramétricas (Benefícios e impactos, 4.2.3) |
| Viagens de distribuição | A1: 8; A2: 3 | — | viagens/semana | Hipótese (Benefícios e impactos, Tabela 8) |
| Alívio no frete de entrada | 0,5% | 0% – 1% | % do consumo que passa pelo CD | Hipótese; depende de o frete ser CIF ou FOB |
| Consumo anual do recorte | 72,35 | — | R$ mi/ano (Safra 25/26) | Base consolidada Atvos, recebida em 11/11/2026 |
| Consumo dos grupos esporádicos (A2) | 12,06 | — | R$ mi/ano | Rolamentos (6,32) + transmissão (5,74), Benefícios e impactos, Tabela 5 |

### 3.2.2. Cálculos

```text
Equipe (R$/ano)        = pessoas × salário mensal × (1 + encargos) × 12
Ocupação e sistemas    = área (m²) × custo (R$/m²/mês) × 12
Frete de distribuição  = viagens/semana × 52 × (2 × distância de ida × R$/km + carga e descarga)
Alívio no frete        = consumo que passa pelo CD × % de alívio
```

Reprodução do cenário esperado:

- **Equipe A1:** 10 × 2.139 × 1,70 × 12 = **R$ 436 mil/ano**. A2: 5 pessoas = **R$ 218 mil/ano**.
- **Ocupação e sistemas A1:** 1.500 m² × ≈ R$ 27,8/m²/mês × 12 = **R$ 500 mil/ano**. A2: 700 m² × ≈ R$ 28,6 × 12 = **R$ 240 mil/ano**.
- **Frete por viagem:** 2 × 300 km × R$ 6,625 + R$ 654 = **R$ 4.629 por viagem** (ida e volta).
- **Frete A1:** 8 × 52 = 416 viagens × R$ 4.629 = **R$ 1,93 mi/ano**. A2: 3 × 52 = 156 viagens × R$ 4.629 = **R$ 722 mil/ano**.
- **Alívio na entrada A1:** R$ 72,35 mi × 0,5% = **R$ 362 mil/ano**. A2: R$ 12,06 mi × 0,5% = **R$ 60 mil/ano**.

### 3.2.3. Resultado por alternativa

**Tabela 3.4 – Variação anual dos custos de funcionamento frente à situação atual (R$ mil/ano, cenário esperado; positivo = custo adicional)**

| Componente | A0 | A0+ | A1 – CD centralizado | A2 – Híbrido | Faixa A1 | Faixa A2 |
| --- | ---: | ---: | ---: | ---: | --- | --- |
| Equipe adicional | 0 | 0 | 440 | 220 | 329 – 554 | 164 – 277 |
| Aluguel ou uso do espaço, utilidades e sistemas | 0 | 0 | 500 | 240 | 317 – 756 | 145 – 378 |
| *Subtotal armazenagem (Tabela 7)* | *0* | *0* | *940* | *450* | *650 – 1.310* | *310 – 660* |
| Distribuição e transferências | 0 | 100 | 1.930 | 720 | 680 – 3.830 | ver Tabela 8 |
| Alívio no frete de entrada | 0 | 0 | −360 | −60 | 0 a −720 | 0 a −120 |
| **Custo de funcionamento adicional, antes de tributos** | **0** | **100** | **2.510** | **1.120** | | |
| Equivalente mensal | 0 | 8,3 | 209,2 | 93,3 | | |

*Fonte: parcelas arredondadas das Tabelas 7 e 8 de [Benefícios e impactos](./Beneficios_Impactos.md) e da [seção 5.2](./Viabilidade_Inicial.md). Faixas: limite inferior com menor porte, menor encargo, menor custo por m², 150 km e tarifa mínima; superior com maior porte, maior encargo, R$ 35/m², 450 km e tarifa máxima. Em A2, equipe (220) + ocupação (240) = 460, enquanto a Tabela 7 publica 450 por arredondamento; a soma da linha de custo adicional usa as parcelas desta tabela, como na planilha.*

**O que está e o que não está nessa conta:**

| Item | Situação | Observação |
| --- | --- | --- |
| Aluguel, condomínio, IPTU, energia, água, limpeza, vigilância | Incluídos na faixa de R$ 22–35/m²/mês | Separar quando houver proposta de imóvel na região escolhida. |
| Licença de sistema e suporte (SAP/WMS) | Incluídos na mesma faixa | Separar quando a TI informar o custo por usuário ou por centro. |
| Seguro do estoque e do imóvel | **Não incluído** | Pedir à Controladoria; não somar se a apólice corporativa já cobrir o CD. |
| Manutenção de empilhadeira e equipamentos | **Não incluída** | Pode entrar como locação de equipamento, o que reduziria o investimento da Tabela 3.1. Não contar nas duas linhas. |
| Perdas, obsolescência e custo de capital do estoque | **Fora desta seção** | Já tratados na economia recorrente de estoque (17,5% a.a., seção 4.1.3). |
| Redução de equipe ou espaço nas usinas | **Não considerada** | Só entra quando a Atvos informar a estrutura atual e o que de fato deixaria de existir. |
| Viagens de urgência | **Não incluídas** | R$ 2,8 mil a R$ 6,4 mil por viagem de 300 km no piso ANTT (Benefícios e impactos, Tabela 10). |

**Frete é o fator mais sensível.** No A1, a distribuição sozinha varia de R$ 0,68 mi a R$ 3,83 mi por ano dentro das faixas testadas, mais do que toda a armazenagem. O piso ANTT é um mínimo legal: a tarifa contratada tende a ser igual ou maior. Para o C1 (CD BRM em Mineiros), o estudo de regiões estima **R$ 297 mil/ano** de saída no piso (2 viagens/semana, R$ 4,00/km), bem abaixo do frete do A1 por atender só quatro usinas a até 172 km ([Comparação de regiões, Tabela 2.11](./Comparacao_Regioes_CD.md)). Esse valor usa outro recorte (quatro grupos) e outra frequência e **não deve substituir** a linha de frete do A1 ou do A2.

---

## 3.3. Impostos que podem afetar os custos das alternativas

> **Análise exploratória, não parecer tributário.** Os pontos abaixo organizam as perguntas para a área fiscal da Atvos com base na reunião de alinhamento e na legislação geral. As alíquotas são **nominais e ilustrativas**, sem cálculo "por dentro", benefícios estaduais ou regimes especiais. Nenhum valor desta seção entra no saldo das alternativas até ser confirmado.

### 3.3.1. Onde o imposto aparece em cada alternativa

Segundo a Atvos, as oito usinas estão em **cinco CNPJs**: UMV, UAE, UCR e UAT na mesma raiz (BRM, em GO, MS e MT) e URC, USL, UEL e UCP em CNPJs próprios ([Comparação de regiões, Tabela 2.10](./Comparacao_Regioes_CD.md)). Entre CNPJs diferentes, a movimentação é uma **venda**; como os materiais MRO são em geral de **uso e consumo**, a usina compradora tende a não recuperar o ICMS. Foi isso que a Atvos descreveu como imposto que vai "empilhando" e que interrompeu a tentativa anterior de armazém em Mineiros.

**Tabela 3.5 – Tributos que podem incidir e onde**

| Tributo | Quando pode incidir | Alternativas afetadas | Efeito no custo |
| --- | --- | --- | --- |
| **ICMS interestadual** (7% ou 12%; 4% para importados) | Venda do CD para usina de outro CNPJ em outro estado | A1, A2 (usinas fora da BRM) | Custo para a compradora se não houver crédito |
| **ICMS interno** (alíquota modal do estado) | Venda do CD para usina de outro CNPJ no mesmo estado | A1, A2 | Idem |
| **Diferencial de alíquota (DIFAL)** | Entrada interestadual de material de uso e consumo; pode mudar de estado se a compra passar a ser feita pelo CD | Todas, inclusive A0 | Pode subir ou cair conforme o estado do CD e das usinas |
| **ICMS em transferência entre estabelecimentos do mesmo CNPJ** | CD BRM → UMV, UAE, UCR, UAT | C1/C5, A0 (piloto) | Não incidência após STF ADC 49 e LC 204/2023; confirmar DIFAL e transferência de crédito |
| **PIS/Cofins** (9,25% no regime não cumulativo) | Receita da venda entre CNPJs | A1, A2 | Crédito do comprador depende de o item ser "insumo" (STJ, REsp 1.221.170/PR) |
| **IPI** | Só se o CNPJ vendedor for industrial ou equiparado para esses itens | A1, A2 | Em geral não se aplica a revenda; confirmar |
| **ICMS sobre frete** e créditos de PIS/Cofins sobre frete e aluguel | Contratação de transporte e locação do CD | A0+, A1, A2 | Pode reduzir o custo líquido das Tabelas 3.4 e 3.1; confirmar se os valores já são líquidos |
| **IBS e CBS** (reforma tributária) | A partir de 2027 (CBS) e de 2029 (IBS), com fim do ICMS em 2033 | Todas | Crédito amplo, inclusive para uso e consumo, tende a reduzir o empilhamento |

*Fontes: Constituição Federal, art. 155, §2º, VII e VIII (DIFAL); Resolução do Senado Federal nº 22/1989 (alíquotas interestaduais de 7% e 12%) e nº 13/2012 (4% para importados); STF, ADC 49 (2021) e Lei Complementar nº 204/2023 (transferências entre estabelecimentos do mesmo titular); Leis nº 10.637/2002 e 10.833/2003 (PIS/Cofins não cumulativos); STJ, REsp 1.221.170/PR (2018, conceito de insumo); Emenda Constitucional nº 132/2023 e Lei Complementar nº 214/2025 (IBS e CBS). Consultados em nov. 2026. Transcrição da reunião de alinhamento com a Atvos (nov. 2026).*

### 3.3.2. Ordem de grandeza ilustrativa

Para mostrar por que o imposto pode decidir a escolha, foram montados dois extremos. **Nenhum deles é uma estimativa do imposto real.**

- **Estrutura neutra:** o CD compra para revenda, aproveita os créditos e vende ao custo. Em tese, o ICMS total por material fica próximo do que a usina já paga ao comprar direto do fornecedor (alíquota interestadual + DIFAL), e o PIS/Cofins líquido incide só sobre a margem. O custo incremental tende a ser **próximo de zero**, mais o custo de obrigações acessórias.
- **Empilhamento (prática relatada pela Atvos):** o CNPJ que compra trata o material como uso e consumo, sem crédito, e depois o revende a outro CNPJ. A venda gera novamente ICMS (12% interestadual entre GO, MS e MT) e PIS/Cofins (9,25%), cerca de **21% do valor movimentado** como custo adicional.

**Tabela 3.6 – Ordem de grandeza do imposto nas movimentações entre CNPJs (R$ mil/ano, ilustrativo)**

| Alternativa | Consumo que passa pelo CD (R$ mi/ano) | Parcela de outros CNPJs | Consumo entre CNPJs (R$ mi/ano) | Estrutura neutra | Empilhamento (≈ 21,25%) |
| --- | ---: | ---: | ---: | ---: | ---: |
| A0 / A0+ | — | — | Transferências pontuais | ≈ 0 | Não estimado |
| A1 – CD centralizado | 72,35 | 57% | 41,24 | ≈ 0 | 8.763 |
| A2 – Híbrido | 12,06 | 57% | 6,87 | ≈ 0 | 1.461 |
| C1/C5 – CD BRM | Só usinas BRM | 0% | 0 | ≈ 0 | 0 |

*Cálculo: consumo entre CNPJs × (12% + 9,25%). A parcela de 57% vem do recorte de quatro grupos da [Comparação de regiões](./Comparacao_Regioes_CD.md) (Tabela 2.10) e é usada como aproximação para os seis grupos até que a participação por CNPJ seja recalculada nessa base.*

**Leitura:** com empilhamento, o imposto do A1 seria mais de três vezes o seu custo de funcionamento adicional, e o do A2 superaria todo o saldo positivo do híbrido (Tabela 3.8). O **ponto de equilíbrio do A2** é baixo: o híbrido continua melhor que a situação atual somente se o custo tributário incremental ficar abaixo de cerca de **R$ 110 mil/ano**, ou **1,6% do consumo** que cruza CNPJs (110 ÷ 6.874). Por isso o C1/C5, que só movimenta estoque dentro da BRM, é a configuração que passa no filtro tributário com as regras atuais.

### 3.3.3. Pontos a confirmar com a área fiscal da Atvos

| # | Pergunta | Por que importa | Alternativas |
| --- | --- | --- | --- |
| F1 | Confirmar os cinco CNPJs, as inscrições estaduais e se URC pertence à BRM | Define quais usinas podem compartilhar estoque sem venda | Todas |
| F2 | Um CD BRM em GO, MS ou MT precisa de nova inscrição estadual? Há DIFAL ou estorno de crédito nas transferências interestaduais de uso e consumo para UMV, UAE, UCR e UAT? | Valida o C1/C5 e a escolha entre Mineiros, Alto Taquari e Costa Rica | C1/C5 |
| F3 | É possível o CD comprar como revenda (com crédito) e vender ao custo para os outros CNPJs? Qual o custo de obrigações acessórias? | Separa a estrutura neutra do empilhamento | A1, A2 |
| F4 | Os materiais MRO de manutenção agrícola e industrial são tratados como insumo para crédito de PIS/Cofins? | Reduz ou elimina a parcela de 9,25% | A1, A2 |
| F5 | Estoques separados por CNPJ no mesmo prédio (filiais ou armazém geral) são viáveis? E o *cross-docking* sem troca de propriedade em Ribeirão Preto? | Permite compartilhar estrutura sem vender material | A1, A2, C4, C5 |
| F6 | Como o DIFAL das compras muda se o local de entrega passar a ser o CD, e não a usina? | Pode mudar o custo de compra mesmo sem venda entre CNPJs | A1, A2, C1/C5 |
| F7 | Há benefícios fiscais estaduais (GO, MS, MT, SP) aplicáveis a centros de distribuição ou às usinas? | Pode favorecer uma região | Escolha da região |
| F8 | Os custos de frete e aluguel desta seção devem ser lidos com ou sem os créditos de PIS/Cofins e ICMS sobre frete? | Evita contar crédito duas vezes ou não contar | A0+, A1, A2 |
| F9 | Qual o efeito do IBS e da CBS nas vendas entre CNPJs durante a transição (2027–2032), em que o ICMS ainda existe? | Define se o C2/A1 volta a ser candidato e a partir de quando | A1, C2 |

---

## 3.4. Comparação do custo total com a situação atual, sem dupla contagem

### 3.4.1. Regras para não contar o mesmo custo ou benefício duas vezes

| Efeito | Onde é contado | Onde **não** é contado |
| --- | --- | --- |
| Capital liberado pela redução de estoque | Uma única vez, como caixa da transição (seção 4.1.3) | Não entra como economia anual nem abate o investimento da Tabela 3.1 |
| Custo de capital, perdas e obsolescência do estoque | Economia recorrente de 17,5% a.a. sobre o capital liberado | Não entra nos custos de armazenagem. A taxa de 20%–30% da Sprint 1 **não** é usada aqui, porque ela já inclui espaço e equipe, que estão na Tabela 3.4 |
| Espaço e equipe do CD | Tabela 3.4 | Não abatidos das usinas sem confirmação |
| Frete de entrada | Alívio de 0,5% na Tabela 3.4 | No C5, o *cross-docking* em Ribeirão Preto e o alívio de entrada atuam sobre os mesmos fretes; contar uma vez só |
| Ganhos de compra | Ganho potencial da seção 4.2.1 | Se os contratos já forem corporativos, o ganho cai para próximo de zero. Não repetir ganhos do piloto e da consolidação de pneus já existentes |
| Piloto do Polo Norte | Faz parte da situação atual (A0) | Ganhos do piloto não são atribuídos ao CD |
| Imposto nas vendas entre CNPJs | Linha própria (Tabela 3.6), só a diferença frente ao que a usina já paga ao comprar direto | Não somado ao frete; o DIFAL que já é pago hoje não vira economia |
| Compras para corrigir faltas (R$ 3,16 mi vs. R$ 5,75 mi) e disponibilidade | Indicadores de atendimento (seção 4.3) | Não convertidos em reais nem somados ao saldo |
| Investimento | Custo anual equivalente (abaixo) | Não somado novamente como custo de funcionamento |

### 3.4.2. Custo total por alternativa

Para colocar investimento e custos anuais na mesma unidade, o investimento foi convertido em **custo anual equivalente**, usando a mesma taxa de custo de capital da economia de estoque (13,5% a.a.) e um horizonte de **5 anos**, sem valor residual:

```text
Fator de recuperação do capital = i × (1 + i)^n ÷ ((1 + i)^n − 1)
                                = 0,135 × 1,135^5 ÷ (1,135^5 − 1) = 0,2878
Custo anual equivalente         = Investimento × 0,2878
```

O horizonte de 5 anos é uma **suposição da equipe** a validar com Finanças. Com 10 anos, o fator cai para 0,1880.

**Tabela 3.7 – Custo total adicional frente à situação atual (R$ mil/ano, cenário esperado, antes de tributos)**

| Componente | A0 | A0+ | A1 – CD centralizado | A2 – Híbrido |
| --- | ---: | ---: | ---: | ---: |
| Investimento de implantação (R$ mil, único) | 0 | 57,5 | 1.150 | 506 |
| Custo anual equivalente do investimento (5 anos, 13,5%) | 0 | 16,55 | 330,96 | 145,62 |
| Custo de funcionamento adicional (Tabela 3.4) | 0 | 100,00 | 2.510,00 | 1.120,00 |
| **Custo total adicional** | **0** | **116,55** | **2.840,96** | **1.265,62** |
| Equivalente mensal | 0 | 9,7 | 236,7 | 105,5 |

Custo isolado não decide: as alternativas também geram benefícios. A Tabela 3.8 junta os dois lados usando os benefícios já calculados na seção 4, **sem acrescentar nenhum benefício novo**.

**Tabela 3.8 – Saldo econômico anual com o investimento (R$ mil/ano, cenário esperado)**

| Indicador | A0 | A0+ | A1 – CD centralizado | A2 – Híbrido |
| --- | ---: | ---: | ---: | ---: |
| Economia recorrente de estoque (17,5% × capital liberado) | 0 | 603,75 | 950,25 | 756,00 |
| Ganho potencial em compras | 0 | 0 | 780,00 | 620,00 |
| (−) Custo total adicional (Tabela 3.7) | 0 | −116,55 | −2.840,96 | −1.265,62 |
| **Saldo econômico, antes de tributos** | **0** | **487,20** | **−1.110,71** | **110,38** |
| **Diferença frente à A0+** | — | **0** | **−1.597,91** | **−376,82** |
| *Para comparação: saldo sem o investimento (seção 5.3)* | *0* | *503,75* | *−779,75* | *256,00* |
| Capital liberado uma vez (R$ mil, não somado acima) | 0 | 3.450 | 5.430 | 4.320 |
| Capital de giro adicional | — | A confirmar | A confirmar | A confirmar |
| Imposto nas vendas entre CNPJs (Tabela 3.6) | — | ≈ 0 | 0 a 8.763 | 0 a 1.461 |

**Leitura:**

1. **A otimização sem CD continua sendo a referência mais favorável.** Com o investimento incluído, ela mantém saldo de cerca de R$ 0,49 mi/ano com desembolso de apenas R$ 57,5 mil.
2. **O CD centralizado custa mais do que gera** no cenário esperado: o saldo cai para −R$ 1,11 mi/ano e fica R$ 1,60 mi/ano abaixo da A0+, antes de qualquer imposto.
3. **O híbrido fica pouco acima da situação atual** (+R$ 0,11 mi/ano), mas R$ 0,38 mi/ano abaixo da A0+. Esse saldo é pequeno diante da incerteza do frete e dos impostos: basta um custo tributário de 1,6% sobre o consumo que cruza CNPJs para zerá-lo.
4. **O capital liberado não paga o investimento.** Ele é um efeito de caixa único da transição e já está representado pela economia de 17,5% a.a. Usá-lo para abater a implantação contaria o mesmo benefício duas vezes.
5. **Payback não foi calculado**, pelas mesmas razões da seção 5.3: faltam fluxo de caixa incremental, cronograma, giro e tributos confirmados.

---

## 3.5. Limitações e informações pendentes

| Pendência | Responsável a consultar | O que substitui nesta seção |
| --- | --- | --- |
| Propostas de imóvel, adaptação, equipamentos, sistema e partida, por região | Suprimentos, Engenharia e TI | Tabelas 3.1 e 3.2 |
| Volume físico (m³, paletes, peso) dos itens que passariam pelo CD, em especial pneus e lubrificantes | Planejamento de Materiais | Área e porte do CD |
| Custo atual dos oito almoxarifados, equipe e frete (CIF/FOB, frota própria) | Operações, Logística e Controladoria | Linha de base absoluta da A0 |
| Aluguel por m² em Mineiros, Alto Taquari e Costa Rica | Pesquisa de mercado | Faixa de R$ 22–35/m²/mês |
| Tarifa contratada de transporte e frequência real de entregas | Compras e Logística | Piso ANTT e viagens por semana |
| Seguro, licenças (alvará, AVCB, licença ambiental) e manutenção de equipamentos | Controladoria e Jurídico | Itens hoje não incluídos |
| Pontos F1 a F9 | Área fiscal da Atvos | Tabela 3.6 e linha de tributos da Tabela 3.8 |
| Horizonte de análise e taxa de desconto | Finanças | Custo anual equivalente da Tabela 3.7 |
| Dimensionamento do C1/C5 sobre a estrutura do piloto | Logística e equipe do Polo Norte | Investimento e custo próprios da configuração preferencial |

## 3.6. Fontes

**Documentos do projeto:** [Abastecimento atual e seus custos](../001_Diagnostico_Abastecimento/Diagnostico_Atual_MRO.md) (seção 3.6); [Organização dos dados e alternativas](../001_Diagnostico_Abastecimento/Organizacao_Dados_Alternativas.md) (Tabelas 7, 8 e 9); [Comparação de regiões](./Comparacao_Regioes_CD.md) (Tabelas 2.10 e 2.11, seções 2.8 e 2.10.1); [Estimativa de benefícios e impactos](./Beneficios_Impactos.md) (Tabelas 4 a 8 e 15); [Planilha e conclusão inicial de viabilidade](./Viabilidade_Inicial.md) (seções 5.2 e 5.3).

**Dados da Atvos:** Base de planejamento de materiais (recebida em 09/11/2026); Base consolidada de planejamento de materiais (recebida em 11/11/2026); apresentação Estoque compartilhado – Polo Norte (recebida em 09/11/2026); transcrição da reunião de alinhamento (nov. 2026).

**Referências externas:** ANTT, pisos mínimos de frete rodoviário, carga geral (2026); Portal Salário, almoxarife (2026); InfoJobs, vaga de almoxarife em Mineiros/GO (2026); legislação tributária listada na Tabela 3.5 (consultada em nov. 2026).
