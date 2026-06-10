import type { Meta, StoryObj } from '@storybook/react-vite';
import { PageLayout } from '../layouts/PageLayout.stories';
import Section from '@/components/section';

const meta = {
  title: 'Pages/Bruntsfield',
  tags: ['!autodocs'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta;

export default meta;
type Story = StoryObj;

// Real content from node 3091 (/bruntsfield)
export const Default: Story = {
  render: () => (
    <PageLayout>
      {/* cpt_2_column_layout */}
      <Section width="Normal" content={null} />

      {/* cpt_3_column_layout */}
      <Section width="Normal" content={null} />

      {/* cpt_container */}
      <Section width="Normal" content={null} />

      {/* cpt_embeddable */}
      <Section width="Normal" content={null} />
    </PageLayout>
  ),
};
