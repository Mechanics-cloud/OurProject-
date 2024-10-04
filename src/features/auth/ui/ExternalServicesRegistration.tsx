import React from 'react'

import {
  GithubSvgrepoCom31,
  GoogleSvgrepoCom1,
} from '@/assets/icons/filledIcons'
import { Tooltip, useTranslation } from '@/common'
import { Environments } from '@/common/enviroments'
import { fetchUser } from '@/pages/github'
import { useGoogleLogin } from '@react-oauth/google'
import axios from 'axios'
import { useRouter } from 'next/router'

const getAuthWithGoogle = async (code: string) => {
  const response = await axios.post(
    `${Environments.BASE_URL}/v1/auth/google/login`,
    { code: code }
  )

  return response
}
//
const GoogleLoginButton = () => {
  const router = useRouter()

  const login = useGoogleLogin({
    flow: 'auth-code',
    onError: () => {
      console.log('Error')
    },
    onSuccess: (credentialResponse) => {
      console.log('Login Success', credentialResponse)
      if (credentialResponse.code) {
        getAuthWithGoogle(credentialResponse.code).then((res) => {
          // fetchUser(res.data.accessToken).then((res) => {
          //   console.log(res)
          //   router.push('/profile')
          // })
          console.log(res)
        })
      }
    },
  })

  return (
    <button
      onClick={() => {
        console.log('Google button clicked')
        login()
      }}
      type={'button'}
    >
      <GoogleSvgrepoCom1
        height={36}
        width={36}
      />
    </button>
  )
}

export const ExternalServicesRegistration = () => {
  const { t } = useTranslation()

  const handleLoginWithGithub = () => {
    window.location.assign(`${Environments.BASE_URL}/v1/auth/github/login`)
  }

  return (
    <div className={'flex gap-14 justify-center mb-6 mt-4'}>
      <Tooltip title={t.signUpForm.signUpGoogle}>
        <GoogleLoginButton />
      </Tooltip>

      <Tooltip title={t.signUpForm.signUpGithub}>
        <button
          onClick={handleLoginWithGithub}
          type={'button'}
        >
          <GithubSvgrepoCom31
            height={36}
            width={36}
          />
        </button>
      </Tooltip>
    </div>
  )
}
