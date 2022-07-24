import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import BaseSelect from '@/components/BaseSelect.vue'
import BaseInput from '@/components/BaseInput.vue'
import BaseRadioGroup from '@/components/BaseRadioGroup.vue'
import BaseCheckbox from '@/components/BaseCheckbox.vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseErrorMessage from '@/components/BaseErrorMessage.vue'
import BaseRadio from '@/components/BaseRadio.vue'

createApp(App)
.component('BaseSelect', BaseSelect)
.component('BaseInput', BaseInput)
.component('BaseRadioGroup', BaseRadioGroup)
.component('BaseCheckbox', BaseCheckbox)
.component('BaseButton', BaseButton)
.component('BaseErrorMessage', BaseErrorMessage)
.component('BaseRadio', BaseRadio)
.mount('#app')
