import React from 'react'

import {
  GithubSvgrepoCom31,
  GoogleSvgrepoCom1,
} from '@/assets/icons/filledIcons'
import { Tooltip, useTranslation } from '@/common'
import { authApi } from '@/features/auth'
import { fetchUser } from '@/pages/github'
import { useGoogleLogin } from '@react-oauth/google'
import { useRouter } from 'next/router'

const GoogleLoginButton = React.forwardRef<HTMLButtonElement>((_, ref) => {
  const router = useRouter()

  const login = useGoogleLogin({
    flow: 'auth-code',
    onError: () => {},
    onSuccess: async (credentialResponse) => {
      if (credentialResponse.code) {
        try {
          const res = await authApi.authWithGoogle(credentialResponse.code)

          localStorage.setItem('accessToken', res.data.accessToken)
          await fetchUser(res.data.accessToken)

          router.push('/profile')
        } catch (error) {
          /* empty */
        }
      }
    },
  })

  return (
    <button
      onClick={() => login()}
      ref={ref}
      type={'button'}
    >
      <GoogleSvgrepoCom1
        height={36}
        width={36}
      />
    </button>
  )
})

export const ExternalServicesRegistration = () => {
  const { t } = useTranslation()

  const handleLoginWithGithub = () => {
    window.location.assign(
      `${process.env.NEXT_PUBLIC_INCTAGRAM_API_URL}/v1/auth/github/login`
    )
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
