import type { Meta, StoryObj } from '@storybook/react-vite';
import { PageLayout } from '../layouts/PageLayout.stories';
import Section from '@/components/section';

const meta = {
  title: 'Pages/Blue Light Filter',
  tags: ['!autodocs'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta;

export default meta;
type Story = StoryObj;

// Real content from node 1881 (/blue-light-filter)
export const Default: Story = {
  render: () => (
    <PageLayout>
      {/* cpt_2_column_layout */}
      <Section width="Normal" content={null} />

      {/* cpt_1_column_layout × 4 */}
      <Section width="Normal" content={null} />
      <Section width="Normal" content={null} />
      <Section width="Normal" content={null} />
      <Section width="Normal" content={null} />

      {/* cpt_2_column_layout */}
      <Section width="Normal" content={null} />
    </PageLayout>
  ),
};
