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
text-left  bg-primary-100 rounded-lg hover:bg-primary-200 focus:outline-none
focus-visible:ring focus-visible:ring-offset-2 focus-visible:ring-primary-900`

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
              css={[tw`text-primary-900 text-base`, overrideAccordionButtonTextStyles]}
            >
              {title}
            </Typography>
            <ChevronUpIcon
              css={[tw` w-5 h-5 text-primary-700`, !open && tw`transform rotate-180`]}
            />
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
