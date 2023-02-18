import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@angelino-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,

  args: {
    children:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia nemo adipisci dolorem aliquam quo ipsam voluptas quia maiores ab ut.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
