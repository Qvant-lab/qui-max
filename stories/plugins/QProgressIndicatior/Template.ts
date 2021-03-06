import type { Story } from '@storybook/vue3';
import { defineComponent } from 'vue';

import { useProgressIndicatior } from '@/qComponents/QProgressIndicatior';

export const QProgressIndicatiorStory: Story = () =>
  defineComponent({
    setup() {
      const progressIndicatior = useProgressIndicatior();

      const handleStartClick = (): void => {
        progressIndicatior?.start();
      };

      const handleSetClick = (): void => {
        progressIndicatior?.set(25);
      };

      const handleIncClick = (): void => {
        progressIndicatior?.inc(10);
      };

      const handleDecClick = (): void => {
        progressIndicatior?.inc(-10);
      };

      const handleDoneClick = (): void => {
        progressIndicatior?.done();
      };

      const handleForceDoneClick = (): void => {
        progressIndicatior?.forceDone();
      };

      return {
        handleStartClick,
        handleSetClick,
        handleIncClick,
        handleDecClick,
        handleDoneClick,
        handleForceDoneClick
      };
    },
    template: `
      <q-button @click="handleStartClick">Start</q-button>
      <q-button @click="handleSetClick">Set 25</q-button>
      <q-button @click="handleIncClick">Inc 10</q-button>
      <q-button @click="handleDecClick">Dec -10</q-button>
      <q-button @click="handleDoneClick" theme="secondary">Done</q-button>
      <q-button @click="handleForceDoneClick" theme="secondary">Force done</q-button>
    `
  });
