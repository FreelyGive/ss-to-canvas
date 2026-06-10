import type { Meta, StoryObj } from "@storybook/react-vite";

import Card from "@/components/card";

const meta = {
  title: "Components/Card",
  component: Card,
  argTypes: {
    image: {
      control: "object",
      name: "Image",
    },
    layout: {
      control: "select",
      options: ["Left aligned", "Center aligned", "Right aligned"],
      name: "Layout",
    },
    textColor: {
      control: "select",
      options: ["Default", "Dark", "Light"],
      name: "Text color",
    },
    heading: {
      control: "text",
      name: "Heading",
    },
    headingElement: {
      control: "select",
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
      name: "Heading element",
    },
    text: {
      control: "text",
      name: "Text",
    },
    link: {
      control: "text",
      name: "Link",
    },
    linkLabel: {
      control: "text",
      name: "Link label",
    },
    linkVariant: {
      control: "select",
      options: ["Solid", "Outline Dark", "Link", "Link Underline"],
      name: "Link variant",
    },
    backgroundColor: {
      control: "color",
      name: "Background color",
    },
    backgroundColorOnHover: {
      control: "color",
      name: "Background color on hover",
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    image: {
      src: "https://placehold.co/800x600",
      alt: "Example image placeholder",
      width: 800,
      height: 600,
    },
    layout: "Left aligned",
    heading: "Feature or benefit",
    headingElement: "h3",
    text: "Help people become familiar with the organization and its offerings, creating a sense of connection and trust.",
    link: "/",
    linkLabel: "Learn more",
    linkVariant: "Link",
  },
};

export const CenterAligned: Story = {
  args: {
    image: {
      src: "https://placehold.co/800x600",
      alt: "Example image placeholder",
      width: 800,
      height: 600,
    },
    layout: "Center aligned",
    heading: "Feature or benefit",
    headingElement: "h3",
    text: "Help people become familiar with the organization and its offerings, creating a sense of connection and trust.",
    link: "/",
    linkLabel: "Learn more",
    linkVariant: "Solid",
  },
};

export const RightAligned: Story = {
  args: {
    image: {
      src: "https://placehold.co/800x600",
      alt: "Example image placeholder",
      width: 800,
      height: 600,
    },
    layout: "Right aligned",
    heading: "Feature or benefit",
    headingElement: "h3",
    text: "Help people become familiar with the organization and its offerings, creating a sense of connection and trust.",
    link: "/",
    linkLabel: "Learn more",
    linkVariant: "Link Underline",
  },
};

export const LightText: Story = {
  args: {
    image: {
      src: "https://placehold.co/800x600",
      alt: "Example image placeholder",
      width: 800,
      height: 600,
    },
    layout: "Left aligned",
    textColor: "Light",
    heading: "Light colored text",
    headingElement: "h3",
    text: "This card uses light colored text, suitable for dark backgrounds.",
    backgroundColor: "#1e293b",
  },
};

export const WithBackgroundColor: Story = {
  args: {
    image: {
      src: "https://placehold.co/800x600",
      alt: "Example image placeholder",
      width: 800,
      height: 600,
    },
    layout: "Left aligned",
    heading: "Card with background",
    headingElement: "h3",
    text: "This card has a custom background color applied.",
    backgroundColor: "#f3f4f6",
    backgroundColorOnHover: "#e2e8f0",
    link: "/",
    linkLabel: "Learn more",
    linkVariant: "Solid",
  },
};

