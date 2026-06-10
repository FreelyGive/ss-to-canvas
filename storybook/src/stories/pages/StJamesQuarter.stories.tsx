import type { Meta, StoryObj } from '@storybook/react-vite';
import { PageLayout } from '../layouts/PageLayout.stories';
import Section from '@/components/section';

const meta = {
  title: 'Pages/St James Quarter',
  tags: ['!autodocs'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta;

export default meta;
type Story = StoryObj;

// Real content from node 781 (/st-james-quarter)
export const Default: Story = {
  render: () => (
    <PageLayout>
      {/* cpt_2_column_layout × 2 */}
      <Section width="Normal" content={null} />
      <Section width="Normal" content={null} />

      {/* cpt_3_column_layout */}
      <Section width="Normal" content={null} />

      {/* cpt_container × 2 */}
      <Section width="Normal" content={null} />
      <Section width="Normal" content={null} />
    </PageLayout>
  ),
};
