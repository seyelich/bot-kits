import type { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';
import InputSlider from './input-slider';
import { months } from '../../../utils/calendar';

export default {
  title: 'UI/Inputs/InputSlider',
  component: InputSlider,
  argTypes: {
    onChange: { action: 'changed' },
  },
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
} as Meta<typeof InputSlider>;

export const InputSliderStory: Story<typeof InputSlider> = () => {
  const [, setIsSelected] = useState<string | undefined>('январь');
  return (
    <InputSlider
      setSelected={setIsSelected}
      options={months}
      width="200px"
      slideWidth="200px"
    />
  );
};

export const Default = InputSliderStory.bind({});
