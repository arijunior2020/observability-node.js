# Observability Node.js

## Resumo:

Este projeto consiste em uma aplicação Node.js que expõe métricas sobre o desempenho e o estado da aplicação. Essas métricas podem ser coletadas pelo Prometheus, um sistema de monitoramento e alerta. Além disso, o Grafana, uma plataforma de visualização de métricas e análise, é utilizado para criar dashboards personalizados com base nas métricas coletadas.

## Explicação:

1. **Node.js Application:**
   - A aplicação Node.js é desenvolvida para fornecer informações sobre o desempenho e o estado da aplicação.
   - Métricas como uso de CPU, uso de memória, tempo de resposta, entre outros, são coletadas e disponibilizadas para monitoramento.

2. **Prometheus Integration:**
   - O Prometheus é configurado para coletar as métricas expostas pela aplicação Node.js.
   - Um endpoint `/metrics` é disponibilizado pela aplicação para que o Prometheus possa raspar essas métricas periodicamente.

3. **Grafana Dashboard Creation:**
   - Utilizando o Grafana, são criados dashboards personalizados para visualização das métricas coletadas.
   - Os dashboards podem conter gráficos, tabelas e alertas que fornecem insights sobre o desempenho e o estado da aplicação.
   - Os dashboards podem ser configurados de acordo com as necessidades específicas do usuário, permitindo uma análise detalhada das métricas.

4. **Dockerfile e Docker-compose:**
   - O cenário foi criado utilizando Docker para facilitar o gerenciamento e a implantação da aplicação, do Prometheus e do Grafana.
   - Um Dockerfile é fornecido para construir uma imagem do contêiner para a aplicação Node.js.
   - Um arquivo docker-compose.yml é configurado para criar e interligar os contêineres da aplicação, do Prometheus e do Grafana, facilitando a execução e a integração do ambiente.

## Instruções:

1. **Configuração do Prometheus e Grafana:**
   - Configure o Prometheus e o Grafana para coletar e visualizar as métricas da aplicação Node.js.
   - Adicione o endpoint `/metrics` da aplicação Node.js como um alvo de raspagem no arquivo de configuração do Prometheus.
   - Instale e configure o Grafana para se conectar ao Prometheus como uma fonte de dados.

2. **Execução da Aplicação:**
   - Clone o repositório.
   - Execute `docker-compose up` para iniciar todos os contêineres.
   - A aplicação Node.js estará disponível na porta especificada.
   - Acesse o Grafana através do navegador web para visualizar os dashboards configurados.

Com esse projeto, você poderá monitorar o desempenho e o estado da sua aplicação Node.js de forma eficiente e personalizada, utilizando as poderosas ferramentas Prometheus e Grafana, tudo isso em um ambiente Dockerizado para facilitar o gerenciamento e a implantação.

