import type { Meta, StoryObj } from '@storybook/react-vite';
import { PageLayout } from '../layouts/PageLayout.stories';
import Section from '@/components/section';

const meta = {
  title: 'Pages/Press',
  tags: ['!autodocs'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta;

export default meta;
type Story = StoryObj;

// Real content from node 1471 (/press)
export const Default: Story = {
  render: () => (
    <PageLayout>
      {/* cpt_container */}
      <Section width="Normal" content={null} />

      {/* cpt_text_and_image_layout */}
      <Section width="Normal" content={null} />

      {/* cpt_1_column_layout */}
      <Section width="Normal" content={null} />
    </PageLayout>
  ),
};
