// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, Story } from '@storybook/vue3';
import { defineComponent, ref } from 'vue';

import QInput from '@/qComponents/QInput';
import type { QInputProps } from '@/qComponents/QInput';
import iconsList from '../core/iconsList';

const storyMetadata: Meta = {
  title: 'Components/QInput',
  component: QInput,
  argTypes: {
    placeholder: { control: { type: 'text' } },
    maxlength: { control: { type: 'number' } },
    modelValue: { control: { type: 'none' } },
    type: {
      control: {
        type: 'select',
        options: ['text', 'password', 'number', 'email', 'hidden', 'tel', 'url']
      }
    },
    suffixIcon: { control: { type: 'select', options: iconsList } },
    autocomplete: { control: { type: 'select', options: ['on', 'off'] } },
    readonly: { control: { type: 'boolean' } }
  }
};

type StoryArgs = QInputProps & {
  placeholder: string;
  maxlength: string | number;
  type: string;
};

const QInputStory: Story<StoryArgs> = args =>
  defineComponent({
    setup() {
      const data = ref<string>('');

      const handleFocus = (event: Event): void => {
        // eslint-disable-next-line no-console
        console.log('handleFocus', event);
      };
      const handleBlur = (event: Event): void => {
        // eslint-disable-next-line no-console
        console.log('handleBlur', event);
      };
      const handleInput = (event: Event): void => {
        // eslint-disable-next-line no-console
        console.log('handleInput', event);
      };
      const handleChange = (event: Event): void => {
        // eslint-disable-next-line no-console
        console.log('handleChange', event);
      };
      const handleClear = (event: Event): void => {
        // eslint-disable-next-line no-console
        console.log('handleClear', event);
      };

      return {
        data,
        args,
        handleFocus,
        handleBlur,
        handleInput,
        handleChange,
        handleClear
      };
    },

    template: `
      <q-input
        v-model="data"
        :suffix-icon="args.suffixIcon"
        :show-symbol-limit="args.showSymbolLimit"
        :password-switch="args.passwordSwitch"
        :disabled="args.disabled"
        :clearable="args.clearable"
        :validate-event="args.validateEvent"
        :autocomplete="args.autocomplete"
        :placeholder="args.placeholder"
        :maxlength="args.maxlength"
        :type="args.type"
        :readonly="args.readonly"
        @blur="handleBlur"
        @focus="handleFocus"
        @input="handleInput"
        @change="handleChange"
        @clear="handleClear"
      />
    `
  });

QInputStory.storyName = 'Default';
QInputStory.args = {
  placeholder: 'Input text',
  maxlength: 25,
  type: 'text'
};

export { QInputStory };
export default storyMetadata;
