<template>
  <q-page>
    <q-markdown>
      :::
      <%= page.content %>
      :::
    </q-markdown>
  </q-page>
</template>

<script>
export default {
  name: 'Page<%= page.name %>',
  meta: {
    title: '<%= page.name %>',
    titleTemplate: title => `${title} - <%= website.name %>`,
    meta: {
      description: { name: 'description', content: '<%= page.meta.description %>' },
      keywords: { name: 'keywords', content: '<%= page.meta.keywords %>' }
    }
  }
}
</script>

<style>
</style>
