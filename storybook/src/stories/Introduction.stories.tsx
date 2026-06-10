import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Introduction",
  tags: ["!autodocs"],
  parameters: {
    layout: "fullscreen",
    controls: { disable: true },
    actions: { disable: true },
    viewport: { disable: true },
    options: {
      showPanel: false,
    },
  },
};

export default meta;
type Story = StoryObj;

export const Introduction: Story = {
  render: () => (
    <div className="min-h-screen bg-white p-8 md:p-12 lg:p-16">
      <div className="mx-auto max-w-3xl">
        <header className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">
            Component Library
          </h1>
          <p className="text-lg text-gray-600">
            React components for Drupal Canvas
          </p>
        </header>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            Overview
          </h2>
          <p className="text-gray-700">
            This Storybook documents the React-based components used in Drupal
            Canvas for page building. Each component is designed to be
            responsive, mobile-first, and composable.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            Navigation
          </h2>
          <ul className="list-inside list-disc space-y-2 text-gray-700">
            <li>
              <strong>Example pages</strong> – Full page compositions showing
              components in context
            </li>
            <li>
              <strong>Components</strong> – Individual component documentation
              with controls and examples
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            Getting Started
          </h2>

          <h3 className="mb-3 text-xl font-medium text-gray-800">
            Viewing Components
          </h3>
          <p className="mb-4 text-gray-700">Each component page includes:</p>
          <ul className="mb-6 list-inside list-disc space-y-2 text-gray-700">
            <li>
              <strong>Controls</strong> – Interactive props to customize the
              component
            </li>
            <li>
              <strong>Stories</strong> – Pre-configured examples demonstrating
              different use cases
            </li>
            <li>
              <strong>Code examples</strong> – Copy-paste ready code for
              implementation
            </li>
          </ul>

          <h3 className="mb-3 text-xl font-medium text-gray-800">
            Responsive Design
          </h3>
          <p className="mb-4 text-gray-700">
            Use the viewport selector in the toolbar to preview components at
            different breakpoints:
          </p>
          <ul className="list-inside list-disc space-y-2 text-gray-700">
            <li>
              <strong>Mobile</strong> (468px)
            </li>
            <li>
              <strong>Tablet</strong> (1024px)
            </li>
            <li>
              <strong>Desktop</strong> (1920px)
            </li>
            <li>
              <strong>Large Desktop</strong> (2560px)
            </li>
          </ul>
        </section>
      </div>
    </div>
  ),
};
