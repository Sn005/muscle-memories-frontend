import Vue, { CreateElement, VNode, VueConstructor } from 'vue'
import { isMobile } from '@/utils/device'
export default (
  desktopComponent: VueConstructor,
  mobileComponent: VueConstructor
) => {
  const component = isMobile() ? mobileComponent : desktopComponent
  const props = (component as any).props || []

  return Vue.extend({
    functional: true,
    render: (h: CreateElement): VNode => h(component, { props })
  })
}
