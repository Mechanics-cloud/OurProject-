import { useEffect } from 'react'

import { useTranslation } from '@/common'
import { Variants, useAnimationControls, useScroll } from 'framer-motion'

export const useGoToTopButton = () => {
  const { t } = useTranslation()
  const isBrowser = () => typeof window !== 'undefined'

  const { scrollYProgress } = useScroll()
  const controls = useAnimationControls()

  const scrollToTopVariants: Variants = {
    hide: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0 },
  }

  useEffect(() => {
    return scrollYProgress.on('change', (latestValue) => {
      if (latestValue > 0.1) {
        controls.start('show')
      } else {
        controls.start('hide')
      }
    })
  })

  function scrollToTopHandler() {
    if (!isBrowser()) {
      return
    }
    window.scrollTo({ behavior: 'smooth', top: 0 })
  }

  return { controls, scrollToTopHandler, scrollToTopVariants, t }
}
