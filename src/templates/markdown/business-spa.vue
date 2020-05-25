<template>
  <q-page
    padding
    class="page-content"
  >
    <q-markdown>
<%= page.content %>
    </q-markdown>
  </q-page>
</template>

<script>
export default {
  name: 'Page<%= page.title %>',
  meta: {
    title: '<%= page.title %>',
    titleTemplate: title => `${title} - <%= website.title %>`,
    meta: {
      description: { name: 'description', content: '<%= page.meta.description.replace(/'/g, "\\'") %>' },
      keywords: { name: 'keywords', content: '<%= page.meta.keywords %>' }
    }
  }
}
</script>

<style>
</style>
