import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@angelino-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,

  args: {
    src: 'https://github.com/angelo-filho.png',
    alt: 'Angelo Filho',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallBack: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
