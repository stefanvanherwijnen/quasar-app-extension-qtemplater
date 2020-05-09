<template>
  <q-page>
    <q-tabs
      v-model="tab"
      inline-label
      class="bg-teal text-white shadow-2"
    >
      <q-tab
        name="website"
        label="Website"
      />
      <q-tab
        name="css"
        label="css"
      />
      <q-tab
        name="landingPage"
        label="Landing page"
      />
      <q-tab
        name="about"
        label="About"
      />
      <q-tab
        name="contact"
        label="Contact"
      />
      <q-tab
        name="route"
        label="Route"
      />
      <q-tab
        name="pages"
        label="Pages"
      />
    </q-tabs>
    <q-tab-panels
      v-model="tab"
      animated
    >
      <q-tab-panel name="website">
        <q-input
          v-model="configuration.website.name"
          label="Name"
        />
      </q-tab-panel>

      <q-tab-panel name="css">
        <q-input
          v-for="(color, key) in configuration.css"
          :key="key"
          v-model="configuration.css[key]"
          :label="key"
        >
          <template v-slot:append>
            <q-icon
              name="colorize"
              class="cursor-pointer"
            >
              <q-popup-proxy
                transition-show="scale"
                transition-hide="scale"
              >
                <q-color v-model="configuration.css[key]" />
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </q-tab-panel>

      <q-tab-panel name="landingPage">
        <q-input
          v-model="configuration.landingPage.title"
          label="Title"
        />
        <q-input
          v-model="configuration.landingPage.header"
          label="Header"
        />
        <q-input
          v-model="configuration.landingPage.description"
          label="Description"
        />
        <q-input
          type="textarea"
          v-model="configuration.landingPage.content"
          label="Content"
          rows="20"
          :class="{ 'text-white bg-dark': $q.dark.isActive }"
          class="fit q-pa-sm"
        />

        <q-input
          v-model="configuration.landingPage.CTA.message"
          label="Call to action message"
        />

        <q-input
          v-model="configuration.landingPage.CTA.url"
          label="Call to action url"
        />

      </q-tab-panel>

      <q-tab-panel name="about">
        <q-input
          v-model="configuration.about.label"
          label="Label"
        />
        <q-splitter v-model="splitter">
          <template v-slot:before>
            <div class="q-pa-md">
              <q-input
                type="textarea"
                v-model="configuration.about.content"
                label="Content"
                hint="https://www.markdownguide.org/"
                rows="20"
                :class="{ 'text-white bg-dark': $q.dark.isActive }"
                class="fit q-pa-sm"
              />
            </div>
          </template>

          <template v-slot:after>
            <div
              class="q-pa-md"
              style="height: 467px;"
            >
              <q-markdown
                :src="configuration.about.content"
                class="fit bordered q-pa-sm"
              >
              </q-markdown>
            </div>
          </template>
        </q-splitter>
      </q-tab-panel>

      <q-tab-panel name="contact">
        <q-input
          v-model="configuration.contact.label"
          label="Label"
        />
        <q-list
          separator
          bordered
          style="max-width: 300px"
        >
          <q-item dense>
            <q-item-section>
              <q-item-label>Email</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-btn
                round
                flat
                icon="add"
                @click="configuration.contact.email.addresses.push({email: '', label: '' })"
              />
            </q-item-section>
          </q-item>
          <q-item
            v-for="(email, key) in configuration.contact.email.addresses"
            :key="key"
          >
            <q-item-section>
              <q-item-label overline>
                <q-input
                  label="Label"
                  v-model="configuration.contact.email.addresses[key].label"
                />
              </q-item-label>
              <q-item-label>
                <q-input
                  label="Email"
                  v-model="configuration.contact.email.addresses[key].email"
                />
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-list>

        <q-list
          bordered
          separator
          style="max-width: 300px"
        >
          <q-item dense>
            <q-item-section>
              <q-item-label>Phone</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-btn
                round
                flat
                icon="add"
                @click="configuration.contact.phone.numbers.push({number: '', label: '', icon: '' })"
              />
            </q-item-section>
          </q-item>
          <q-item
            v-for="(number, key) in configuration.contact.phone.numbers"
            :key="key"
          >
            <q-item-section avatar>
              <q-btn-dropdown :icon="number.icon">
                <q-icon-picker
                  v-model="configuration.contact.phone.numbers[key].icon"
                  icon-set="material-icons"
                  tooltips
                  :pagination.sync="iconPagination"
                  style="height: 300px; width: 300px;"
                />
              </q-btn-dropdown>
            </q-item-section>
            <q-item-section>
              <q-item-label overline>
                <q-input
                  label="Label"
                  v-model="configuration.contact.phone.numbers[key].label"
                />
              </q-item-label>
              <q-item-label>
                <q-input
                  label="Number"
                  v-model="configuration.contact.phone.numbers[key].number"
                />
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-list>

        <q-list
          bordered
          separator
          style="max-width: 300px"
        >
          <q-item dense>
            <q-item-section>
              <q-item-label>Additional info</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-btn
                round
                flat
                icon="add"
                @click="configuration.contact.additionalInfo.fields.push({value: '', label: '' })"
              />
            </q-item-section>
          </q-item>
          <q-item
            v-for="(field, key) in configuration.contact.additionalInfo.fields"
            :key="key"
          >
            <q-item-section>
              <q-item-label overline>
                <q-input
                  label="Label"
                  v-model="configuration.contact.additionalInfo.fields[key].label"
                />
              </q-item-label>
              <q-item-label>
                <q-input
                  label="Value"
                  v-model="configuration.contact.additionalInfo.fields[key].value"
                />
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-tab-panel>

      <q-tab-panel name="route">
        <q-input
          v-model="configuration.route.label"
          label="Label"
        />
        <q-list
          separator
          bordered
          style="max-width: 300px"
        >
          <q-item dense>
            <q-item-section>
              <q-item-label>Addresses</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-btn
                round
                flat
                icon="add"
                @click="configuration.route.addresses.push(address)"
              />
            </q-item-section>
          </q-item>
          <q-item
            v-for="(address, key) in configuration.route.addresses"
            :key="key"
          >
            <q-item-section>
              <q-item-label overline>
                <q-input
                  label="Name"
                  v-model="configuration.route.addresses[key].name"
                />
              </q-item-label>
              <q-item-label>
                <q-input
                  label="Address"
                  v-model="configuration.route.addresses[key].address"
                />
                <q-input
                  label="Postal code"
                  v-model="configuration.route.addresses[key].postalCode"
                />
                <q-input
                  label="City"
                  v-model="configuration.route.addresses[key].city"
                />
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-tab-panel>

      <q-tab-panel name="pages">
        <q-splitter :value="$q.screen.lt.md ? 20 : 10">
          <template #before>
            <q-tabs
              v-model="pagesTab"
              vertical
              class="bg-orange text-white"
            >
              <q-tab
                icon="add"
                @click="configuration.pages.push(page)"
              />
              <q-tab
                v-for="(page, key) in configuration.pages"
                :key="key"
                :name="key"
                :label="page.name"
              />
            </q-tabs>
          </template>
          <template #after>
            <q-tab-panels
              v-model="pagesTab"
              animated
            >
              <q-tab-panel
                v-for="(page, key) in configuration.pages"
                :key="key"
                :name="key"
              >
                <q-input
                  v-model="configuration.pages[key].name"
                  label="Name"
                />
                <q-input
                  v-model="configuration.pages[key].description"
                  label="Description"
                />
                <q-input
                  v-model="configuration.pages[key].label"
                  label="Label"
                />
                <q-input
                  v-model="configuration.pages[key].url"
                  label="URL"
                  placeholder="/url"
                />
                <q-input
                  v-model="configuration.pages[key].meta.description"
                  label="SEO meta description"
                />
                <q-input
                  v-model="configuration.pages[key].meta.keywords"
                  label="SEO meta keywords"
                />

                <q-splitter v-model="splitter">
                  <template v-slot:before>
                    <div class="q-pa-md">
                      <q-input
                        type="textarea"
                        v-model="configuration.pages[key].content"
                        label="Content"
                        hint="https://www.markdownguide.org/"
                        rows="20"
                        :class="{ 'text-white bg-dark': $q.dark.isActive }"
                        class="fit q-pa-sm"
                      />
                    </div>
                  </template>

                  <template v-slot:after>
                    <div
                      class="q-pa-md"
                      style="height: 467px;"
                    >
                      <q-markdown
                        :src="configuration.pages[key].content"
                        class="fit bordered q-pa-sm"
                      >
                      </q-markdown>
                    </div>
                  </template>
                </q-splitter>
              </q-tab-panel>
            </q-tab-panels>
          </template>
        </q-splitter>

      </q-tab-panel>
    </q-tab-panels>

    <q-page-sticky
      position="bottom-right"
      :offset="[50, 50]"
    >
      <q-fab
        icon="more_vert"
        direction="up"
        color="accent"
      >
        <q-fab-action
          @click="downloadJson"
          color="primary"
          label="Download"
          icon="file_download"
        />
        <q-fab-action
          @click="uploadJson"
          label="Upload"
          color="primary"
          icon="file_upload"
        />
      </q-fab>
    </q-page-sticky>

    <q-file
      ref="filePicker"
      v-show="false"
      v-model="file"
      @input="onFileUploaded"
    />
  </q-page>
</template>

<script lang="ts">
import { exportFile } from "quasar";

export default {
  name: "PageIndex",
  data() {
    return {
      file: null,
      tab: "website",
      pagesTab: "",
      splitter: 50,
      iconPagination: {
        itemsPerPage: 35,
        page: 0
      },
      configuration: {
        website: {
          name: "Website name"
        },
        css: {
          primary: "#839be3",
          secondary: "#26a69a",
          accent: "#9c27b0",
          dark: "#1D1D1D",
          positive: "#21BA45",
          negative: "#C10015",
          info: "#31CCEC",
          warning: "#F2C037"
        },
        landingPage: {
          title: "Home",
          header: "Welcome message",
          content: "A brief description",
          CTA: {
            message: "A call to action!",
            route: "/callToActionUrl"
          }
        },
        about: {
          label: "About",
          content: `# About #
About page content`
        },
        contact: {
          label: "Contact",
          email: {
            label: "Email",
            addresses: [
              {
                email: "acme@acme.org",
                label: "For general questions."
              }
            ]
          },
          phone: {
            label: "Phone number",
            numbers: [
              {
                number: "+44 12 34 56 78",
                label: "Landline",
                icon: "phone"
              },
              {
                number: "071 23 45 67 89",
                label: "Mobile",
                icon: "smartphone"
              }
            ]
          },
          additionalInfo: {
            label: "Additional info",
            fields: [
              {
                label: "crc",
                value: "23123"
              },
              {
                label: "IBAN",
                value: "324234"
              }
            ]
          }
        },
        route: {
          label: "Route",
          addresses: [
            {
              name: "Headquarters",
              address: "Main street",
              postalCode: "1234 AA",
              city: "New York"
            }
          ],
          content: "Click on the link to open Google maps"
        },
        pages: []
      },
      address: {
        name: "",
        address: "",
        postalCode: "",
        city: ""
      },
      page: {
        name: "New",
        description: "",
        label: "",
        icon: "",
        content: ``,
        url: "",
        meta: {
          description: "",
          keywords: ""
        }
      }
    };
  },
  methods: {
    downloadJson() {
      exportFile(
        "configuration.json",
        JSON.stringify(this.configuration, null, 2)
      );
    },
    uploadJson() {
      this.$refs.filePicker.pickFiles();
    },
    onFileUploaded(file) {
      const reader = new FileReader();
      reader.onload = e => {
        this.configuration = JSON.parse(e.target.result);
      };
      reader.readAsText(file);
    }
  }
};
</script>
