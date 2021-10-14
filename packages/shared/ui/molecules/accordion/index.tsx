import React from 'react'
import tw from 'twin.macro'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'
import { Typography } from '../../atoms'
import { StyledTransition } from './transition'

export type AccordionProps = {
  /**
   * Default opened
   */
  isOpened?: boolean
  /**
   * The title of the button
   */
  title: string
  /**
   * Override button container styles
   */
  overrideAccordionButtonStyles?: any
  /**
   * Override button text styles
   */
  overrideAccordionButtonTextStyles?: any
  /**
   * Override panel container styles
   */
  overrideAccordionPanelStyles?: any
  children: string | React.ReactNode
}

const accordionButtonBaseStyles = tw`flex justify-between w-full px-4 py-2 text-sm font-medium 
text-left  bg-primary rounded-lg hover:bg-primary focus:outline-none
focus-visible:ring focus-visible:ring-offset-2 focus-visible:ring-primary-focus`

export const Accordion: React.FC<AccordionProps> = ({
  isOpened,
  title,
  overrideAccordionButtonStyles,
  overrideAccordionButtonTextStyles,
  overrideAccordionPanelStyles,
  children,
}) => {
  return (
    <Disclosure defaultOpen={isOpened}>
      {({ open }) => (
        <>
          <Disclosure.Button css={[accordionButtonBaseStyles, overrideAccordionButtonStyles]}>
            <Typography
              as="h2"
              css={[tw`text-primary-focus text-base`, overrideAccordionButtonTextStyles]}
            >
              {title}
            </Typography>
            <ChevronUpIcon css={[tw` w-5 h-5 text-primary`, !open && tw`transform rotate-180`]} />
          </Disclosure.Button>
          <StyledTransition
            enter="enter"
            enterFrom="enterFrom"
            enterTo="enterTo"
            leave="leave"
            leaveFrom="leaveFrom"
            leaveTo="leaveTo"
          >
            {open && (
              <Disclosure.Panel css={[tw`px-4 pt-4 pb-2`, overrideAccordionPanelStyles]} static>
                {typeof children === 'string' ? (
                  <Typography as="p" variant="body">
                    {children}
                  </Typography>
                ) : (
                  children
                )}
              </Disclosure.Panel>
            )}
          </StyledTransition>
        </>
      )}
    </Disclosure>
  )
}
