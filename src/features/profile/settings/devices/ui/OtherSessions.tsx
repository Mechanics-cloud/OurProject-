import { Button, Typography, useTranslation } from '@/common'
import { profileSessionsStore } from '@/features/profile/settings/devices/model'
import { Device } from '@/features/profile/settings/devices/ui/Device'
import { observer } from 'mobx-react-lite'

type Props = {
  onLogoutDeviceClick: (deviceId: number) => void
  onTerminateAllSession: () => void
}

export const OtherSessions = observer(
  ({ onLogoutDeviceClick, onTerminateAllSession }: Props) => {
    const { t } = useTranslation()
    const sessions = profileSessionsStore.otherSession ?? []

    return (
      <>
        <Button
          className={'ml-auto block'}
          onClick={onTerminateAllSession}
          variant={'outline'}
        >
          {t.profileSessions.terminateAll}
        </Button>
        <Typography
          className={'my-[18px]'}
          variant={'h3'}
        >
          {t.profileSessions.activeSessions}
        </Typography>
        {sessions.length > 0 ? (
          sessions.map((device) => (
            <Device
              browserName={device.browserName}
              className={'mt-1.5 mb-6'}
              ip={device.ip}
              key={device.browserVersion}
              lastActive={device.lastActive}
              onLogoutClick={() => onLogoutDeviceClick(device.deviceId)}
            />
          ))
        ) : (
          <Typography
            className={'text-center'}
            variant={'h2'}
          >
            You have not yet logged in from other devices
          </Typography>
        )}
      </>
    )
  }
)
