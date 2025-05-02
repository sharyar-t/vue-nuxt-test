import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

const options = {
  icons: {
    iconfont: 'mdi'
  }
}

export default new Vuetify(options)
