import type { Meta, Story } from '@storybook/vue3';
import { defineComponent, ref } from 'vue';
import { placements } from '@popperjs/core/lib/enums';

import QColorPicker from '@/qComponents/QColorPicker';
import type { QColorPickerProps } from '@/qComponents/QColorPicker';

const storyMetadata: Meta = {
  title: 'Components/QColorPicker',
  component: QColorPicker,
  argTypes: {
    modelValue: { control: { type: 'none' } },
    placement: { options: placements, control: { type: 'select' } },
    colorFormat: { options: ['hex', 'rgb'], control: { type: 'select' } }
  }
};

const QColorPickerStory: Story<QColorPickerProps> = args =>
  defineComponent({
    setup() {
      const color = ref<string>('#f25');
      const handleValueUpdate = (newColor: string): void => {
        // eslint-disable-next-line no-console
        console.log('update:modelValue', newColor);
      };

      return { args, color, handleValueUpdate };
    },
    template: `
      <div style="width: 304px; height:280px">
        <q-color-picker
          v-model="color"
          :disabled="args.disabled"
          :clearable="args.clearable"
          :alpha-shown="args.alphaShown"
          :color-format="args.colorFormat"
          :placement="args.placement"
          :popper-options="args.popperOptions"
          :teleport-to="args.teleportTo"
          @update:modelValue="handleValueUpdate"
        />
      </div>
    `
  });

export const Default = QColorPickerStory.bind({});
Default.args = {
  popperOptions: {}
};
export default storyMetadata;
