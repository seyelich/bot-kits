import type { Meta, StoryObj } from '@storybook/react';
import VideoTutorials from './video-tuturals';

const VideoTutorialsStory = {
  title: 'Components/VideoTutorials',
  component: VideoTutorials,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof VideoTutorials>;

export default VideoTutorialsStory;
type Story = StoryObj<typeof VideoTutorialsStory>;

export const Default: Story = {};
