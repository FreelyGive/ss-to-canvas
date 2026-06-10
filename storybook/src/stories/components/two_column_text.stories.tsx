import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import Button from '@/components/button';

import TwoColumnText from '@/components/two_column_text';

const meta = {
  title: 'Components/Layout/Two column text',
  component: TwoColumnText,
  argTypes: {
    image: {
      control: 'object',
      name: 'Image',
    },
    layout: {
      control: 'select',
      options: ['Left aligned', 'Centered'],
      name: 'Image position',
    },
    preHeading: {
      control: 'text',
      name: 'Pre heading',
    },
    heading: {
      control: 'text',
      name: 'Heading',
    },
    headingElement: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      name: 'Heading element',
    },
    headingSize: {
      control: 'select',
      options: ['Extra Large', 'Large', 'Medium', 'Small'],
      name: 'Heading size',
    },
    text: {
      control: 'text',
      name: 'Text',
    },
    textColor: {
      control: 'select',
      options: ['Dark', 'Light'],
      name: 'Text color',
    },
    textShadow: {
      control: 'select',
      options: ['Light', 'Medium', 'Heavy'],
      name: 'Text shadow',
    },
  },
} satisfies Meta<typeof TwoColumnText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LeftAligned: Story = {
  args: {
    layout: 'Left aligned',
    preHeading: 'Mission',
    heading: 'This space deserves a hero.',
    headingElement: 'h2',
    headingSize: 'Large',
    text: 'This is a space to welcome visitors to the site. Grab their attention with copy that clearly states what the site is about.',
    textColor: 'Dark',
    image: {
      src: 'https://placehold.co/800x600',
      alt: 'Featured image',
      width: 800,
      height: 600,
    },
    buttons: (
      <>
        <Button text="Get Started" />
        <Button text="Learn More" variant="Outline Dark" />
      </>
    ),
  },
};

export const Centered: Story = {
  args: {
    layout: 'Centered',
    preHeading: 'About Us',
    heading: 'Our Story',
    headingElement: 'h2',
    headingSize: 'Large',
    text: 'Learn about our journey and what drives us to deliver exceptional results for our clients.',
    textColor: 'Dark',
    buttons: (
      <Button text="Read More" />
    ),
  },
};

export const WithImage: Story = {
  args: {
    layout: 'Left aligned',
    preHeading: 'Features',
    heading: 'What we offer',
    headingElement: 'h2',
    headingSize: 'Large',
    text: 'Discover our comprehensive suite of services designed to help your business grow and succeed.',
    textColor: 'Dark',
    image: {
      src: 'https://placehold.co/800x600',
      alt: 'Features illustration',
      width: 800,
      height: 600,
    },
    buttons: (
      <Button text="Explore Features" />
    ),
  },
};

export const Light: Story = {
  args: {
    layout: 'Left aligned',
    preHeading: 'Welcome',
    heading: 'Light theme content',
    headingElement: 'h2',
    headingSize: 'Large',
    text: 'This variation uses light text colors suitable for dark backgrounds.',
    textColor: 'Light',
    buttons: (
      <Button text="Learn More" variant="Outline Light" />
    ),
  },
};

export const WithTextShadow: Story = {
  args: {
    layout: 'Left aligned',
    preHeading: 'Featured',
    heading: 'Text with shadow effect',
    headingElement: 'h2',
    headingSize: 'Large',
    text: 'This variation applies a text shadow for improved readability over busy backgrounds.',
    textColor: 'Light',
    textShadow: 'Medium',
    image: {
      src: 'https://placehold.co/800x600/333333/333333',
      alt: 'Dark background image',
      width: 800,
      height: 600,
    },
    buttons: (
      <Button text="Get Started" variant="Outline Light" />
    ),
  },
};
