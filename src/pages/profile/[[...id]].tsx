import { Paid } from '@/assets/icons'
import { Button, Paths, Typography, useTranslation } from '@/common'
import { withProtection } from '@/common/HOC/withProtection'
import { useScreenWidth } from '@/common/hooks/useScreenWidth'
import { cn } from '@/common/utils/cn'
import {
  ProfileAboutMe,
  ProfilePosts,
  ProfileStatistics,
  profileStore,
} from '@/features/profile'
import { observer } from 'mobx-react-lite'
import Image from 'next/image'
import Link from 'next/link'

import avatarPlaceholder from '../../assets/images/avatar.jpg'

//todo: remove avatarPlaceholder and place another placeholder image
const Profile = observer(() => {
  const { t } = useTranslation()
  const { followers, following, publications, settingsButton } = t.profilePage
  const { isProfileLoading, userProfile } = profileStore
  const avatar = userProfile?.avatars[0]?.url

  const { isMobile, isTablet } = useScreenWidth()

  return isProfileLoading ? (
    <div>Loading...</div> //временная заглушка
  ) : (
    <div className={'flex w-full'}>
      <div className={'flex flex-col w-full'}>
        <div
          className={
            'mt-9 flex items-start w-full gap-5 mb-3 lg:gap-9 lg:mb-[53px]'
          }
        >
          <Image
            alt={'avatar'}
            className={'rounded-full pr-0'}
            height={200}
            src={avatar || avatarPlaceholder}
            width={200}
          />
          <div className={'flex flex-col flex-wrap w-full'}>
            <div className={'flex items-center justify-between w-full mb-5'}>
              <Typography
                className={'text-light-100 flex items-center gap-3'}
                variant={'h1'}
              >
                {userProfile?.userName ?? 'URL Profile'}
                <Paid />
              </Typography>

              <Button
                className={'hidden md:block'}
                variant={'secondary'}
              >
                <Link href={Paths.profileSettings}>{settingsButton}</Link>
              </Button>
            </div>
            <ProfileStatistics
              followers={followers}
              following={following}
              isMobile={isMobile}
              publications={publications}
            />
            <ProfileAboutMe
              aboutMe={userProfile?.aboutMe}
              className={isTablet ? 'hidden' : 'mt-6'}
              isMobile={isMobile}
            />
          </div>
        </div>
        <ProfileAboutMe
          aboutMe={userProfile?.aboutMe}
          className={isTablet ? 'mb-7' : 'hidden'}
          isMobile={isMobile}
        />
        <ProfilePosts />
      </div>
    </div>
  )
})

export default withProtection(Profile, true)
