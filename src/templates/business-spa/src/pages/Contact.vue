<template>
  <q-page
    class="page-content"
    padding
  ><% if(contact.email) { %>
    <q-list>
      <q-item-label header><%= contact.email.label %></q-item-label><% for (const address of contact.email.addresses) {%>
      <q-item>
        <q-item-section avatar>
          <q-icon name="email" />
        </q-item-section>
        <q-item-section>
          <q-item-label overline><%= address.label %></q-item-label>
          <q-item-label>
            <a :href="'mailto:<%= address.email %>'">
              {{ '<%= address.email %>' }}
            </a>
          </q-item-label>
        </q-item-section>
      </q-item><% } } %>
    </q-list><% if (contact.phone) { %>
    <q-list>
      <q-item-label header><%= contact.phone.label %></q-item-label><% for (const number of contact.phone.numbers) { %>
      <q-item><% if (number.icon) { %>
        <q-item-section avatar>
          <q-icon name="<%= number.icon %>" />
        </q-item-section><% } %>
        <q-item-section>
          <q-item-label overline>
            <%= number.label %>
          </q-item-label>
          <q-item-label>
            <%= number.number %>
          </q-item-label>
        </q-item-section>
      </q-item><% } %>
    </q-list><% } %><% if (contact.additionalInfo.fields.length) { %>
    <q-list>
      <q-item-label header><%= contact.additionalInfo.label %></q-item-label><% for (const field of contact.additionalInfo.fields) { %>
      <q-item><% if (field.icon) { %>
        <q-item-section avatar>
          <q-icon name="<%= number.icon %>" />
        </q-item-section><% } %>
        <q-item-section>
          <q-item-label overline>
            <%= field.label %>
          </q-item-label>
          <q-item-label>
            <%= field.value %>
          </q-item-label>
        </q-item-section>
      </q-item><% } %>
    </q-list><% } %>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
  name: 'PageContact',
  meta: {
    title: '<%= contact.label %>',
    titleTemplate: (title: string) => `${title} - <%= website.name %>`
  }
})
</script>

<style>
</style>
