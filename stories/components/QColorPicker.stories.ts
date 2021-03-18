import { ref } from 'vue';
import QColorPicker from '@/qComponents/QColorPicker';

import PLACEMENTS from '@/qComponents/constants/popperPlacements';

export default {
  title: 'Components/QColorPicker',
  component: QColorPicker,
  argTypes: {
    'v-model': { control: { type: 'none' } },
    placement: {
      control: { type: 'select', options: PLACEMENTS }
    },
    colorFormat: {
      control: { type: 'select', options: ['hex', 'rgb'] }
    }
  }
};

export const QColorPickerStory = (args: any) => ({
  components: { QColorPicker },
  setup() {
    const color = ref('#f25');

    return { args, color };
  },
  template: `
    <q-color-picker
      v-model="color"
      v-bind="args"
    />
  `
});

QColorPickerStory.storyName = 'Default';