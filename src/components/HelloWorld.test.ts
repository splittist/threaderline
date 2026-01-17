import { mount } from '@vue/test-utils'
import HelloWorld from './HelloWorld.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })

  it('increments count when button is clicked', async () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'Test' } })
    const button = wrapper.find('button')

    expect(wrapper.text()).toContain('Count is: 0')

    await button.trigger('click')
    expect(wrapper.text()).toContain('Count is: 1')

    await button.trigger('click')
    expect(wrapper.text()).toContain('Count is: 2')
  })
})
