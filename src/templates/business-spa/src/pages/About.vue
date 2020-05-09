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
    titleTemplate: title => '<%= about.label %> - Hondenvakantieboerderij Nicky'
  }
}
</script>

<style>
</style>
