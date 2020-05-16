<template>
  <q-page
    class="page-content"
    padding
  >
    <q-list>
      <q-item-label header><%= route.label %></q-item-label><% for (const address of route.addresses) { %>
      <q-item><% if (address.icon) { %>
        <q-item-section avatar>
          <q-icon name="<%= address.icon %>" />
        </q-item-section><% } %>
        <q-item-section>
          <q-item-label overline>
            <%= address.name %>
          </q-item-label>
          <q-item-label>
            <address>
              <%= address.address %><br /><% if (address.postalCode) { %>
              <%= address.postalCode %><br /><% } %><% if (address.city) { %>
              <%= address.city %><br /><% } %><% if (address.country) { %>
              <%= address.country %><br /><% } %>
            </address>
          </q-item-label>
          <q-item-label caption>
            <a href="https://www.google.com/maps/search/?api=1&query=<%= encodeURI(`${address.address}, ${address.postalCode}, ${address.city}`) %>">
              <%= route.label %>
            </a>
          </q-item-label>
        </q-item-section>
      </q-item><% } %>
    </q-list>

    <% if (route.content) { %><q-markdown>
<%= route.content %>
    </q-markdown><% } %>
  </q-page>
</template>

<script>
export default {
  name: 'PageRoute',
  meta: {
    title: '<%= route.label %>',
    titleTemplate: title => `${title} - <%= website.name %>`
  }
}
</script>

<style>
</style>
