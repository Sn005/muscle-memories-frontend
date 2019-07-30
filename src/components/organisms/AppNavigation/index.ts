import DesktopAppNavigation from './desktop.vue'
import MobileAppNavigation from './mobile.vue'
import DeviceHandler from '@/components/atoms/factory-component/DeviceHandler'
import { INavigationItem, IUserInfo } from './types'

export default DeviceHandler(DesktopAppNavigation, MobileAppNavigation)

export { INavigationItem, IUserInfo }
