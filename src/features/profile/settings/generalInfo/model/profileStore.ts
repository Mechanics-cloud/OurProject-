import { toast } from 'react-toastify'

import { createFileForUpload } from '@/common/utils/createFileForUpload'
import { responseErrorHandler } from '@/common/utils/responseErrorHandler'
import { PhotoResult } from '@/features/profile/settings/avatarDialog/model'
import {
  FormData,
  UpdatedProfile,
  UserProfile,
  profileAPi,
} from '@/features/profile/settings/generalInfo/api'
import { makeAutoObservable, runInAction } from 'mobx'

class ProfileStore {
  userProfile: UserProfile | undefined

  constructor() {
    makeAutoObservable(this)
  }

  async getProfile() {
    try {
      const userProfile = await profileAPi.getProfile()

      runInAction(() => {
        this.userProfile = userProfile
      })

      return userProfile
    } catch (error) {
      responseErrorHandler(error)
    }
  }

  async updateProfile(data: FormData) {
    try {
      const updatedData: UpdatedProfile = {
        aboutMe: data.aboutMe ?? '',
        city: data.city ?? '',
        country: data.country ?? '',
        dateOfBirth: data.dateOfBirth ?? '',
        firstName: data.firstName,
        lastName: data.lastName,
        region: '',
        userName: data.userName,
      }
      const res = await profileAPi.updateProfile(updatedData)

      if (res.status === 204) {
        toast.success('Your settings are saved!')
      }
    } catch (error) {
      responseErrorHandler(error)
    }
  }
  async uploadAvatar(photoData: PhotoResult) {
    try {
      if (photoData.photoForServer) {
        const file = createFileForUpload(photoData)

        if (file) {
          await profileAPi.uploadAvatar(file)
          toast.success('Your settings are saved!')
        }
      } else {
        responseErrorHandler('error occurred')
      }
    } catch (error) {
      responseErrorHandler(error)
    }
  }
}

export default new ProfileStore()
