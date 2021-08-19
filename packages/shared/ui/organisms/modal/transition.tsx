import tw, { styled } from 'twin.macro'
import { Transition } from '@headlessui/react'

export const StyledTransition = styled(Transition)`
  &.enter {
    ${tw`transition-opacity duration-300`}
  }
  &.enterFrom {
    ${tw`opacity-0`}
  }
  &.enterTo {
    ${tw`opacity-100`}
  }
  &.leave {
    ${tw`transition-opacity duration-75`}
  }
  &.leaveFrom {
    ${tw`opacity-100`}
  }
  &.leaveTo {
    ${tw`opacity-0`}
  }
`
