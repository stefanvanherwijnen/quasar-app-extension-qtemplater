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

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
  name: 'PageAbout',
  meta: {
    title: '<%= about.label %>',
    titleTemplate: (title: string) => `${title} - <%= website.name %>`
  }
})
</script>

<style>
</style>
