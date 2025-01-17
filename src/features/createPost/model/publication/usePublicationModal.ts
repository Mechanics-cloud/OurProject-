import { toast } from 'react-toastify'

import { responseErrorHandler, useTranslation } from '@/common'
import { generalStore } from '@/core/store'
import { addPostStore } from '@/features/createPost'

export const usePublicationModal = (onPostUpload: () => void) => {
  const { t } = useTranslation()
  const photos = addPostStore.photos
  const isLoading = generalStore.isLoading

  const onPublishPost = async () => {
    try {
      generalStore.turnOnLoading()
      await addPostStore.uploadPost()
      onPostUpload()
      toast.success(t.createPost.publication.success)
    } catch (error) {
      responseErrorHandler(error)
    } finally {
      generalStore.turnOffLoading()
    }
  }

  return { isLoading, onPublishPost, photos, t }
}
