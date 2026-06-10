import type { Meta, StoryObj } from '@storybook/react-vite';
import { PageLayout } from '../layouts/PageLayout.stories';
import Section from '@/components/section';

const meta = {
  title: 'Pages/Virtual Try-On',
  tags: ['!autodocs'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta;

export default meta;
type Story = StoryObj;

// Real content from node 606 (/virtual-try-on)
export const Default: Story = {
  render: () => (
    <PageLayout>
      {/* cpt_container — content is rendered from custom Drupal code */}
      <Section width="Normal" content={null} />
    </PageLayout>
  ),
};
