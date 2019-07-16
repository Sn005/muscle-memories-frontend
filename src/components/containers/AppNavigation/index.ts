import DesktopAppNavigation from './DesktopAppNavigation.vue'
import MobileAppNavigation from './MobileAppNavigation.vue'
import DeviceHandler from '@/components/atoms/factory-component/DeviceHandler'
export default DeviceHandler(DesktopAppNavigation, MobileAppNavigation)
export { DesktopAppNavigation, MobileAppNavigation }
