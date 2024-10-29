import React from 'react'

import { Button, FormTextField, useTranslation } from '@/common'
import { FormTextArea } from '@/common/form/FormTextArea'
import { useFillGeneralInfo } from '@/features/profile/settings/generalInfo/model/useFillGeneralInfo'
import { AddPhoto } from '@/features/profile/settings/generalInfo/ui/AddPhoto'
import { FormCalendar } from '@/features/profile/settings/generalInfo/ui/FormCalendar'
import { SelectCountryAndCity } from '@/features/profile/settings/generalInfo/ui/SelectCountryAndCity'

export const GeneralInfo = React.forwardRef<HTMLFormElement>((_, ref) => {
  const { t } = useTranslation()
  const {
    control,
    isDirty,
    isSubmitting,
    isValid,
    onModalPhotoSave,
    onSubmit,
    photoChanged,
    photoObj,
    setValue,
  } = useFillGeneralInfo()

  return (
    <div
      className={
        'flex gap-10 w-full mt-6 relative after:absolute after:contain-content after:h-[1px] after:top-[90%] after:left-0 after:w-full after:bg-dark-300'
      }
    >
      <AddPhoto
        onModalPhotoSave={onModalPhotoSave}
        photoObj={photoObj}
      />
      <form
        className={'flex gap-10 w-full'}
        onSubmit={onSubmit}
        ref={ref}
      >
        <div className={'w-full flex flex-col gap-6'}>
          <FormTextField
            control={control}
            label={t.profileInputs.userName}
            name={'userName'}
            required
          />
          <FormTextField
            control={control}
            label={t.profileInputs.firstName}
            name={'firstName'}
            required
          />
          <FormTextField
            control={control}
            label={t.profileInputs.lastName}
            name={'lastName'}
            required
          />
          <div className={'flex flex-col'}>
            <FormCalendar
              control={control}
              label={t.profileInputs.dateOfBirth}
              name={'dateOfBirth'}
              setValue={setValue}
            />
            <SelectCountryAndCity control={control} />
          </div>
          <FormTextArea
            control={control}
            label={t.profileInputs.aboutMe}
            name={'aboutMe'}
          />
          <div className={'flex justify-end mt-12'}>
            <Button
              disabled={!isValid || isSubmitting || (!isDirty && !photoChanged)}
              type={'submit'}
              variant={'primary'}
            >
              {t.profileInputs.saveChanges}
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
})
