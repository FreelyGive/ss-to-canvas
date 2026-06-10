import type { Meta, StoryObj } from '@storybook/react-vite';
import HeroSlideContainer from '@/components/hero_slide_container';
import SlideItem from '@/components/slide_item';

const meta = {
  title: 'Components/Hero slide container (autoplay & fade)',
  component: HeroSlideContainer,
  tags: ['autodocs'],
  argTypes: {
    slidesDesktop: { control: { type: 'select' }, options: [1,2,3,4,5,6], name: 'Select (xl slides visible)' },
    slidesDesktopScroll: { control: { type: 'select' }, options: [1,2,3,4,5,6], name: 'Select (xl slides to scroll)' },
    slidesLg: { control: { type: 'select' }, options: [1,2,3,4], name: 'Select (lg slides visible)' },
    slidesLgScroll: { control: { type: 'select' }, options: [1,2,3,4], name: 'Select (lg slides to scroll)' },
    slidesSm: { control: { type: 'select' }, options: [1,2], name: 'Select (sm slides visible)' },
    slidesSmScroll: { control: { type: 'select' }, options: [1,2], name: 'Select (sm slides to scroll)' },
    showArrows: { control: 'boolean', name: 'Toggle (arrows)' },
    arrowStyle: {
      control: 'select',
      options: ['', 'color-arrows', 'dark-arrows', 'light-arrows'],
      name: 'Select (arrow style)',
    },
    showPagination: { control: 'boolean', name: 'Toggle (pagination)' },
    paginationPosition: {
      control: 'select',
      options: ['move-pagination-up', 'move-pagination-down'],
      name: 'Select (pagination position)',
    },
    slideSpacing: {
      control: 'select',
      options: ['retain', 'bleed'],
      name: 'Select (slide spacing)',
    },
    sidePadding: {
      control: 'select',
      options: ['', 'padding-left-right'],
      name: 'Select (side padding)',
    },
    marginBottom: {
      control: 'select',
      options: ['', 'coh-style-margin-bottom-small'],
      name: 'Select (margin bottom)',
    },
  },
} satisfies Meta<typeof HeroSlideContainer>;


export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    slidesDesktop: 1,
    slidesDesktopScroll: 1,
    slidesLg: 1,
    slidesLgScroll: 1,
    slidesSm: 1,
    slidesSmScroll: 1,
    showArrows: false,
    arrowStyle: '',
    showPagination: true,
    paginationPosition: 'move-pagination-up',
    slideSpacing: 'retain',
    sidePadding: '',
    marginBottom: 'coh-style-margin-bottom-small',
  } as any,
};

export const WithArrows: Story = {
  args: {
    ...Default.args,
    showArrows: true,
    arrowStyle: 'light-arrows',
    showPagination: true,
  },
};
