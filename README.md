# Documentação da Arquitetura SOA do Sistema de Reservas de Voos

## Visão Geral da Arquitetura

&emsp; Este documento descreve a arquitetura Service-Oriented Architecture (SOA) proposta para o sistema de reservas de voos. A arquitetura é baseada em serviços independentes que se comunicam entre si para fornecer as funcionalidades do sistema. O objetivo principal é criar um sistema flexível, escalável e facilmente integrável com serviços externos para aprimorar a experiência do usuário e reduzir a necessidade de desenvolvimento interno extensivo.

## Arquitetura SOA

<div align="center">
<sub> Arquitetura SOA </sub>
<img src="SOA.png" alt='Arquitura SOA' width="100%">
<sup>Fonte: Material produzido pela autora</sup>
</div>

### Blocos da Arquitetura

&emsp; A arquitetura SOA do sistema de reservas de voos é composta pelos seguintes blocos principais, organizados em camadas para melhor separação de responsabilidades:

* **Camada de Apresentação (Frontend):** Responsável pela interação do usuário e administrador com relação ao sistema. Contém:
    * **Interface do Usuário:** Permite aos clientes pesquisar voos, fazer reservas e gerenciar seus perfis.
    * **Interface do Administrador:** Permite aos funcionários da companhia aérea gerenciar voos, assentos e informações de clientes.

* **Serviços Internos:** Contêm a lógica de negócios principal do sistema, exposta como serviços independentes e reutilizáveis:
    * **Serviço de Autenticação e Autorização:** Responsável por autenticar e autorizar usuários (clientes e administradores) para acessar o sistema e seus recursos.
    * **Serviço de Pesquisa de Voos:** Permite aos usuários pesquisar voos com base em critérios como origem, destino, data e preferências.
    * **Serviço de Reservas:** Orquestra o processo de reserva de voos, interagindo com outros serviços para verificar disponibilidade, processar pagamentos e gerar confirmações.
    * **Serviço de Gerenciamento de Voos:** Permite a criação, leitura, atualização e exclusão de informações sobre voos (horários, rotas, aeronaves).
    * **Serviço de Notificações:** Responsável por enviar notificações aos usuários, como confirmações de reserva e alertas.
    * **Serviço de Pagamentos:** Facilita o processamento de pagamentos para as reservas.

* **Camada de Dados:** Responsável pela persistência dos dados do sistema:
    * **Banco de Dados de Voos e Reserva:** Armazena informações sobre voos, horários, preços, disponibilidade de assentos e detalhes das reservas.
    * **Banco de Dados de Usuários:** Armazena informações sobre os usuários do sistema (clientes e administradores), incluindo dados de perfil e credenciais de autenticação.

* **Serviços Externos:** APIs de terceiros integradas para estender a funcionalidade do sistema e melhorar a experiência do usuário.

### Integração com Serviços Externos 

&emsp; O sistema de reservas de voos se integra com os seguintes serviços externos para otimizar funcionalidades e reduzir a necessidade de desenvolvimento interno:

* **API de Geolocalização:** Utilizada para detectar automaticamente a localização do usuário, facilitando a pesquisa de voos a partir de sua cidade.
* **API de Processamento de Pagamentos:** Integração com um gateway de pagamento para processar transações financeiras de forma segura durante o processo de reserva.
* **API de Companhias Aéreas (Opcional):** Pode ser integrada para obter informações de voos em tempo real, detalhes de voos de outras companhias aéreas (para um possível cenário de voos de conexão) ou informações adicionais sobre aeroportos e voos.
* **API de Notificação (Serviço de Email):** Utilizada pelo Serviço de Notificações para enviar e-mails de confirmação de reserva e outras comunicações aos usuários.

&emsp; A integração com esses serviços externos permite que o sistema ofereça funcionalidades avançadas sem a necessidade de desenvolver toda a lógica internamente, aproveitando a expertise de provedores especializados.

### Justificação dos Elementos e Ligações

&emsp; A arquitetura é estruturada em camadas para promover a manutenibilidade.

* **Camada de Apresentação:** Separa a interface do usuário da lógica de negócios, permitindo flexibilidade para diferentes tipos de clientes (web, mobile) e interfaces de administração. A comunicação bidirecional com os serviços internos permite que as interfaces enviem requisições e recebam dados para exibição.

* **Serviços Internos:** Representam a lógica de negócios central do sistema. Cada serviço é independente e responsável por uma funcionalidade específica, seguindo os princípios SOA de reusabilidade e autonomia. A comunicação bidirecional com a camada de dados permite que os serviços persistam e recuperem informações necessárias para suas operações. A comunicação bidirecional com os serviços externos indica o consumo de funcionalidades especializadas fornecidas por terceiros.

* **Camada de Dados:** Fornece a persistência dos dados do sistema. A separação em dois bancos de dados permite otimizar o armazenamento e o acesso a diferentes tipos de informações (dados de voos e reservas e dados de usuários). A comunicação bidirecional com os serviços internos permite que estes leiam e escrevam dados conforme necessário.

* **Serviços Externos:** São integrados para delegar responsabilidades específicas a sistemas especializados, como geolocalização, processamento de pagamentos e envio de notificações. Isso reduz a complexidade do sistema interno e aproveita a expertise de terceiros, focando o desenvolvimento interno na lógica de negócios principal da companhia aérea. A comunicação bidirecional dos serviços internos para os serviços externos representa o consumo dessas APIs.

## RNF (Requisito não funcional)

Para acessar os RNFs do projeto é necessario acessar o arquivo [RNF.md](RNF.md)

## Simulação de site de reserva de voos

### 📌 Como Acessar a Simulação

### Pré-requisitos
✔️ Ter a extensão **Live Server** instalada no VSCode  
*(Caso não tenha, instale através do Marketplace de Extensões)*

### Passo a Passo

1. **Localize** o arquivo `index.html`
2. **Clique com o botão direito** do mouse sobre o arquivo
3. **Selecione** a opção:  
   `"Open with Live Server"`

### Visualização
- A simulação será aberta automaticamente no seu navegador padrão
- O endereço será: `http://127.0.0.1:5500/index.html`


## Autoria e Desenvolvimento

**Autora Principal:**  
Karine Victoria Rosa da Paixão

**Processo de Revisão:**  
Este documento foi revisado e aprimorado com o auxílio das seguintes ferramentas de IA:
- DeepSeek
- Claude.ai
- Gemini

**Desenvolvimento Técnico:**  
Partes do código foram geradas utilizando os sistemas de IA mencionados.
