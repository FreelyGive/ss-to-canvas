import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import Button from '@/components/button';

const meta = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'Solid',
        'Outline Dark',
        'Outline Light',
        'Ghost',
        'Ghost Neutral',
        'Ghost Light',
        'Link',
        'Link Underline',
        'Link Dark',
        'Link Light',
        'Nav Link Dark',
      ],
      name: 'Variant',
    },
    text: {
      control: 'text',
      name: 'Text',
    },
    link: {
      control: 'text',
      name: 'Link',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    text: 'Button',
    variant: 'Solid',
    link: '#',
  },
};

export const OutlineDark: Story = {
  args: {
    text: 'Button',
    variant: 'Outline Dark',
    link: '#',
  },
};

export const OutlineLight: Story = {
  args: {
    text: 'Button',
    variant: 'Outline Light',
    link: '#',
  },
};

export const Ghost: Story = {
  args: {
    text: 'Button',
    variant: 'Ghost',
    link: '#',
  },
};

export const GhostNeutral: Story = {
  args: {
    text: 'Button',
    variant: 'Ghost Neutral',
    link: '#',
  },
};

export const GhostLight: Story = {
  args: {
    text: 'Button',
    variant: 'Ghost Light',
    link: '#',
  },
};

export const Link: Story = {
  args: {
    text: 'Button',
    variant: 'Link',
    link: '#',
  },
};

export const LinkUnderline: Story = {
  args: {
    text: 'Button',
    variant: 'Link Underline',
    link: '#',
  },
};

export const LinkDark: Story = {
  args: {
    text: 'Button',
    variant: 'Link Dark',
    link: '#',
  },
};

export const LinkLight: Story = {
  args: {
    text: 'Button',
    variant: 'Link Light',
    link: '#',
  },
};

export const NavLinkDark: Story = {
  args: {
    text: 'Button',
    variant: 'Nav Link Dark',
    link: '#',
  },
};
