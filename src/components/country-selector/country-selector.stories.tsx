import { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import CountrySelector from './country-selector';

export default {
  title: 'UI/Inputs/CountrySelector',
  component: CountrySelector,
} as Meta<typeof CountrySelector>;

export const CountrySelectorStory: Story<typeof CountrySelector> = () => {
  const [value, setValue] = useState('');
  return <CountrySelector value={value} setValue={setValue} />;
};

export const Default = CountrySelectorStory.bind({});
