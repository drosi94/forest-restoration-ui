import React, { Fragment, useState, useEffect } from 'react'
import tw from 'twin.macro'
import { useKey, useMedia } from 'react-use'

import { Typography } from '../../atoms'

export type Step = {
  id: string
  label: string
  icon: React.ReactElement
  enabled?: boolean
}

export type FormStepperProps = {
  /**
   * The steps to render
   */
  steps: Step[]
  /**
   * The selected step id
   */
  selectedStepId: string
  /**
   * Callback to execute when a step is selected
   */
  onStepChange?: (stepId: string) => void
}

const HorizontalLine = ({ filled = false }) => (
  <div
    css={[
      tw`flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300`,
      filled && tw`border-primary`,
    ]}
  ></div>
)

const baseStepStyle = tw`flex items-center justify-center rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2`

const noop = () => {}

export const FormStepper: React.FC<FormStepperProps> = ({
  steps,
  selectedStepId,
  onStepChange = noop,
  ...rest
}) => {
  const [currentSelectedStepId, setCurrentSelectedStepId] = useState(selectedStepId)
  const isSmallDevice = useMedia('(max-width: 520px)')

  const selectedIndex = steps.findIndex(({ id }) => id === currentSelectedStepId)

  useEffect(() => {
    setCurrentSelectedStepId(selectedStepId)
  }, [selectedStepId])

  const handleStepChange = (stepId: string) => {
    setCurrentSelectedStepId(stepId)
    onStepChange(stepId)
  }

  const handleNextStep = () => {
    const nextStepIndex = selectedIndex + 1
    if (nextStepIndex < steps.length) {
      const nextStep = steps[nextStepIndex]
      if (nextStep.enabled) {
        handleStepChange(nextStep.id)
      }
    }
  }

  const handlePreviousStep = () => {
    const previousStepIndex = selectedIndex - 1
    if (previousStepIndex >= 0) {
      const previousStep = steps[previousStepIndex]
      if (previousStep.enabled) {
        handleStepChange(steps[previousStepIndex].id)
      }
    }
  }

  useKey((event) => event.shiftKey && event.keyCode === 39, handleNextStep, { event: 'keyup' })
  useKey((event) => event.shiftKey && event.keyCode === 37, handlePreviousStep, { event: 'keyup' })

  if (isSmallDevice && steps.length > 4) {
    return null
  }

  return (
    <nav tw="mx-4 p-4" aria-label="Form Steps" {...rest}>
      <div tw="flex items-center">
        {steps.map(({ id, label, icon, enabled }, index) => {
          const isBeforeSelectedStep = index < selectedIndex
          const isSelectedStep = index === selectedIndex
          const isAfterSelectedStep = index > selectedIndex

          return (
            <Fragment key={`step-${id}`}>
              <button
                onClick={() => enabled && handleStepChange(id)}
                css={[
                  tw`flex items-center relative`,
                  isBeforeSelectedStep && tw`text-primary`,
                  isSelectedStep && tw`text-white`,
                  isAfterSelectedStep && tw`text-gray-300`,
                ]}
                disabled={!enabled}
                aria-label={label}
              >
                <div
                  css={[
                    baseStepStyle,
                    isBeforeSelectedStep && tw`border-primary`,
                    isSelectedStep && tw`bg-primary border-primary`,
                    isAfterSelectedStep && tw`border-gray-300`,
                  ]}
                >
                  {icon}
                </div>
                <div tw="absolute top-0 -ml-10 text-center mt-14 w-32">
                  <Typography
                    css={[
                      tw`uppercase`,
                      isBeforeSelectedStep && tw`text-primary`,
                      isSelectedStep && tw`text-primary`,
                      isAfterSelectedStep && tw`text-gray-300`,
                    ]}
                    fontSize="xsmall"
                    fontWeight="400"
                  >
                    {label}
                  </Typography>
                </div>
              </button>
              {index !== steps.length - 1 && <HorizontalLine filled={isBeforeSelectedStep} />}
            </Fragment>
          )
        })}
      </div>
    </nav>
  )
}
