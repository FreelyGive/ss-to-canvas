import type { Meta, StoryObj } from '@storybook/react-vite';
import RowForColumns from '@/components/row_for_columns';
import Column from '@/components/column';
import FeatureCard from '@/components/feature_card';

const meta = {
  title: 'Components/Row for columns',
  component: RowForColumns,
  parameters: {
    docs: {
      description: {
        component: `# Using the Row for columns
- Use the Row for columns to contain Column components for bespoke multi-column layouts.

# Settings
- **Width of content area -** Boxed or Full width.
- **Column alignment -** Left, Right, Center, or Distribute evenly.
- **Space between columns -** Add space or No space.
- **Padding top and bottom -** Padding above/below content.

# Row background color
- **Background color -** Optionally set a background color.

# Row background image
- **Background image -** Optionally set a background image.
- **Alternative image for phone -** Toggle to upload an alternative mobile image.`,
      },
    },
  },
  argTypes: {
    // --- Tab 1: Content ---
    width: { control: 'select', options: ['Full width', 'Boxed width'], name: 'Width of content area' },
    columnAlignment: { control: 'select', options: ['Distribute columns evenly', 'Left', 'Right', 'Center'], name: 'Column alignment' },
    spaceBetweenColumns: { control: 'select', options: ['Add space between', 'No space between'], name: 'Space between columns' },
    padding: { control: 'select', options: ['None', 'Top and bottom large', 'Top and bottom medium', 'Top and bottom small', 'Top only large', 'Top only medium', 'Top only small', 'Bottom only large', 'Bottom only medium', 'Bottom only small'], name: 'Padding top and bottom' },
    // --- Tab 2: Layout & Style ---
    backgroundColor: { control: 'color', name: 'Background color' },
    backgroundImageDesktop: { control: 'object', name: 'Background image' },
    alternativeImageForPhone: { control: 'boolean', name: 'Alternative image for phone' },
    backgroundImageMobile: { control: 'object', name: 'Phone image' },
  },
} satisfies Meta<typeof RowForColumns>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: 'Boxed width',
    columnAlignment: 'Center',
    spaceBetweenColumns: 'Add space between',
    padding: 'None',
    columns: (
      <>
        <Column xlWidth="4  (1/3)" lgWidth="4  (1/3)" mdWidth="6  (1/2)" smWidth="12  (full width)" content={
          <FeatureCard cardHeading="Expert advice" description="Our team of opticians are here to help." />
        } />
        <Column xlWidth="4  (1/3)" lgWidth="4  (1/3)" mdWidth="6  (1/2)" smWidth="12  (full width)" content={
          <FeatureCard cardHeading="Free delivery" description="Free on all orders over £49." />
        } />
        <Column xlWidth="4  (1/3)" lgWidth="4  (1/3)" mdWidth="6  (1/2)" smWidth="12  (full width)" content={
          <FeatureCard cardHeading="30-day returns" description="No-quibble returns for unworn frames." />
        } />
      </>
    ),
  },
};

export const WithBackground: Story = {
  args: {
    width: 'Boxed width',
    columnAlignment: 'Center',
    spaceBetweenColumns: 'Add space between',
    padding: 'Top and bottom large',
    backgroundColor: '#f5f2eb',
    columns: (
      <>
        <Column xlWidth="6  (1/2)" lgWidth="6  (1/2)" mdWidth="12  (full width)" smWidth="12  (full width)" content={
          <FeatureCard cardHeading="Expert advice" description="Our team of opticians are here to help." />
        } />
        <Column xlWidth="6  (1/2)" lgWidth="6  (1/2)" mdWidth="12  (full width)" smWidth="12  (full width)" content={
          <FeatureCard cardHeading="Free delivery" description="Free on all orders over £49." />
        } />
      </>
    ),
  },
};
