import Vue from 'vue'
import VueMarkdown from 'vue-markdown' // Глобальные импорт Плагина МаркДоун
import Element from 'element-ui' // Глобальные импорт UI Элемент
import locale from 'element-ui/lib/locale/lang/ru-RU' // Указания на расположеине Локэйла

Vue.use(Element, { locale })
Vue.component('vue-markdown', VueMarkdown) //Глобальная регистрация МаркДоун для отображения MD или HTML