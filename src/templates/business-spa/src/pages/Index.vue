<template>
  <q-page>
    <div class="block window-width row justify-between">

      <q-parallax :height="800">
        <template #media>
          <img v-if="$q.screen.width < 800" src="images/landing/landing-portrait.jpg">
          <img v-if="$q.screen.width >= 800" src="images/landing/landing.jpg">
        </template>
        <template>
          <q-card
            class="page-content q-ma-md q-pa-lg"
            :style="{ 'background-color': $q.dark.isActive ? 'rgba(0, 0, 0, 0.7)' : 'rgba(240, 240, 240, 0.7)' }"
          >
          <div class="q-ma-md">
            <h3>
              <%= landingPage.header %>
            </h3>
            <p>
              <%= landingPage.content %>
            </p>
            <q-card-actions>
              <div class="row justify-center full-width">
                <q-btn
                  class="col"
                  to="<%= landingPage.CTA.route %>"
                  color="secondary"
                  text-color="grey-8"
                >
                  <%= landingPage.CTA.message %>
                </q-btn>
              </div>
            </q-card-actions>
          </div>
          </q-card>
        </template>
      </q-parallax>

    </div>

    <div class="row justify-center q-mt-lg"><% for (const qualityMark of qualityMarks) { %>
      <div class="col-3 text-center q-ma-md">
      <q-img
        src="<%= qualityMark.imageUrl %>"
        spinner-color="white"
        style="max-width: 150px"
        @click="openLink('<%= qualityMark.url %>')"
      />
        <!-- <a href="<%= qualityMark.url %>" target="_blank">
          <q-avatar square :style="$q.screen.gt.md ? 'height: 100px; width: 100px' : 'height: 80px; width: 80px'">
            <img src="<%= qualityMark.imageUrl %>" />
          </q-avatar>
        </a> -->
      </div><% } %>
    </div>

    <div class="row justify-center"><% for (const page of pages) { if (page.cta) { %>
      <q-card
        class="col-6 q-ma-md"
        style="width: 300px"
      >
        <q-card-section>
          <div class="row justify-center">
            <q-icon
              size="xl"
              name="<%= page.icon %>"
            />
          </div>
          <div class="row justify-center">
            <div class="text-subtitle2">
              <%= page.title %>
            </div>
          </div>
          <div class="row justify-center">
            <div class="text-caption text-center">
              <%= page.description %>
            </div>
          </div>
        </q-card-section>
        <q-separator />
        <q-card-actions vertical>
          <q-btn
            to="<%= page.url %>"
            flat
          >
            <%= page.cta %>
          </q-btn>
        </q-card-actions>
      </q-card><% }} %>
    </div>
  </q-page>
</template>

<script lang="ts">
import { openURL } from 'quasar'
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
  name: 'PageIndex',
  meta: {
    title: 'Home',
    titleTemplate: (title: string) => `${title} - <%= website.name %>`,
    meta: {
      description: { name: 'description', content: '<%= landingPage.meta.description.replace(/'/g, "\\'") %>' },
      keywords: { name: 'keywords', content: '<%= landingPage.meta.keywords %>' }
    }
  },
  setup () {
    function openLink (url: string) {
      openURL(url)
    }
    return {
      openLink
    }
  }
})
</script>
