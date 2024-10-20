import { memo, useContext, useMemo } from 'react'
import { TimerPageContext } from '../TimerPage.context'

import * as styles from './TimeDisplay.styles'

const TimeDisplayBase = () => {
  const { time, isPressingStartingKey, isTimerRunning } =
    useContext(TimerPageContext)

  const shouldHighlightTime = useMemo(
    () => isPressingStartingKey && !isTimerRunning,
    [isPressingStartingKey, isTimerRunning],
  )

  return (
    <p className={styles.mainContainer(shouldHighlightTime)}>
      {(time / 1000).toFixed(2)}
    </p>
  )
}

export const TimeDisplay = memo(TimeDisplayBase)
