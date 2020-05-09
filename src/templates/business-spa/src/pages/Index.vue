<template>
  <q-page>
    <div class="block window-width row justify-between">

      <q-parallax src="statics/images/landing/landing.jpg">
        <q-card
          class="q-pa-lg"
          :style="{ 'background-color': $q.dark.isActive ? 'rgba(0, 0, 0, 0.7)' : 'rgba(240, 240, 240, 0.7)' }"
        >
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
                text-color="accent"
              >
                <%= landingPage.CTA.message %>
              </q-btn>
            </div>
          </q-card-actions>
        </q-card>
      </q-parallax>

    </div>
    <div class="row justify-center"><% for (const page of pages) { %>
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
            <%= page.description %>
          </q-btn>
        </q-card-actions>
      </q-card><% } %>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>
