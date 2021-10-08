import React, { useState } from 'react'
import tw from 'twin.macro'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/outline'
import { BaseCard } from './base'
import { TitledCardProps } from './titled'
import { Typography } from '../typography'

export type AccordionCardProps = TitledCardProps & {}

export const AccordionCard: React.FC<AccordionCardProps> = ({
  children,
  title,
  color = 'bgSecondary',
  rounded = true,
  noShadow,
  centered,
  overrideStyles,
  overrideTitleContainerStyles,
  overrideBodyContainerStyles,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <BaseCard
      onClick={!isOpen ? () => setIsOpen(true) : undefined}
      color={color}
      rounded={rounded}
      noShadow={noShadow}
      centered={centered}
      overrideStyles={overrideStyles}
    >
      <Disclosure defaultOpen={isOpen}>
        <>
          {/* @ts-ignore */}
          <Disclosure.Button as="div">
            <button
              css={[tw`flex w-full justify-between focus:ring-2 ring-primary ring-offset-2`]}
              onClick={() => setIsOpen(false)}
            >
              {typeof title === 'string' ? (
                <div css={[overrideTitleContainerStyles]}>
                  <Typography variant="heading" tw="card-title ">
                    {title}
                  </Typography>
                </div>
              ) : (
                { title }
              )}
              <ChevronUpIcon
                css={[tw`w-5 h-5 text-textPrimary`, !isOpen && tw`transform rotate-180`]}
              />
            </button>
          </Disclosure.Button>

          {isOpen && (
            <Disclosure.Panel css={[tw`my-2`, overrideBodyContainerStyles]} static>
              {children}
            </Disclosure.Panel>
          )}
        </>
      </Disclosure>
    </BaseCard>
  )
}
