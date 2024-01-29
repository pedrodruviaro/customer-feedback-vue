<script setup lang="ts">
import RoadmapGroup from '@/components/roadmap/RoadmapGroup.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

const groups = [
  {
    title: 'Planned',
    color: '#0000ff',
    items: [
      {
        title: 'Incluir Logo We.dash'
      },
      { title: 'Criação de automação para confirmação de envio de resposta do ENPS mensal' },
      { title: 'Notificação para gasto da verba de mídia' },
      { title: 'Integração com API de terceiros' },
      { title: 'Atualização de bibliotecas externas' },
      { title: 'Implementação de autenticação de dois fatores' },
      { title: 'Melhoria na interface do usuário' },
      { title: 'Adição de funcionalidade de pesquisa' },
      { title: 'Otimização de consultas no banco de dados' },
      { title: 'Desenvolvimento de relatórios personalizados' },
      { title: 'Inclusão de suporte a múltiplos idiomas' },
      { title: 'Adição de validações de entrada de dados' },
      { title: 'Implementação de testes automatizados' },
      { title: 'Integração com serviço de análise de dados' },
      { title: 'Adaptação para dispositivos móveis' },
      { title: 'Criação de tutoriais interativos' },
      { title: 'Implementação de logs detalhados' },
      { title: 'Melhoria na segurança da aplicação' },
      { title: 'Adição de funcionalidade de arrastar e soltar' },
      { title: 'Integração com sistema de controle de versão' },
      { title: 'Configuração de ambiente de desenvolvimento local' },
      { title: 'Criação de página de perfil do usuário' },
      { title: 'Adição de opção de tema escuro' },
      { title: 'Implementação de sugestões de pesquisa em tempo real' },
      { title: 'Atualização de documentação técnica' },
      { title: 'Desenvolvimento de API RESTful' },
      { title: 'Inclusão de suporte a notificações push' },
      { title: 'Adição de funcionalidade de exportação de dados' },
      { title: 'Otimização de performance da aplicação' },
      { title: 'Criação de página de configurações' },
      { title: 'Integração com serviço de análise de comportamento do usuário' }
    ]
  },
  {
    title: 'In Progress',
    color: '#570875',
    items: [
      {
        title: 'Incluir Logo We.dash'
      },
      { title: 'Criação de automação para confirmação de envio de resposta do ENPS mensal' },
      { title: 'Notificação para gasto da verba de mídia' },
      { title: 'Integração com API de terceiros' },
      { title: 'Atualização de bibliotecas externas' },
      { title: 'Implementação de autenticação de dois fatores' },
      { title: 'Melhoria na interface do usuário' },
      { title: 'Adição de funcionalidade de pesquisa' },
      { title: 'Otimização de consultas no banco de dados' },
      { title: 'Desenvolvimento de relatórios personalizados' },
      { title: 'Inclusão de suporte a múltiplos idiomas' },
      { title: 'Adição de validações de entrada de dados' },
      { title: 'Implementação de testes automatizados' },
      { title: 'Integração com serviço de análise de dados' },
      { title: 'Adaptação para dispositivos móveis' },
      { title: 'Criação de tutoriais interativos' },
      { title: 'Implementação de logs detalhados' },
      { title: 'Melhoria na segurança da aplicação' },
      { title: 'Adição de funcionalidade de arrastar e soltar' },
      { title: 'Integração com sistema de controle de versão' },
      { title: 'Configuração de ambiente de desenvolvimento local' },
      { title: 'Criação de página de perfil do usuário' },
      { title: 'Adição de opção de tema escuro' },
      { title: 'Implementação de sugestões de pesquisa em tempo real' },
      { title: 'Atualização de documentação técnica' },
      { title: 'Desenvolvimento de API RESTful' },
      { title: 'Inclusão de suporte a notificações push' },
      { title: 'Adição de funcionalidade de exportação de dados' },
      { title: 'Otimização de performance da aplicação' },
      { title: 'Criação de página de configurações' },
      { title: 'Integração com serviço de análise de comportamento do usuário' }
    ]
  },
  {
    title: 'Complete',
    color: '#00ff00',
    items: [
      {
        title: 'Incluir Logo We.dash'
      },
      { title: 'Criação de automação para confirmação de envio de resposta do ENPS mensal' },
      { title: 'Notificação para gasto da verba de mídia' },
      { title: 'Integração com API de terceiros' },
      { title: 'Atualização de bibliotecas externas' },
      { title: 'Implementação de autenticação de dois fatores' },
      { title: 'Melhoria na interface do usuário' },
      { title: 'Adição de funcionalidade de pesquisa' },
      { title: 'Otimização de consultas no banco de dados' },
      { title: 'Desenvolvimento de relatórios personalizados' },
      { title: 'Inclusão de suporte a múltiplos idiomas' },
      { title: 'Adição de validações de entrada de dados' },
      { title: 'Implementação de testes automatizados' },
      { title: 'Integração com serviço de análise de dados' },
      { title: 'Adaptação para dispositivos móveis' },
      { title: 'Criação de tutoriais interativos' },
      { title: 'Implementação de logs detalhados' },
      { title: 'Melhoria na segurança da aplicação' },
      { title: 'Adição de funcionalidade de arrastar e soltar' },
      { title: 'Integração com sistema de controle de versão' },
      { title: 'Configuração de ambiente de desenvolvimento local' },
      { title: 'Criação de página de perfil do usuário' },
      { title: 'Adição de opção de tema escuro' },
      { title: 'Implementação de sugestões de pesquisa em tempo real' },
      { title: 'Atualização de documentação técnica' },
      { title: 'Desenvolvimento de API RESTful' },
      { title: 'Inclusão de suporte a notificações push' },
      { title: 'Adição de funcionalidade de exportação de dados' },
      { title: 'Otimização de performance da aplicação' },
      { title: 'Criação de página de configurações' },
      { title: 'Integração com serviço de análise de comportamento do usuário' }
    ]
  }
]
</script>

<template>
  <DefaultLayout>
    <h2 class="bold text-lg font-semibold mb-6">Roadmap</h2>

    <section class="grid gap-4 lg:grid-cols-3 lg:gap-8">
      <RoadmapGroup
        v-for="group in groups"
        :key="group.title"
        :color="group.color"
        :items="group.items"
        :title="group.title"
      />
    </section>
  </DefaultLayout>
</template>
