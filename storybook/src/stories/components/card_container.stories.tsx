import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import Card from '@/components/card'

import CardContainer from '@/components/card_container';

const meta = {
  title: 'Components/Layout/Card Container',
  component: CardContainer,
  argTypes: {
    preHeading: {
      control: 'text',
      name: 'Pre heading',
    },
    heading: {
      control: 'text',
      name: 'Heading',
    },
    headingSize: {
      control: 'select',
      options: ['Extra Large', 'Large', 'Medium', 'Small'],
      name: 'Heading size',
    },
    textColor: {
      control: 'select',
      options: ['Dark', 'Light'],
      name: 'Text color',
    },
    headingPosition: {
      control: 'select',
      options: ['Left aligned', 'Center aligned', 'Right aligned'],
      name: 'Heading position',
    },
    headingLevel: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      name: 'Heading element',
    },
    layout: {
      control: 'select',
      options: ['50-50', '33-33-33', '50-25-25', '25-25-50', '25-25-25-25'],
      name: 'Layout',
    },
  },
} satisfies Meta<typeof CardContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ThreeColumns: Story = {
  args: {
    preHeading: 'Featured services',
    heading: 'What we offer.',
    headingSize: 'Large',
    textColor: 'Dark',
    headingPosition: 'Center aligned',
    headingLevel: 'h2',
    layout: '33-33-33',
    content: (
      <>
        <Card
          heading="Feature or benefit"
          headingElement="h3"
          image={{
            alt: 'Example image placeholder',
            height: 300,
            src: 'https://placehold.co/300',
            width: 300
          }}
          layout="Left aligned"
          link="/"
          linkLabel="Learn more"
          linkVariant="Link"
          text="Help people become familiar with the organization and its offerings, creating a sense of connection and trust."
        />
        <Card
          heading="Feature or benefit"
          headingElement="h3"
          image={{
            alt: 'Example image placeholder',
            height: 300,
            src: 'https://placehold.co/300',
            width: 300
          }}
          layout="Left aligned"
          link="/"
          linkLabel="Learn more"
          linkVariant="Link"
          text="Help people become familiar with the organization and its offerings, creating a sense of connection and trust."
        />
        <Card
          heading="Feature or benefit"
          headingElement="h3"
          image={{
            alt: 'Example image placeholder',
            height: 300,
            src: 'https://placehold.co/300',
            width: 300
          }}
          layout="Left aligned"
          link="/"
          linkLabel="Learn more"
          linkVariant="Link"
          text="Help people become familiar with the organization and its offerings, creating a sense of connection and trust."
        />
      </>
    ),
  },
};

export const TwoColumns: Story = {
  args: {
    preHeading: 'Our services',
    heading: 'How we can help.',
    headingSize: 'Large',
    textColor: 'Dark',
    headingPosition: 'Left aligned',
    headingLevel: 'h2',
    layout: '50-50',
    content: (
      <>
        <Card
          heading="Feature or benefit"
          headingElement="h3"
          image={{
            alt: 'Example image placeholder',
            height: 500,
            src: 'https://placehold.co/500',
            width: 500
          }}
          layout="Left aligned"
          link="/"
          linkLabel="Learn more"
          linkVariant="Link"
          text="Help people become familiar with the organization and its offerings, creating a sense of connection and trust."
        />
        <Card
          heading="Feature or benefit"
          headingElement="h3"
          image={{
            alt: 'Example image placeholder',
            height: 500,
            src: 'https://placehold.co/500',
            width: 500
          }}
          layout="Left aligned"
          link="/"
          linkLabel="Learn more"
          linkVariant="Link"
          text="Help people become familiar with the organization and its offerings, creating a sense of connection and trust."
        />
      </>
    ),
  },
};

export const FourColumns: Story = {
  args: {
    preHeading: 'Partners',
    heading: 'Trusted by industry leaders.',
    headingSize: 'Medium',
    textColor: 'Dark',
    headingPosition: 'Center aligned',
    headingLevel: 'h2',
    layout: '25-25-25-25',
    content: (
      <>
        <Card
          heading="Feature"
          headingElement="h3"
          image={{
            alt: 'Example image placeholder',
            height: 300,
            src: 'https://placehold.co/300',
            width: 300
          }}
          layout="Left aligned"
          text="Brief description here."
        />
        <Card
          heading="Feature"
          headingElement="h3"
          image={{
            alt: 'Example image placeholder',
            height: 300,
            src: 'https://placehold.co/300',
            width: 300
          }}
          layout="Left aligned"
          text="Brief description here."
        />
        <Card
          heading="Feature"
          headingElement="h3"
          image={{
            alt: 'Example image placeholder',
            height: 300,
            src: 'https://placehold.co/300',
            width: 300
          }}
          layout="Left aligned"
          text="Brief description here."
        />
        <Card
          heading="Feature"
          headingElement="h3"
          image={{
            alt: 'Example image placeholder',
            height: 300,
            src: 'https://placehold.co/300',
            width: 300
          }}
          layout="Left aligned"
          text="Brief description here."
        />
      </>
    ),
  },
};

export const Light: Story = {
  args: {
    preHeading: 'Featured services',
    heading: 'What we offer.',
    headingSize: 'Large',
    textColor: 'Light',
    headingPosition: 'Center aligned',
    headingLevel: 'h2',
    layout: '33-33-33',
    content: (
      <>
        <Card
          heading="Feature or benefit"
          headingElement="h3"
          image={{
            alt: 'Example image placeholder',
            height: 300,
            src: 'https://placehold.co/300',
            width: 300
          }}
          layout="Left aligned"
          link="/"
          linkLabel="Learn more"
          linkVariant="Link"
          text="Help people become familiar with the organization."
        />
        <Card
          heading="Feature or benefit"
          headingElement="h3"
          image={{
            alt: 'Example image placeholder',
            height: 300,
            src: 'https://placehold.co/300',
            width: 300
          }}
          layout="Left aligned"
          link="/"
          linkLabel="Learn more"
          linkVariant="Link"
          text="Help people become familiar with the organization."
        />
        <Card
          heading="Feature or benefit"
          headingElement="h3"
          image={{
            alt: 'Example image placeholder',
            height: 300,
            src: 'https://placehold.co/300',
            width: 300
          }}
          layout="Left aligned"
          link="/"
          linkLabel="Learn more"
          linkVariant="Link"
          text="Help people become familiar with the organization."
        />
      </>
    ),
  },
};
