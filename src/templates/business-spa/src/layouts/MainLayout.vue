<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <div class="page-content">
        <q-toolbar style="height: 100px">
          <!-- <router-link to="/">
            <img
              class="logo q-mt-xs q-mb-xs"
              alt="Logo"
              src="~assets/quasar-logo-full.svg"
            >
          </router-link>-->
          <q-avatar square style="height: 50px; width: 50px" class="q-mt-xs q-mb-xs q-mr-lg">
            <img alt="Logo" src="statics/icons/favicon-96x96.png" />
          </q-avatar>
          <q-btn
            v-if="$q.screen.gt.sm"
            flat
            stretch
            to="/"
            label="<%= landingPage.title %>"
            :class="{ 'text-grey-8': isActiveRoute('/') }"
          /><% for (const page of pages) { %>
          <q-btn
            v-if="$q.screen.gt.sm"
            flat
            stretch
            to="<%= page.url %>"
            label="<%= page.label %>"
            :class="{ 'text-grey-8': isActiveRoute('<%= page.url %>') }"
          /><% } %>
          <q-btn v-if="!$q.screen.gt.sm" icon="menu" @click="drawer = !drawer" />
          <q-space horizontal />
          <q-btn borderless flat stretch icon="more_vert">
            <q-menu>
              <q-item clickable @click="$q.dark.toggle()">
                <q-item-section avatar>
                  <q-icon :name="$q.dark.mode ? 'brightness_2' : 'brightness_5'" />
                </q-item-section>
                <q-item-section>{{ $t('settings.darkMode') }}</q-item-section>
              </q-item>
              <q-separator />
            </q-menu>
          </q-btn>
        </q-toolbar>
      </div>
    </q-header>

    <q-drawer v-model="drawer" :width="200" :breakpoint="500" bordered>
      <div class="q-ml-lg q-mr-md">
        <div class="row justify-center">
          <q-avatar style="height: 50px; width: 50px" class="q-mt-xs q-mb-xs q-mr-lg">
            <img alt="Logo" src="statics/icons/favicon-96x96.png" />
          </q-avatar>
        </div>
        <div class="row">
          <a class="text-h6"><%= website.name %></a>
        </div>
      </div>
      <q-scroll-area class="fit">
        <q-list>
          <q-item clickable to="/" exact v-ripple>
            <q-item-section avatar>
              <q-icon name="home" />
            </q-item-section>
            <q-item-section><%= landingPage.title %></q-item-section>
          </q-item><% for (const page of pages) { %>
          <q-item clickable to="<%= page.url %>" exact v-ripple>
            <q-item-section avatar>
              <q-icon name="<%= page.icon %>" />
            </q-item-section>
            <q-item-section><%= page.label %></q-item-section>
          </q-item><% } %>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container @click="drawer = false">
      <router-view />
      <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
        <q-btn fab icon="keyboard_arrow_up" />
      </q-page-scroller>
    </q-page-container>

    <div class="bg-secondary">
      <div class="row justify-center q-pa-md page-content">
        <q-list style="min-width: 300px; max-width: 300px" class="col-6" dense separator padding>
          <q-item-label header>{{ $t('contact') }}</q-item-label>
          <q-item to="/about" clickable class="text-grey-8" active-class="text-grey-8">
            <q-item-section><%= about.label %></q-item-section>
          </q-item>
          <q-item to="/contact" clickable class="text-grey-8" active-class="text-grey-8">
            <q-item-section><%= contact.label %></q-item-section>
          </q-item>
          <q-item to="/route" clickable class="text-grey-8" active-class="text-grey-8">
            <q-item-section><%= route.label %></q-item-section>
          </q-item>
        </q-list>
        <div class="col-3" />
        <div class="col-3"><% for (const qualityMark of qualityMarks) { %>
          <div class="row">
            <a href="<%= qualityMark.url %>" target="_blank">
              <q-avatar style="height: 75px; width: 75px" class="q-mt-xs q-mb-xs q-mr-lg">
                <img src="<%= qualityMark.imageUrl %>" />
              </q-avatar>
            </a>
          </div><% } %>
        </div>
      </div>
      <!-- <q-list
        style="min-width: 300px; max-width: 300px"
        class="col"
      >
        <q-item-label header>Openingstijden</q-item-label>
        <q-item>
          <q-item-section overline>
            <q-item-label overline>Maandag t/m vrijdag</q-item-label>
            <q-item-label>09:00 tot 10:00</q-item-label>
            <q-item-label>17:00 tot 18:00</q-item-label>

          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section overline>
            <q-item-label overline>Zaterdag, zondag en feestdagen</q-item-label>
            <q-item-label>09:00 tot 10:00</q-item-label>
          </q-item-section>
        </q-item>
        <q-item>
          1e paasdag, 1e pinksterdag, beide kerstdagen en oud- en nieuwjaarsdag zijn wij gesloten.
        </q-item>
        <q-item>
          Brengen en halen van uw hond voor pension kan alleen tijdens de openingstijden.
        </q-item>
      </q-list>
      <q-list
        dense
        style="min-width: 300px; max-width: 300px"
        class="col"
      >
        <q-item-label header></q-item-label>
        <q-item>
        </q-item>
      </q-list>-->
    </div>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',
  data () {
    return {
      drawer: false
    }
  },
  computed: {
    screenSize: function () {
      return this.$q.screen.name
    },
    largeScreen: function () {
      if (['lg', 'xl'].includes(this.screenSize)) {
        return this.screenSize
      } else {
        return false
      }
    },
    fontSize: function () {
      switch (this.screenSize) {
        case 'lg':
          return '18px'
        case 'xl':
          return '32px'
      }
      return null
    }
  },
  methods: {
    isActiveRoute (route) {
      return this.$route.path === route
    }
  }
}
</script>

<style>
/* .landing-content {
  max-width: 1120px;
  margin: 0 auto;
  font-size: 20px;
}

.footer {
  max-width: 800px;
  margin: 0 auto;
} */
</style>
