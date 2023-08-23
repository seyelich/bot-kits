import type { Meta, Story } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import ServiceBasics from './service-basics';

export default {
  title: 'block/ServiceBasics',
  component: ServiceBasics,
} as Meta<typeof ServiceBasics>;

export const ServiceBasicsStory: Story<typeof ServiceBasics> = () => (
  <BrowserRouter>
    {' '}
    <ServiceBasics />
  </BrowserRouter>
);

export const Default = ServiceBasicsStory.bind({});
