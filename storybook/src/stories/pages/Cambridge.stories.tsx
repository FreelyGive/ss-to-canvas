import type { Meta, StoryObj } from '@storybook/react-vite';
import { PageLayout } from '../layouts/PageLayout.stories';
import Section from '@/components/section';
import Spacer from '@/components/spacer';

const meta = {
  title: 'Pages/Cambridge',
  tags: ['!autodocs'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta;

export default meta;
type Story = StoryObj;

// Real content from node 3001 (/cambridge)
export const Default: Story = {
  render: () => (
    <PageLayout>
      {/* cpt_2_column_layout × 2 */}
      <Section width="Normal" content={null} />
      <Section width="Normal" content={null} />

      {/* cpt_3_column_layout */}
      <Section width="Normal" content={null} />

      {/* cpt_spacer */}
      <Spacer height="Medium" />

      {/* cpt_container */}
      <Section width="Normal" content={null} />

      {/* cpt_embeddable */}
      <Section width="Normal" content={null} />
    </PageLayout>
  ),
};
