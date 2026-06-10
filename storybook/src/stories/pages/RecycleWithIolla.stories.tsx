import type { Meta, StoryObj } from '@storybook/react-vite';
import { PageLayout } from '../layouts/PageLayout.stories';
import Section from '@/components/section';

const meta = {
  title: 'Pages/Recycle with IOLLA',
  tags: ['!autodocs'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta;

export default meta;
type Story = StoryObj;

// Real content from node 1446 (/recycle-with-iolla)
// Canvas is cpt_container — content is rendered from Drupal WYSIWYG/custom code
export const Default: Story = {
  render: () => (
    <PageLayout>
      {/* cpt_container */}
      <Section width="Normal" content={null} />
    </PageLayout>
  ),
};
