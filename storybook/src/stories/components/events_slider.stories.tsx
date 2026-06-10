import type { Meta, StoryObj } from '@storybook/react-vite';
import EventsSlider from '@/components/events_slider';

const meta = {
  title: 'Components/Events slider',
  component: EventsSlider,
  parameters: {
    docs: {
      description: {
        component: 'Text color is automatic based on your background color selection.',
      },
    },
  },
  argTypes: {
    // --- Tab 1: Content ---
    heading: { control: 'text', name: 'Heading' },
    eventSource: { control: 'select', options: ['Upcoming events', 'Past events'], name: 'Events' },
    // --- Tab 2: Layout & Style ---
    headingColor: { control: 'select', options: ['Dark', 'Light', 'Color'], name: 'Heading color' },
    headingAlign: { control: 'select', options: ['Left', 'Center', 'Right'], name: 'Align heading text' },
    containerBackgroundColor: { control: 'color', name: 'Container background color' },
    padding: { control: 'select', options: ['None', 'Top and bottom', 'Top only', 'Bottom only'], name: 'Padding top and bottom' },
    cardBackgroundColor: { control: 'color', name: 'Background color' },
    cardTextColor: { control: 'select', options: ['Dark text', 'Light text'], name: 'Text color' },
    conditionalTextColorDarkBackground: { control: 'text', name: 'Conditional text color dark background' },
    conditionalTextColorLightBackground: { control: 'text', name: 'Conditional text color light background' },
    conditionalTextColorColoredBackground: { control: 'text', name: 'Conditional text color colored background' },
    border: { control: 'select', options: ['None', 'Add border'], name: 'Border' },
    borderColor: { control: 'color', name: 'Border color' },
    events: { control: 'object' },
  },
} satisfies Meta<typeof EventsSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    heading: 'Upcoming Events',
    eventSource: 'Upcoming events',
    headingColor: 'Dark',
    headingAlign: 'Left',
    containerBackgroundColor: '#ffffff',
    padding: 'Top and bottom',
    cardBackgroundColor: '#ffffff',
    cardTextColor: 'Dark text',
    border: 'None',
    events: [
      {
        title: 'Eye Health Awareness Day',
        date: '15 July 2026',
        image: { src: 'https://placehold.co/400x300/006699/ffffff?text=Event+1', alt: 'Eye Health Awareness Day', width: 400, height: 300 },
        url: '/events/eye-health-day',
      },
      {
        title: 'Summer Frames Launch',
        date: '1 August 2026',
        image: { src: 'https://placehold.co/400x300/005580/ffffff?text=Event+2', alt: 'Summer Frames Launch', width: 400, height: 300 },
        url: '/events/summer-frames',
      },
      {
        title: 'Kids Eye Check Clinic',
        date: '5 September 2026',
        image: { src: 'https://placehold.co/400x300/004466/ffffff?text=Event+3', alt: 'Kids Eye Check Clinic', width: 400, height: 300 },
        url: '/events/kids-clinic',
      },
    ],
  },
};

export const PastEvents: Story = {
  args: {
    heading: 'Past Events',
    eventSource: 'Past events',
    headingColor: 'Dark',
    headingAlign: 'Center',
    containerBackgroundColor: '#f5f2eb',
    padding: 'Top and bottom',
    cardBackgroundColor: '#ffffff',
    cardTextColor: 'Dark text',
    border: 'Add border',
    borderColor: '#e5e7eb',
  },
};
