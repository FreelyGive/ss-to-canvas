import type { Meta, StoryObj } from '@storybook/react-vite';
import { PageLayout } from '../layouts/PageLayout.stories';
import Section from '@/components/section';

const meta = {
  title: 'Pages/Ten Years of IOLLA',
  tags: ['!autodocs'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta;

export default meta;
type Story = StoryObj;

// Real content from node unknown (/ten-years-of-iolla)
export const Default: Story = {
  render: () => (
    <PageLayout>
      {/* Canvas not found — page may be unpublished or removed */}
      <Section width="Normal" content={null} />
    </PageLayout>
  ),
};
