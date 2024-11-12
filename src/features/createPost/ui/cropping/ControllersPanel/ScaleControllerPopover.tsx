import * as React from 'react'
import { useState } from 'react'

import { Maximize, MaximizeOutline } from '@/assets/icons'
import { Popover, PopoverContent, PopoverTrigger } from '@/common'
import { addPostPhotoStore } from '@/features/createPost/model/addPostPhotoStore'
import { Slider } from '@/features/createPost/ui/components'
import { PhotoControllerButton } from '@/features/createPost/ui/components/photoControllerButton/PhotoControllerButton'
import { observer } from 'mobx-react-lite'

type Props = {
  id: string
}

export const ScaleControllerPopover = observer(({ id }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const changeZoom = addPostPhotoStore.addZoom

  const onZoom = (zoom: number[]) => {
    changeZoom(id, zoom[0])
  }

  return (
    <Popover
      onOpenChange={setIsOpen}
      open={isOpen}
    >
      <PopoverTrigger asChild>
        <PhotoControllerButton>
          {isOpen ? (
            <Maximize className={'w-[28px] h-[28px] text-accent-500'} />
          ) : (
            <MaximizeOutline className={'w-[28px] h-[28px]'} />
          )}
        </PhotoControllerButton>
      </PopoverTrigger>
      <PopoverContent
        align={'start'}
        className={'popoverOpacity w-48 py-5 px-3 border-0 bg-transparent'}
        side={'top'}
        sideOffset={2}
      >
        <Slider
          defaultValue={[addPostPhotoStore.getZoom(id)]}
          max={3}
          min={1}
          onValueChange={onZoom}
          step={0.1}
        />
      </PopoverContent>
    </Popover>
  )
})
