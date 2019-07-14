import Desktop from './-defaultDesktop.vue'
import Mobile from './-defaultMobile.vue'
import DeviceHandler from '@/components/atoms/factory-component/DeviceHandler'
export default DeviceHandler(Desktop, Mobile)
