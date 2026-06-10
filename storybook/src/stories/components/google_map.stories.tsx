import type { Meta, StoryObj } from '@storybook/react-vite';
import GoogleMap from '@/components/google_map';

const zoomOptions = [
  '1 (zoomed out)', '2', '3', '4', '5', '6', '7', '8', '9', '10',
  '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22 (zoomed in)',
];

const meta = {
  title: 'Components/Google map',
  component: GoogleMap,
  parameters: {
    docs: {
      description: {
        component: `# Using the Google map component

# Map markers
- **Address -** Enter the address of the location.
- **Latitude and Longitude -** Populated automatically from address.
- **Marker info window -** Content displayed when user clicks the pin.

# Map layout
- **Map aspect ratio -** Select the aspect ratio.
- **Space below map -** Add a space below the map.`,
      },
    },
  },
  argTypes: {
    // --- Tab 1: Content ---
    zoomLevel: { control: 'select', options: zoomOptions, name: 'Map zoom level' },
    markers: { control: 'object', name: 'Google map marker / Marker info window' },
    // --- Tab 2: Layout & Style ---
    mapStyle: { control: 'select', options: ['Standard', 'Silver', 'Retro', 'Dark', 'Night', 'Aubergine'], name: 'Map style' },
    aspectRatio: { control: 'select', options: ['16:9', '4:3', '1:1', '2:1', '3:1'], name: 'Map aspect ratio' },
    addSpaceBelow: { control: 'select', options: ['None', 'Add space below map'], name: 'Space below map' },
  },
} satisfies Meta<typeof GoogleMap>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Glasgow: Story = {
  args: {
    zoomLevel: '12',
    markers: [
      {
        address: '17 Wilson Street, Glasgow G1 1SS',
        lat: 55.8619,
        lng: -4.2503,
        infoWindow: '<strong>iolla Glasgow</strong><br>17 Wilson Street, Glasgow G1 1SS',
      },
    ],
    mapStyle: 'Standard',
    aspectRatio: '16:9',
    addSpaceBelow: 'None',
  },
};

export const Edinburgh: Story = {
  args: {
    zoomLevel: '12',
    markers: [
      {
        address: 'Multrees Walk, Edinburgh EH1 3DQ',
        lat: 55.9533,
        lng: -3.1883,
        infoWindow: '<strong>iolla Edinburgh</strong><br>Multrees Walk, Edinburgh EH1 3DQ',
      },
    ],
    mapStyle: 'Standard',
    aspectRatio: '4:3',
    addSpaceBelow: 'None',
  },
};

export const MultipleShowrooms: Story = {
  args: {
    zoomLevel: '6',
    markers: [
      {
        address: '17 Wilson Street, Glasgow G1 1SS',
        lat: 55.8619,
        lng: -4.2503,
        infoWindow: '<strong>iolla Glasgow</strong>',
      },
      {
        address: 'Multrees Walk, Edinburgh EH1 3DQ',
        lat: 55.9533,
        lng: -3.1883,
        infoWindow: '<strong>iolla Edinburgh</strong>',
      },
    ],
    mapStyle: 'Standard',
    aspectRatio: '2:1',
    addSpaceBelow: 'Add space below map',
  },
};
