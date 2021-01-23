import { mount } from '@vue/test-utils'; // mount the component
import Exercise from '@/components/Exercise1-07.vue';

describe('Exercise1-07.vue', function() {
  it('data returns correctly in the list element.', async () => {
    const name = 'Ney Hernandez';
    const lang = 'Javascript';

    const wrapper = await mount(Exercise, {
      data() {
        return { name: name, language: lang }
      },
    });
    
    expect(wrapper.html()).toContain('Ney Hernandez');
    expect(wrapper.vm.name).toBe('Ney Hernandez');
    expect(wrapper.vm.language).toBe('Javascript');
  })
});