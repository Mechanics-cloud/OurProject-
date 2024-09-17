import type { Meta, StoryObj } from '@storybook/react'

import { RadioGroup } from '@/common/components/radioGroup/RadioGroup'

const meta = {
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Component/RadioGroup',
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

const options = [
  { id: 'one', label: 'First item' },
  { id: 'two', label: 'Second item' },
]

export const BasicRadioGroup: Story = {
  args: {
    options,
  },
}
export const DisabledRadioGroup: Story = {
  args: {
    disabled: true,
    options,
  },
}