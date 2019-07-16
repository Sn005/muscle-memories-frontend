import DesktopAppFooter from './DesktopAppFooter.vue'
import MobileAppFooter from './MobileAppFooter.vue'
import DeviceHandler from '@/components/atoms/factory-component/DeviceHandler'
export default DeviceHandler(DesktopAppFooter, MobileAppFooter)
export { DesktopAppFooter, MobileAppFooter }
