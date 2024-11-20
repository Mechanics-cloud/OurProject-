import { toast } from 'react-toastify'

import { Nullable, clearAllData, responseErrorHandler } from '@/common'
import {
  DeviceType,
  profileDevicesApi,
} from '@/features/profile/settings/devices/api'
import { sessionsDataSchema } from '@/features/profile/settings/devices/model/sessionsDataSchema'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'
import { makeAutoObservable, runInAction } from 'mobx'

class ProfileSessionsStore {
  currentSession: Nullable<DeviceType> = null
  otherSession: DeviceType[] = []

  constructor() {
    makeAutoObservable(this)
  }

  async deleteSession(deviceId: number) {
    try {
      await profileDevicesApi.deleteSession(deviceId)
      runInAction(() => {
        if (this.currentSession && this.otherSession) {
          this.otherSession = this.otherSession.filter(
            (device) => device.deviceId !== deviceId
          )
        }
      })
      //todo переводы в store
      toast.success('Success')
    } catch (error) {
      responseErrorHandler(error)
    }
  }

  async getSessions() {
    try {
      const sessions = await profileDevicesApi.getSessions()
      const otherSessions = sessions.others.map((session) => ({
        ...session,
        lastActive: format(sessions.current.lastActive, 'dd.MM.yyyy', {
          locale: ru,
        }),
      }))

      sessionsDataSchema.parse(sessions.current)
      sessions.others.forEach((device) => sessionsDataSchema.parse(device))
      runInAction(() => {
        this.currentSession = sessions.current
        this.otherSession = otherSessions.filter(
          (session) => session.deviceId !== this.currentSession?.deviceId
        )
      })

      return sessions
    } catch (error) {
      //todo interceptor не перехватывает, т.к. при разлогине возвращается 400
      clearAllData()
    }
  }

  async terminateAllSessions() {
    try {
      await profileDevicesApi.terminateAllSessions()
      runInAction(() => {
        this.otherSession = []
      })
      //todo переводы в store
      toast.success('Success')
    } catch (error) {
      responseErrorHandler(error)
    }
  }
}

export const profileSessionsStore = new ProfileSessionsStore()
