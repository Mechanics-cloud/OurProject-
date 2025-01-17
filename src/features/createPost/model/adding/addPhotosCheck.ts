import { toast } from 'react-toastify'

import { isCanAddPhoto } from '@/common'
import { AddPhotoSchema, addPhotoSchema } from '@/features/createPost'
import { MaxPhotoCount } from '@/features/createPost/model/constants'
import { LocaleType } from '@locales/ru'
import { z } from 'zod'

/**
 *
 * @param files - array of File[] to process
 * @param totalCount - current amount of added photos
 * @param t - translation object
 * @param addPostPhoto - add photo function
 */
export const addPhotosCheck = async (
  files: File[],
  totalCount: number,
  t: LocaleType,
  addPostPhoto: (file: File) => void
) => {
  const photosCount = files.length

  if (!isCanAddPhoto(totalCount)) {
    return
  }

  if (photosCount === 0) {
    throw new Error(t.basic.errors.type('PNG or JPG/JPEG'))
  }

  for (let i = 0; i < photosCount; i++) {
    if (i === MaxPhotoCount) {
      toast.error(t.createPost.adding.countLimit(MaxPhotoCount))
      break
    }
    const photoData: AddPhotoSchema = {
      photoSize: files[i].size,
      photoType: files[i].type,
    }

    try {
      addPhotoSchema(t).parse(photoData)
      addPostPhoto(files[i])
    } catch (error) {
      if (error instanceof z.ZodError) {
        throw new Error(error.errors[0].message)
      } else {
        throw new Error(t.basic.errors.unknown)
      }
    }
  }
}
