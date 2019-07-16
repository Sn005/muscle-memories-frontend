import DesktopAppToolbar from './DesktopAppToolbar.vue'
import MobileAppToolbar from './MobileAppToolbar.vue'
import DeviceHandler from '@/components/atoms/factory-component/DeviceHandler'
export default DeviceHandler(DesktopAppToolbar, MobileAppToolbar)
export { DesktopAppToolbar, MobileAppToolbar }
