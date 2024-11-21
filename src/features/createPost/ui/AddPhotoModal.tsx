import { Image as ImageFull, ImageOutline } from '@/assets/icons'
import {
  Button,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/common'
import { useAddPhotoModal } from '@/features/createPost'

export const AddPhotoModal = () => {
  const {
    getInputProps,
    getRootProps,
    isDraft,
    isDragActive,
    setIsNotNewDialog,
    t,
  } = useAddPhotoModal()

  return (
    <DialogContent className={'max-w-[492px]'}>
      <DialogHeader>
        <DialogTitle className={'flex justify-center items-center relative'}>
          {t.createPost.adding.title}
        </DialogTitle>
      </DialogHeader>
      <DialogDescription className={'mt-16 mb-10 flex justify-center'}>
        <span className={'flex flex-col w-max'}>
          <span
            className={'flex flex-col items-center gap-6 mb-6'}
            {...getRootProps()}
          >
            <span
              className={
                'w-[220px] aspect-square flex justify-center items-center bg-dark-500'
              }
            >
              {isDragActive ? (
                <ImageFull
                  height={48}
                  width={48}
                />
              ) : (
                <ImageOutline
                  height={48}
                  width={48}
                />
              )}
            </span>

            <label className={'mt-9'}>
              <Button
                asChild
                className={'cursor-pointer'}
              >
                <span>{t.createPost.adding.buttonNew}</span>
              </Button>
              <input
                className={'sr-only'}
                type={'file'}
                {...getInputProps()}
              />
            </label>
          </span>
          <Button
            disabled={!isDraft}
            onClick={() => setIsNotNewDialog()}
            variant={'outline'}
          >
            {t.createPost.adding.buttonDraft}
          </Button>
        </span>
      </DialogDescription>
    </DialogContent>
  )
}