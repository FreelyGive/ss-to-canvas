import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import SlideContainer from '@/components/slide_container';
import SlideItem from '@/components/slide_item';

const meta = {
  title: 'Components/Slide container',
  component: SlideContainer,
  parameters: {
    docs: {
      description: {
        component: `# Using the Slider container component
- Use the Slider container to add a slider to a layout.
- The Slider container requires Slide item components.

# Slides to show and scroll
- **Show on (Desktop, Tablet, Phone) -** Set the number of slides to show by device.
- **Scroll on (Desktop, Tablet, Phone) -** Set the number of slides to scroll by device.

# Navigation
- **Show navigation -** Show navigation arrows.
- **Navigation style -** Select arrow style.

# Pagination
- **Show pagination -** Show pagination dots.
- **Pagination position -** Over slides or Below slides.

# Space between slides
- **Space between slides -** Retain space or No space between slides.

# Space below
- **Add space below -** Add a space below the slider.`,
      },
    },
  },
  argTypes: {
    // --- Tab 1: Content ---
    desktopShow: {
      control: 'select',
      options: [1, 2, 3, 4, 5, 6],
      name: 'Desktop show',
    },
    desktopScroll: {
      control: 'select',
      options: [1, 2, 3, 4, 5, 6],
      name: 'Desktop scroll',
    },
    tabletShow: {
      control: 'select',
      options: [1, 2, 3, 4],
      name: 'Tablet show',
    },
    tabletScroll: {
      control: 'select',
      options: [1, 2, 3, 4],
      name: 'Tablet scroll',
    },
    phoneShow: {
      control: 'select',
      options: [1, 2],
      name: 'Phone show',
    },
    phoneScroll: {
      control: 'select',
      options: [1, 2],
      name: 'Phone scroll',
    },
    showNavigation: { control: 'boolean', name: 'Show navigation' },
    navigationStyle: {
      control: 'select',
      options: ['Semi-transparent buttons', 'Color arrows', 'Dark arrows', 'Light arrows'],
      name: 'Navigation style',
    },
    showPagination: { control: 'boolean', name: 'Show pagination' },
    paginationPosition: {
      control: 'select',
      options: ['Over slides', 'Below slides'],
      name: 'Pagination position',
    },
    spaceBetweenSlides: {
      control: 'select',
      options: ['Retain space between slides', 'No space between slides'],
      name: 'Space between slides',
    },
    spaceLeftRight: {
      control: 'select',
      options: ['No space', 'Add space to the left and right of slides'],
      name: 'Space left and right',
    },
    addSpaceBelow: {
      control: 'select',
      options: ['None', 'Add space below'],
      name: 'Space below',
    },
  },
} satisfies Meta<typeof SlideContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    desktopShow: 3,
    desktopScroll: 1,
    tabletShow: 2,
    tabletScroll: 1,
    phoneShow: 1,
    phoneScroll: 1,
    showNavigation: true,
    navigationStyle: 'Semi-transparent buttons',
    showPagination: true,
    paginationPosition: 'Over slides',
    spaceBetweenSlides: 'Retain space between slides',
    spaceLeftRight: 'No space',
    addSpaceBelow: 'Add space below',
    slides: [
      <SlideItem key="1" content={<div className="flex h-48 items-center justify-center rounded-xl bg-[#006699] text-white">Slide 1</div>} />,
      <SlideItem key="2" content={<div className="flex h-48 items-center justify-center rounded-xl bg-[#005580] text-white">Slide 2</div>} />,
      <SlideItem key="3" content={<div className="flex h-48 items-center justify-center rounded-xl bg-[#004466] text-white">Slide 3</div>} />,
      <SlideItem key="4" content={<div className="flex h-48 items-center justify-center rounded-xl bg-[#002633] text-white">Slide 4</div>} />,
    ],
  },
};

export const SingleSlide: Story = {
  args: {
    desktopShow: 1,
    desktopScroll: 1,
    tabletShow: 1,
    tabletScroll: 1,
    phoneShow: 1,
    phoneScroll: 1,
    showNavigation: true,
    navigationStyle: 'Color arrows',
    showPagination: true,
    paginationPosition: 'Below slides',
    spaceBetweenSlides: 'Retain space between slides',
    spaceLeftRight: 'No space',
    addSpaceBelow: 'None',
    slides: [
      <SlideItem key="1" content={<div className="flex h-64 items-center justify-center rounded-xl bg-[#002633] text-2xl font-bold text-white">Glasgow</div>} />,
      <SlideItem key="2" content={<div className="flex h-64 items-center justify-center rounded-xl bg-[#006699] text-2xl font-bold text-white">Edinburgh</div>} />,
      <SlideItem key="3" content={<div className="flex h-64 items-center justify-center rounded-xl bg-[#d95f2b] text-2xl font-bold text-white">London</div>} />,
    ],
  },
};
