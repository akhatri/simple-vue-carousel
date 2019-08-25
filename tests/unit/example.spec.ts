import { shallowMount } from '@vue/test-utils';
import Header from '@/components/Header.vue';

describe('Header.vue', () => {
  it('should have the correct title', () => {
    const msg = 'Simple Carousel';
    const wrapper = shallowMount(Header, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch('Simple Carousel');
  });
});
