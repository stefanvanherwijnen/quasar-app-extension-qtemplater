<template>
  <q-page>
    <q-tabs v-model="tab" inline-label class="bg-teal text-white shadow-2">
      <q-tab name="website" label="Website" />
      <q-tab name="css" label="css" />
      <q-tab name="landingPage" label="Landing page" />
      <q-tab name="about" label="About" />
      <q-tab name="contact" label="Contact" />
      <q-tab name="route" label="Route" />
      <q-tab name="pages" label="Pages" />
    </q-tabs>
    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="website">
        <q-input style="max-width: 350px" v-model="configuration.website.name" label="Name" />
      </q-tab-panel>

      <q-tab-panel name="css">
        <a href="https://color.adobe.com/create">https://color.adobe.com/create</a>
        <q-input
          style="max-width: 350px"
          v-for="(color, key) in configuration.css"
          :key="key"
          v-model="configuration.css[key]"
          :label="key"
        >
          <template v-slot:append>
            <q-icon name="colorize" class="cursor-pointer">
              <q-popup-proxy transition-show="scale" transition-hide="scale">
                <q-color v-model="configuration.css[key]" />
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </q-tab-panel>

      <q-tab-panel name="landingPage">
        <q-input style="max-width: 350px" v-model="configuration.landingPage.title" label="Page title" />
        <q-input
          style="max-width: 350px"
          v-model="configuration.landingPage.header"
          label="Header"
        />
        <q-input
          style="max-width: 350px"
          type="textarea"
          v-model="configuration.landingPage.content"
          label="Content"
          rows="20"
          :class="{ 'text-white bg-dark': $q.dark.isActive }"
          class="fit q-pa-sm"
        />

        <q-input
          style="max-width: 350px"
          v-model="configuration.landingPage.CTA.message"
          label="Call to action message"
        />

        <q-input
          style="max-width: 350px"
          v-model="configuration.landingPage.CTA.route"
          label="Call to action route"
        />

        <q-input
          style="max-width: 350px"
          v-model="configuration.landingPage.meta.description"
          label="SEO meta description"
        />
        <q-input
          style="max-width: 350px"
          v-model="configuration.landingPage.meta.keywords"
          label="SEO meta keywords"
        />
      </q-tab-panel>

      <q-tab-panel name="about">
        <q-input style="max-width: 350px" v-model="configuration.about.label" label="Label" />
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
            <div class="q-pa-md" style="height: 467px;">
              <q-markdown :src="configuration.about.content" class="fit bordered q-pa-sm"></q-markdown>
            </div>
          </template>
        </q-splitter>
      </q-tab-panel>

      <q-tab-panel name="contact">
        <q-input style="max-width: 350px" v-model="configuration.contact.label" label="Label" />
        <q-list separator bordered style="max-width: 300px">
          <q-item dense>
            <q-item-section>
              <q-item-label>Email</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-btn
                round
                flat
                icon="add"
                color="green"
                @click="configuration.contact.email.addresses.push({email: '', label: '' })"
              />
            </q-item-section>
          </q-item>
          <q-item v-for="(email, key) in configuration.contact.email.addresses" :key="key">
            <q-item-section>
              <q-item-label overline>
                <q-input
                  style="max-width: 350px"
                  label="Label"
                  v-model="configuration.contact.email.addresses[key].label"
                />
              </q-item-label>
              <q-item-label>
                <q-input
                  style="max-width: 350px"
                  label="Email"
                  v-model="configuration.contact.email.addresses[key].email"
                />
              </q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-btn
                round
                flat
                icon="remove"
                color="red"
                @click="configuration.contact.email.addresses.splice(key, 1)"
              />
            </q-item-section>
          </q-item>
        </q-list>

        <q-list bordered separator style="max-width: 300px">
          <q-item dense>
            <q-item-section>
              <q-item-label>Phone</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-btn
                round
                flat
                icon="add"
                color="green"
                @click="configuration.contact.phone.numbers.push({number: '', label: '', icon: '' })"
              />
            </q-item-section>
          </q-item>
          <q-item v-for="(number, key) in configuration.contact.phone.numbers" :key="key">
            <q-item-section avatar>
              <q-btn-dropdown :icon="number.icon">
                <q-input
                  v-model="iconPickerFilter"
                  label="Filter"
                  outlined
                  clearable
                  class="q-ma-md"
                />
                <q-icon-picker
                  v-model="configuration.contact.phone.numbers[key].icon"
                  icon-set="material-icons"
                  tooltips
                  :filter="iconPickerFilter"
                  :pagination.sync="iconPagination"
                  style="height: 300px; width: 300px;"
                />
              </q-btn-dropdown>
            </q-item-section>
            <q-item-section>
              <q-item-label overline>
                <q-input
                  style="max-width: 350px"
                  label="Label"
                  v-model="configuration.contact.phone.numbers[key].label"
                />
              </q-item-label>
              <q-item-label>
                <q-input
                  style="max-width: 350px"
                  label="Number"
                  v-model="configuration.contact.phone.numbers[key].number"
                />
              </q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-btn
                round
                flat
                icon="remove"
                color="red"
                @click="configuration.contact.phone.numbers.splice(key, 1)"
              />
            </q-item-section>
          </q-item>
        </q-list>

        <q-list bordered separator style="max-width: 300px">
          <q-item dense>
            <q-item-section>
              <q-item-label>Additional info</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-btn
                round
                flat
                icon="add"
                color="green"
                @click="configuration.contact.additionalInfo.fields.push({value: '', label: '' })"
              />
            </q-item-section>
          </q-item>
          <q-item v-for="(field, key) in configuration.contact.additionalInfo.fields" :key="key">
            <q-item-section>
              <q-item-label overline>
                <q-input
                  style="max-width: 350px"
                  label="Label"
                  v-model="configuration.contact.additionalInfo.fields[key].label"
                />
              </q-item-label>
              <q-item-label>
                <q-input
                  style="max-width: 350px"
                  label="Value"
                  v-model="configuration.contact.additionalInfo.fields[key].value"
                />
              </q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-btn
                round
                flat
                icon="remove"
                color="red"
                @click="configuration.contact.additionalInfo.fields.splice(key, 1)"
              />
            </q-item-section>
          </q-item>
        </q-list>
      </q-tab-panel>

      <q-tab-panel name="route">
        <q-input style="max-width: 350px" v-model="configuration.route.label" label="Label" />
        <q-list separator bordered style="max-width: 300px">
          <q-item dense>
            <q-item-section>
              <q-item-label>Addresses</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-btn
                round
                flat
                icon="add"
                color="green"
                @click="configuration.route.addresses.push(address)"
              />
            </q-item-section>
          </q-item>
          <q-item v-for="(address, key) in configuration.route.addresses" :key="key">
            <q-item-section>
              <q-item-label overline>
                <q-input
                  style="max-width: 350px"
                  label="Name"
                  v-model="configuration.route.addresses[key].name"
                />
              </q-item-label>
              <q-item-label>
                <q-input
                  style="max-width: 350px"
                  label="Address"
                  v-model="configuration.route.addresses[key].address"
                />
                <q-input
                  style="max-width: 350px"
                  label="Postal code"
                  v-model="configuration.route.addresses[key].postalCode"
                />
                <q-input
                  style="max-width: 350px"
                  label="City"
                  v-model="configuration.route.addresses[key].city"
                />
              </q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-btn
                round
                flat
                icon="remove"
                color="red"
                @click="configuration.route.addresses.splice(key, 1)"
              />
            </q-item-section>
          </q-item>
        </q-list>
      </q-tab-panel>

      <q-tab-panel name="pages">
        <q-splitter :value="$q.screen.lt.md ? 20 : 10">
          <template #before>
            <q-tabs v-model="pagesTab" vertical class="bg-orange text-white">
              <q-tab icon="add" color="green" @click="configuration.pages.push({ ...page })" />
              <q-tab
                v-for="(page, key) in configuration.pages"
                :key="key"
                :name="key"
                :label="page.title"
              />
            </q-tabs>
          </template>
          <template #after>
            <q-tab-panels v-model="pagesTab" animated>
              <q-tab-panel v-for="(page, key) in configuration.pages" :key="key" :name="key">
                <div class="row">
                  <q-btn-dropdown :icon="configuration.pages[key].icon" class="q-mr-lg">
                    <q-input
                      v-model="iconPickerFilter"
                      label="Filter"
                      outlined
                      clearable
                      class="q-ma-md"
                    />
                    <q-icon-picker
                      v-model="configuration.pages[key].icon"
                      icon-set="material-icons"
                      tooltips
                      :filter="iconPickerFilter"
                      :pagination.sync="iconPagination"
                      style="height: 300px; width: 300px;"
                    />
                  </q-btn-dropdown>
                  <q-input
                    style="max-width: 350px"
                    v-model="configuration.pages[key].title"
                    label="Title"
                  />
                </div>

                <q-input
                  style="max-width: 350px"
                  v-model="configuration.pages[key].description"
                  label="Description (for landing page)"
                />

                <q-input
                  style="max-width: 350px"
                  v-model="configuration.pages[key].cta"
                  label="Call to action (for landing page)"
                />

                <q-input
                  style="max-width: 350px"
                  v-model="configuration.pages[key].label"
                  label="Label (for menu)"
                />
                <q-input
                  style="max-width: 350px"
                  v-model="configuration.pages[key].url"
                  label="URL"
                  placeholder="/url"
                />
                <q-input
                  style="max-width: 350px"
                  v-model="configuration.pages[key].meta.description"
                  label="SEO meta description"
                />
                <q-input
                  style="max-width: 350px"
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
                    <div class="q-pa-md" style="height: 467px;">
                      <q-markdown
                        :src="configuration.pages[key].content"
                        class="fit bordered q-pa-sm"
                      ></q-markdown>
                    </div>
                  </template>
                </q-splitter>

                <q-btn color="red" label="Delete page" @click="configuration.pages.splice(key)" />
              </q-tab-panel>
            </q-tab-panels>
          </template>
        </q-splitter>
      </q-tab-panel>
    </q-tab-panels>

    <q-page-sticky position="bottom-right" :offset="[50, 50]">
      <q-fab icon="more_vert" direction="up" color="accent">
        <q-fab-action @click="downloadJson" color="primary" label="Download" icon="file_download" />
        <q-fab-action @click="uploadJson" label="Upload" color="primary" icon="file_upload" />
      </q-fab>
    </q-page-sticky>

    <q-file ref="filePicker" v-show="false" v-model="file" @input="onFileUploaded" />
  </q-page>
</template>

<script lang="ts">
import { ref } from '@vue/composition-api'
import { exportFile, QFile } from 'quasar'

export default {
  name: 'Generator',
  setup () {
    const file = ref(null)
    const tab = ref('website')
    const pagesTab = ref('')
    const splitter = ref(50)
    const iconPagination = ref({
      itemsPerPage: 35,
      page: 0
    })
    const configuration = ref({
      website: {
        name: 'Website name'
      },
      css: {
        primary: '#839be3',
        secondary: '#26a69a',
        accent: '#9c27b0',
        dark: '#1D1D1D',
        positive: '#21BA45',
        negative: '#C10015',
        info: '#31CCEC',
        warning: '#F2C037'
      },
      landingPage: {
        title: 'Home',
        header: 'Welcome message',
        content: 'A brief description',
        meta: {
          description: '',
          keywords: ''
        },
        CTA: {
          message: 'A call to action!',
          route: '/callToActionUrl'
        }
      },
      about: {
        label: 'About',
        content: `
# About #
About page content`
      },
      contact: {
        label: 'Contact',
        email: {
          label: 'Email',
          addresses: [
            {
              email: 'acme@acme.org',
              label: 'For general questions.'
            }
          ]
        },
        phone: {
          label: 'Phone number',
          numbers: [
            {
              number: '+44 12 34 56 78',
              label: 'Landline',
              icon: 'phone'
            },
            {
              number: '071 23 45 67 89',
              label: 'Mobile',
              icon: 'smartphone'
            }
          ]
        },
        additionalInfo: {
          label: 'Additional info',
          fields: [
            {
              label: 'crc',
              value: '23123'
            },
            {
              label: 'IBAN',
              value: '324234'
            }
          ]
        }
      },
      route: {
        label: 'Route',
        addresses: [
          {
            name: 'Headquarters',
            address: 'Main street',
            postalCode: '1234 AA',
            city: 'New York'
          }
        ],
        content: 'Click on the link to open Google maps'
      },
      pages: []
    })
    const address = ref({
      name: '',
      address: '',
      postalCode: '',
      city: ''
    })
    const page = ref({
      title: 'New',
      description: '',
      cta: '',
      label: '',
      icon: '',
      content: '',
      url: '',
      meta: {
        description: '',
        keywords: ''
      }
    })
    const filePicker: { value: QFile } = ref(null)
    const iconPickerFilter = ref('')

    function downloadJson () {
      exportFile(
        'qtemplater.json',
        JSON.stringify(configuration.value, null, 2)
      )
    }
    function uploadJson () {
      filePicker.value.pickFiles()
    }
    function onFileUploaded (file: File) {
      const reader = new FileReader()
      reader.onload = e => {
        if (typeof e.target.result === 'string') {
          configuration.value = JSON.parse(e.target.result)
        } else {
          configuration.value = JSON.parse(e.target.result.toString())
        }
      }
      reader.readAsText(file)
    }
    return {
      file,
      tab,
      pagesTab,
      splitter,
      iconPagination,
      configuration,
      address,
      page,
      uploadJson,
      downloadJson,
      onFileUploaded,
      filePicker,
      iconPickerFilter
    }
  }
}

// export default {
//   name: 'PageIndex',
//   data () {
//     return {
//       file: null,
//       tab: 'website',
//       pagesTab: '',
//       splitter: 50,
//       iconPagination: {
//         itemsPerPage: 35,
//         page: 0
//       },
//       configuration: {
//         website: {
//           name: 'Website name'
//         },
//         css: {
//           primary: '#839be3',
//           secondary: '#26a69a',
//           accent: '#9c27b0',
//           dark: '#1D1D1D',
//           positive: '#21BA45',
//           negative: '#C10015',
//           info: '#31CCEC',
//           warning: '#F2C037'
//         },
//         landingPage: {
//           title: 'Home',
//           header: 'Welcome message',
//           content: 'A brief description',
//           CTA: {
//             message: 'A call to action!',
//             route: '/callToActionUrl'
//           }
//         },
//         about: {
//           label: 'About',
//           content: `# About #
// About page content`
//         },
//         contact: {
//           label: 'Contact',
//           email: {
//             label: 'Email',
//             addresses: [
//               {
//                 email: 'acme@acme.org',
//                 label: 'For general questions.'
//               }
//             ]
//           },
//           phone: {
//             label: 'Phone number',
//             numbers: [
//               {
//                 number: '+44 12 34 56 78',
//                 label: 'Landline',
//                 icon: 'phone'
//               },
//               {
//                 number: '071 23 45 67 89',
//                 label: 'Mobile',
//                 icon: 'smartphone'
//               }
//             ]
//           },
//           additionalInfo: {
//             label: 'Additional info',
//             fields: [
//               {
//                 label: 'crc',
//                 value: '23123'
//               },
//               {
//                 label: 'IBAN',
//                 value: '324234'
//               }
//             ]
//           }
//         },
//         route: {
//           label: 'Route',
//           addresses: [
//             {
//               name: 'Headquarters',
//               address: 'Main street',
//               postalCode: '1234 AA',
//               city: 'New York'
//             }
//           ],
//           content: 'Click on the link to open Google maps'
//         },
//         pages: []
//       },
//       address: {
//         name: '',
//         address: '',
//         postalCode: '',
//         city: ''
//       },
//       page: {
//         name: 'New',
//         description: '',
//         label: '',
//         icon: '',
//         content: '',
//         url: '',
//         meta: {
//           description: '',
//           keywords: ''
//         }
//       }
//     }
//   },
//   methods: {
//     downloadJson () {
//       exportFile(
//         'configuration.json',
//         JSON.stringify(this.configuration, null, 2)
//       )
//     },
//     uploadJson () {
//       this.$refs.filePicker.pickFiles()
//     },
//     onFileUploaded (file) {
//       const reader = new FileReader()
//       reader.onload = e => {
//         this.configuration = JSON.parse(e.target.result)
//       }
//       reader.readAsText(file)
//     }
//   }
// }
</script>
