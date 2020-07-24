<template>
  <q-page
    padding
    class="page-content"
  >
    <q-markdown src="<%= page.content %>">
    </q-markdown>
<% if (page.videos && page.videos.length) { %>
    <q-media-player type="video" :sources="videos" />
<% } if (page.images && page.images.length) { %>
    <q-carousel arrows animated v-model="slide" thumbnails :height="`${(($q.screen.width < 1120 ? $q.screen.width : 1120) / 1.6)}px`">
      <q-carousel-slide v-for="(image, key) in images" :key="key" :name="image.name" :img-src="image.src">
        <div class="absolute-top text-center text-white" style="background-color: rgba(0, 0, 0, .3)">
          <div class="text-subtitle1">{{ image.caption }}</div>
        </div>
      </q-carousel-slide>
    </q-carousel><% } %>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
export default defineComponent({
  name: 'Page<%= page.title %>',
  meta: {
    title: '<%= page.title %>',
    titleTemplate: (title: string) => `${title} - <%= website.name %>`,
    meta: {
      description: { name: 'description', content: '<%= page.meta.description.replace(/'/g, "\\'") %>' },
      keywords: { name: 'keywords', content: '<%= page.meta.keywords %>' }
    }
  },<% const returns = [] %>
  setup () {<% if (page.videos && page.videos.length) { returns.push('videos') %>
    const videos = ref([<% page.videos.forEach((val, key, arr) => { if (Object.is(page.videos.length - 1, key)) { %>
      <%= `{ src: '${val.src}', type: '${val.type}' }`%><% } else { %>
      <%= `{ src: '${val.src}', type: '${val.type}' },`%><% } }) %>
    ])<% } %><% if (page.images && page.images.length) { returns.push('images', 'slide') %>
    const images = ref([<% page.images.forEach((val, key, arr) => { if (Object.is(page.images.length - 1, key)) { %>
      <%= `{ name: '${val.name}', src: '${val.src}', caption: '${val.caption}' }`%><% } else { %>
      <%= `{ name: '${val.name}', src: '${val.src}', caption: '${val.caption}' },`%><% } }) %>
    ])
    const slide = ref(<%= `'${page.images[0].name}'`%>)<% } %>
    return {
      <%= returns.join(', ') %>
    }
  }
  // data () {
  //   return {<% if (page.videos && page.videos.length) { %>
  //     videos: [<% page.videos.forEach((val, key, arr) => { if (Object.is(page.videos.length - 1, key)) { %>
  //       <%= `{ src: '${val.src}', type: '${val.type}' }`%><% } else { %>
  //       <%= `{ src: '${val.src}', type: '${val.type}' },`%><% } }) %>
  //     ]<%= (page.videos && page.images) ? ',' : '' %><% } if (page.images && page.images.length) { %>
  //     images: [<% page.images.forEach((val, key, arr) => { if (Object.is(page.images.length - 1, key)) { %>
  //       <%= `{ name: '${val.name}', src: '${val.src}', caption: '${val.caption}' }`%><% } else { %>
  //       <%= `{ name: '${val.name}', src: '${val.src}', caption: '${val.caption}' },`%><% } }) %>
  //     ],
  //     slide: <%= `'${page.images[0].name}'`%><% } %>
  //   }
  // }
})
</script>

<style>
</style>
