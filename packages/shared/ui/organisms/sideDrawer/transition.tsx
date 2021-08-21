import tw, { styled } from 'twin.macro'
import { Transition } from '@headlessui/react'

export const StyledTransition = styled(Transition)`
  &.enter {
    ${tw`transition-all ease-in-out duration-300`}
  }
  &.enterFrom {
    ${({ side }) => (side === 'left' ? tw`-translate-x-full -left-full` : tw`translate-x-0`)}
  }
  &.enterTo {
    ${({ side }) => (side === 'left' ? tw`translate-x-0 left-0!` : tw`-translate-x-full`)}
  }
  &.leave {
    ${tw`transition-all ease-in-out duration-300`}
  }
  &.leaveFrom {
    ${({ side }) => (side === 'left' ? tw`-translate-x-0` : tw`-translate-x-full`)}
  }
  &.leaveTo {
    ${({ side }) => (side === 'left' ? tw`-translate-x-full` : tw`translate-x-0`)}
  }
`
