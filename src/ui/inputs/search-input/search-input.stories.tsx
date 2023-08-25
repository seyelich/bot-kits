/* eslint-disable no-console */
import type { Meta, Story } from '@storybook/react';
import { useState } from 'react';
import SearchInput from './search-input';

export default {
  title: 'UI/Inputs/SearchInput',
  component: SearchInput,
  argTypes: {
    onChange: { action: 'changed' },
  },
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
} as Meta<typeof SearchInput>;

export const SearchInputStory: Story<typeof SearchInput> = (args: any) => {
  const [, setIsSelected] = useState(false);
  return <SearchInput {...args} setSelected={setIsSelected} />;
};

export const Default = SearchInputStory.bind({});
Default.args = {
  width: '400px',
  placeholder: 'Enter value',
  size: 'default',
  hasFilter: true,
  onChange: () => console.log('value'),
};
