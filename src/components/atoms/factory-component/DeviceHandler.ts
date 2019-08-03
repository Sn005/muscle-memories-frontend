import Vue, { CreateElement, VNode, VueConstructor } from 'vue'
import { isMobile } from '@/utils/device'
export default (
  desktopComponent: VueConstructor,
  mobileComponent: VueConstructor
) => {
  const component = isMobile() ? mobileComponent : desktopComponent
  console.log(component.name)
  return Vue.extend({
    functional: true,
    render(h: CreateElement, { data }): VNode {
      return h(component, data)
    }
  })
}
