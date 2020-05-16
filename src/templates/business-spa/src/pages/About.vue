<template>
  <q-page padding class="page-content">
    <q-markdown>
<%= about.content %>
    </q-markdown>
  </q-page>
</template>

<script>
export default {
  name: 'PageAbout',
  meta: {
    title: '<%= about.label %>',
    titleTemplate: title => `${title} - <%= website.name %>`
  }
}
</script>

<style>
</style>
