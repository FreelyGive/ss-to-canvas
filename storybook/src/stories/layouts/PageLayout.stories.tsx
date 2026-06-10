import React, { ReactNode } from "react";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Heading from "@/components/heading";
import Logo from "@/components/logo";
import Navigation from "@/components/main_navigation";
import Section from "@/components/section";
import Text from "@/components/text";
import type { Meta, StoryObj } from "@storybook/react-vite";

import { FooterProps } from "../shared/content";
import { navigateToStory } from "../shared/pageLinks";

interface PageLayoutProps {
  children: ReactNode;
}

/**
 * Standard page layout with header and footer.
 * Use this as a wrapper for page content.
 */
const PageLayout = ({ children }: PageLayoutProps) => (
  <>
    <Header
      logo={<Logo />}
      menu={<Navigation />}
      onNavigate={navigateToStory}
    />
    <main>{children}</main>
    <Footer {...FooterProps} onNavigate={navigateToStory} />
  </>
);

const meta = {
  title: "Layouts/Page Layout",
  component: PageLayout,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Standard page layout with header and footer. Wrap your page content with this layout.",
      },
    },
  },
  argTypes: {
    children: {
      control: false,
      description: "Page content to render between header and footer",
    },
  },
  excludeStories: ["PageLayout"],
} satisfies Meta<typeof PageLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <Section
        width="Normal"
        content={
          <>
            <Heading heading="Page Layout Example" />
            <Text
              text={`
                <p>This is placeholder content for the page layout. Replace this with your actual page content.</p>
                <p>The layout includes the standard header with navigation, and the footer.</p>
              `}
              textSize="Normal"
              textColor="Dark"
            />
          </>
        }
      />
    ),
  },
};

export { PageLayout };
