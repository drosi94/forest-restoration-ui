import React from 'react'
import { Story, Meta } from '@storybook/react'

import { FormStepper, FormStepperProps } from '@forest-restoration/shared'
import { UserIcon, BellIcon, CheckCircleIcon } from '@heroicons/react/outline'

export default {
  title: 'Shared/UI/FormStepper',
  component: FormStepper,
} as Meta

const Template: Story<FormStepperProps> = (args) => <FormStepper {...args} />

export const Primary = Template.bind({})
Primary.args = {
  steps: [
    {
      id: 'step1',
      label: 'Step 1',
      icon: <UserIcon width={24} />,
      enabled: true,
    },
    {
      id: 'step2',
      label: 'Step 2',
      icon: <BellIcon width={24} />,
      enabled: true,
    },
    {
      id: 'step3',
      label: 'Step 3',
      icon: <CheckCircleIcon width={24} />,
      enabled: true,
    },
  ],
  selectedStepId: 'step1',
}

export const MiddleSelected = Template.bind({})
MiddleSelected.args = {
  ...Primary.args,
  selectedStepId: 'step2',
}

export const FiveSteps = Template.bind({})
FiveSteps.args = {
  steps: [
    ...Primary.args.steps,
    {
      id: 'step4',
      label: 'Step 4',
      icon: <BellIcon width={24} />,
      enabled: true,
    },
    {
      id: 'step5',
      label: 'Step 5',
      icon: <CheckCircleIcon width={24} />,
      enabled: true,
    },
  ],
  selectedStepId: 'step2',
}
