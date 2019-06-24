import Vue, { CreateElement, VNode, VueConstructor } from 'vue'
import { isMobile } from '@/utils/device'
export default (
  desktopComponent: VueConstructor,
  mobileComponent: VueConstructor
) => {
  const component = isMobile() ? mobileComponent : desktopComponent
  return Vue.extend({
    functional: true,
    render(h: CreateElement, { props }): VNode {
      return h(component, { props })
    }
  })
}
