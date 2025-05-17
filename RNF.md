# Requisitos Não Funcionais e User Stories

A seguir, estão listados 5 requisitos não funcionais do sistema de reservas de voos.

## RNF01:

* **Nome:** Resposta Rápida na Pesquisa de Voos
* **Característica da ISO 25010:** Eficiência de desempenho
* **User Story:** Como um usuário, eu quero que os resultados da minha pesquisa de voos sejam exibidos em no máximo 3 segundos, para que eu possa encontrar e selecionar voos de forma eficiente.
* **Descrição:** O sistema deve ser capaz de processar as consultas de pesquisa de voos e exibir os resultados relevantes dentro de um tempo de resposta aceitável (3 segundos) sob condições normais de carga.
* **Justificativa:** Uma resposta rápida na pesquisa de voos permite que os usuários naveguem pelas opções disponíveis de forma fluida e sem frustrações. Isso melhora a experiência geral do usuário, tornando o processo de reserva mais ágil e eficiente. Usuários são mais propensos a continuar usando o sistema se as informações que procuram forem apresentadas rapidamente.
* **Métricas de sucesso:** 
    - Tempo Máximo de Resposta: 99% das requisições de pesquisa de voos não devem exceder 3 segundos sob carga normal

## RNF02:

* **Nome:** Alta Disponibilidade do Sistema de Reservas
* **Característica da ISO 25010:** Confiabilidade
* **User Story:** Como um usuário, eu quero poder acessar o sistema de reservas a qualquer momento, para que eu possa pesquisar e reservar voos quando for conveniente para mim.
* **Descrição:** O sistema de reservas deve estar disponível para os usuários 24 horas por dia, 7 dias por semana, com um tempo de inatividade mínimo (meta de uptime de 99.9%).
* **Justificativa:** A alta disponibilidade garante que os usuários possam acessar o sistema sempre que precisarem, independentemente do horário ou dia. Isso é crucial para a conveniência do usuário, permitindo que planejem e reservem suas viagens a qualquer momento, sem se preocupar com interrupções no serviço.
* **Métricas de sucesso:** 
    - Número de Incidentes de Indisponibilidade: O número de incidentes de indisponibilidade não planejada com duração superior a 5 minutos não deve exceder 1 por mês.

## RNF03:

* **Nome:** Acesso Administrativo Seguro com Autenticação Multifator
* **Característica da ISO 25010:** Segurança
* **User Story (Administrador):** Como um administrador do sistema, eu preciso acessar a interface administrativa de forma segura através de um método de autenticação, para garantir que apenas o pessoal autorizado possa gerenciar informações sensíveis do sistema e dos usuários.
* **Descrição:** O acesso à "Interface do Administrador" e ao "serviços de gestão de sistema" deve ser rigorosamente protegido para garantir que apenas funcionários autorizados da companhia aérea possam gerenciar dados críticos do sistema, informações de voos, reservas e dados de clientes. Para alcançar esse nível de segurança, o sistema deve implementar a **Autenticação Multifator (MFA)**. A MFA exigirá que os administradores forneçam pelo menos duas formas distintas de verificação de identidade antes de conceder acesso. 
* **Justificativa (Comuns):** Embora este requisito se concentre na segurança do acesso administrativo, ele impacta diretamente a segurança dos usuários comuns. Ao garantir que a administração do sistema seja protegida com autenticação, reduz-se o risco de invasores comprometerem o sistema através de contas administrativas.
* **Métricas de sucesso:** 
    - Taxa de Adoção de MFA: 100% das contas de administrador devem ter a autenticação multifator (MFA) habilitada e em uso.

## RNF04: 

* **Nome:** Capacidade de Lidar com Picos de Demanda
* **Característica da ISO 25010:** Eficiência de desempenho
* **User Story:** Como um usuário, eu espero que o sistema continue funcionando de forma eficiente mesmo durante períodos de alta demanda (como feriados ou promoções), para que eu possa reservar meus voos sem lentidão ou falhas.
* **Descrição:** O sistema deve ser escalável para lidar com um aumento significativo no número de usuários e no volume de transações sem degradação significativa do desempenho. Isso pode envolver escalabilidade horizontal (adicionar mais servidores) ou vertical (aumentar os recursos dos servidores).
* **Justificativa:** A escalabilidade garante que a experiência do usuário permaneça consistente mesmo durante os períodos de pico de acesso. Os usuários não enfrentarão lentidão, timeouts ou falhas no sistema quando muitos outros usuários estiverem acessando-o simultaneamente, garantindo uma experiência de reserva confiável em qualquer situação.
* **Métricas de sucesso:** 
    - - Tempo Máximo de Resposta em Pico: Em 90% das pesquisas durante períodos de pico, o tempo não deve exceder 5 segundos.

## RNF05: 

* **Nome:** Facilidade de Manutenção e Atualização
* **Característica da ISO 25010:** Manutenibilidade
* **User Story:** Como um usuário, eu espero que o sistema seja atualizado regularmente com novas funcionalidades e correções de erros sem longos períodos de inatividade, para que eu sempre tenha acesso a um sistema moderno e funcionando corretamente.
* **Descrição:** A arquitetura do sistema deve ser projetada de forma a facilitar a manutenção, atualizações e implantação de novas funcionalidades com o mínimo de interrupção para os usuários. A modularidade e a separação de responsabilidades (características da SOA) contribuem para a manutenibilidade.
* **Justificativa:** Um sistema fácil de manter permite que a companhia aérea implemente melhorias e correções de forma eficiente. Isso se traduz em um sistema mais estável, com menos bugs e com a adição de novas funcionalidades que podem aprimorar a experiência do usuário ao longo do tempo, sem causar grandes inconvenientes devido a longos períodos de manutenção.
* **Métricas de sucesso:** 
    - Tempo Médio para Correção de Bugs Críticos: O tempo médio para corrigir e implantar uma correção para bugs críticos (prioridade alta) não deve exceder 48 horas.