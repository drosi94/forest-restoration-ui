import tw from 'twin.macro'
import { useTranslation } from 'next-i18next'
import { useForm } from 'react-hook-form'

import { useState } from 'react'
import { BellIcon } from '@heroicons/react/solid'
import { getServerSideTranslations } from '../../shared/utils/serverSideTranslations'
import {
  ControlledAutocomplete,
  ControlledInput,
  ControlledMultipleAutocomplete,
  ControlledSelect,
  ControlledSwitch,
} from '../../shared/components/form'
import { Button } from '../../../shared'

const options = [
  { label: 'Test1', value: 'test1' },
  { label: 'Test2', value: 'test2' },
]

export default function Home() {
  const { t } = useTranslation(['common', 'home'])
  const [open, setOpen] = useState(false)
  const [checked, setChecked] = useState(false)
  const [textValue, setTextValue] = useState('')
  const [selectValue, setSelectValue] = useState('')

  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm<any>({
    defaultValues: {
      FirstName: '',
      Gender: [],
      Gender2: '',
      AutoOne: '',
      AutoMulti: '',
      LoveMe: false,
    },
    mode: 'onChange',
  })

  return (
    <div tw="h-full py-8">
      <div tw="flex h-full flex-col p-12 gap-3">
        <form
          tw="flex flex-col gap-2"
          onSubmit={handleSubmit((data) => {
            console.log(data)
          })}
          noValidate
        >
          <div>
            <ControlledInput
              required
              label="First Name"
              control={control}
              name="FirstName"
              rules={{ required: 'This is required' }}
              hint="Vale edw to onoma soy"
            />
          </div>

          <div>
            <ControlledSelect
              required
              shouldResetOption
              options={options}
              label="Gender2"
              control={control}
              name="Gender2"
              rules={{ required: 'This is required' }}
              hint="Vale edw to genos soy2"
            />
          </div>
          <div>
            <ControlledSelect
              required
              shouldResetOption
              multiple
              options={options}
              label="Gender"
              control={control}
              name="Gender"
              rules={{ required: 'This is required' }}
              hint="Vale edw to genos soy"
            />
          </div>
          <div tw="w-96">
            <ControlledAutocomplete
              required
              shouldResetOption
              options={options}
              label="AutoOne"
              control={control}
              name="AutoOne"
              rules={{ required: 'This is required' }}
              hint="Vale edw to AutoOne soy"
            />
          </div>
          <div tw="w-96">
            <ControlledMultipleAutocomplete
              required
              shouldResetOption
              options={options}
              label="AutoMulti"
              control={control}
              name="AutoMulti"
              rules={{ required: 'This is required' }}
              hint="Vale edw to genos soy"
            />
          </div>

          <div>
            <ControlledSwitch
              labelPosition="top"
              label="Love ME"
              control={control}
              name="LoveMe"
              hint="Vale edw to genos soy"
            />
          </div>

          <div>
            <Button type="submit" disabled={!isValid}>
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await getServerSideTranslations(locale, ['home'])),
    },
  }
}
