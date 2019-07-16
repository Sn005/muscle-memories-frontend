import DesktopAppNavigation from './desktop/index.vue'
import MobileAppNavigation from './mobile/index.vue'
import DeviceHandler from '@/components/atoms/factory-component/DeviceHandler'
export default DeviceHandler(DesktopAppNavigation, MobileAppNavigation)
export { DesktopAppNavigation, MobileAppNavigation }
