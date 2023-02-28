import type { Meta, StoryObj } from '@storybook/svelte';

import Counter from '../lib/Counter.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/svelte/writing-stories/introduction
const meta = {
  title: 'Example/Counter',
  component: Counter,
  tags: ['autodocs'],
  argTypes: {
    count: { control: { type: 'number', min: -10, max: 10, step: 1 } },
  },
} satisfies Meta<Counter>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/svelte/writing-stories/args
export const Default: Story = {
  args: {
    count: undefined,
  },
};

export const Preset: Story = {
  args: {
    count: 5,
  },
};
