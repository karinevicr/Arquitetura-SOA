# Requisitos Não Funcionais e User Stories (Identificados)

A seguir, estão listados 5 requisitos não funcionais do sistema de reservas de voos, cada um identificado com um código RNF (Requisito Não Funcional) sequencial.


## RNF01: Desempenho (Performance)

* **Nome:** Resposta Rápida na Pesquisa de Voos
* **User Story:** Como um usuário, eu quero que os resultados da minha pesquisa de voos sejam exibidos em no máximo 3 segundos, para que eu possa encontrar e selecionar voos de forma eficiente.
* **Descrição:** O sistema deve ser capaz de processar as consultas de pesquisa de voos e exibir os resultados relevantes dentro de um tempo de resposta aceitável (<= 3 segundos) sob condições normais de carga.
* **Funcionalidade para os Usuários:** Uma resposta rápida na pesquisa de voos permite que os usuários naveguem pelas opções disponíveis de forma fluida e sem frustrações. Isso melhora a experiência geral do usuário, tornando o processo de reserva mais ágil e eficiente. Usuários são mais propensos a continuar usando o sistema se as informações que procuram forem apresentadas rapidamente.


## RNF02: Disponibilidade

* **Nome:** Alta Disponibilidade do Sistema de Reservas
* **User Story:** Como um usuário, eu quero poder acessar o sistema de reservas a qualquer momento, para que eu possa pesquisar e reservar voos quando for conveniente para mim.
* **Descrição:** O sistema de reservas deve estar disponível para os usuários 24 horas por dia, 7 dias por semana, com um tempo de inatividade mínimo (meta de uptime de 99.9%).
* **Funcionalidade para os Usuários:** A alta disponibilidade garante que os usuários possam acessar o sistema sempre que precisarem, independentemente do horário ou dia. Isso é crucial para a conveniência do usuário, permitindo que planejem e reservem suas viagens a qualquer momento, sem se preocupar com interrupções no serviço.


## RNF03: Segurança

* **Nome:** Proteção de Dados Pessoais e de Pagamento
* **User Story:** Como um usuário, eu quero ter certeza de que minhas informações pessoais e detalhes de pagamento estão seguros ao usar o sistema de reservas, para que eu não precise me preocupar com acesso não autorizado ou roubo de dados.
* **Descrição:** O sistema deve implementar medidas de segurança robustas para proteger os dados dos usuários, incluindo informações pessoais e detalhes de pagamento. Isso envolve criptografia de dados sensíveis em trânsito e em repouso, autenticação segura e autorização adequada.
* **Funcionalidade para os Usuários:** A segurança robusta proporciona tranquilidade aos usuários ao fornecer suas informações confidenciais. Eles podem confiar que seus dados estão protegidos contra ameaças, o que é essencial para construir confiança no sistema e incentivar o uso para reservas e pagamentos online.


## RNF04: Escalabilidade

* **Nome:** Capacidade de Lidar com Picos de Demanda
* **User Story:** Como um usuário, eu espero que o sistema continue funcionando de forma eficiente mesmo durante períodos de alta demanda (como feriados ou promoções), para que eu possa reservar meus voos sem lentidão ou falhas.
* **Descrição:** O sistema deve ser escalável para lidar com um aumento significativo no número de usuários e no volume de transações sem degradação significativa do desempenho. Isso pode envolver escalabilidade horizontal (adicionar mais servidores) ou vertical (aumentar os recursos dos servidores).
* **Funcionalidade para os Usuários:** A escalabilidade garante que a experiência do usuário permaneça consistente mesmo durante os períodos de pico de acesso. Os usuários não enfrentarão lentidão, timeouts ou falhas no sistema quando muitos outros usuários estiverem acessando-o simultaneamente, garantindo uma experiência de reserva confiável em qualquer situação.


## RNF05: Manutenibilidade

* **Nome:** Facilidade de Manutenção e Atualização
* **User Story:** Como um usuário, eu espero que o sistema seja atualizado regularmente com novas funcionalidades e correções de erros sem longos períodos de inatividade, para que eu sempre tenha acesso a um sistema moderno e funcionando corretamente.
* **Descrição:** A arquitetura do sistema deve ser projetada de forma a facilitar a manutenção, atualizações e implantação de novas funcionalidades com o mínimo de interrupção para os usuários. A modularidade e a separação de responsabilidades (características da SOA) contribuem para a manutenibilidade.
* **Funcionalidade para os Usuários:** Um sistema fácil de manter permite que a companhia aérea implemente melhorias e correções de forma eficiente. Isso se traduz em um sistema mais estável, com menos bugs e com a adição de novas funcionalidades que podem aprimorar a experiência do usuário ao longo do tempo, sem causar grandes inconvenientes devido a longos períodos de manutenção.