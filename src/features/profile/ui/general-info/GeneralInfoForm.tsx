import React from 'react'
import { useForm } from 'react-hook-form'

import CalendarOutline from '@/assets/icons/outlineIcons/CalendarOutline'
import {
  Button,
  FormTextField,
  Select,
  SelectItem,
  TextArea,
  TextField,
} from '@/common'
import AuthStore from '@/features/auth/model/authStore'
import { generalInfoSchema } from '@/features/profile/model/generalInfoSchema'
import { zodResolver } from '@hookform/resolvers/zod'

type FormData = {
  aboutMe?: string
  city?: string
  country?: string
  firstName: string
  lastName: string
  username: string
}
export const GeneralInfoForm = React.forwardRef<HTMLFormElement>((_, ref) => {
  const profile = AuthStore.profile
  const {
    control,
    formState: {},
    handleSubmit,
    register,
    setValue,
    watch,
  } = useForm<FormData>({
    defaultValues: {
      city: '',
      country: '',
      firstName: '',
      lastName: '',
      username: profile?.userName,
    },
    resolver: zodResolver(generalInfoSchema),
  })
  const onSubmit = (data: FormData) => {
    alert(data)
  }

  const country = watch('country')
  const city = watch('city')

  return (
    <form
      className={'w-full flex flex-col gap-6'}
      onSubmit={handleSubmit(onSubmit)}
      ref={ref}
    >
      <FormTextField
        control={control}
        label={'Username'}
        name={'username'}
        required
      />
      <FormTextField
        control={control}
        label={'First Name'}
        name={'firstName'}
        required
      />
      <FormTextField
        control={control}
        label={'Last Name'}
        name={'lastName'}
        required
      />
      <div className={'flex flex-col'}>
        <TextField label={'Date of Birth'}>
          <CalendarOutline
            className={
              'absolute -translate-y-1/2 top-1/2 stroke-width-1 fill-light-100 right-3 cursor-pointer'
            }
            onClick={() => alert('hello')}
          />
        </TextField>
        <div className={'flex gap-6'}>
          <Select
            className={'w-full'}
            label={'Country'}
            placeholder={'Country'}
            value={country}
            {...register('country')}
            onValueChange={(e) => setValue('country', e)}
          >
            <SelectItem value={'Austria'}>Austria</SelectItem>
            <SelectItem value={'Russia'}>Russia</SelectItem>
          </Select>
          <Select
            className={'w-full'}
            label={'City'}
            placeholder={'City'}
            value={city}
            {...register('city')}
            onValueChange={(e) => setValue('city', e)}
          >
            <SelectItem value={'Linz'}>Linz</SelectItem>
            <SelectItem value={'Vienna'}>Vienna</SelectItem>
          </Select>
        </div>
      </div>
      <TextArea
        label={'About me'}
        maxLength={200}
        {...register('aboutMe')}
      />
      <div className={'flex justify-end'}>
        <Button
          type={'submit'}
          variant={'primary'}
        >
          Save Changes
        </Button>
      </div>
    </form>
  )
})
