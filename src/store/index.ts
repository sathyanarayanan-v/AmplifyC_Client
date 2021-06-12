import Vue from 'vue'
import Vuex from 'vuex'
import AuthModule from './modules/account'
import NotificationModule from './modules/notification'
import CompanyModule from './modules/company'
import UIModule from './modules/ui'
import GSTModule from './modules/gst'
import AffiliateModule from './modules/affiliate'
import ToolsModule from './modules/tools'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth: AuthModule,
    company: CompanyModule,
    ui: UIModule,
    notification: NotificationModule,
    gst: GSTModule,
    affiliate: AffiliateModule,
    tools: ToolsModule
  }
})
