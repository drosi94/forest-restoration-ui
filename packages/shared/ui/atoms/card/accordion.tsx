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
      onClick={() => setIsOpen(!isOpen)}
      color={color}
      rounded={rounded}
      noShadow={noShadow}
      centered={centered}
      overrideStyles={overrideStyles}
    >
      <Disclosure defaultOpen={isOpen}>
        <>
          <Disclosure.Button
            css={[tw`flex w-full justify-between focus:ring-2 ring-primaryTemp-500 ring-offset-2`]}
          >
            {typeof title === 'string' ? (
              <div css={[overrideTitleContainerStyles]}>
                <Typography variant="heading">{title}</Typography>
              </div>
            ) : (
              { title }
            )}
            <ChevronUpIcon
              css={[tw`w-5 h-5 text-textPrimary`, !isOpen && tw`transform rotate-180`]}
            />
          </Disclosure.Button>

          {isOpen && (
            <Disclosure.Panel css={[tw`my-4`, overrideBodyContainerStyles]} static>
              {children}
            </Disclosure.Panel>
          )}
        </>
      </Disclosure>
    </BaseCard>
  )
}
