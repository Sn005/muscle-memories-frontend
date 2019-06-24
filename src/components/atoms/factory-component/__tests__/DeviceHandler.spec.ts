import { shallowMount } from '@vue/test-utils'
import * as device from '@/utils/device'
import DeviceHandler from '../DeviceHandler'
jest.mock('@/utils/device.ts')
describe('DeviceHandlerのテスト', () => {
  let DesktopMockComponent
  let MobileMockComponent
  beforeEach(() => {
    DesktopMockComponent = {
      name: 'desktop',
      render: h => h('div'),
      props: ['bar']
    }
    MobileMockComponent = {
      name: 'mobile',
      render: h => h('div'),
      props: ['bar']
    }
  })
  it('isMobileの戻り値がfalseなら、第一引数で渡したcomponentが返ってくること', () => {
    ;(device.isMobile as jest.Mock) = jest
      .fn()
      .mockImplementationOnce(() => false)
    const mockComponent = DeviceHandler(
      DesktopMockComponent,
      MobileMockComponent
    )
    const wrapper = shallowMount(mockComponent)
    expect(wrapper.name()).toBe('desktop')
  })
  it('isMobileの戻り値がtrueなら、第二引数で渡したcomponentが返ってくること', () => {
    ;(device.isMobile as jest.Mock) = jest
      .fn()
      .mockImplementationOnce(() => true)
    const mockComponent = DeviceHandler(
      DesktopMockComponent,
      MobileMockComponent
    )
    const wrapper = shallowMount(mockComponent)
    expect(wrapper.name()).toBe('mobile')
  })
  it('propsで渡した値が戻り値のcomponentにも渡っていること', () => {
    const mockComponent = DeviceHandler(
      DesktopMockComponent,
      MobileMockComponent
    )
    const wrapper = shallowMount(mockComponent, {
      propsData: {
        bar: 'baz'
      }
    })
    expect(wrapper.props().bar).toBe('baz')
  })
})
