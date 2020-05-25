<template>
  <q-page padding class="page-content">
    <q-markdown>
<%= about.content %>
    </q-markdown>
    <div class="row justify-around q-ma-lg ">
      <q-img
        style="width: 80%"
        :img-style="{ 'overflow': 'visible', 'width': '100%' }"
        src="~assets/logo.svg"
      />
    </div>
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
