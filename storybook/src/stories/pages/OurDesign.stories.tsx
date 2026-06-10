import type { Meta, StoryObj } from '@storybook/react-vite';
import { PageLayout } from '../layouts/PageLayout.stories';
import Section from '@/components/section';

const meta = {
  title: 'Pages/Our Design',
  tags: ['!autodocs'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta;

export default meta;
type Story = StoryObj;

// Real content from node 841 (/our-design)
// Canvas is cpt_embeddable — content is rendered from Drupal WYSIWYG/custom code
export const Default: Story = {
  render: () => (
    <PageLayout>
      {/* cpt_embeddable */}
      <Section width="Normal" content={null} />
    </PageLayout>
  ),
};
