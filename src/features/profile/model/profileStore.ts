import { responseErrorHandler } from '@/common/utils/responseErrorHandler'
import { profileAPi } from '@/features/profile/api/profile.api'
import {
  FormData,
  UpdatedProfile,
} from '@/features/profile/model/useFillGeneralForm'
import { makeAutoObservable, runInAction } from 'mobx'

class ProfileStore {
  updatedProfile: UpdatedProfile | undefined = undefined

  constructor() {
    makeAutoObservable(this)
  }

  async getProfile() {
    try {
      const updatedProfile = await profileAPi.getProfile()

      runInAction(() => {
        this.updatedProfile = updatedProfile
      })
    } catch (error) {
      debugger
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
        alert('success')
      }
    } catch (error) {
      responseErrorHandler(error)
    }
  }
}

export default new ProfileStore()
