import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, within } from "storybook/test";
import { user } from "../test-utils";
import React from "react";

import MainNavigation from "@/components/main_navigation";

// Helper to pause for animations
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Set mobile viewport before each test (dynamic import to avoid errors outside Vitest)
const setMobileViewport = async () => {
  try {
    const { page } = await import("vitest/browser");
    // Resize to mobile width (less than Tailwind's md: breakpoint of 768px)
    await page.viewport(400, 800);
    // Give browser time to apply media queries
    await sleep(100);
  } catch {
    // Not running in Vitest browser mode, skip viewport change
  }
};

const meta = {
  title: "Tests/Main Navigation",
  component: MainNavigation,
  tags: ["!autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  globals: {
    viewport: { value: "mobile", isRotated: false },
  },
  decorators: [
    (Story) => (
      <div className="bg-white p-4">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof MainNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OpenMenu: Story = {
  play: async ({ canvasElement }) => {
    await setMobileViewport();
    const canvas = within(canvasElement);

    // Hamburger button should be visible on mobile
    const menuButton = canvas.getByRole("button", { name: "Toggle navigation" });
    await expect(menuButton).toBeInTheDocument();
    await expect(menuButton).toHaveAttribute("aria-expanded", "false");

    // Click hamburger button to open menu
    await user.click(menuButton);

    // Wait for menu to open
    await sleep(100);

    // Menu button should now show expanded state
    await expect(menuButton).toHaveAttribute("aria-expanded", "true");

    // Navigation should be visible
    const nav = canvas.getByRole("navigation", { name: "Main navigation" });
    await expect(nav).toBeInTheDocument();
  },
};

export const CloseMenu: Story = {
  play: async ({ canvasElement }) => {
    await setMobileViewport();
    const canvas = within(canvasElement);

    // Open menu first
    const menuButton = canvas.getByRole("button", { name: "Toggle navigation" });
    await user.click(menuButton);
    await sleep(100);

    // Verify menu is open
    await expect(menuButton).toHaveAttribute("aria-expanded", "true");

    // Click hamburger button again to close menu
    await user.click(menuButton);

    // Wait for menu to close
    await sleep(100);

    // Menu should be closed
    await expect(menuButton).toHaveAttribute("aria-expanded", "false");
  },
};
