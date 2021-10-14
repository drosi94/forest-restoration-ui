import { useState } from 'react'
import tw from 'twin.macro'
import toast from 'react-hot-toast'
import { useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form'
import { Button } from '@forest-restoration/shared'

import { MoreDetailsForm } from '../create/moreDetails/form'
import { firestore } from 'firebase/clientApp'

export const EditProfile = ({ user }) => {
  const { displayName = '', gender = null, birthDate = null, photoURL = null } = user

  const { t } = useTranslation(['common', 'profile'])

  const [isProfileUpdating, setIsProfileUpdating] = useState(false)

  const { control, handleSubmit } = useForm({
    mode: 'onChange',
    reValidateMode: 'onSubmit',
    defaultValues: {
      displayName,
      gender,
      birthDate,
      photoURL,
    },
  })

  const handleEditProfile = handleSubmit(
    async ({ birthDate: newBirthDate, gender: newGender, displayName: newDisplayName }) => {
      if (!isProfileUpdating) {
        try {
          const userDoc = firestore.doc(`users/${user.uid}`)

          setIsProfileUpdating(true)
          await userDoc.update({
            birthDate: newBirthDate,
            gender: newGender,
            displayName: newDisplayName,
          })

          toast.success(t('profile:Your profile updated successfully!'))
        } catch (err) {
          console.error(err)
          toast.error(t('profile:An error occurred with the edition of your profile'))
          throw err
        } finally {
          setIsProfileUpdating(false)
        }
      }
    }
  )

  return (
    <form tw="flex flex-col gap-8" onSubmit={handleEditProfile}>
      <div tw="flex flex-col gap-4">
        <MoreDetailsForm control={control} />
      </div>
      <Button tw="self-center" type="submit" wide disabled={isProfileUpdating}>
        {t('profile:Edit profile')}
      </Button>
    </form>
  )
}
