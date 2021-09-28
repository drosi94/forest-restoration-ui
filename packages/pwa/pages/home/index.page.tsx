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
import { ControlledCheckbox } from '../../shared/components/form/controlledCheckbox'

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
      LoveMe2: false,
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
            <ControlledSwitch
              labelPosition="top"
              label="Love ME"
              control={control}
              name="LoveMe"
              hint="Vale edw to genos soy"
              rules={{ required: 'This is required' }}
            />
          </div>

          <div>
            <ControlledCheckbox
              labelPosition="top"
              label="Love ME2"
              control={control}
              name="LoveMe2"
              hint="Vale edw to genos soy"
              rules={{ required: 'This is required' }}
            />
          </div>

          <div>
            <Button type="submit">Submit</Button>
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
