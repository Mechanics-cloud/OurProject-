import { instance } from '@/features/auth/api/instance'
import { AxiosInstance, AxiosResponse } from 'axios'

import { RootInterface, homeData } from './home.types'

class HomeApi {
  constructor(private instance: AxiosInstance) {}

  public async postIdLikes(data: any) {
    return instance
      .get(`/v1/posts/${data.postId}/likes`)
      .then((res) => res.data)
  }

  public async publicationsFollowers(data: homeData) {
    return instance
      .get<RootInterface>('/v1/home/publications-followers', { params: data })
      .then((res) => res.data)
  }
}

export const homeApi = new HomeApi(instance)
