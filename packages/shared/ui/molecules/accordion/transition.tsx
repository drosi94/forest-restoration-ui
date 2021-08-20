import tw, { styled } from 'twin.macro'
import { Transition } from '@headlessui/react'

export const StyledTransition = styled(Transition)`
  &.enter {
    ${tw`transition duration-100 ease-out`}
  }
  &.enterFrom {
    ${tw`transform scale-95 opacity-0`}
  }
  &.enterTo {
    ${tw`transform scale-100 opacity-100`}
  }
  &.leave {
    ${tw`transition duration-75 ease-out`}
  }
  &.leaveFrom {
    ${tw`transform scale-100 opacity-100`}
  }
  &.leaveTo {
    ${tw`transform scale-95 opacity-0`}
  }
`
