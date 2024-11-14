import * as React from 'react'

import { ArrowBackOutline } from '@/assets/icons'
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  cn,
  typographyVariants,
  useTranslation,
} from '@/common'
import { AddTextPost, SwiperCover, addPostStore } from '@/features/createPost'
import Image from 'next/image'
import { SwiperSlide } from 'swiper/react'

export const PublicationModal = () => {
  const { t } = useTranslation()
  const prevStage = addPostStore.prevStage
  const photos = addPostStore.photos

  return (
    <DialogContent
      className={'max-w-[972px] gap-0'}
      crossOff
    >
      <DialogHeader>
        <DialogTitle className={'flex justify-center items-center relative'}>
          <ArrowBackOutline
            className={'absolute top-[18px] left-6'}
            onClick={prevStage}
          />
          <span>Publication</span>
          <span
            className={cn(
              'absolute text-accent-500 cursor-pointer px-3 py-1.5 right-6 top-2',
              typographyVariants({ variant: 'h3' })
            )}
            onClick={() => {
              alert('Publish')
            }}
          >
            Publish
          </span>
        </DialogTitle>
      </DialogHeader>
      <DialogDescription
        asChild
        className={cn('m-0 p-0 lg:m-0 lg:p-0')}
      >
        <div className={'flex h-[504px] relative'}>
          <SwiperCover
            className={cn(
              'w-[490px] m-0 shrink-0 bg-dark-500 relative',
              'addPost addFilter'
            )}
          >
            {photos.map((photo, index) => (
              <SwiperSlide
                className={cn(
                  'w-[490px] m-0 shrink-0 bg-dark-500 relative flex',
                  'addPost'
                )}
                key={index}
              >
                <Image
                  alt={'Photo in carousel'}
                  className={'object-center object-contain'}
                  height={490}
                  src={photo.url}
                  width={490}
                />
              </SwiperSlide>
            ))}
          </SwiperCover>
          <AddTextPost />
        </div>
      </DialogDescription>
    </DialogContent>
  )
}
