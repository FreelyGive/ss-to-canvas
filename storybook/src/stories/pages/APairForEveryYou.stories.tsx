import type { Meta, StoryObj } from '@storybook/react-vite';
import { PageLayout } from '../layouts/PageLayout.stories';
import Section from '@/components/section';
import Spacer from '@/components/spacer';

const meta = {
  title: 'Pages/A Pair for Every You',
  tags: ['!autodocs'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta;

export default meta;
type Story = StoryObj;

// Real content from node 931 (/apairforeveryyou)
export const Default: Story = {
  render: () => (
    <PageLayout>
      {/* cpt_2_column_layout */}
      <Section width="Normal" content={null} />

      {/* cpt_container */}
      <Section width="Normal" content={null} />

      {/* cpt_2_column_layout × 3 */}
      <Section width="Normal" content={null} />
      <Section width="Normal" content={null} />
      <Section width="Normal" content={null} />

      {/* cpt_spacer */}
      <Spacer height="Medium" />
    </PageLayout>
  ),
};
