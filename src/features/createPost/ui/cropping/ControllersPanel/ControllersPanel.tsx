import * as React from 'react'

import { AddPhotoControllerPopover } from '@/features/createPost/ui/cropping/ControllersPanel/AddPhotoControllerPopover'
import { AspectControllerPopover } from '@/features/createPost/ui/cropping/ControllersPanel/AspectControllerPopover'
import { ScaleControllerPopover } from '@/features/createPost/ui/cropping/ControllersPanel/ScaleControllerPopover'

type Props = {
  id: string
}

export const ControllersPanel = ({ id }: Props) => {
  return (
    <span className={'absolute p-2.5 bottom-0 left-0 right-0 flex gap-6 z-50'}>
      <AspectControllerPopover id={id} />
      <ScaleControllerPopover id={id} />
      <AddPhotoControllerPopover />
    </span>
  )
}
