import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import Column from '@/components/column';
import RowForColumns from '@/components/row_for_columns';

const widthOptions = [
  '12  (full width)', '11', '10', '9  (3/4)', '8  (2/3)', '7',
  '6  (1/2)', '5', '4  (1/3)', '3  (1/4)', '2 (1/6)', '1', '1.5  (1/5)', 'None (hidden)',
];

const meta = {
  title: 'Components/Column',
  component: Column,
  argTypes: {
    // --- Tab 1: Layout & Style (SS form order) ---
    xlWidth: { control: 'select', options: widthOptions, name: 'Select (xl breakpoint)' },
    lgWidth: { control: 'select', options: widthOptions, name: 'Select (lg breakpoint)' },
    mdWidth: { control: 'select', options: widthOptions, name: 'Select (md breakpoint)' },
    smWidth: { control: 'select', options: widthOptions, name: 'Select (sm breakpoint)' },
    xlCustomClass: { control: 'text', name: 'Input (xl custom class/padding)' },
    lgCustomClass: { control: 'text', name: 'Input (lg custom class/padding)' },
    mdCustomClass: { control: 'text', name: 'Input (md custom class/padding)' },
    smCustomClass: { control: 'text', name: 'Input (sm custom class/padding)' },
  },
} satisfies Meta<typeof Column>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HalfWidth: Story = {
  args: {
    xlWidth: '6  (1/2)',
    lgWidth: '6  (1/2)',
    mdWidth: '12  (full width)',
    smWidth: '12  (full width)',
    content: (
      <div className="rounded-xl bg-[#006699] p-8 text-center text-white">6/12 column</div>
    ),
  },
};

export const TwoColumns: Story = {
  args: {} as any,
  render: () => (
    <RowForColumns {...{ backgroundColor: '', backgroundImageDesktop: null, backgroundImageMobile: null } as any} columns={<>
      <Column xlWidth="6  (1/2)" lgWidth="6  (1/2)" mdWidth="12  (full width)" smWidth="12  (full width)" content={<div className="rounded-xl bg-[#006699] p-8 text-center text-white">Column 1</div>} />
      <Column xlWidth="6  (1/2)" lgWidth="6  (1/2)" mdWidth="12  (full width)" smWidth="12  (full width)" content={<div className="rounded-xl bg-[#005580] p-8 text-center text-white">Column 2</div>} />
    </>} />
  ),
};

export const ThreeColumns: Story = {
  args: {} as any,
  render: () => (
    <RowForColumns spaceBetweenColumns="Small" {...{ backgroundColor: '', backgroundImageDesktop: null, backgroundImageMobile: null } as any} columns={<>
      <Column xlWidth="4  (1/3)" lgWidth="4  (1/3)" mdWidth="12  (full width)" smWidth="12  (full width)" content={<div className="rounded-xl bg-[#006699] p-6 text-center text-white">Col 1</div>} />
      <Column xlWidth="4  (1/3)" lgWidth="4  (1/3)" mdWidth="12  (full width)" smWidth="12  (full width)" content={<div className="rounded-xl bg-[#005580] p-6 text-center text-white">Col 2</div>} />
      <Column xlWidth="4  (1/3)" lgWidth="4  (1/3)" mdWidth="12  (full width)" smWidth="12  (full width)" content={<div className="rounded-xl bg-[#004466] p-6 text-center text-white">Col 3</div>} />
    </>} />
  ),
};
